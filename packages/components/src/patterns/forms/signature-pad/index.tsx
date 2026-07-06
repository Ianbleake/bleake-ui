import { merge } from "@bleakedev/bleake-core";
import { Eraser, PenTool, Undo2 } from "lucide-react";
import { type ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../../../ui/button";

interface SignaturePadProps {
	/** Called with the signature as a PNG Blob whenever a stroke ends */
	onSignature: (blob: Blob) => void;
	/** Width in px (default: 100% of container) */
	width?: number;
	/** Height in px */
	height?: number;
	className?: string;
	disabled?: boolean;
	/** Hide the action buttons (Undo, Clear, Confirm). The parent controls submission. */
	hideConfirm?: boolean;
}

interface Point {
	x: number;
	y: number;
}

/** Renders the SignaturePad component. */
export function SignaturePad({
	onSignature,
	height = 200,
	className,
	disabled = false,
	hideConfirm = false,
}: SignaturePadProps): ReactElement {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const isDrawingRef = useRef(false);
	const lastPointRef = useRef<Point | null>(null);
	const [hasStrokes, setHasStrokes] = useState<boolean>(false);
	const strokeHistoryRef = useRef<ImageData[]>([]);

	// Setup canvas with proper DPI scaling
	const setupCanvas = useCallback(() => {
		const canvas = canvasRef.current;
		const container = containerRef.current;
		if (!canvas || !container) return;

		const dpr = window.devicePixelRatio || 1;
		const rect = container.getBoundingClientRect();

		canvas.width = rect.width * dpr;
		canvas.height = height * dpr;
		canvas.style.width = `${rect.width}px`;
		canvas.style.height = `${height}px`;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		ctx.scale(dpr, dpr);

		// Fill white background so exported PNG is not transparent
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 0, rect.width, height);

		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		ctx.lineWidth = 2.5;

		// Get computed text color for the stroke
		const computedStyle = getComputedStyle(document.documentElement);
		const strokeColor = computedStyle.getPropertyValue("--text-primary").trim() || "#111827";
		ctx.strokeStyle = strokeColor;
	}, [height]);

	useEffect(() => {
		setupCanvas();

		const handleResize = () => {
			// Save current drawing
			const canvas = canvasRef.current;
			if (!canvas) return;
			const ctx = canvas.getContext("2d");
			if (!ctx) return;

			const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
			setupCanvas();
			ctx.putImageData(imageData, 0, 0);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [setupCanvas]);

	function getPoint(e: React.MouseEvent | React.TouchEvent): Point {
		const canvas = canvasRef.current;
		if (!canvas) return { x: 0, y: 0 };

		const rect = canvas.getBoundingClientRect();

		if ("touches" in e) {
			const touch = e.touches[0];
			return {
				x: touch.clientX - rect.left,
				y: touch.clientY - rect.top,
			};
		}

		return {
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		};
	}

	function saveState(): void {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		strokeHistoryRef.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
	}

	function startDrawing(e: React.MouseEvent | React.TouchEvent): void {
		if (disabled) return;
		e.preventDefault();
		saveState();
		isDrawingRef.current = true;
		lastPointRef.current = getPoint(e);
		setHasStrokes(true);
	}

	function draw(e: React.MouseEvent | React.TouchEvent): void {
		if (!isDrawingRef.current || disabled) return;
		e.preventDefault();

		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const currentPoint = getPoint(e);
		const lastPoint = lastPointRef.current;

		if (lastPoint) {
			ctx.beginPath();
			ctx.moveTo(lastPoint.x, lastPoint.y);
			ctx.lineTo(currentPoint.x, currentPoint.y);
			ctx.stroke();
		}

		lastPointRef.current = currentPoint;
	}

	function stopDrawing(): void {
		if (isDrawingRef.current && hideConfirm) {
			// Auto-capture: send the current canvas state to the parent
			// so they always have the latest signature without needing "Crear firma".
			const canvas = canvasRef.current;
			if (canvas) {
				canvas.toBlob(
					(blob) => {
						if (blob) onSignature(blob);
					},
					"image/png",
					1.0,
				);
			}
		}
		isDrawingRef.current = false;
		lastPointRef.current = null;
	}

	function clearCanvas(): void {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const dpr = window.devicePixelRatio || 1;
		ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);
		setHasStrokes(false);
		strokeHistoryRef.current = [];
	}

	function undo(): void {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const history = strokeHistoryRef.current;
		if (history.length === 0) return;

		const previousState = history.pop();
		if (previousState) {
			ctx.putImageData(previousState, 0, 0);
		}

		if (history.length === 0) {
			setHasStrokes(false);
		}
	}

	function handleConfirm(): void {
		const canvas = canvasRef.current;
		if (!canvas || !hasStrokes) return;

		canvas.toBlob(
			(blob) => {
				if (blob) onSignature(blob);
			},
			"image/png",
			1.0,
		);
	}

	return (
		<div className={merge("space-y-2", className)}>
			<div
				ref={containerRef}
				className={merge(
					"relative rounded-lg border-2 border-dashed overflow-hidden transition-colors",
					disabled
						? "border-surface-3 bg-white cursor-not-allowed"
						: "border-border-default bg-white cursor-crosshair hover:border-accent/40",
				)}
			>
				<canvas
					ref={canvasRef}
					onMouseDown={startDrawing}
					onMouseMove={draw}
					onMouseUp={stopDrawing}
					onMouseLeave={stopDrawing}
					onTouchStart={startDrawing}
					onTouchMove={draw}
					onTouchEnd={stopDrawing}
					className="touch-none"
				/>

				{/* Placeholder text */}
				{!hasStrokes && (
					<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
						<p className="text-sm text-text-muted select-none">Dibuja tu firma aquí</p>
					</div>
				)}

				{/* Signature line */}
				<div className="absolute bottom-8 left-6 right-6 border-b border-border-subtle pointer-events-none" />
			</div>

			{/* Actions */}
			<div className="flex items-center gap-2 flex-wrap">
				<Button
					type="button"
					onClick={undo}
					disabled={disabled || !hasStrokes}
					size={"sm"}
					variant={"outline"}
				>
					<Undo2 size={12} />
					Deshacer
				</Button>

				<Button
					variant={"outline"}
					type="button"
					onClick={clearCanvas}
					disabled={disabled || !hasStrokes}
					size={"sm"}
				>
					<Eraser size={12} />
					Limpiar
				</Button>

				{!hideConfirm && (
					<>
						<div className="flex-1" />
						<Button
							type="button"
							onClick={handleConfirm}
							disabled={disabled || !hasStrokes}
							size={"sm"}
						>
							<PenTool size={12} />
							Crear firma
						</Button>
					</>
				)}
			</div>
		</div>
	);
}

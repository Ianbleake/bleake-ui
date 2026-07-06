import { Ban, Signature } from "lucide-react";
import type React from "react";
import { AlertDialog } from "../../../../../ui/alert-dialog";
import { AlertDialogAction } from "../../../../../ui/alert-dialog/alert-dialog-action";
import { AlertDialogCancel } from "../../../../../ui/alert-dialog/alert-dialog-cancel";
import { AlertDialogContent } from "../../../../../ui/alert-dialog/alert-dialog-content";
import { AlertDialogDescription } from "../../../../../ui/alert-dialog/alert-dialog-description";
import { AlertDialogFooter } from "../../../../../ui/alert-dialog/alert-dialog-footer";
import { AlertDialogHeader } from "../../../../../ui/alert-dialog/alert-dialog-header";
import { AlertDialogTitle } from "../../../../../ui/alert-dialog/alert-dialog-title";
import { Separator } from "../../../../../ui/separator";

export const SignaturePadAlertDialog = ({
	open,
	onOpenChange,
	onConfirm,
	onCancel,
}: SignaturePadAlertDialogProps): React.ReactElement => {
	return (
		<AlertDialog
			open={open}
			onOpenChange={onOpenChange}
		>
			<AlertDialogContent className="max-w-md p-0 overflow-hidden">
				<AlertDialogHeader className="px-0 pt-6 pb-4 space-y-2">
					<AlertDialogTitle className="px-6 text-base font-semibold text-gray-900">
						Aviso de uso de firma
					</AlertDialogTitle>

					<Separator />

					<AlertDialogDescription className="px-6 text-sm text-gray-500">
						Al registrar tu firma, esta se almacenara en el sistema y podra ser utilizada para
						firmar documentos oficiales dentro de la plataforma, incluyendo cartas de designacion,
						contratos y demas documentos legales. Al confirmar, aceptas el uso de esta firma para
						dichos fines.
					</AlertDialogDescription>
				</AlertDialogHeader>

				<Separator />

				<AlertDialogFooter className="px-6 mb-3 flex flex-row justify-end gap-2">
					<AlertDialogCancel
						variant="outline"
						onClick={onCancel}
					>
						<Ban />
						Cancelar
					</AlertDialogCancel>

					<AlertDialogAction
						variant="default"
						onClick={onConfirm}
					>
						<Signature />
						Acepto y confirmo
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

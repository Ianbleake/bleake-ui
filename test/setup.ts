import "@testing-library/jest-dom";

// jsdom doesn't implement ResizeObserver — mock it for components that use it
// (cmdk, input-otp, radix popper, framer-motion, etc.)
class ResizeObserverMock {
	observe = () => {
		// no-op
	};
	unobserve = () => {
		// no-op
	};
	disconnect = () => {
		// no-op
	};
}

global.ResizeObserver = ResizeObserverMock as unknown as typeof ResizeObserver;

// jsdom doesn't implement matchMedia — mock it for components that use it
// (useIsMobile, radix primitives, etc.)
Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: (query: string) => ({
		matches: false,
		media: query,
		onchange: null,
		addEventListener: () => {
			// no-op
		},
		removeEventListener: () => {
			// no-op
		},
		addListener: () => {
			// no-op
		},
		removeListener: () => {
			// no-op
		},
		dispatchEvent: () => false,
	}),
});

// jsdom doesn't implement IntersectionObserver — mock it for components that use it
class IntersectionObserverMock {
	observe = () => {
		// no-op
	};
	unobserve = () => {
		// no-op
	};
	disconnect = () => {
		// no-op
	};
	takeRecords = () => [];
}

global.IntersectionObserver = IntersectionObserverMock as unknown as typeof IntersectionObserver;

// jsdom doesn't implement scrollTo
window.scrollTo = () => {
	// no-op
};

// jsdom doesn't implement scrollIntoView — mock it for cmdk and other components
Element.prototype.scrollIntoView = () => {
	// no-op
};

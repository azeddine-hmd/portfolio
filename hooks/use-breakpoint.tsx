import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";
import { useEffect } from "react";
import React from "react";

const breakpoints = resolveConfig(tailwindConfig).theme.screens;

type BreakpointKey = keyof typeof breakpoints;

export function useBreakpoint<K extends BreakpointKey>(breakpointKey: K) {
	const [matches, setMatches] = React.useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(min-width: ${breakpoints[breakpointKey]})`);
		const handleChange = () => setMatches(mediaQuery.matches);
		handleChange(); // Set initial value

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [breakpointKey]);

	const capitalizedKey = breakpointKey[0].toUpperCase() + breakpointKey.substring(1);
	type Key = `is${Capitalize<K>}`;
	return {
		[`is${capitalizedKey}`]: matches,
	} as Record<Key, boolean>;
}

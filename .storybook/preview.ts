import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

import "../src/globals.css";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			theme: window.matchMedia("(prefers-color-scheme: dark)").matches
				? themes.dark
				: themes.light,
		},
		backgrounds: {
			default: "white",
			values: [
				{
					name: "white",
					value: "#ffffff",
				},
				{
					name: "gray 950",
					value: "#030712",
				},
				{
					name: "gray 900",
					value: "#111827",
				},
			],
		},
	},
};

export default preview;

import type { Preview } from "@storybook/react";

import "../src/styles/reset.css";
import "../src/styles/core.css";
import "../src/styles/typography.css";
import "../src/styles/color.css";
import "../src/styles/animations.css";
import "../src/styles/scroll.css";
import "../src/styles/sizing.css";
import "../src/styles/utils.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

import { addons } from "@storybook/manager-api";
import theme from './theme';

addons.setConfig({
  theme,
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: "bottom",
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  selectedPanel: undefined,
  initialActive: "sidebar",
  showRoots: false,
});

import withSuspense from "./decorators/withSuspense";
import DocsPage from "./docsPage";

export const decorators = [withSuspense];

export const parameters = {
  options: {
    storySort: {
      order: [
        "指南",
        ["快速了解", "变更日志"],
        "组件(Components)",
        ["基础组件(Basic)", "地图控件(Control)", "覆盖物(Overlay)", "工具(Tools)"],
        "Hooks",
        ["useAMapAPI", "useAMap"]
      ]
    }
  },
  docs: {
    page: DocsPage
  }
};

export const globalTypes = {};

import withSuspense from "./decorators/withSuspense";

export const decorators = [withSuspense];

export const parameters = {
  options: {
    storySort: {
      order: [
        "指南",
        ["快速了解", "变更日志", "参与贡献"],
        "组件(Components)",
        [
          "基础组件(Basic)",
          "地图控件(Control)",
          "覆盖物(Overlay)",
          "工具(Tools)",
        ],
        "Hooks",
        ["useAMapAPI", "useAMap"],
      ],
    },
  },
  docs: {
    toc: true,
  },
};

export const globalTypes = {};

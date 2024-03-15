import React from "react";
import { NAVIGATE_URL } from "@storybook/core-events";
import { DocsPage as DefaultDocsPage, DocsContext, DocsContextProps } from "@storybook/blocks";
import { styled } from "@storybook/theming";

function navigate(context: DocsContextProps, url: string) {
  context.channel.emit(NAVIGATE_URL, url);
}

const PageSidebarWrapper = styled.div(
  ({ theme }) => `
    width: 180px;
    position: fixed;
    top: 32px;
    right: ${theme.layoutMargin * 2}px;
    padding: ${theme.layoutMargin * 2}px;
    z-index: 10;
    background: ${theme.background.content};
    box-shadow: 
        -2px 0px 0px 0px rgba(0, 0, 0, 0.05)
  `
);

const PageSidebarTitleWrapper = styled.div(
  ({ theme }) => `
    font-size: ${theme.typography.size.s2}px;
  `
);

const PageSidebarMenuWrapper = styled.ul(
  () => `
    margin: 16px 0 0 0;
    padding: 0;
    list-style: none;
  `
);

const PageSidebarMenuItemWrapper = styled.li(
  ({ theme }) => `
    padding: 4px;
    :not(:last-child) {
      border-bottom: 1px solid ${theme.color.border};
    }
  `
);

const PageSidebarMenuItemContentWrapper = styled.div(
  ({ theme }) => `
    font-size: ${theme.typography.size.s1}px;
  `
);

const PageSidebar = () => {
  const docsCtx = React.useContext(DocsContext);

  return (
    <PageSidebarWrapper>
      <PageSidebarTitleWrapper>大纲</PageSidebarTitleWrapper>
      <PageSidebarMenuWrapper>
        {docsCtx.componentStories().map((story) => {
          // https://github.com/storybookjs/storybook/blob/9fecce26c4dd738890784b6971ce822097c62697/code/ui/blocks/src/blocks/Subheading.tsx#L11C48-L11C66
          const id = globalThis.encodeURIComponent(story.name.toLowerCase());
          const hash = `#${id}`;
          return (
            <PageSidebarMenuItemWrapper key={story.name}>
              <a
                aria-hidden="true"
                href={hash}
                tabIndex={-1}
                target="_self"
                onClick={() => {
                  // https://github.com/storybookjs/storybook/blob/9fecce26c4dd738890784b6971ce822097c62697/code/ui/blocks/src/blocks/mdx.tsx#L186-L202
                  // https://github.com/storybookjs/storybook/blob/9fecce26c4dd738890784b6971ce822097c62697/code/ui/blocks/src/blocks/mdx.tsx#L70-L88
                  const element = document.getElementById(id);
                  if (element) {
                    navigate(docsCtx, hash);
                  }
                }}
              >
                <PageSidebarMenuItemContentWrapper>{story.name}</PageSidebarMenuItemContentWrapper>
              </a>
            </PageSidebarMenuItemWrapper>
          );
        })}
      </PageSidebarMenuWrapper>
    </PageSidebarWrapper>
  );
};

const StyledPageContentContainer = styled.div<{
  notOnlyOneStory: boolean;
}>(({ notOnlyOneStory, theme }) =>
  notOnlyOneStory ? `margin-right: ${180 + 20 * 2 + theme.layoutMargin * 2}px;` : ""
);

const DocsPage = () => {
  // https://github.com/storybookjs/storybook/blob/9fecce26c4dd738890784b6971ce822097c62697/code/ui/blocks/src/blocks/Stories.tsx#L30C11-L30C27
  const docsCtx = React.useContext(DocsContext);

  const stories = docsCtx.componentStories();
  const notOnlyOneStory = stories.length > 1;
  // https://github.com/storybookjs/storybook/blob/9fecce26c4dd738890784b6971ce822097c62697/code/ui/blocks/src/blocks/Subheading.tsx#L11
  return (
    <>
      <StyledPageContentContainer notOnlyOneStory={notOnlyOneStory}>
        <DefaultDocsPage />
      </StyledPageContentContainer>
      {notOnlyOneStory && <PageSidebar />}
    </>
  );
};

export default DocsPage;

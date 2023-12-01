import type { FC, ReactElement, PropsWithChildren } from 'react';
import React from 'react';
import { NAVIGATE_URL } from '@storybook/core-events';
import {
  // DocsPage as DefaultDocsPage,
  DocsContext,
  DocsContextProps,
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  // Stories,
  Heading,
  useOf,
  DocsStoryProps,
  Anchor,
  Canvas,
  HeadingProps,
  HeaderMdx,
} from '@storybook/blocks';
import { styled } from '@storybook/theming';
import { H3 } from '@storybook/components';

function navigate(context: DocsContextProps, url: string) {
  context.channel.emit(NAVIGATE_URL, url);
}

const PageSidebarWrapper = styled.div(
  ({ theme }) => `
    position: fixed;
    top: 60px;
    right: ${theme.layoutMargin * 2}px;
    width: 180px;
    padding: ${theme.layoutMargin * 2}px;
    zIndex: 10;
    box-shadow: 
        -2px 0px 0px 0px rgba(0, 0, 0, 0.05), 
        0px 0px 0px 1px rgba(0, 0, 0, 0.05);
  `,
);

const PageSidebarTitleWrapper = styled.div(
  ({ theme }) => `
    font-size: ${theme.typography.size.s2}px;
  `,
);

const PageSidebarMenuWrapper = styled.ul(
  () => `
    margin: 16px 0 0 0;
    padding: 0;
    list-style: none;
  `,
);

const PageSidebarMenuItemWrapper = styled.li(
  ({ theme }) => `
    padding: 4px;
    :not(:last-child) {
      border-bottom: 1px solid ${theme.color.border};
    }
  `,
);

const PageSidebarMenuItemContentWrapper = styled.div(
  ({ theme }) => `
    font-size: ${theme.typography.size.s1}px;
  `,
);

const Subheading: FC<PropsWithChildren<HeadingProps>> = ({
  children,
  disableAnchor,
}) => {
  if (disableAnchor || typeof children !== 'string') {
    return <H3>{children}</H3>;
  }
  const tagID = globalThis.encodeURIComponent(children.toLowerCase());
  return (
    <HeaderMdx as="h3" id={tagID}>
      {children}
    </HeaderMdx>
  );
};

const DocsStory: FC<DocsStoryProps> = ({
  of,
  expanded = true,
  withToolbar: withToolbarProp = false,
  __forceInitialArgs = false,
  __primary = false,
}) => {
  const { story } = useOf(of || 'story', ['story']);

  // use withToolbar from parameters or default to true in autodocs
  const withToolbar =
    story.parameters.docs?.canvas?.withToolbar ?? withToolbarProp;

  return (
    <Anchor storyId={story.id}>
      {expanded && (
        <>
          <Subheading>{story.name}</Subheading>
          <Description of={of} />
        </>
      )}
      <Canvas
        of={of}
        withToolbar={withToolbar}
        story={{ __forceInitialArgs, __primary }}
        source={{ __forceInitialArgs }}
      />
    </Anchor>
  );
};

const StyledHeading: typeof Heading = styled(Heading)(({ theme }) => ({
  fontSize: `${theme.typography.size.s2 - 1}px`,
  fontWeight: theme.typography.weight.bold,
  lineHeight: '16px',
  letterSpacing: '0.35em',
  textTransform: 'uppercase',
  color: theme.textMutedColor,
  border: 0,
  marginBottom: '12px',

  '&:first-of-type': {
    // specificity issue
    marginTop: '56px',
  },
}));

interface StoriesProps {
  title?: ReactElement | string;
  includePrimary?: boolean;
}

const Stories: FC<StoriesProps> = ({
  title = 'Stories',
  includePrimary = true,
}) => {
  const { componentStories } = React.useContext(DocsContext);

  let stories = componentStories().filter(
    (story) => !story.parameters?.docs?.disable,
  );

  if (!includePrimary) stories = stories.slice(1);

  if (!stories || stories.length === 0) {
    return null;
  }
  return (
    <>
      <StyledHeading>{title}</StyledHeading>
      {stories.map(
        (story) =>
          story && (
            <DocsStory
              key={story.id}
              of={story.moduleExport}
              expanded
              __forceInitialArgs
            />
          ),
      )}
    </>
  );
};

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
                <PageSidebarMenuItemContentWrapper>
                  {story.name}
                </PageSidebarMenuItemContentWrapper>
              </a>
            </PageSidebarMenuItemWrapper>
          );
        })}
      </PageSidebarMenuWrapper>
    </PageSidebarWrapper>
  );
};

const DocsPage = () => {
  // https://github.com/storybookjs/storybook/blob/9fecce26c4dd738890784b6971ce822097c62697/code/ui/blocks/src/blocks/Stories.tsx#L30C11-L30C27
  const docsCtx = React.useContext(DocsContext);

  const stories = docsCtx.componentStories();
  const isSingleStory = Object.keys(stories).length === 1;

  const notOnlyOneStory = stories.length > 1;
  // https://github.com/storybookjs/storybook/blob/9fecce26c4dd738890784b6971ce822097c62697/code/ui/blocks/src/blocks/Subheading.tsx#L11
  return (
    <>
      <Title />
      <Subtitle />
      <Description of="meta" />
      {isSingleStory ? <Description of="story" /> : null}
      <Primary />
      <Controls />
      {isSingleStory ? null : <Stories />}
      {notOnlyOneStory && <PageSidebar />}
    </>
  );
};

export default DocsPage;

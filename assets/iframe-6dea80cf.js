import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const e of o.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&a(e)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const E="modulepreload",d=function(i,s){return new URL(i,s).href},l={},t=function(s,n,a){if(!n||n.length===0)return s();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=d(o,a),o in l)return;l[o]=!0;const e=o.endsWith(".css"),u=e?'[rel="stylesheet"]':"";if(!!a)for(let p=r.length-1;p>=0;p--){const m=r[p];if(m.href===o&&(!e||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${u}`))return;const _=document.createElement("link");if(_.rel=e?"stylesheet":E,e||(_.as="script",_.crossOrigin=""),_.href=o,document.head.appendChild(_),e)return new Promise((p,m)=>{_.addEventListener("load",p),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>s()).catch(o=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=o,window.dispatchEvent(e),!e.defaultPrevented)throw o})},{createBrowserChannel:O}=__STORYBOOK_MODULE_CHANNELS__,{addons:A}=__STORYBOOK_MODULE_PREVIEW_API__,c=O({page:"preview"});A.setChannel(c);window.__STORYBOOK_ADDONS_CHANNEL__=c;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=c);const P={"./docs/changelog.stories.mdx":async()=>t(()=>import("./changelog.stories-48ea274e.js"),["./changelog.stories-48ea274e.js","./index-1fa2f345.js","./index-1b03fe98.js","./index-6fd5a17b.js","./index-d7bb098e.js","./index-356e4a49.js","./jsx-runtime-86dfebf6.js","./index-2ef8b458.js"],import.meta.url),"./docs/contributing.mdx":async()=>t(()=>import("./contributing-2dfb5026.js"),["./contributing-2dfb5026.js","./jsx-runtime-86dfebf6.js","./index-1b03fe98.js","./index-1fa2f345.js","./index-6fd5a17b.js","./index-d7bb098e.js","./index-356e4a49.js","./index-2ef8b458.js"],import.meta.url),"./docs/intro.mdx":async()=>t(()=>import("./intro-034b0ef1.js"),["./intro-034b0ef1.js","./jsx-runtime-86dfebf6.js","./index-1b03fe98.js","./index-1fa2f345.js","./index-6fd5a17b.js","./index-d7bb098e.js","./index-356e4a49.js","./index-2ef8b458.js"],import.meta.url),"./src/components/AMapAPIContainer/stories/createAMapAPIContainer.stories.tsx":async()=>t(()=>import("./createAMapAPIContainer.stories-06e4e5eb.js"),["./createAMapAPIContainer.stories-06e4e5eb.js","./jsx-runtime-86dfebf6.js","./index-1b03fe98.js","./AMapRangingTool-dba06f0e.js"],import.meta.url),"./src/components/AMapCircle/stories/AMapCircle.stories.tsx":async()=>t(()=>import("./AMapCircle.stories-a71cb131.js"),["./AMapCircle.stories-a71cb131.js","./chunk-WFFRPTHA-2a5dae90.js","./preview-errors-dde4324f.js","./index-356e4a49.js","./index-1b03fe98.js","./AMapRangingTool-dba06f0e.js","./jsx-runtime-86dfebf6.js","./withAutoFitView-2245a5ce.js","./withAMap-36ece295.js","./withAPIContainer-559d3919.js"],import.meta.url),"./src/components/AMapControlBar/stories/AMapControlBar.stories.tsx":async()=>t(()=>import("./AMapControlBar.stories-31c287d4.js"),["./AMapControlBar.stories-31c287d4.js","./chunk-WFFRPTHA-2a5dae90.js","./preview-errors-dde4324f.js","./index-356e4a49.js","./index-1b03fe98.js","./AMapRangingTool-dba06f0e.js","./jsx-runtime-86dfebf6.js","./withAMap-36ece295.js","./withAPIContainer-559d3919.js"],import.meta.url),"./src/components/AMapEllipse/stories/AMapEllipse.stories.tsx":async()=>t(()=>import("./AMapEllipse.stories-03f5593f.js"),["./AMapEllipse.stories-03f5593f.js","./chunk-WFFRPTHA-2a5dae90.js","./preview-errors-dde4324f.js","./index-356e4a49.js","./index-1b03fe98.js","./AMapRangingTool-dba06f0e.js","./jsx-runtime-86dfebf6.js","./withAutoFitView-2245a5ce.js","./withAMap-36ece295.js","./withAPIContainer-559d3919.js"],import.meta.url),"./src/components/AMapGeoJSON/stories/AMapGeoJSON.stories.tsx":async()=>t(()=>import("./AMapGeoJSON.stories-e33b927d.js"),["./AMapGeoJSON.stories-e33b927d.js","./index-1b03fe98.js","./AMapRangingTool-dba06f0e.js","./jsx-runtime-86dfebf6.js","./coordsOfGeoJSON2AMapPolygonPath-d0760c1b.js","./withAutoFitView-2245a5ce.js","./withAMap-36ece295.js","./withAPIContainer-559d3919.js"],import.meta.url),"./src/components/AMapHawkEye/stories/AMapHawkEye.stories.tsx":async()=>t(()=>import("./AMapHawkEye.stories-01674dad.js"),["./AMapHawkEye.stories-01674dad.js","./chunk-WFFRPTHA-2a5dae90.js","./preview-errors-dde4324f.js","./index-356e4a49.js","./index-1b03fe98.js","./AMapRangingTool-dba06f0e.js","./jsx-runtime-86dfebf6.js","./withAMap-36ece295.js","./withAPIContainer-559d3919.js"],import.meta.url),"./src/components/AMapMap/stories/AMapMap.stories.tsx":async()=>t(()=>import("./AMapMap.stories-e5ea5b53.js"),["./AMapMap.stories-e5ea5b53.js","./index-1b03fe98.js","./AMapRangingTool-dba06f0e.js","./jsx-runtime-86dfebf6.js","./withAPIContainer-559d3919.js"],import.meta.url),"./src/components/AMapMapType/stories/AMapMapType.stories.tsx":async()=>t(()=>import("./AMapMapType.stories-e0b2e625.js"),["./AMapMapType.stories-e0b2e625.js","./chunk-WFFRPTHA-2a5dae90.js","./preview-errors-dde4324f.js","./index-356e4a49.js","./index-1b03fe98.js","./AMapRangingTool-dba06f0e.js","./jsx-runtime-86dfebf6.js","./withAMap-36ece295.js","./withAPIContainer-559d3919.js"],import.meta.url),"./src/components/AMapMarker/stories/AMapMarker.stories.tsx":async()=>t(()=>import("./AMapMarker.stories-e24e32f6.js"),["./AMapMarker.stories-e24e32f6.js","./jsx-runtime-86dfebf6.js","./index-1b03fe98.js","./chunk-WFFRPTHA-2a5dae90.js","./preview-errors-dde4324f.js","./index-356e4a49.js","./AMapRangingTool-dba06f0e.js","./withAutoFitView-2245a5ce.js","./withAMap-36ece295.js","./withAPIContainer-559d3919.js"],import.meta.url),"./src/components/AMapMouseTool/stories/AMapMouseTool.stories.tsx":async()=>t(()=>import("./AMapMouseTool.stories-a954c2f4.js"),["./AMapMouseTool.stories-a954c2f4.js","./chunk-WFFRPTHA-2a5dae90.js","./preview-errors-dde4324f.js","./index-356e4a49.js","./index-1b03fe98.js","./AMapRangingTool-dba06f0e.js","./jsx-runtime-86dfebf6.js","./withAMap-36ece295.js","./withAPIContainer-559d3919.js"],import.meta.url),"./src/components/AMapOverlayGroup/stories/AMapOverlayGroup.stories.tsx":async()=>t(()=>import("./AMapOverlayGroup.stories-3cce7550.js"),["./AMapOverlayGroup.stories-3cce7550.js","./jsx-runtime-86dfebf6.js","./index-1b03fe98.js","./chunk-WFFRPTHA-2a5dae90.js","./preview-errors-dde4324f.js","./index-356e4a49.js","./AMapRangingTool-dba06f0e.js","./withAutoFitView-2245a5ce.js","./withAMap-36ece295.js","./withAPIContainer-559d3919.js"],import.meta.url),"./src/components/AMapPolygon/stories/AMapPolygon.stories.tsx":async()=>t(()=>import("./AMapPolygon.stories-cecb3336.js"),["./AMapPolygon.stories-cecb3336.js","./jsx-runtime-86dfebf6.js","./index-1b03fe98.js","./chunk-WFFRPTHA-2a5dae90.js","./preview-errors-dde4324f.js","./index-356e4a49.js","./AMapRangingTool-dba06f0e.js","./withAutoFitView-2245a5ce.js","./withAMap-36ece295.js","./withAPIContainer-559d3919.js"],import.meta.url),"./src/components/AMapPolygonEditor/stories/AMapPolygonEditor.stories.tsx":async()=>t(()=>import("./AMapPolygonEditor.stories-7fe4f744.js"),["./AMapPolygonEditor.stories-7fe4f744.js","./jsx-runtime-86dfebf6.js","./index-1b03fe98.js","./chunk-WFFRPTHA-2a5dae90.js","./preview-errors-dde4324f.js","./index-356e4a49.js","./AMapRangingTool-dba06f0e.js","./coordsOfGeoJSON2AMapPolygonPath-d0760c1b.js","./withAutoFitView-2245a5ce.js","./withAMap-36ece295.js","./withAPIContainer-559d3919.js"],import.meta.url),"./src/components/AMapPolyline/stories/AMapPolyline.stories.tsx":async()=>t(()=>import("./AMapPolyline.stories-e4e1a26c.js"),["./AMapPolyline.stories-e4e1a26c.js","./jsx-runtime-86dfebf6.js","./index-1b03fe98.js","./chunk-WFFRPTHA-2a5dae90.js","./preview-errors-dde4324f.js","./index-356e4a49.js","./AMapRangingTool-dba06f0e.js","./withAutoFitView-2245a5ce.js","./withAMap-36ece295.js","./withAPIContainer-559d3919.js"],import.meta.url),"./src/components/AMapPolylineEditor/stories/AMapPolylineEditor.stories.tsx":async()=>t(()=>import("./AMapPolylineEditor.stories-a26735cd.js"),["./AMapPolylineEditor.stories-a26735cd.js","./jsx-runtime-86dfebf6.js","./index-1b03fe98.js","./chunk-WFFRPTHA-2a5dae90.js","./preview-errors-dde4324f.js","./index-356e4a49.js","./AMapRangingTool-dba06f0e.js","./withAutoFitView-2245a5ce.js","./withAMap-36ece295.js","./withAPIContainer-559d3919.js"],import.meta.url),"./src/components/AMapRangingTool/stories/AMapRangingTool.stories.tsx":async()=>t(()=>import("./AMapRangingTool.stories-f156fa63.js"),["./AMapRangingTool.stories-f156fa63.js","./chunk-WFFRPTHA-2a5dae90.js","./preview-errors-dde4324f.js","./index-356e4a49.js","./index-1b03fe98.js","./AMapRangingTool-dba06f0e.js","./jsx-runtime-86dfebf6.js","./withAMap-36ece295.js","./withAPIContainer-559d3919.js"],import.meta.url),"./src/components/AMapRectangle/stories/AMapRectangle.stories.tsx":async()=>t(()=>import("./AMapRectangle.stories-fd5e50ea.js"),["./AMapRectangle.stories-fd5e50ea.js","./chunk-WFFRPTHA-2a5dae90.js","./preview-errors-dde4324f.js","./index-356e4a49.js","./index-1b03fe98.js","./AMapRangingTool-dba06f0e.js","./jsx-runtime-86dfebf6.js","./withAutoFitView-2245a5ce.js","./withAMap-36ece295.js","./withAPIContainer-559d3919.js"],import.meta.url),"./src/components/AMapScale/stories/AMapScale.stories.tsx":async()=>t(()=>import("./AMapScale.stories-b2125967.js"),["./AMapScale.stories-b2125967.js","./chunk-WFFRPTHA-2a5dae90.js","./preview-errors-dde4324f.js","./index-356e4a49.js","./index-1b03fe98.js","./AMapRangingTool-dba06f0e.js","./jsx-runtime-86dfebf6.js","./withAMap-36ece295.js","./withAPIContainer-559d3919.js"],import.meta.url),"./src/components/AMapToolBar/stories/AMapToolBar.stories.tsx":async()=>t(()=>import("./AMapToolBar.stories-6a5f8667.js"),["./AMapToolBar.stories-6a5f8667.js","./chunk-WFFRPTHA-2a5dae90.js","./preview-errors-dde4324f.js","./index-356e4a49.js","./index-1b03fe98.js","./AMapRangingTool-dba06f0e.js","./jsx-runtime-86dfebf6.js","./withAMap-36ece295.js","./withAPIContainer-559d3919.js"],import.meta.url),"./src/helpers/stories/amapPolygonPath2GeoJSONCoords.mdx":async()=>t(()=>import("./amapPolygonPath2GeoJSONCoords-21945b61.js"),["./amapPolygonPath2GeoJSONCoords-21945b61.js","./jsx-runtime-86dfebf6.js","./index-1b03fe98.js","./index-1fa2f345.js","./index-6fd5a17b.js","./index-d7bb098e.js","./index-356e4a49.js","./index-2ef8b458.js"],import.meta.url),"./src/helpers/stories/coordsOfGeoJSON2AMapPolygonPath.mdx":async()=>t(()=>import("./coordsOfGeoJSON2AMapPolygonPath-0b2adba0.js"),["./coordsOfGeoJSON2AMapPolygonPath-0b2adba0.js","./jsx-runtime-86dfebf6.js","./index-1b03fe98.js","./index-1fa2f345.js","./index-6fd5a17b.js","./index-d7bb098e.js","./index-356e4a49.js","./index-2ef8b458.js"],import.meta.url),"./src/hooks/stories/useAMap.mdx":async()=>t(()=>import("./useAMap-6ad4600c.js"),["./useAMap-6ad4600c.js","./jsx-runtime-86dfebf6.js","./index-1b03fe98.js","./index-1fa2f345.js","./index-6fd5a17b.js","./index-d7bb098e.js","./index-356e4a49.js","./index-2ef8b458.js"],import.meta.url),"./src/hooks/stories/useAMapAPI.mdx":async()=>t(()=>import("./useAMapAPI-ffedd1f6.js"),["./useAMapAPI-ffedd1f6.js","./jsx-runtime-86dfebf6.js","./index-1b03fe98.js","./index-1fa2f345.js","./index-6fd5a17b.js","./index-d7bb098e.js","./index-356e4a49.js","./index-2ef8b458.js"],import.meta.url),"./src/hooks/stories/useAMapEventBinder.mdx":async()=>t(()=>import("./useAMapEventBinder-36dca338.js"),["./useAMapEventBinder-36dca338.js","./jsx-runtime-86dfebf6.js","./index-1b03fe98.js","./index-1fa2f345.js","./index-6fd5a17b.js","./index-d7bb098e.js","./index-356e4a49.js","./index-2ef8b458.js"],import.meta.url),"./src/hooks/stories/useAMapOverlayBinder.mdx":async()=>t(()=>import("./useAMapOverlayBinder-93c14021.js"),["./useAMapOverlayBinder-93c14021.js","./jsx-runtime-86dfebf6.js","./index-1b03fe98.js","./index-1fa2f345.js","./index-6fd5a17b.js","./index-d7bb098e.js","./index-356e4a49.js","./index-2ef8b458.js"],import.meta.url),"./src/hooks/stories/useAMapPluginInstance.mdx":async()=>t(()=>import("./useAMapPluginInstance-478c7292.js"),["./useAMapPluginInstance-478c7292.js","./jsx-runtime-86dfebf6.js","./index-1b03fe98.js","./index-1fa2f345.js","./index-6fd5a17b.js","./index-d7bb098e.js","./index-356e4a49.js","./index-2ef8b458.js"],import.meta.url)};async function R(i){return P[i]()}const{composeConfigs:T,PreviewWeb:y,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,L=async()=>{const i=await Promise.all([t(()=>import("./entry-preview-2845a20c.js"),["./entry-preview-2845a20c.js","./index-1b03fe98.js","./react-18-5df836b6.js","./index-6fd5a17b.js"],import.meta.url),t(()=>import("./entry-preview-docs-6c008c5e.js"),["./entry-preview-docs-6c008c5e.js","./index-d7bb098e.js","./index-1b03fe98.js","./index-356e4a49.js"],import.meta.url),t(()=>import("./preview-f96dfe90.js"),[],import.meta.url),t(()=>import("./preview-77a968f3.js"),["./preview-77a968f3.js","./preview-errors-dde4324f.js","./index-356e4a49.js"],import.meta.url),t(()=>import("./preview-30b54f76.js"),["./preview-30b54f76.js","./index-356e4a49.js"],import.meta.url),t(()=>import("./preview-c56bf6ac.js"),[],import.meta.url),t(()=>import("./preview-da31036b.js"),["./preview-da31036b.js","./index-356e4a49.js"],import.meta.url),t(()=>import("./preview-0ef86afd.js"),[],import.meta.url),t(()=>import("./preview-1bc5c4dc.js"),["./preview-1bc5c4dc.js","./jsx-runtime-86dfebf6.js","./index-1b03fe98.js","./index-1fa2f345.js","./index-6fd5a17b.js","./index-d7bb098e.js","./index-356e4a49.js"],import.meta.url)]);return T(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new y;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:R,getProjectAnnotations:L});export{t as _};

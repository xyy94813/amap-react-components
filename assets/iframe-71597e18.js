import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const E="modulepreload",O=function(i,s){return new URL(i,s).href},l={},t=function(s,n,a){if(!n||n.length===0)return s();const e=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=O(r,a),r in l)return;l[r]=!0;const o=r.endsWith(".css"),u=o?'[rel="stylesheet"]':"";if(!!a)for(let p=e.length-1;p>=0;p--){const c=e[p];if(c.href===r&&(!o||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${u}`))return;const _=document.createElement("link");if(_.rel=o?"stylesheet":E,o||(_.as="script",_.crossOrigin=""),_.href=r,document.head.appendChild(_),o)return new Promise((p,c)=>{_.addEventListener("load",p),_.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>s()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:d}=__STORYBOOK_MODULE_CHANNELS__,{addons:A}=__STORYBOOK_MODULE_PREVIEW_API__,m=d({page:"preview"});A.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=m);const P={"./src/hooks/stories/useAMapPluginInstance.mdx":async()=>t(()=>import("./useAMapPluginInstance-cd442613.js"),["./useAMapPluginInstance-cd442613.js","./jsx-runtime-91db03d0.js","./index-4139ccbc.js","./index-f8ee6e85.js","./index-defb0cf9.js","./index-356e4a49.js","./index-97715faa.js"],import.meta.url),"./src/hooks/stories/useAMapOverlayBinder.mdx":async()=>t(()=>import("./useAMapOverlayBinder-3f7b37a3.js"),["./useAMapOverlayBinder-3f7b37a3.js","./jsx-runtime-91db03d0.js","./index-4139ccbc.js","./index-f8ee6e85.js","./index-defb0cf9.js","./index-356e4a49.js","./index-97715faa.js"],import.meta.url),"./src/hooks/stories/useAMapEventBinder.mdx":async()=>t(()=>import("./useAMapEventBinder-c09091c0.js"),["./useAMapEventBinder-c09091c0.js","./jsx-runtime-91db03d0.js","./index-4139ccbc.js","./index-f8ee6e85.js","./index-defb0cf9.js","./index-356e4a49.js","./index-97715faa.js"],import.meta.url),"./src/hooks/stories/useAMapAPI.mdx":async()=>t(()=>import("./useAMapAPI-524e9562.js"),["./useAMapAPI-524e9562.js","./jsx-runtime-91db03d0.js","./index-4139ccbc.js","./index-f8ee6e85.js","./index-defb0cf9.js","./index-356e4a49.js","./index-97715faa.js"],import.meta.url),"./src/hooks/stories/useAMap.mdx":async()=>t(()=>import("./useAMap-79fe3b2f.js"),["./useAMap-79fe3b2f.js","./jsx-runtime-91db03d0.js","./index-4139ccbc.js","./index-f8ee6e85.js","./index-defb0cf9.js","./index-356e4a49.js","./index-97715faa.js"],import.meta.url),"./src/helpers/stories/coordsOfGeoJSON2AMapPolygonPath.mdx":async()=>t(()=>import("./coordsOfGeoJSON2AMapPolygonPath-5835ef3e.js"),["./coordsOfGeoJSON2AMapPolygonPath-5835ef3e.js","./jsx-runtime-91db03d0.js","./index-4139ccbc.js","./index-f8ee6e85.js","./index-defb0cf9.js","./index-356e4a49.js","./index-97715faa.js"],import.meta.url),"./src/helpers/stories/amapPolygonPath2GeoJSONCoords.mdx":async()=>t(()=>import("./amapPolygonPath2GeoJSONCoords-6834b876.js"),["./amapPolygonPath2GeoJSONCoords-6834b876.js","./jsx-runtime-91db03d0.js","./index-4139ccbc.js","./index-f8ee6e85.js","./index-defb0cf9.js","./index-356e4a49.js","./index-97715faa.js"],import.meta.url),"./src/components/AMapToolBar/stories/AMapToolBar.stories.tsx":async()=>t(()=>import("./AMapToolBar.stories-36226780.js"),["./AMapToolBar.stories-36226780.js","./chunk-GOSXJPAJ-7233c8d1.js","./chunk-AY7I2SME-ea41228b.js","./index-4139ccbc.js","./AMapMouseTool-cd485c74.js","./jsx-runtime-91db03d0.js","./withAMap-c26d0ec0.js","./withAPIContainer-cce0a859.js"],import.meta.url),"./src/components/AMapScale/stories/AMapScale.stories.tsx":async()=>t(()=>import("./AMapScale.stories-cc9f6c92.js"),["./AMapScale.stories-cc9f6c92.js","./chunk-GOSXJPAJ-7233c8d1.js","./chunk-AY7I2SME-ea41228b.js","./index-4139ccbc.js","./AMapMouseTool-cd485c74.js","./jsx-runtime-91db03d0.js","./withAMap-c26d0ec0.js","./withAPIContainer-cce0a859.js"],import.meta.url),"./src/components/AMapPolylineEditor/stories/AMapPolylineEditor.stories.tsx":async()=>t(()=>import("./AMapPolylineEditor.stories-6cb562d7.js"),["./AMapPolylineEditor.stories-6cb562d7.js","./jsx-runtime-91db03d0.js","./index-4139ccbc.js","./chunk-GOSXJPAJ-7233c8d1.js","./chunk-AY7I2SME-ea41228b.js","./AMapMouseTool-cd485c74.js","./withAutoFitView-024448ed.js","./withAMap-c26d0ec0.js","./withAPIContainer-cce0a859.js"],import.meta.url),"./src/components/AMapPolyline/stories/AMapPolyline.stories.tsx":async()=>t(()=>import("./AMapPolyline.stories-e847b47b.js"),["./AMapPolyline.stories-e847b47b.js","./jsx-runtime-91db03d0.js","./index-4139ccbc.js","./chunk-GOSXJPAJ-7233c8d1.js","./chunk-AY7I2SME-ea41228b.js","./AMapMouseTool-cd485c74.js","./withAutoFitView-024448ed.js","./withAMap-c26d0ec0.js","./withAPIContainer-cce0a859.js"],import.meta.url),"./src/components/AMapPolygonEditor/stories/AMapPolygonEditor.stories.tsx":async()=>t(()=>import("./AMapPolygonEditor.stories-df26a719.js"),["./AMapPolygonEditor.stories-df26a719.js","./jsx-runtime-91db03d0.js","./index-4139ccbc.js","./chunk-GOSXJPAJ-7233c8d1.js","./chunk-AY7I2SME-ea41228b.js","./AMapMouseTool-cd485c74.js","./coordsOfGeoJSON2AMapPolygonPath-d0760c1b.js","./withAutoFitView-024448ed.js","./withAMap-c26d0ec0.js","./withAPIContainer-cce0a859.js"],import.meta.url),"./src/components/AMapPolygon/stories/AMapPolygon.stories.tsx":async()=>t(()=>import("./AMapPolygon.stories-98d2ea20.js"),["./AMapPolygon.stories-98d2ea20.js","./jsx-runtime-91db03d0.js","./index-4139ccbc.js","./chunk-GOSXJPAJ-7233c8d1.js","./chunk-AY7I2SME-ea41228b.js","./AMapMouseTool-cd485c74.js","./withAutoFitView-024448ed.js","./withAMap-c26d0ec0.js","./withAPIContainer-cce0a859.js"],import.meta.url),"./src/components/AMapOverlayGroup/stories/AMapOverlayGroup.stories.tsx":async()=>t(()=>import("./AMapOverlayGroup.stories-bb723dd2.js"),["./AMapOverlayGroup.stories-bb723dd2.js","./jsx-runtime-91db03d0.js","./index-4139ccbc.js","./chunk-GOSXJPAJ-7233c8d1.js","./chunk-AY7I2SME-ea41228b.js","./AMapMouseTool-cd485c74.js","./withAutoFitView-024448ed.js","./withAMap-c26d0ec0.js","./withAPIContainer-cce0a859.js"],import.meta.url),"./src/components/AMapMouseTool/stories/AMapMouseTool.stories.tsx":async()=>t(()=>import("./AMapMouseTool.stories-6f852f34.js"),["./AMapMouseTool.stories-6f852f34.js","./chunk-GOSXJPAJ-7233c8d1.js","./chunk-AY7I2SME-ea41228b.js","./index-4139ccbc.js","./AMapMouseTool-cd485c74.js","./jsx-runtime-91db03d0.js","./withAMap-c26d0ec0.js","./withAPIContainer-cce0a859.js"],import.meta.url),"./src/components/AMapMarker/stories/AMapMarker.stories.tsx":async()=>t(()=>import("./AMapMarker.stories-a8022012.js"),["./AMapMarker.stories-a8022012.js","./jsx-runtime-91db03d0.js","./index-4139ccbc.js","./chunk-GOSXJPAJ-7233c8d1.js","./chunk-AY7I2SME-ea41228b.js","./AMapMouseTool-cd485c74.js","./withAutoFitView-024448ed.js","./withAMap-c26d0ec0.js","./withAPIContainer-cce0a859.js"],import.meta.url),"./src/components/AMapMapType/stories/AMapMapType.stories.tsx":async()=>t(()=>import("./AMapMapType.stories-3e3b4ceb.js"),["./AMapMapType.stories-3e3b4ceb.js","./chunk-GOSXJPAJ-7233c8d1.js","./chunk-AY7I2SME-ea41228b.js","./index-4139ccbc.js","./AMapMouseTool-cd485c74.js","./jsx-runtime-91db03d0.js","./withAMap-c26d0ec0.js","./withAPIContainer-cce0a859.js"],import.meta.url),"./src/components/AMapMap/stories/AMapMap.stories.tsx":async()=>t(()=>import("./AMapMap.stories-f22f3a77.js"),["./AMapMap.stories-f22f3a77.js","./index-4139ccbc.js","./AMapMouseTool-cd485c74.js","./jsx-runtime-91db03d0.js","./withAPIContainer-cce0a859.js"],import.meta.url),"./src/components/AMapHawkEye/stories/AMapHawkEye.stories.tsx":async()=>t(()=>import("./AMapHawkEye.stories-65a0c065.js"),["./AMapHawkEye.stories-65a0c065.js","./chunk-GOSXJPAJ-7233c8d1.js","./chunk-AY7I2SME-ea41228b.js","./index-4139ccbc.js","./AMapMouseTool-cd485c74.js","./jsx-runtime-91db03d0.js","./withAMap-c26d0ec0.js","./withAPIContainer-cce0a859.js"],import.meta.url),"./src/components/AMapGeoJSON/stories/AMapGeoJSON.stories.tsx":async()=>t(()=>import("./AMapGeoJSON.stories-752a3bce.js"),["./AMapGeoJSON.stories-752a3bce.js","./index-4139ccbc.js","./AMapMouseTool-cd485c74.js","./jsx-runtime-91db03d0.js","./coordsOfGeoJSON2AMapPolygonPath-d0760c1b.js","./withAutoFitView-024448ed.js","./withAMap-c26d0ec0.js","./withAPIContainer-cce0a859.js"],import.meta.url),"./src/components/AMapEllipse/stories/AMapEllipse.stories.tsx":async()=>t(()=>import("./AMapEllipse.stories-6b593a58.js"),["./AMapEllipse.stories-6b593a58.js","./chunk-GOSXJPAJ-7233c8d1.js","./chunk-AY7I2SME-ea41228b.js","./index-4139ccbc.js","./AMapMouseTool-cd485c74.js","./jsx-runtime-91db03d0.js","./withAutoFitView-024448ed.js","./withAMap-c26d0ec0.js","./withAPIContainer-cce0a859.js"],import.meta.url),"./src/components/AMapControlBar/stories/AMapControlBar.stories.tsx":async()=>t(()=>import("./AMapControlBar.stories-603d09d4.js"),["./AMapControlBar.stories-603d09d4.js","./chunk-GOSXJPAJ-7233c8d1.js","./chunk-AY7I2SME-ea41228b.js","./index-4139ccbc.js","./AMapMouseTool-cd485c74.js","./jsx-runtime-91db03d0.js","./withAMap-c26d0ec0.js","./withAPIContainer-cce0a859.js"],import.meta.url),"./src/components/AMapCircle/stories/AMapCircle.stories.tsx":async()=>t(()=>import("./AMapCircle.stories-f095e47a.js"),["./AMapCircle.stories-f095e47a.js","./chunk-GOSXJPAJ-7233c8d1.js","./chunk-AY7I2SME-ea41228b.js","./index-4139ccbc.js","./AMapMouseTool-cd485c74.js","./jsx-runtime-91db03d0.js","./withAutoFitView-024448ed.js","./withAMap-c26d0ec0.js","./withAPIContainer-cce0a859.js"],import.meta.url),"./src/components/AMapAPIContainer/stories/createAMapAPIContainer.stories.tsx":async()=>t(()=>import("./createAMapAPIContainer.stories-26becf56.js"),["./createAMapAPIContainer.stories-26becf56.js","./jsx-runtime-91db03d0.js","./index-4139ccbc.js","./AMapMouseTool-cd485c74.js"],import.meta.url)};async function R(i){return P[i]()}const{composeConfigs:y,PreviewWeb:T,ClientApi:M}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const i=await Promise.all([t(()=>import("./config-8dc30fef.js"),["./config-8dc30fef.js","./index-4139ccbc.js","./react-16-438d2eaf.js","./index-defb0cf9.js","./index-356e4a49.js"],import.meta.url),t(()=>import("./preview-d23bf1d8.js"),[],import.meta.url),t(()=>import("./preview-b3779e6e.js"),["./preview-b3779e6e.js","./chunk-AY7I2SME-ea41228b.js"],import.meta.url),t(()=>import("./preview-108c1c3c.js"),["./preview-108c1c3c.js","./index-356e4a49.js"],import.meta.url),t(()=>import("./preview-2059b184.js"),[],import.meta.url),t(()=>import("./preview-b8d6c68d.js"),["./preview-b8d6c68d.js","./index-356e4a49.js"],import.meta.url),t(()=>import("./preview-b3c37142.js"),[],import.meta.url),t(()=>import("./preview-95a68a16.js"),["./preview-95a68a16.js","./jsx-runtime-91db03d0.js","./index-4139ccbc.js"],import.meta.url)]);return y(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new T;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new M({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:R,getProjectAnnotations:I});export{t as _};
//# sourceMappingURL=iframe-71597e18.js.map

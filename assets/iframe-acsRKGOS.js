function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./changelog-BZm99tqf.js","./jsx-runtime-DRTy3Uxn.js","./index-BBkUAzwr.js","./index-z5U8iC57.js","./index-DRkGJ6QO.js","./index-PqR-_bA4.js","./index-DboEQVPH.js","./index-DrFu-skq.js","./contributing-MTcluFE3.js","./intro-Cv_Kjl6f.js","./createAMapAPIContainer.stories-CD8XVTvq.js","./AMapRangingTool-CbgZQGdK.js","./AMapCircle.stories-CSJNczBd.js","./chunk-MZXVCX43-BS0fyQMC.js","./v4-D8aEg3BZ.js","./withAutoFitView-D87HactE.js","./withAMap-ugFONEsn.js","./withAPIContainer-DqMC_Ql1.js","./AMapControlBar.stories-ppgaao-r.js","./AMapEllipse.stories-DY8NmoDC.js","./AMapGeoJSON.stories-B7V37v6g.js","./coordsOfGeoJSON2AMapPolygonPath-C3Fu46db.js","./AMapHawkEye.stories-9zCZ4C-s.js","./AMapMap.stories-Dpxj8cO6.js","./AMapMapType.stories-xo5WcMNI.js","./AMapMarker.stories-iFWDhXAp.js","./AMapMouseTool.stories-CZwwbqZY.js","./AMapOverlayGroup.stories-BeFUlp3H.js","./AMapPolygon.stories-Q1VsOcq5.js","./AMapPolygonEditor.stories-e0f3SCoI.js","./AMapPolyline.stories-Y84TuNYL.js","./AMapPolylineEditor.stories-DGlAHJr3.js","./AMapRangingTool.stories-3YBXg5YT.js","./AMapRectangle.stories-BLwYDeui.js","./AMapScale.stories-B0u0QVRX.js","./AMapToolBar.stories-CudfNMP3.js","./amapPolygonPath2GeoJSONCoords-CQ1Bfm4J.js","./coordsOfGeoJSON2AMapPolygonPath-CelQjlCm.js","./useAMap-kSQYBhLX.js","./useAMapAPI-DAP9KzE1.js","./useAMapEventBinder-DC11peJ5.js","./useAMapOverlayBinder-CGAQ5dCv.js","./useAMapPluginInstance-s1x0Tm12.js","./entry-preview-kGuIN3g4.js","./react-18-B-OKcmzb.js","./entry-preview-docs-DTR-bMEI.js","./preview-K4_qCkL4.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js","./preview-AI3evN5-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const e of r.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&p(e)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const O="modulepreload",P=function(_,n){return new URL(_,n).href},d={},t=function(n,a,p){let o=Promise.resolve();if(a&&a.length>0){const r=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),E=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));o=Promise.all(a.map(s=>{if(s=P(s,p),s in d)return;d[s]=!0;const m=s.endsWith(".css"),A=m?'[rel="stylesheet"]':"";if(!!p)for(let c=r.length-1;c>=0;c--){const l=r[c];if(l.href===s&&(!m||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${A}`))return;const i=document.createElement("link");if(i.rel=m?"stylesheet":O,m||(i.as="script",i.crossOrigin=""),i.href=s,E&&i.setAttribute("nonce",E),document.head.appendChild(i),m)return new Promise((c,l)=>{i.addEventListener("load",c),i.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})}))}return o.then(()=>n()).catch(r=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=r,window.dispatchEvent(e),!e.defaultPrevented)throw r})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:y}=__STORYBOOK_MODULE_PREVIEW_API__,u=R({page:"preview"});y.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const T={"./docs/changelog.mdx":async()=>t(()=>import("./changelog-BZm99tqf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),"./docs/contributing.mdx":async()=>t(()=>import("./contributing-MTcluFE3.js"),__vite__mapDeps([8,1,2,3,4,5,6,7]),import.meta.url),"./docs/intro.mdx":async()=>t(()=>import("./intro-Cv_Kjl6f.js"),__vite__mapDeps([9,1,2,3,4,5,6,7]),import.meta.url),"./src/components/AMapAPIContainer/stories/createAMapAPIContainer.stories.tsx":async()=>t(()=>import("./createAMapAPIContainer.stories-CD8XVTvq.js"),__vite__mapDeps([10,2,11]),import.meta.url),"./src/components/AMapCircle/stories/AMapCircle.stories.tsx":async()=>t(()=>import("./AMapCircle.stories-CSJNczBd.js"),__vite__mapDeps([12,13,14,2,11,15,16,17]),import.meta.url),"./src/components/AMapControlBar/stories/AMapControlBar.stories.tsx":async()=>t(()=>import("./AMapControlBar.stories-ppgaao-r.js"),__vite__mapDeps([18,13,14,2,11,16,17]),import.meta.url),"./src/components/AMapEllipse/stories/AMapEllipse.stories.tsx":async()=>t(()=>import("./AMapEllipse.stories-DY8NmoDC.js"),__vite__mapDeps([19,13,14,2,11,15,16,17]),import.meta.url),"./src/components/AMapGeoJSON/stories/AMapGeoJSON.stories.tsx":async()=>t(()=>import("./AMapGeoJSON.stories-B7V37v6g.js"),__vite__mapDeps([20,2,11,21,15,16,17]),import.meta.url),"./src/components/AMapHawkEye/stories/AMapHawkEye.stories.tsx":async()=>t(()=>import("./AMapHawkEye.stories-9zCZ4C-s.js"),__vite__mapDeps([22,13,14,2,11,16,17]),import.meta.url),"./src/components/AMapMap/stories/AMapMap.stories.tsx":async()=>t(()=>import("./AMapMap.stories-Dpxj8cO6.js"),__vite__mapDeps([23,2,11,17]),import.meta.url),"./src/components/AMapMapType/stories/AMapMapType.stories.tsx":async()=>t(()=>import("./AMapMapType.stories-xo5WcMNI.js"),__vite__mapDeps([24,13,14,2,11,16,17]),import.meta.url),"./src/components/AMapMarker/stories/AMapMarker.stories.tsx":async()=>t(()=>import("./AMapMarker.stories-iFWDhXAp.js"),__vite__mapDeps([25,2,13,14,11,15,16,17]),import.meta.url),"./src/components/AMapMouseTool/stories/AMapMouseTool.stories.tsx":async()=>t(()=>import("./AMapMouseTool.stories-CZwwbqZY.js"),__vite__mapDeps([26,13,14,2,11,16,17]),import.meta.url),"./src/components/AMapOverlayGroup/stories/AMapOverlayGroup.stories.tsx":async()=>t(()=>import("./AMapOverlayGroup.stories-BeFUlp3H.js"),__vite__mapDeps([27,2,13,14,11,15,16,17]),import.meta.url),"./src/components/AMapPolygon/stories/AMapPolygon.stories.tsx":async()=>t(()=>import("./AMapPolygon.stories-Q1VsOcq5.js"),__vite__mapDeps([28,2,13,14,11,15,16,17]),import.meta.url),"./src/components/AMapPolygonEditor/stories/AMapPolygonEditor.stories.tsx":async()=>t(()=>import("./AMapPolygonEditor.stories-e0f3SCoI.js"),__vite__mapDeps([29,2,13,14,11,21,15,16,17]),import.meta.url),"./src/components/AMapPolyline/stories/AMapPolyline.stories.tsx":async()=>t(()=>import("./AMapPolyline.stories-Y84TuNYL.js"),__vite__mapDeps([30,2,13,14,11,15,16,17]),import.meta.url),"./src/components/AMapPolylineEditor/stories/AMapPolylineEditor.stories.tsx":async()=>t(()=>import("./AMapPolylineEditor.stories-DGlAHJr3.js"),__vite__mapDeps([31,2,13,14,11,15,16,17]),import.meta.url),"./src/components/AMapRangingTool/stories/AMapRangingTool.stories.tsx":async()=>t(()=>import("./AMapRangingTool.stories-3YBXg5YT.js"),__vite__mapDeps([32,13,14,2,11,16,17]),import.meta.url),"./src/components/AMapRectangle/stories/AMapRectangle.stories.tsx":async()=>t(()=>import("./AMapRectangle.stories-BLwYDeui.js"),__vite__mapDeps([33,13,14,2,11,15,16,17]),import.meta.url),"./src/components/AMapScale/stories/AMapScale.stories.tsx":async()=>t(()=>import("./AMapScale.stories-B0u0QVRX.js"),__vite__mapDeps([34,13,14,2,11,16,17]),import.meta.url),"./src/components/AMapToolBar/stories/AMapToolBar.stories.tsx":async()=>t(()=>import("./AMapToolBar.stories-CudfNMP3.js"),__vite__mapDeps([35,13,14,2,11,16,17]),import.meta.url),"./src/helpers/stories/amapPolygonPath2GeoJSONCoords.mdx":async()=>t(()=>import("./amapPolygonPath2GeoJSONCoords-CQ1Bfm4J.js"),__vite__mapDeps([36,1,2,3,4,5,6,7]),import.meta.url),"./src/helpers/stories/coordsOfGeoJSON2AMapPolygonPath.mdx":async()=>t(()=>import("./coordsOfGeoJSON2AMapPolygonPath-CelQjlCm.js"),__vite__mapDeps([37,1,2,3,4,5,6,7]),import.meta.url),"./src/hooks/stories/useAMap.mdx":async()=>t(()=>import("./useAMap-kSQYBhLX.js"),__vite__mapDeps([38,1,2,3,4,5,6,7]),import.meta.url),"./src/hooks/stories/useAMapAPI.mdx":async()=>t(()=>import("./useAMapAPI-DAP9KzE1.js"),__vite__mapDeps([39,1,2,3,4,5,6,7]),import.meta.url),"./src/hooks/stories/useAMapEventBinder.mdx":async()=>t(()=>import("./useAMapEventBinder-DC11peJ5.js"),__vite__mapDeps([40,1,2,3,4,5,6,7]),import.meta.url),"./src/hooks/stories/useAMapOverlayBinder.mdx":async()=>t(()=>import("./useAMapOverlayBinder-CGAQ5dCv.js"),__vite__mapDeps([41,1,2,3,4,5,6,7]),import.meta.url),"./src/hooks/stories/useAMapPluginInstance.mdx":async()=>t(()=>import("./useAMapPluginInstance-s1x0Tm12.js"),__vite__mapDeps([42,1,2,3,4,5,6,7]),import.meta.url)};async function v(_){return T[_]()}const{composeConfigs:L,PreviewWeb:M,ClientApi:D}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const _=await Promise.all([t(()=>import("./entry-preview-kGuIN3g4.js"),__vite__mapDeps([43,2,44,5]),import.meta.url),t(()=>import("./entry-preview-docs-DTR-bMEI.js"),__vite__mapDeps([45,6,2,7]),import.meta.url),t(()=>import("./preview-Bs2UobUj.js"),[],import.meta.url),t(()=>import("./preview-K4_qCkL4.js"),__vite__mapDeps([46,14]),import.meta.url),t(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([47,7]),import.meta.url),t(()=>import("./preview-B4GcaC1c.js"),[],import.meta.url),t(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),t(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([48,7]),import.meta.url),t(()=>import("./preview-Cv3rAi2i.js"),[],import.meta.url),t(()=>import("./preview-AI3evN5-.js"),__vite__mapDeps([49,2]),import.meta.url)]);return L(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new M(v,I);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};

const r=n=>Array.isArray(n)&&n.length===2&&typeof n[0]=="number"&&typeof n[1]=="number",e=n=>Array.isArray(n)&&n.length>=2&&n.every(r),s=(n,t)=>{if(!r(n)||!r(t))throw Error("invalid position");return n===t||n.toString()===t.toString()},a=n=>{if(!e(n))return!1;const t=n.length,i=n[0],o=n[t-1];return t>3&&s(i,o)},f=n=>{const t=n.length;return n.slice(0,t-1)},g=n=>a(n)?f(n):e(n)?n:n.map(g);export{g as c};
//# sourceMappingURL=coordsOfGeoJSON2AMapPolygonPath-d0760c1b.js.map
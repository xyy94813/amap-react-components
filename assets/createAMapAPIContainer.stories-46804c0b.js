import{j as t}from"./jsx-runtime-91db03d0.js";import{r as o}from"./index-4139ccbc.js";import{p as y,u as d}from"./AMapMouseTool-86d4ae06.js";const S="38755ba5e44be7ed58efbbc70101fbbf",T={title:"组件(Components)/基础组件(Basic)/AMapAPIContainer"},I=y({key:S,version:"2.0",plugins:["ControlBar","ToolBar","Scale","MapType","HawkEye"].map(e=>`AMap.${e}`),AMapUI:{version:"1.1",plugins:["overlay/SimpleMarker"]}}),_=y({key:S,version:"2.0",AMapUI:{version:"1.1"}}),p=(e,n)=>{new e.ControlBar().addTo(n),new e.ToolBar({position:"LT",offset:[50,120]}).addTo(n),new e.Scale().addTo(n),new e.HawkEye().addTo(n)},u=(e,n)=>{new e({iconTheme:"numv1",iconStyle:"start",position:[116.405285,39.904989]}).addTo(n)},C=()=>{const{__AMAP__:e}=d(),n=o.useRef(null),s=o.useRef(null);return o.useEffect(()=>{let l;if(!e||!n.current)return l;const r=new e.Map(n.current);return s.current=r,e.plugin(["ControlBar","ToolBar","Scale","MapType","HawkEye"].map(a=>`AMap.${a}`),()=>p(e,r)),AMapUI.loadUI("overlay/SimpleMarker",a=>{u(a,r)}),l=()=>{r.destroy()},l},[e]),t("div",{ref:n,style:{height:400}})},c=()=>t(o.Suspense,{fallback:"loading...",children:t(_,{children:t(C,{})})});c.storyName="异步加载插件";const E=`
const AsyncPluginAPIContainer = createAMapAPIContainer({
  key: AMAP_API_KEY,
  version: '2.0',
  AMapUI: {
    version: '1.1',
  },
});

${p.toString()}

${u.toString()}

const AsyncPluginContentDrawer = () => {
  const { __AMAP__: AMap } = useAMapAPI();
  const $container = useRef(null);
  const $map = useRef<AMap.Map | null>(null);
  useEffect(() => {
    let clearEffect;
    if (!AMap || !$container.current) {
      return clearEffect;
    }

    const map = new AMap.Map($container.current);
    $map.current = map;

    AMap.plugin(
      ['ControlBar', 'ToolBar', 'Scale', 'MapType', 'HawkEye'].map(
        (pluginName) => \`AMap.\${pluginName}\`,
      ),
      () => initPlugin(AMap, map),
    );

    AMapUI.loadUI('overlay/SimpleMarker', (SimpleMarker: typeof AMapUI.SimpleMarker) => {
      initUIPlugin(SimpleMarker, map);
    });

    clearEffect = () => {
      map.destroy();
    };

    return clearEffect;
  }, [AMap]);

  return <div ref={$container} style={{ height: 400 }} />;
};
`;c.parameters={docs:{source:{code:E}}};const $=()=>{const{__AMAP__:e,__AMAP_UI__:n}=d(),s=o.useRef(null),l=o.useRef(null);return o.useEffect(()=>{let r;if(!e||!s.current)return r;const a=new e.Map(s.current);return l.current=a,p(e,a),u(n.SimpleMarker,a),r=()=>{a.destroy()},r},[e,n]),t("div",{ref:s,style:{height:400}})},i=()=>t(o.Suspense,{fallback:"loading...",children:t(I,{children:t($,{})})});i.storyName="同步加载插件";const k=`
const SyncPluginAPIContainer = createAMapAPIContainer({
  version: '2.0',
  apiKey: AMAP_API_KEY,
  plugins: ['ControlBar', 'ToolBar', 'Scale', 'MapType', 'HawkEye'].map(
    (pluginName) => \`AMap.\${pluginName}\`,
  ),
  AMapUI: {
    version: '1.1',
    plugins: ['overlay/SimpleMarker'],
  },
});

${p.toString()}

${u.toString()}

const SyncPluginContentDrawer = () => {
  const { __AMAP__: AMap, __AMAP_UI__: AMapUI } = useAMapAPI();
  const $container = useRef(null);
  const $map = useRef<AMap.Map | null>(null);
  useEffect(() => {
    let clearEffect;
    if (!AMap || !$container.current) {
      return clearEffect;
    }

    const map = new AMap.Map($container.current);
    $map.current = map;

    initPlugin(AMap, map);
    initUIPlugin(AMapUI!.SimpleMarker, map);

    clearEffect = () => {
      map.destroy();
    };

    return clearEffect;
  }, [AMap, AMapUI]);
  return <div ref={$container} style={{ height: 400 }} />;
};

() => (
  <SyncPluginAPIContainer>
    <SyncPluginContentDrawer />
  </SyncPluginAPIContainer>
)
`;i.parameters={docs:{source:{code:k}}};var A,M,P;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`() => <Suspense fallback="loading...">
    <AsyncPluginAPIContainer>
      <AsyncPluginContentDrawer />
    </AsyncPluginAPIContainer>
  </Suspense>`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var f,m,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Suspense fallback="loading...">
    <SyncPluginAPIContainer>
      <SyncPluginContentDrawer />
    </SyncPluginAPIContainer>
  </Suspense>`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const h=["AsyncPlugin","SyncPlugin"];export{c as AsyncPlugin,i as SyncPlugin,h as __namedExportsOrder,T as default};
//# sourceMappingURL=createAMapAPIContainer.stories-46804c0b.js.map

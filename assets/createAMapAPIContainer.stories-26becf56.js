import{j as t}from"./jsx-runtime-91db03d0.js";import{r as o}from"./index-4139ccbc.js";import{p as d,u as y}from"./AMapMouseTool-cd485c74.js";const S="38755ba5e44be7ed58efbbc70101fbbf",T={title:"组件(Components)/基础组件(Basic)/AMapAPIContainer"},p=(e,n)=>{new e.ControlBar().addTo(n),new e.ToolBar({position:"LT",offset:[50,120]}).addTo(n),new e.Scale().addTo(n),new e.HawkEye().addTo(n)},u=(e,n)=>{new e({iconTheme:"numv1",iconStyle:"start",position:[116.405285,39.904989]}).addTo(n)},I=d({key:S,version:"2.0",AMapUI:{version:"1.1"}}),_=()=>{const{__AMAP__:e}=y(),n=o.useRef(null),c=o.useRef(null);return o.useEffect(()=>{let i;if(!e||!n.current)return i;const r=new e.Map(n.current);return c.current=r,e.plugin(["ControlBar","ToolBar","Scale","MapType","HawkEye"].map(a=>`AMap.${a}`),()=>p(e,r)),AMapUI.loadUI("overlay/SimpleMarker",a=>{u(a,r)}),i=()=>{r.destroy()},i},[e]),t("div",{ref:n,style:{height:400}})},C=`
const AsyncPluginAPIContainer = createAMapAPIContainer({
  key: AMAP_API_KEY,
  version: '2.0',
  AMapUI: {
    version: '1.1',
  },
});

const initPlugin = ${p.toString()}

const initUIPlugin = ${u.toString()}

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
`,s={name:"异步加载插件",render:()=>t(o.Suspense,{fallback:"loading...",children:t(I,{children:t(_,{})})}),parameters:{docs:{source:{code:C}}}},E=d({key:S,version:"2.0",plugins:["ControlBar","ToolBar","Scale","MapType","HawkEye"].map(e=>`AMap.${e}`),AMapUI:{version:"1.1",plugins:["overlay/SimpleMarker"]}}),$=()=>{const{__AMAP__:e,__AMAP_UI__:n}=y(),c=o.useRef(null),i=o.useRef(null);return o.useEffect(()=>{let r;if(!e||!c.current)return r;const a=new e.Map(c.current);return i.current=a,p(e,a),u(n.SimpleMarker,a),r=()=>{a.destroy()},r},[e,n]),t("div",{ref:c,style:{height:400}})},k=`
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

const initPlugin = ${p.toString()}

const initUIPlugin = ${u.toString()}

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
`,l={name:"同步加载插件",render:()=>t(o.Suspense,{fallback:"loading...",children:t(E,{children:t($,{})})}),parameters:{docs:{source:{code:k}}}};var A,P,M;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '异步加载插件',
  render: () => <Suspense fallback="loading...">
      <AsyncPluginAPIContainer>
        <AsyncPluginContentDrawer />
      </AsyncPluginAPIContainer>
    </Suspense>,
  parameters: {
    docs: {
      source: {
        code: AsyncPluginCode
      }
    }
  }
}`,...(M=(P=s.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var g,m,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '同步加载插件',
  render: () => <Suspense fallback="loading...">
      <SyncPluginAPIContainer>
        <SyncPluginContentDrawer />
      </SyncPluginAPIContainer>
    </Suspense>,
  parameters: {
    docs: {
      source: {
        code: SyncPluginCode
      }
    }
  }
}`,...(f=(m=l.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const h=["AsyncPlugin","SyncPlugin"];export{s as AsyncPlugin,l as SyncPlugin,h as __namedExportsOrder,T as default};
//# sourceMappingURL=createAMapAPIContainer.stories-26becf56.js.map

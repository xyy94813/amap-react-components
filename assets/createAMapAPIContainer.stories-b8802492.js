import{R as t,r as o}from"./index-1b03fe98.js";import{c as y,u as d}from"./AMapRangingTool-ace20b91.js";const S="38755ba5e44be7ed58efbbc70101fbbf",v={title:"组件(Components)/基础组件(Basic)/AMapAPIContainer"},u=(e,n)=>{new e.ControlBar().addTo(n),new e.ToolBar({position:"LT",offset:[50,120]}).addTo(n),new e.Scale().addTo(n),new e.HawkEye().addTo(n)},p=(e,n)=>{new e({iconTheme:"numv1",iconStyle:"start",position:[116.405285,39.904989]}).addTo(n)},I=y({key:S,version:"2.0",AMapUI:{version:"1.1"}}),E=()=>{const{__AMAP__:e}=d(),n=o.useRef(null),c=o.useRef(null);return o.useEffect(()=>{let l;if(!e||!n.current)return l;const r=new e.Map(n.current);return c.current=r,e.plugin(["ControlBar","ToolBar","Scale","MapType","HawkEye"].map(a=>`AMap.${a}`),()=>u(e,r)),AMapUI.loadUI("overlay/SimpleMarker",a=>{p(a,r)}),l=()=>{r.destroy()},l},[e]),t.createElement("div",{ref:n,style:{height:400}})},_=`
const AsyncPluginAPIContainer = createAMapAPIContainer({
  key: AMAP_API_KEY,
  version: '2.0',
  AMapUI: {
    version: '1.1',
  },
});

const initPlugin = ${u.toString()}

const initUIPlugin = ${p.toString()}

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
`,i={name:"异步加载插件",render:()=>t.createElement(o.Suspense,{fallback:"loading..."},t.createElement(I,null,t.createElement(E,null))),parameters:{docs:{source:{code:_}}}},C=y({key:S,version:"2.0",plugins:["ControlBar","ToolBar","Scale","MapType","HawkEye"].map(e=>`AMap.${e}`),AMapUI:{version:"1.1",plugins:["overlay/SimpleMarker"]}}),$=()=>{const{__AMAP__:e,__AMAP_UI__:n}=d(),c=o.useRef(null),l=o.useRef(null);return o.useEffect(()=>{let r;if(!e||!c.current)return r;const a=new e.Map(c.current);return l.current=a,u(e,a),p(n.SimpleMarker,a),r=()=>{a.destroy()},r},[e,n]),t.createElement("div",{ref:c,style:{height:400}})},k=`
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

const initPlugin = ${u.toString()}

const initUIPlugin = ${p.toString()}

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
`,s={name:"同步加载插件",render:()=>t.createElement(o.Suspense,{fallback:"loading..."},t.createElement(C,null,t.createElement($,null))),parameters:{docs:{source:{code:k}}}};var A,m,P;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(P=(m=i.parameters)==null?void 0:m.docs)==null?void 0:P.source}}};var M,g,f;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const T=["AsyncPlugin","SyncPlugin"];export{i as AsyncPlugin,s as SyncPlugin,T as __namedExportsOrder,v as default};

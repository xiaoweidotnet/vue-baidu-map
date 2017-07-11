webpackJsonp([28],{LsBM:function(s,a,t){var n=t("VU/8")(null,t("mCOH"),null,null);s.exports=n.exports},ONxU:function(s,a,t){s.exports=t("LsBM")},mCOH:function(s,a){s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("快速上手")]),s._v(" "),t("h2",[s._v("使用")]),s._v(" "),t("h3",[s._v("全局注册")]),s._v(" "),t("p",[s._v("全局注册将一次性引入百度地图组件库的所有组件。")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),t("h3",[s._v("局部注册")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),t("h3",[s._v("CDN 全局注册")]),s._v(" "),s._m(4),s._v(" "),t("h2",[s._v("常见问题")]),s._v(" "),s._m(5),s._v(" "),t("h3",[s._v("错误用法")]),s._v(" "),s._m(6),s._v(" "),t("h3",[s._v("正确用法")]),s._v(" "),s._m(7),s._v(" "),t("h2",[s._v("预览")]),s._v(" "),t("doc-preview",[t("baidu-map",{staticClass:"map",attrs:{center:"北京",zoom:15}})],1)],1)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Vue "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vue'")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" BaiduMap "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vue-baidu-map'")]),s._v("\n\nVue.use(BaiduMap, {\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */")]),s._v("\n  ak: "),t("span",{staticClass:"hljs-string"},[s._v("'YOUR_APP_KEY'")]),s._v("\n})\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"bm-view"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),t("span",{staticClass:"css"},[s._v("\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".bm-view")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("100%")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("300px")]),s._v(";\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("如果有按需引入组件的需要，可以选择局部注册百度地图组件，这将减少工程打包后的容量尺寸。局部注册的 "),t("code",[s._v("BaiduMap")]),s._v(" 组件"),t("strong",[s._v("必须")]),s._v("声明 "),t("code",[s._v("ak")]),s._v(" 属性。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"bm-view"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("ak")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"YOUR_APP_KEY"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" {BaiduMap} "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vue-baidu-map'")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("components")]),s._v(": {\n    BaiduMap\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),t("span",{staticClass:"css"},[s._v("\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".bm-view")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("100%")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("300px")]),s._v(";\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"actionscript"},[s._v("\nVue.use(VueBaiduMap.default, {\n  ak: "),t("span",{staticClass:"hljs-string"},[s._v("'YOUR_APP_KEY'")]),s._v("\n})\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ul",[t("li",[t("code",[s._v("BaiduMap")]),s._v(" 组件容器本身是一个空的块级元素，如果容器不定义高度，百度地图将渲染在一个高度为 0 不可见的容器内。")]),s._v(" "),t("li",[s._v("由于百度地图 JS API 只有 JSONP 一种加载方式，因此 "),t("code",[s._v("BaiduMap")]),s._v(" 组件及其所有子组件的渲染只能是异步的。因此，请使用在组件的 "),t("code",[s._v("ready")]),s._v(" 事件来执行地图 API 加载完毕后才能执行的代码，不要试图在 vue 自身的生命周期中调用 "),t("code",[s._v("BMap")]),s._v(" 类，更不要在这些时机修改 model 层。")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":center")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"center"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("center")]),s._v(": {"),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(", "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("}\n    }\n  },\n  mounted () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".lng = "),t("span",{staticClass:"hljs-number"},[s._v("116.404")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".lat = "),t("span",{staticClass:"hljs-number"},[s._v("39.915")]),s._v("\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":center")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"center"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@ready")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"handler"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("center")]),s._v(": {"),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(", "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("}\n    }\n  },\n  "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    handler ({BMap, map}) {\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(BMap, map)\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".lng = "),t("span",{staticClass:"hljs-number"},[s._v("116.404")]),s._v("\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".lat = "),t("span",{staticClass:"hljs-number"},[s._v("39.915")]),s._v("\n    }\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])}]}}});
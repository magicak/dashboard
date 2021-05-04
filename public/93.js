(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1904:function(t,a,e){"use strict";e.r(a);var i=e(16),s={name:"UiPagination",mounted:function(){i.c.index()}},n=e(8),o=Object(n.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{attrs:{fluid:""}},[e("b-row",[e("b-col",{attrs:{lg:"6",sm:"12"}},[e("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("Pagination Examples")])]},proxy:!0},{key:"headerAction",fn:function(){return[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[e("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[e("p",[t._v("\n              In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive\n              "),e("code",[t._v("aria-label")]),t._v(" for the\n              "),e("code",[t._v("<nav>")]),t._v(" to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be\n              "),e("code",[t._v('aria-label="Search results pages"')]),t._v(".\n            ")]),t._v(" "),e("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-1"}},[e("div",{staticClass:"card"},[e("kbd",{staticClass:"bg-dark"},[e("pre",{staticClass:"text-white",attrs:{id:"pagination-examples"}},[t._v("                    "),e("code",[t._v('\n<b-pagination value="1"\n              prev-text="Previous"\n              next-text="Next"\n              first-text="First"\n              last-text="Last"\n              :total-rows="50"\n></b-pagination>\n')])])])])]),t._v(" "),e("b-pagination",{attrs:{value:"1","prev-text":"Previous","next-text":"Next","first-text":"First","last-text":"Last","total-rows":50}})]},proxy:!0}])}),t._v(" "),e("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("Disabled and active states")])]},proxy:!0},{key:"headerAction",fn:function(){return[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-2",modifiers:{"collapse-2":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[e("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[e("p",[t._v("\n              Pagination links are customizable for different circumstances. Use\n              "),e("code",[t._v("disabled")]),t._v(" for links that appear un-clickable and\n              "),e("code",[t._v(".active")]),t._v(" to indicate the current page.\n            ")]),t._v(" "),e("p",[t._v("\n              While the\n              "),e("code",[t._v("disabled")]),t._v(" prop uses\n              "),e("code",[t._v("pointer-events: none")]),t._v(" to\n              "),e("em",[t._v("try")]),t._v(" to disable the link functionality of\n              "),e("code",[t._v("<a>")]),t._v("s, that CSS property is not yet standardized and doesn’t account for keyboard navigation. As such, you should always add\n              "),e("code",[t._v('tabindex="-1"')]),t._v(" on disabled links and use custom JavaScript to fully disable their functionality.\n            ")]),t._v(" "),e("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-2"}},[e("div",{staticClass:"card"},[e("kbd",{staticClass:"bg-dark"},[e("pre",{staticClass:"text-white",attrs:{id:"disabled-active-1"}},[t._v("                    "),e("code",[t._v('\n<b-pagination value="1" disabled :total-rows="50" />\n<b-pagination value="2" :total-rows="50" />\n')])])])])]),t._v(" "),e("b-pagination",{attrs:{value:"1",disabled:"","total-rows":50}}),t._v(" "),e("p",[t._v("\n              You can optionally swap out active or disabled anchors for\n              "),e("code",[t._v("<span>")]),t._v(", or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.\n            ")]),t._v(" "),e("b-pagination",{attrs:{value:"2","total-rows":50}})]},proxy:!0}])}),t._v(" "),e("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("Pagination With Color")])]},proxy:!0},{key:"headerAction",fn:function(){return[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-3",modifiers:{"collapse-3":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[e("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[e("p",[t._v("\n              In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive\n              "),e("code",[t._v("aria-label")]),t._v(" for the\n              "),e("code",[t._v("<nav>")]),t._v(" to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be\n              "),e("code",[t._v('aria-label="Search results pages"')]),t._v(".\n            ")]),t._v(" "),e("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-3"}},[e("div",{staticClass:"card"},[e("kbd",{staticClass:"bg-dark"},[e("pre",{staticClass:"text-white",attrs:{id:"disabled-active-3"}},[t._v("                    "),e("code",[t._v('\n<b-pagination class="iq-page-primary" :value="2" :total-rows="50" />\n<b-pagination class="iq-page-success" :value="2" :total-rows="50" />\n<b-pagination class="iq-page-info" :value="2" :total-rows="50" />\n')])])])])]),t._v(" "),e("b-pagination",{staticClass:"iq-page-primary",attrs:{value:2,"total-rows":50}}),t._v(" "),e("b-pagination",{staticClass:"iq-page-success",attrs:{value:2,"total-rows":50}}),t._v(" "),e("b-pagination",{staticClass:"iq-page-info",attrs:{value:2,"total-rows":50}})]},proxy:!0}])})],1),t._v(" "),e("b-col",[e("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("Working with icons")])]},proxy:!0},{key:"headerAction",fn:function(){return[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-4",modifiers:{"collapse-4":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[e("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[e("p",[t._v("\n              Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with\n              "),e("code",[t._v("aria")]),t._v(" attributes.\n            ")]),t._v(" "),e("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-4"}},[e("div",{staticClass:"card"},[e("kbd",{staticClass:"bg-dark"},[e("pre",{staticClass:"text-white",attrs:{id:"pagination-with-icon"}},[t._v("                    "),e("code",[t._v('\n<b-pagination value="1"\n              :total-rows="50"\n></b-pagination>\n')])])])])]),t._v(" "),e("b-pagination",{attrs:{value:"1","total-rows":50}})]},proxy:!0}])}),t._v(" "),e("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("Pagination Sizing")])]},proxy:!0},{key:"headerAction",fn:function(){return[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-5",modifiers:{"collapse-5":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[e("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[e("p",[t._v("\n              Fancy larger or smaller pagination? Add prop\n              "),e("code",[t._v('size="lg"')]),t._v(" or\n              "),e("code",[t._v('size="sm"')]),t._v(" for additional sizes.\n            ")]),t._v(" "),e("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-5"}},[e("div",{staticClass:"card"},[e("kbd",{staticClass:"bg-dark"},[e("pre",{staticClass:"text-white",attrs:{id:"pagination-with-icon-size"}},[t._v("                    "),e("code",[t._v('\n<b-pagination value="1" :total-rows="50" size="lg" />\n<b-pagination value="1" :total-rows="50" />\n<b-pagination value="1" :total-rows="50" size="sm" />\n')])])])])]),t._v(" "),e("b-pagination",{attrs:{value:"1","total-rows":50,size:"lg"}}),t._v(" "),e("b-pagination",{attrs:{value:"1","total-rows":50}}),t._v(" "),e("b-pagination",{attrs:{value:"1","total-rows":50,size:"sm"}})]},proxy:!0}])}),t._v(" "),e("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("Alignment")])]},proxy:!0},{key:"headerAction",fn:function(){return[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-6",modifiers:{"collapse-6":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[e("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[e("p",[t._v("\n              By default the pagination component is left aligned. Change the alignment to\n              "),e("code",[t._v("center")]),t._v(",\n              "),e("code",[t._v("right")]),t._v(" (\n              "),e("code",[t._v("right")]),t._v(" is an alias for\n              "),e("code",[t._v("end")]),t._v("), or\n              "),e("code",[t._v("fill")]),t._v(" by setting the prop align to the appropriate value.\n            ")]),t._v(" "),e("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-6"}},[e("div",{staticClass:"card"},[e("kbd",{staticClass:"bg-dark"},[e("pre",{staticClass:"text-white",attrs:{id:"pagination-align"}},[t._v("                    "),e("code",[t._v('\n<div>\n  <h6>Left alignment (default)</h6>\n  <b-pagination :value="1" :total-rows="50" />\n</div>\n\n<div class="mt-3">\n  <h6 class="text-center">Center alignment</h6>\n  <b-pagination :value="1" :total-rows="50" align="center" />\n</div>\n\n<div class="mt-3">\n  <h6 class="text-right">Right (end) alignment</h6>\n  <b-pagination :value="1" :total-rows="50" align="right" />\n</div>\n\n<div class="mt-3">\n  <h6 class="text-center">Fill alignment</h6>\n  <b-pagination :value="1" :total-rows="50" align="fill" />\n</div>\n')])])])])]),t._v(" "),e("div",[e("h6",[t._v("Left alignment (default)")]),t._v(" "),e("b-pagination",{attrs:{value:1,"total-rows":50}})],1),t._v(" "),e("div",{staticClass:"mt-3"},[e("h6",{staticClass:"text-center"},[t._v("Center alignment")]),t._v(" "),e("b-pagination",{attrs:{value:1,"total-rows":50,align:"center"}})],1),t._v(" "),e("div",{staticClass:"mt-3"},[e("h6",{staticClass:"text-right"},[t._v("Right (end) alignment")]),t._v(" "),e("b-pagination",{attrs:{value:1,"total-rows":50,align:"right"}})],1),t._v(" "),e("div",{staticClass:"mt-3"},[e("h6",{staticClass:"text-center"},[t._v("Fill alignment")]),t._v(" "),e("b-pagination",{attrs:{value:1,"total-rows":50,align:"fill"}})],1)]},proxy:!0}])})],1)],1)],1)}),[],!1,null,null,null);a.default=o.exports}}]);
//# sourceMappingURL=93.js.map
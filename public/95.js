(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{1905:function(s,a,r){"use strict";r.r(a);var e=r(16),t={name:"UiProgressBars",mounted:function(){e.c.index()}},o=r(8),i=Object(o.a)(t,(function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{lg:"6",sm:"12"}},[r("iq-card",{scopedSlots:s._u([{key:"headerTitle",fn:function(){return[r("h4",{staticClass:"card-title"},[s._v("Examples")])]},proxy:!0},{key:"headerAction",fn:function(){return[r("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[r("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[r("p",[s._v("\n              Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don’t use\n              "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress"}},[s._v("\n                the HTML5\n                "),r("code",[s._v("<progress>")]),s._v(" element\n              ")]),s._v(", ensuring you can stack progress bars, animate them, and place text labels over them.\n            ")]),s._v(" "),r("ul",[r("li",[s._v("\n                We use the\n                "),r("code",[s._v(".progress")]),s._v(" as a wrapper to indicate the max value of the progress bar.\n              ")]),s._v(" "),r("li",[s._v("\n                We use the inner\n                "),r("code",[s._v(".progress-bar")]),s._v(" to indicate the progress so far.\n              ")]),s._v(" "),r("li",[s._v("\n                The\n                "),r("code",[s._v(".progress-bar")]),s._v(" requires an inline style, utility class, or custom CSS to set their width.\n              ")]),s._v(" "),r("li",[s._v("\n                The\n                "),r("code",[s._v(".progress-bar")]),s._v(" also requires some\n                "),r("code",[s._v("role")]),s._v(" and\n                "),r("code",[s._v("aria")]),s._v(" attributes to make it accessible.\n              ")])]),s._v(" "),r("p",[s._v("Put that all together, and you have the following examples.")]),s._v(" "),r("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-1"}},[r("div",{staticClass:"card"},[r("kbd",{staticClass:"bg-dark"},[r("pre",{staticClass:"text-white",attrs:{id:"examples-1"}},[s._v("                    "),r("code",[s._v('\n<b-progress :value="0" max="100" class="mb-3"></b-progress>\n<b-progress :value="25" max="100" class="mb-3"></b-progress>\n<b-progress :value="50" max="100" class="mb-3"></b-progress>\n<b-progress :value="75" max="100" class="mb-3"></b-progress>\n<b-progress :value="100" max="100" class="mb-3"></b-progress>\n')])])])])]),s._v(" "),r("b-progress",{staticClass:"mb-3",attrs:{value:0,max:"100"}}),s._v(" "),r("b-progress",{staticClass:"mb-3",attrs:{value:25,max:"100"}}),s._v(" "),r("b-progress",{staticClass:"mb-3",attrs:{value:50,max:"100"}}),s._v(" "),r("b-progress",{staticClass:"mb-3",attrs:{value:75,max:"100"}}),s._v(" "),r("b-progress",{attrs:{value:100,max:"100"}})]},proxy:!0}])}),s._v(" "),r("iq-card",{scopedSlots:s._u([{key:"headerTitle",fn:function(){return[r("h4",{staticClass:"card-title"},[s._v("Heights")])]},proxy:!0},{key:"headerAction",fn:function(){return[r("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-2",modifiers:{"collapse-2":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[r("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[r("p",[s._v("\n              We only set a\n              "),r("code",[s._v("height")]),s._v(" value on the\n              "),r("code",[s._v(".progress")]),s._v(", so if you change that value the inner\n              "),r("code",[s._v(".progress-bar")]),s._v(" will automatically resize accordingly.\n            ")]),s._v(" "),r("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-2"}},[r("div",{staticClass:"card"},[r("kbd",{staticClass:"bg-dark"},[r("pre",{staticClass:"text-white",attrs:{id:"heights-1"}},[s._v("                    "),r("code",[s._v('\n<b-progress :value="25" show-progress max="100" height="3px" class="mb-3"></b-progress>\n<b-progress :value="50" show-progress max="100" height="10px" class="mb-3"></b-progress>\n<b-progress :value="75" show-progress max="100" height="15px" class="mb-3"></b-progress>\n<b-progress :value="100" show-progress max="100" height="20px" ></b-progress>\n')])])])])]),s._v(" "),r("b-progress",{staticClass:"mb-3",attrs:{value:25,"show-progress":"",max:"100",height:"3px"}}),s._v(" "),r("b-progress",{staticClass:"mb-3",attrs:{value:50,"show-progress":"",max:"100",height:"10px"}}),s._v(" "),r("b-progress",{staticClass:"mb-3",attrs:{value:75,"show-progress":"",max:"100",height:"15px"}}),s._v(" "),r("b-progress",{attrs:{value:99,"show-progress":"",max:"100",height:"20px"}})]},proxy:!0}])}),s._v(" "),r("iq-card",{scopedSlots:s._u([{key:"headerTitle",fn:function(){return[r("h4",{staticClass:"card-title"},[s._v("Animated stripes")])]},proxy:!0},{key:"headerAction",fn:function(){return[r("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-3",modifiers:{"collapse-3":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[r("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[r("p",[s._v("\n              The striped gradient can also be animated. Add\n              "),r("code",[s._v(".progress-bar-animated")]),s._v(" to\n              "),r("code",[s._v(".progress-bar")]),s._v(" to animate the stripes right to left via CSS3 animations.\n            ")]),s._v(" "),r("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-3"}},[r("div",{staticClass:"card"},[r("kbd",{staticClass:"bg-dark"},[r("pre",{staticClass:"text-white",attrs:{id:"animated-stripe-1"}},[s._v("                    "),r("code",[s._v('\n<b-progress :value="75" animated max="100" class="mb-3"></b-progress>\n<b-progress :value="75" variant="success" animated max="100"></b-progress>\n')])])])])]),s._v(" "),r("b-progress",{staticClass:"mb-3",attrs:{value:75,animated:"",max:"100"}}),s._v(" "),r("b-progress",{attrs:{value:75,variant:"success",animated:"",max:"100"}})]},proxy:!0}])})],1),s._v(" "),r("b-col",{attrs:{lg:"6",sm:"12"}},[r("iq-card",{scopedSlots:s._u([{key:"headerTitle",fn:function(){return[r("h4",{staticClass:"card-title"},[s._v("Labels")])]},proxy:!0},{key:"headerAction",fn:function(){return[r("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-4",modifiers:{"collapse-4":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[r("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[r("p",[s._v("\n              Add labels to your progress bars by placing text within the\n              "),r("code",[s._v(".progress-bar")]),s._v(".\n            ")]),s._v(" "),r("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-4"}},[r("div",{staticClass:"card"},[r("kbd",{staticClass:"bg-dark"},[r("pre",{staticClass:"text-white",attrs:{id:"labels-1"}},[s._v("                    "),r("code",[s._v('\n<b-progress :value="25" show-progress max="100" class="mb-3"></b-progress>\n<b-progress :value="50" show-progress max="100" class="mb-3"></b-progress>\n<b-progress :value="75" show-progress max="100" class="mb-3"></b-progress>\n<b-progress :value="100" show-progress max="100"></b-progress>\n')])])])])]),s._v(" "),r("b-progress",{staticClass:"mb-3",attrs:{value:25,"show-progress":"",max:"100"}}),s._v(" "),r("b-progress",{staticClass:"mb-3",attrs:{value:50,"show-progress":"",max:"100"}}),s._v(" "),r("b-progress",{staticClass:"mb-3",attrs:{value:75,"show-progress":"",max:"100"}}),s._v(" "),r("b-progress",{attrs:{value:99,"show-progress":"",max:"100"}})]},proxy:!0}])}),s._v(" "),r("iq-card",{scopedSlots:s._u([{key:"headerTitle",fn:function(){return[r("h4",{staticClass:"card-title"},[s._v("Backgrounds")])]},proxy:!0},{key:"headerAction",fn:function(){return[r("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-5",modifiers:{"collapse-5":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[r("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[r("p",[s._v("Use background utility classes to change the appearance of individual progress bars.")]),s._v(" "),r("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-5"}},[r("div",{staticClass:"card"},[r("kbd",{staticClass:"bg-dark"},[r("pre",{staticClass:"text-white",attrs:{id:"backgrounds-1"}},[s._v("                    "),r("code",[s._v('\n<b-progress :value="25" variant="success" max="100" class="mb-3"></b-progress>\n<b-progress :value="50" variant="info" max="100" class="mb-3"></b-progress>\n<b-progress :value="75" variant="warning" max="100" class="mb-3"></b-progress>\n<b-progress :value="100" variant="danger" max="100"></b-progress>\n')])])])])]),s._v(" "),r("b-progress",{staticClass:"mb-3",attrs:{value:25,variant:"success",max:"100"}}),s._v(" "),r("b-progress",{staticClass:"mb-3",attrs:{value:50,variant:"info",max:"100"}}),s._v(" "),r("b-progress",{staticClass:"mb-3",attrs:{value:75,variant:"warning",max:"100"}}),s._v(" "),r("b-progress",{attrs:{value:100,variant:"danger",max:"100"}})]},proxy:!0}])}),s._v(" "),r("iq-card",{scopedSlots:s._u([{key:"headerTitle",fn:function(){return[r("h4",{staticClass:"card-title"},[s._v("Multiple bars")])]},proxy:!0},{key:"headerAction",fn:function(){return[r("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-6",modifiers:{"collapse-6":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[r("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[r("p",[s._v("Include multiple progress bars in a progress component if you need.")]),s._v(" "),r("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-6"}},[r("div",{staticClass:"card"},[r("kbd",{staticClass:"bg-dark"},[r("pre",{staticClass:"text-white",attrs:{id:"multiple-bars-1"}},[s._v("                    "),r("code",[s._v('\n<b-progress max="100">\n  <b-progress-bar variant="primary" :value="15"></b-progress-bar>\n  <b-progress-bar variant="success" :value="30"></b-progress-bar>\n  <b-progress-bar variant="info" :value="20"></b-progress-bar>\n</b-progress>\n')])])])])]),s._v(" "),r("b-progress",{attrs:{max:"100"}},[r("b-progress-bar",{attrs:{variant:"primary",value:15}}),s._v(" "),r("b-progress-bar",{attrs:{variant:"success",value:30}}),s._v(" "),r("b-progress-bar",{attrs:{variant:"info",value:20}})],1)]},proxy:!0}])}),s._v(" "),r("iq-card",{scopedSlots:s._u([{key:"headerTitle",fn:function(){return[r("h4",{staticClass:"card-title"},[s._v("Striped")])]},proxy:!0},{key:"headerAction",fn:function(){return[r("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-7",modifiers:{"collapse-7":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[r("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[r("p",[s._v("\n              Add\n              "),r("code",[s._v(".progress-bar-striped")]),s._v(" to any\n              "),r("code",[s._v(".progress-bar")]),s._v(" to apply a stripe via CSS gradient over the progress bar’s background color.\n            ")]),s._v(" "),r("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-7"}},[r("div",{staticClass:"card"},[r("kbd",{staticClass:"bg-dark"},[r("pre",{staticClass:"text-white",attrs:{id:"striped-1"}},[s._v("                    "),r("code",[s._v('\n<b-progress :value="10" striped max="100" class="mb-3"></b-progress>\n<b-progress :value="25" striped variant="success" max="100" class="mb-3"></b-progress>\n<b-progress :value="50" striped variant="info" max="100" class="mb-3"></b-progress>\n<b-progress :value="75" striped variant="warning" max="100" class="mb-3"></b-progress>\n<b-progress :value="100" striped variant="danger" max="100"></b-progress>\n')])])])])]),s._v(" "),r("b-progress",{staticClass:"mb-3",attrs:{value:10,striped:"",max:"100"}}),s._v(" "),r("b-progress",{staticClass:"mb-3",attrs:{value:25,striped:"",variant:"success",max:"100"}}),s._v(" "),r("b-progress",{staticClass:"mb-3",attrs:{value:50,striped:"",variant:"info",max:"100"}}),s._v(" "),r("b-progress",{staticClass:"mb-3",attrs:{value:75,striped:"",variant:"warning",max:"100"}}),s._v(" "),r("b-progress",{attrs:{value:100,striped:"",variant:"danger",max:"100"}})]},proxy:!0}])})],1)],1)],1)}),[],!1,null,null,null);a.default=i.exports}}]);
//# sourceMappingURL=95.js.map
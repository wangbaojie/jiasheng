(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{47:function(t,e,s){var a=s(54);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(44)(a,i);a.locals&&(t.exports=a.locals)},53:function(t,e,s){"use strict";var a=s(47);s.n(a).a},54:function(t,e,s){(t.exports=s(43)(!1)).push([t.i,"\n.hello {\n    font-size: 2em;\n    color: green;\n}\n",""])},59:function(t,e,s){"use strict";s.r(e);var a=s(45),i=s.n(a),o=s(46);function c(t,e,s,a,i,o,c){try{var n=t[o](c),r=n.value}catch(t){return void s(t)}n.done?e(r):Promise.resolve(r).then(a,i)}var n={components:s.n(o).a,computed:{getChooseCarBrand:function(){return""==this.chooseData.car_brand?"请选择汽车品牌":this.chooseData.car_brand}},mounted:function(){this.getBrand();var t=this.storage.get("choose");t&&(this.chooseData=t)},data:function(){return{chooseData:{brand_no:"",car_brand:"",series:"",color_no:"",color_name:""},loadingToast:!1,success:!1,err:!1,visible:!1,msg:"",brand:[{label:"请选择汽车品牌",value:"请选择汽车品牌"}]}},methods:{getBrand:function(){var t,e=this;return(t=i.a.mark((function t(){var s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=e,e.$axios({method:"get",url:"api/v1/group",params:{group:"car_brand"}}).then((function(t){t.data.data.forEach((function(t,e,a){var i={label:t.car_brand,value:t.car_brand};s.brand.push(i)}))})).catch((function(t){s.msg=t,s.err=!0,setInterval((function(){s.err=!1}),5e3)}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,s=arguments;return new Promise((function(a,i){var o=t.apply(e,s);function n(t){c(o,a,i,n,r,"next",t)}function r(t){c(o,a,i,n,r,"throw",t)}n(void 0)}))})()},setCarBrand:function(){var t=this;weui.picker(t.brand,{onChange:function(t){},onConfirm:function(e){"请选择汽车品牌"==e[0].label?t.chooseData.car_brand="":t.chooseData.car_brand=e[0].label},title:"请选择汽车品牌"})},tolist:function(){this.storage.set("choose",this.chooseData),this.$router.push({name:"list"})}}},r=(s(53),s(4)),l=Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page form_page js_show"},[s("div",{staticClass:"weui-form"},[t._m(0),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.success,expression:"success"}],attrs:{id:"toast"}},[s("div",{staticClass:"weui-mask_transparent"}),t._v(" "),s("div",{staticClass:"weui-toast"},[s("i",{staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),s("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.msg))])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.err,expression:"err"}]},[s("div",{staticClass:"weui-mask_transparent"}),t._v(" "),s("div",{staticClass:"weui-toast"},[s("i",{staticClass:"weui_icon_warn weui-icon_toast"}),t._v(" "),s("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.msg))])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.loadingToast,expression:"loadingToast"}]},[s("div",{staticClass:"weui-mask_transparent"}),t._v(" "),s("div",{staticClass:"weui-toast"},[s("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),s("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.msg))])])]),t._v(" "),s("div",{staticClass:"weui-form__control-area"},[s("div",{staticClass:"weui-cells__group weui-cells__group_form"},[s("div",{staticClass:"weui-cells weui-cells_form"},[s("div",{staticClass:"weui-cell weui-cell_active"},[t._m(1),t._v(" "),s("div",{staticClass:"weui-cell__bd"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.chooseData.brand_no,expression:"chooseData.brand_no"}],staticClass:"weui-input",attrs:{placeholder:"请输入品牌编号"},domProps:{value:t.chooseData.brand_no},on:{input:function(e){e.target.composing||t.$set(t.chooseData,"brand_no",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"weui-cell weui-cell_active weui-cell_access weui-cell_select weui-cell_select-after"},[t._m(2),t._v(" "),s("div",{staticClass:"weui-cell__bd",on:{click:t.setCarBrand}},[t._v(t._s(t.getChooseCarBrand))])]),t._v(" "),s("div",{staticClass:"weui-cell weui-cell_active"},[t._m(3),t._v(" "),s("div",{staticClass:"weui-cell__bd"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.chooseData.series,expression:"chooseData.series"}],staticClass:"weui-input",attrs:{placeholder:"请输入使用车型"},domProps:{value:t.chooseData.series},on:{input:function(e){e.target.composing||t.$set(t.chooseData,"series",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"weui-cell weui-cell_active"},[t._m(4),t._v(" "),s("div",{staticClass:"weui-cell__bd"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.chooseData.color_no,expression:"chooseData.color_no"}],staticClass:"weui-input",attrs:{placeholder:"请输入原厂色号"},domProps:{value:t.chooseData.color_no},on:{input:function(e){e.target.composing||t.$set(t.chooseData,"color_no",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"weui-cell weui-cell_active"},[t._m(5),t._v(" "),s("div",{staticClass:"weui-cell__bd"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.chooseData.color_name,expression:"chooseData.color_name"}],staticClass:"weui-input",attrs:{id:"js_input",placeholder:"颜色名称"},domProps:{value:t.chooseData.color_name},on:{input:function(e){e.target.composing||t.$set(t.chooseData,"color_name",e.target.value)}}})])])])])]),t._v(" "),s("div",{staticClass:"weui-form__opr-area"},[s("a",{staticClass:"weui-btn weui-btn_primary",on:{click:t.tolist}},[t._v("\n                    查询配方\n                ")])]),t._v(" "),t._m(6)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-form__text-area"},[e("h2",{staticClass:"weui-form__title"},[this._v("精准配色系统")]),this._v(" "),e("div",{staticClass:"weui-form__desc"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-cell__hd"},[e("label",{staticClass:"weui-label"},[this._v("品牌编号")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-cell__hd"},[e("label",{staticClass:"weui-label"},[this._v("汽车品牌")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-cell__hd"},[e("label",{staticClass:"weui-label"},[this._v("适用车型")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-cell__hd"},[e("label",{staticClass:"weui-label"},[this._v("原厂色号")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-cell__hd"},[e("label",{staticClass:"weui-label"},[this._v("颜色名称")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-form__opr-area"},[e("div",{staticClass:"weui-footer"},[e("p",{staticClass:"weui-footer__links"},[e("a",{staticClass:"weui-footer__link",attrs:{href:"javascript:"}},[this._v("广州嘉盛环保高新材料股份有限公司")])]),this._v(" "),e("p",{staticClass:"weui-footer__text"},[this._v("Copyright © 2008-2019 4nd.cn")])])])}],!1,null,null,null);e.default=l.exports}}]);
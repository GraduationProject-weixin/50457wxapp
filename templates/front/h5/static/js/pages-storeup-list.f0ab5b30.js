(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-storeup-list"],{1794:function(e,t,n){"use strict";n.r(t);var r=n("48f2"),i=n("1d83");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("60c4");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"0b8871e8",null,!1,r["a"],o);t["default"]=c.exports},"1d83":function(e,t,n){"use strict";n.r(t);var r=n("418f"),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},"418f":function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c5f6"),n("55dd"),n("96cf");var i=r(n("3b8d")),a={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"名称"}],queryIndex:0,list:[],lists:[],userid:"",mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},CustomBar:"0"}},computed:{baseUrl:function(){return this.$base.url}},onShow:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onLoad:function(e){e.userid?this.userid=e.userid:this.userid="",this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{priceChange:function(e){return Number(e).toFixed(2)},preHttp:function(e){return e&&"http"==e.substr(0,4)},queryChange:function(e){this.queryIndex=e.detail.value,this.searchForm.name=""},mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var n,r,i,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n={page:t.num,limit:t.size},this.searchForm.name&&(n["name"]="%"+this.searchForm.name+"%"),n["type"]="1",r={},!this.userid){e.next=10;break}return e.next=7,this.$api.page("storeup",n);case 7:r=e.sent,e.next=13;break;case 10:return e.next=12,this.$api.list("storeup",n);case 12:r=e.sent;case 13:for(1==t.num&&(this.list=[]),this.list=this.list.concat(r.data.list),i=Math.ceil(this.list.length/6),a=[],o=0;o<i;o++)a[o]=this.list.slice(6*o,6*(o+1));this.lists=a,0==r.data.list.length&&(this.hasNext=!1),t.endSuccess(t.size,this.hasNext);case 21:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onDetailTap:function(e){this.$utils.jump("../".concat(e.tablename,"/detail?id=").concat(e.refid))},onUpdateTap:function(e){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update?id=".concat(e))},onAddTap:function(){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update")},onDeleteTap:function(e){var t=this;uni.showModal({title:"提示",content:"是否确认删除",success:function(){var n=(0,i.default)(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!r.confirm){n.next=5;break}return n.next=3,t.$api.del("storeup",JSON.stringify([e]));case 3:t.hasNext=!0,t.mescroll.resetUpScroll();case 5:case"end":return n.stop()}}),n)})));function r(e){return n.apply(this,arguments)}return r}()})},search:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var t,n,r,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.mescroll.num=1,t={page:this.mescroll.num,limit:this.mescroll.size},this.searchForm.name&&(t["name"]="%"+this.searchForm.name+"%"),t["type"]="1",n={},!this.userid){e.next=11;break}return e.next=8,this.$api.page("storeup",t);case 8:n=e.sent,e.next=14;break;case 11:return e.next=13,this.$api.list("storeup",t);case 13:n=e.sent;case 14:for(1==this.mescroll.num&&(this.list=[]),this.list=this.list.concat(n.data.list),r=Math.ceil(this.list.length/6),i=[],a=0;a<r;a++)i[a]=this.list.slice(6*a,6*(a+1));this.lists=i,0==n.data.list.length&&(this.hasNext=!1),this.mescroll.endSuccess(this.mescroll.size,this.hasNext);case 22:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};t.default=a},"48f2":function(e,t,n){"use strict";var r={"mescroll-uni":n("f05e").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mescroll-uni",{attrs:{up:e.upOption,down:e.downOption},on:{init:function(t){arguments[0]=t=e.$handleEvent(t),e.mescrollInit.apply(void 0,arguments)},down:function(t){arguments[0]=t=e.$handleEvent(t),e.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=e.$handleEvent(t),e.upCallback.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{style:{padding:"40rpx 0",borderColor:"#21d5ae",alignItems:"flex-start",display:"block",justifyContent:"space-between",minHeight:"100vh",flexWrap:"wrap",background:"url() fixed,#fff",borderWidth:"0px 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[n("v-uni-view",{staticClass:"cu-bar bg-white search",staticStyle:{width:"100%"},style:[{top:e.CustomBar+"px"}]},[e.queryList.length>1?n("v-uni-picker",{staticStyle:{"padding-left":"20upx"},attrs:{mode:"selector",range:e.queryList,"range-key":"queryName",value:e.queryIndex},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.queryChange.apply(void 0,arguments)}}},[n("v-uni-view",[n("v-uni-image",{staticStyle:{width:"20upx",height:"33upx"},attrs:{src:"../../static/center/to.png"}})],1)],1):e._e(),0==e.queryIndex?n("v-uni-view",{staticClass:"search-form round"},[n("v-uni-text",{staticClass:"cuIcon-search"}),n("v-uni-input",{attrs:{type:"text",placeholder:"名称"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1):e._e(),n("v-uni-view",{staticClass:"action"},[n("v-uni-button",{staticClass:"cu-btn shadow-blur round",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("搜索")])],1)],1),n("v-uni-view",{style:{width:"100%",alignItems:"flex-start",flexWrap:"wrap",background:"none",display:"flex",height:"auto"}},[n("v-uni-view",{staticClass:"uni-product-list",style:{padding:"0px 24rpx 24rpx",margin:"24rpx 0 0",flexWrap:"wrap",background:"none",flex:"1",display:"flex",width:"calc(100% - 220rpx)",justifyContent:"space-between",height:"auto"}},e._l(e.list,(function(t,r){return n("v-uni-view",{key:r,staticClass:"uni-product",style:{padding:"20rpx",boxShadow:"inset 0px 0px 112rpx 0px #ecf2f9,0px 12rpx 18rpx -12rpx #ccc",margin:"0 0 32rpx",borderColor:"#f0d9da #c8d9eb #f0d9da",display:"flex",borderRadius:"40rpx",flexWrap:"wrap",borderWidth:"2rpx",background:"#fff",width:"100%",position:"relative",borderStyle:"solid",height:"auto"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.onDetailTap(t)}}},[n("v-uni-view",{staticClass:"uni-product-title ",style:{padding:"4rpx 20rpx",margin:"0 0 8rpx",whiteSpace:"nowrap",color:"#333",textAlign:"center",overflow:"hidden",borderRadius:"20%",background:"none",width:"96%",lineHeight:"48rpx",fontSize:"28rpx",textOverflow:"ellipsis",order:"2"}},[e._v(e._s(t.name))]),n("v-uni-image",{staticClass:"uni-product-image",style:{padding:"0",margin:"8rpx auto 8rpx",objectFit:"cover",borderRadius:"20rpx",display:"block",width:"100%",height:"240rpx",order:"1"},attrs:{mode:"aspectFill",src:e.baseUrl+t.picture}})],1)})),1)],1)],1),e.userid&&e.isAuth("storeup","新增")?n("v-uni-button",{staticClass:"add-btn",style:{border:"2rpx solid #fff",boxShadow:"0 4rpx 8rpx rgba(0,0,0,.1)",color:"#333",bottom:"120rpx",right:"128rpx",outline:"none",borderRadius:"100%",background:"#f8deea",width:"88rpx",lineHeight:"88rpx",fontSize:"28rpx",position:"fixed",height:"88rpx",zIndex:"9999"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onAddTap()}}},[e._v("新增")]):e._e(),!e.userid&&e.isAuthFront("storeup","新增")?n("v-uni-button",{staticClass:"add-btn",style:{border:"2rpx solid #fff",boxShadow:"0 4rpx 8rpx rgba(0,0,0,.1)",color:"#333",bottom:"120rpx",right:"128rpx",outline:"none",borderRadius:"100%",background:"#f8deea",width:"88rpx",lineHeight:"88rpx",fontSize:"28rpx",position:"fixed",height:"88rpx",zIndex:"9999"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onAddTap()}}},[e._v("新增")]):e._e()],1)],1)},a=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}))},"601e":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-0b8871e8]{min-height:calc(100vh - 44px);box-sizing:border-box}.category-one .tab[data-v-0b8871e8]{cursor:pointer;padding:0 %?20?% %?24?%;margin:0 %?8?%;color:#333;display:inline-block;font-size:%?28?%;border-color:#069ffa;line-height:%?160?%;border-radius:0;background:url(http://codegen.caihongy.cn/20221220/f084fc07fcb643b8b92acdba4752de67.png) no-repeat 0 0,url(http://codegen.caihongy.cn/20221220/1e7abd511d1147b8afeb6858d54a7aef.png) no-repeat 100% 0,url(http://codegen.caihongy.cn/20221220/d9457110e9a34ee49c5994b567d884a9.png) repeat-x;width:auto;border-width:0;border-style:solid;text-align:center;min-width:%?126?%;height:%?122?%}.category-one .tab.active[data-v-0b8871e8]{cursor:pointer;padding:0 %?20?%;margin:0 %?8?%;color:#333;font-weight:600;display:inline-block;font-size:%?28?%;border-color:#069ffa;line-height:%?160?%;border-radius:0;background:url(http://codegen.caihongy.cn/20221220/f084fc07fcb643b8b92acdba4752de67.png) no-repeat 0 0,url(http://codegen.caihongy.cn/20221220/1e7abd511d1147b8afeb6858d54a7aef.png) no-repeat 100% 0,url(http://codegen.caihongy.cn/20221220/d9457110e9a34ee49c5994b567d884a9.png) repeat-x;width:auto;border-width:0 0 0;border-style:solid;text-align:center;min-width:%?126?%;height:%?122?%}.category-two .tab[data-v-0b8871e8]{cursor:pointer;padding:0;margin:0 0 %?20?%;color:#555;display:inline-block;font-size:%?28?%;border-color:#eee #ddd #ccc;line-height:%?88?%;border-radius:0;background:none;width:100%;border-width:%?6?% 0 %?8?%;border-style:solid;text-align:center;height:%?104?%}.category-two .tab.active[data-v-0b8871e8]{cursor:pointer;padding:0;margin:0 0 %?20?%;color:#333;font-weight:600;display:inline-block;font-size:%?28?%;border-color:#fde9f2 #ddd #f8dbe8;line-height:%?88?%;border-radius:0;background:-webkit-linear-gradient(top,#fff,#fff8fb 50%);background:linear-gradient(180deg,#fff,#fff8fb 50%);width:100%;border-width:%?6?% 0 %?8?%;border-style:solid;text-align:center;height:%?104?%}.category-three .tab[data-v-0b8871e8]{cursor:pointer;padding:0;color:#fff;background:#deb887;display:inline-block;width:100%;font-size:%?28?%;line-height:%?80?%;text-align:center}.category-three .tab.active[data-v-0b8871e8]{cursor:pointer;padding:0;color:#fff;background:#000;display:inline-block;width:100%;font-size:%?28?%;line-height:%?80?%;text-align:center}',""]),e.exports=t},"60c4":function(e,t,n){"use strict";var r=n("f901"),i=n.n(r);i.a},f901:function(e,t,n){var r=n("601e");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("0e505c3c",r,!0,{sourceMap:!1,shadowMode:!1})}}]);
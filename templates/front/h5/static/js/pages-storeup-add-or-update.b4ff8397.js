(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-storeup-add-or-update"],{"144f":function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("a481"),r("c5f6"),r("f559"),r("ac6a"),r("28a5"),r("96cf");var i=n(r("3b8d")),a=n(r("e2b1")),o=n(r("064f")),s={data:function(){return{cross:"",ruleForm:{userid:"",refid:"",tablename:"",name:"",picture:"",type:"",inteltype:"",remark:""},user:{},ro:{userid:!1,refid:!1,tablename:!1,name:!1,picture:!1,type:!1,inteltype:!1,remark:!1}}},components:{wPicker:a.default,xiaEditor:o.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var r,n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(n=e.sent,this.user=n.data,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=13;break}return this.ruleForm.id=t.id,e.next=11,this.$api.info("storeup",this.ruleForm.id);case 11:n=e.sent,this.ruleForm=n.data;case 13:if(this.cross=t.cross,!t.cross){e.next=53;break}i=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(i);case 17:if((e.t1=e.t0()).done){e.next=53;break}if(a=e.t1.value,"userid"!=a){e.next=23;break}return this.ruleForm.userid=i[a],this.ro.userid=!0,e.abrupt("continue",17);case 23:if("refid"!=a){e.next=27;break}return this.ruleForm.refid=i[a],this.ro.refid=!0,e.abrupt("continue",17);case 27:if("tablename"!=a){e.next=31;break}return this.ruleForm.tablename=i[a],this.ro.tablename=!0,e.abrupt("continue",17);case 31:if("name"!=a){e.next=35;break}return this.ruleForm.name=i[a],this.ro.name=!0,e.abrupt("continue",17);case 35:if("picture"!=a){e.next=39;break}return this.ruleForm.picture=i[a].split(",")[0],this.ro.picture=!0,e.abrupt("continue",17);case 39:if("type"!=a){e.next=43;break}return this.ruleForm.type=i[a],this.ro.type=!0,e.abrupt("continue",17);case 43:if("inteltype"!=a){e.next=47;break}return this.ruleForm.inteltype=i[a],this.ro.inteltype=!0,e.abrupt("continue",17);case 47:if("remark"!=a){e.next=51;break}return this.ruleForm.remark=i[a],this.ro.remark=!0,e.abrupt("continue",17);case 51:e.next=17;break;case 53:this.styleChange();case 54:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},pictureTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.picture="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var t,r,n,i,a,o,s,p,u,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.userid){e.next=3;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 3:if(this.ruleForm.name){e.next=6;break}return this.$utils.msg("名称不能为空"),e.abrupt("return");case 6:if(this.ruleForm.picture){e.next=9;break}return this.$utils.msg("图片不能为空"),e.abrupt("return");case 9:if(!this.cross){e.next=25;break}if(a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=25;break}if(t||(t=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=21;break}for(s in t)s==a&&(t[s]=o);return p=uni.getStorageSync("crossTable"),e.next=19,this.$api.update("".concat(p),t);case 19:e.next=25;break;case 21:r=Number(uni.getStorageSync("userid")),n=t["id"],i=uni.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 25:if(!n||!r){e.next=47;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=n,u={page:1,limit:10,crossuserid:r,crossrefid:n},e.next=31,this.$api.list("storeup",u);case 31:if(d=e.sent,!(d.data.total>=i)){e.next=37;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 37:if(!this.ruleForm.id){e.next=42;break}return e.next=40,this.$api.update("storeup",this.ruleForm);case 40:e.next=44;break;case 42:return e.next=44,this.$api.add("storeup",this.ruleForm);case 44:this.$utils.msgBack("提交成功");case 45:e.next=55;break;case 47:if(!this.ruleForm.id){e.next=52;break}return e.next=50,this.$api.update("storeup",this.ruleForm);case 50:e.next=54;break;case 52:return e.next=54,this.$api.add("storeup",this.ruleForm);case 54:this.$utils.msgBack("提交成功");case 55:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,i=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,i=i>9?i:"0"+i,"".concat(r,"-").concat(n,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s},"4e9b":function(e,t,r){var n=r("ab99");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("4f06").default;i("f2e9b802",n,!0,{sourceMap:!1,shadowMode:!1})},"89e6":function(e,t,r){"use strict";var n=r("4e9b"),i=r.n(n);i.a},ab99:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-77504eb2]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},c3d0:function(e,t,r){"use strict";r.r(t);var n=r("144f"),i=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},d26a:function(e,t,r){"use strict";r.r(t);var n=r("fbe2"),i=r("c3d0");for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("89e6");var o,s=r("f0c5"),p=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"77504eb2",null,!1,n["a"],o);t["default"]=p.exports},fbe2:function(e,t,r){"use strict";var n,i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{style:{minHeight:"100vh",padding:"0px 0 80rpx",borderColor:"#21d5ae",background:"url(http://codegen.caihongy.cn/20230308/302fb617e4e6405384ecd086ab1d7ea4.png) no-repeat right top / 50% auto,#fff",borderWidth:"0px 0 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[r("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"60rpx 40rpx",background:"none",height:"auto"}},[r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#fbecf3",borderRadius:"0px",borderWidth:"2rpx 0",background:"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"32rpx",color:"#333",textAlign:"right",fontWeight:"600"}},[e._v("表名")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.tablename,placeholder:"表名"},model:{value:e.ruleForm.tablename,callback:function(t){e.$set(e.ruleForm,"tablename",t)},expression:"ruleForm.tablename"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#fbecf3",borderRadius:"0px",borderWidth:"2rpx 0",background:"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"32rpx",color:"#333",textAlign:"right",fontWeight:"600"}},[e._v("名称")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.name,placeholder:"名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#fbecf3",borderRadius:"0px",borderWidth:"2rpx 0",background:"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pictureTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"32rpx",color:"#333",textAlign:"right",fontWeight:"600"}},[e._v("图片")]),e.ruleForm.picture?r("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:e.baseUrl+e.ruleForm.picture.split(",")[0],mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#fbecf3",borderRadius:"0px",borderWidth:"2rpx 0",background:"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"32rpx",color:"#333",textAlign:"right",fontWeight:"600"}},[e._v("类型(1:收藏,21:赞,22:踩,31:竞拍参与,41:关注)")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.type,placeholder:"类型(1:收藏,21:赞,22:踩,31:竞拍参与,41:关注)"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#fbecf3",borderRadius:"0px",borderWidth:"2rpx 0",background:"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"32rpx",color:"#333",textAlign:"right",fontWeight:"600"}},[e._v("推荐类型")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.inteltype,placeholder:"推荐类型"},model:{value:e.ruleForm.inteltype,callback:function(t){e.$set(e.ruleForm,"inteltype",t)},expression:"ruleForm.inteltype"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#fbecf3",borderRadius:"0px",borderWidth:"2rpx 0",background:"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"32rpx",color:"#333",textAlign:"right",fontWeight:"600"}},[e._v("备注")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.remark,placeholder:"备注"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1),r("v-uni-view",{staticClass:"btn",style:{padding:"0px",margin:"40rpx 0 0 0",background:"none",display:"flex",width:"100%",justifyContent:"center",height:"auto"}},[r("v-uni-button",{staticClass:"bg-red",style:{padding:"0 40rpx",boxShadow:"0px 12rpx 12rpx -6rpx #ccc",margin:"0 40rpx 0 0",borderColor:"#ffe8f1",color:"#333",display:"inline",minWidth:"240rpx",borderRadius:"8rpx",background:"linear-gradient(200deg, rgba(255,255,255,1) 0%, rgba(242,212,224,1) 100%),#f2d4e0",borderWidth:"2rpx",width:"auto",lineHeight:"88rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},a=[];r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return n}))}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-discussminzuwenhua-add-or-update"],{"278e":function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("c5f6"),r("f559"),r("a481"),r("3b2b"),r("ac6a"),r("28a5"),r("96cf");var i=n(r("3b8d")),a=n(r("e2b1")),s=n(r("064f")),u={data:function(){return{cross:"",ruleForm:{refid:"",userid:"",avatarurl:"",nickname:"",content:"",reply:""},user:{},ro:{refid:!1,userid:!1,avatarurl:!1,nickname:!1,content:!1,reply:!1}}},components:{wPicker:a.default,xiaEditor:s.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var r,n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(n=e.sent,this.user=n.data,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=13;break}return this.ruleForm.id=t.id,e.next=11,this.$api.info("discussminzuwenhua",this.ruleForm.id);case 11:n=e.sent,this.ruleForm=n.data;case 13:if(this.cross=t.cross,!t.cross){e.next=45;break}i=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(i);case 17:if((e.t1=e.t0()).done){e.next=45;break}if(a=e.t1.value,"refid"!=a){e.next=23;break}return this.ruleForm.refid=i[a],this.ro.refid=!0,e.abrupt("continue",17);case 23:if("userid"!=a){e.next=27;break}return this.ruleForm.userid=i[a],this.ro.userid=!0,e.abrupt("continue",17);case 27:if("avatarurl"!=a){e.next=31;break}return this.ruleForm.avatarurl=i[a].split(",")[0],this.ro.avatarurl=!0,e.abrupt("continue",17);case 31:if("nickname"!=a){e.next=35;break}return this.ruleForm.nickname=i[a],this.ro.nickname=!0,e.abrupt("continue",17);case 35:if("content"!=a){e.next=39;break}return this.ruleForm.content=i[a],this.ro.content=!0,e.abrupt("continue",17);case 39:if("reply"!=a){e.next=43;break}return this.ruleForm.reply=i[a],this.ro.reply=!0,e.abrupt("continue",17);case 43:e.next=17;break;case 45:this.styleChange();case 46:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},avatarurlTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.avatarurl="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var t,r,n,i,a,s,u,o,c,d,l,p,h,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(this.ruleForm.avatarurl=uni.getStorageSync("headportrait")?uni.getStorageSync("headportrait"):"",t="",r=[],t&&(r=t.split(",")),n=0;n<r.length;n++)i=new RegExp(r[n],"g"),this.ruleForm.content.indexOf(r[n])>-1&&(this.ruleForm.content=this.ruleForm.content.replace(i,"**"));if(this.ruleForm.refid){e.next=8;break}return this.$utils.msg("关联表id不能为空"),e.abrupt("return");case 8:if(this.ruleForm.userid){e.next=11;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 11:if(this.ruleForm.content){e.next=14;break}return this.$utils.msg("评论内容不能为空"),e.abrupt("return");case 14:if(!this.cross){e.next=30;break}if(c=uni.getStorageSync("statusColumnName"),d=uni.getStorageSync("statusColumnValue"),""==c){e.next=30;break}if(a||(a=uni.getStorageSync("crossObj")),c.startsWith("[")){e.next=26;break}for(l in a)l==c&&(a[l]=d);return p=uni.getStorageSync("crossTable"),e.next=24,this.$api.update("".concat(p),a);case 24:e.next=30;break;case 26:s=Number(uni.getStorageSync("userid")),u=a["id"],o=uni.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 30:if(!u||!s){e.next=53;break}return this.ruleForm.crossuserid=s,this.ruleForm.crossrefid=u,h={page:1,limit:10,crossuserid:s,crossrefid:u},e.next=36,this.$api.list("discussminzuwenhua",h);case 36:if(f=e.sent,!(f.data.total>=o)){e.next=42;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 42:if(!this.ruleForm.id){e.next=47;break}return e.next=45,this.$api.update("discussminzuwenhua",this.ruleForm);case 45:e.next=49;break;case 47:return e.next=49,this.$api.add("discussminzuwenhua",this.ruleForm);case 49:uni.setStorageSync("discussminzuwenhuaCleanType",!0),this.$utils.msgBack("提交成功");case 51:e.next=62;break;case 53:if(!this.ruleForm.id){e.next=58;break}return e.next=56,this.$api.update("discussminzuwenhua",this.ruleForm);case 56:e.next=60;break;case 58:return e.next=60,this.$api.add("discussminzuwenhua",this.ruleForm);case 60:uni.setStorageSync("discussminzuwenhuaCleanType",!0),this.$utils.msgBack("提交成功");case 62:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,i=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,i=i>9?i:"0"+i,"".concat(r,"-").concat(n,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=u},3484:function(e,t,r){"use strict";r.r(t);var n=r("278e"),i=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},4726:function(e,t,r){var n=r("c8d5");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("4f06").default;i("8b555740",n,!0,{sourceMap:!1,shadowMode:!1})},"9fdf":function(e,t,r){"use strict";var n=r("4726"),i=r.n(n);i.a},c8d5:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-5fd34f08]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},e019:function(e,t,r){"use strict";var n,i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{style:{minHeight:"100vh",padding:"0px 0 80rpx",borderColor:"#21d5ae",background:"url(http://codegen.caihongy.cn/20230308/302fb617e4e6405384ecd086ab1d7ea4.png) no-repeat right top / 50% auto,#fff",borderWidth:"0px 0 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[r("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"60rpx 40rpx",background:"none",height:"auto"}},[r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#fbecf3",borderRadius:"0px",borderWidth:"2rpx 0",background:"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"32rpx",color:"#333",textAlign:"right",fontWeight:"600"}},[e._v("评论内容")]),r("v-uni-textarea",{style:{border:"0",minHeight:"240rpx",padding:"40rpx 40rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"none",fontSize:"28rpx"},attrs:{placeholder:"评论内容"},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),r("v-uni-view",{staticClass:"btn",style:{padding:"0px",margin:"40rpx 0 0 0",background:"none",display:"flex",width:"100%",justifyContent:"center",height:"auto"}},[r("v-uni-button",{staticClass:"bg-red",style:{padding:"0 40rpx",boxShadow:"0px 12rpx 12rpx -6rpx #ccc",margin:"0 40rpx 0 0",borderColor:"#ffe8f1",color:"#333",display:"inline",minWidth:"240rpx",borderRadius:"8rpx",background:"linear-gradient(200deg, rgba(255,255,255,1) 0%, rgba(242,212,224,1) 100%),#f2d4e0",borderWidth:"2rpx",width:"auto",lineHeight:"88rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},a=[];r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return n}))},f7e5:function(e,t,r){"use strict";r.r(t);var n=r("e019"),i=r("3484");for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("9fdf");var s,u=r("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"5fd34f08",null,!1,n["a"],s);t["default"]=o.exports}}]);
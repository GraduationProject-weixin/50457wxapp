(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-minjiangushi-detail"],{"31dd":function(e,t,i){"use strict";var r=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("a481"),i("28a5"),i("f559"),i("55dd"),i("96cf");var n=r(i("3b8d")),a={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},storeupFlag:0,thumbsupFlag:0,crazilyFlag:0,count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.id=t.id,t.userid&&(this.userid=t.userid);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onUnload:function(){null!=this.timer&&clearInterval(this.timer)},onShow:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.init(),i=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(i);case 4:r=e.sent,this.user=r.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.getStoreup(),this.getThumbsup(),n=uni.getStorageSync("discussminjiangushiCleanType"),n&&(uni.removeStorageSync("discussminjiangushiCleanType"),this.mescroll.num=1,this.upCallback(this.mescroll));case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),destroyed:function(){},methods:{onPayTap:function(){uni.setStorageSync("paytable","minjiangushi"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(e){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(e.id,"&userid=")+this.userid)},getStoreup:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={page:1,limit:1,refid:this.id,tablename:"minjiangushi",userid:this.user.id,type:1},e.next=3,this.$api.list("storeup",t);case 3:i=e.sent,this.storeupFlag=i.data.list.length;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),shoucang:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,i={page:1,limit:1,refid:t.detail.id,tablename:"minjiangushi",userid:t.user.id,type:1},e.next=4,t.$api.list("storeup",i);case 4:if(r=e.sent,1!=r.data.list.length){e.next=9;break}return a=r.data.list[0].id,uni.showModal({title:"提示",content:"是否取消",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=5;break}return e.next=3,t.$api.del("storeup",JSON.stringify([a]));case 3:t.$utils.msg("取消成功"),t.getStoreup();case 5:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()}),e.abrupt("return");case 9:uni.showModal({title:"提示",content:"是否收藏",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=5;break}return e.next=3,t.$api.add("storeup",{userid:t.user.id,name:t.detail.gushimingcheng,inteltype:t.detail.gushileixing,picture:t.swiperList[0],refid:t.detail.id,tablename:"minjiangushi",type:1});case 3:t.$utils.msg("收藏成功"),t.getStoreup();case 5:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()});case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onAcrossTap:function(e,t,i,r,n){if(uni.setStorageSync("crossTable","minjiangushi"),uni.setStorageSync("crossObj",this.detail),uni.setStorageSync("statusColumnName",i),uni.setStorageSync("statusColumnValue",n),uni.setStorageSync("tips",r),""!=i&&!i.startsWith("[")){var a=uni.getStorageSync("crossObj");for(var o in a)if(o==i&&a[o]==n)return void this.$utils.msg(r)}this.$utils.jump("../".concat(e,"/add-or-update?cross=true"))},init:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.info("minjiangushi",this.id);case 2:t=e.sent,this.detail=t.data,this.swiperList=this.detail.tupian?this.detail.tupian.split(","):[],this.detail.gushixiangqing=this.detail.gushixiangqing.replace(/img src/gi,'img style="width:100%;" src');case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.list("discussminjiangushi",{page:t.num,limit:10,refid:this.id});case 2:i=e.sent,1==t.num&&(this.commentList=[]),this.commentList=this.commentList.concat(i.data.list),0==i.data.list.length&&(this.hasNext=!1),t.endSuccess(t.size,this.hasNext);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var t=this;e=t.$base.url+e,uni.downloadFile({url:e,success:function(i){200===i.statusCode&&(t.$utils.msg("下载成功"),window.open(e))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$utils.jump("../discussminjiangushi/add-or-update?refid=".concat(this.id));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getThumbsup:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={page:1,limit:1,refid:this.id,tablename:"minjiangushi",userid:this.user.id,type:"%2%"},e.next=3,this.$api.list("storeup",t);case 3:i=e.sent,i.data.list.length>0&&("21"==i.data.list[0].type?this.thumbsupFlag=1:this.crazilyFlag=1);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),zan:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,i={page:1,limit:1,refid:t.detail.id,tablename:"minjiangushi",userid:t.user.id,type:"%2%"},e.next=4,t.$api.list("storeup",i);case 4:if(r=e.sent,!(r.data.list.length>0)){e.next=9;break}return a=r.data.list[0].id,uni.showModal({title:"提示",content:"是否取消点赞",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=8;break}return e.next=3,t.$api.del("storeup",JSON.stringify([a]));case 3:return t.detail.thumbsupnum=parseInt(t.detail.thumbsupnum)-1,e.next=6,t.$api.update("minjiangushi",t.detail);case 6:t.$utils.msg("取消成功"),t.thumbsupFlag=0;case 8:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()}),e.abrupt("return");case 9:uni.showModal({title:"提示",content:"是否点赞",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=8;break}return e.next=3,t.$api.add("storeup",{userid:t.user.id,name:t.detail.gushimingcheng,picture:t.swiperList[0],refid:t.detail.id,tablename:"minjiangushi",type:"21"});case 3:return t.detail.thumbsupnum=parseInt(t.detail.thumbsupnum)+1,e.next=6,t.$api.update("minjiangushi",t.detail);case 6:t.$utils.msg("点赞成功"),t.thumbsupFlag=1;case 8:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()});case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cai:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,i={page:1,limit:1,refid:t.detail.id,tablename:"minjiangushi",userid:t.user.id,type:"%2%"},e.next=4,t.$api.list("storeup",i);case 4:if(r=e.sent,!(r.data.list.length>0)){e.next=9;break}return a=r.data.list[0].id,uni.showModal({title:"提示",content:"是否取消点踩",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=8;break}return e.next=3,t.$api.del("storeup",JSON.stringify([a]));case 3:return t.detail.crazilynum=parseInt(t.detail.crazilynum)-1,e.next=6,t.$api.update("minjiangushi",t.detail);case 6:t.$utils.msg("取消成功"),t.crazilyFlag=0;case 8:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()}),e.abrupt("return");case 9:uni.showModal({title:"提示",content:"是否点踩",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=8;break}return e.next=3,t.$api.add("storeup",{userid:t.user.id,name:t.detail.gushimingcheng,picture:t.swiperList[0],refid:t.detail.id,tablename:"minjiangushi",type:"22"});case 3:return t.detail.crazilynum=parseInt(t.detail.crazilynum)+1,e.next=6,t.$api.update("minjiangushi",t.detail);case 6:t.$utils.msg("点踩成功"),t.crazilyFlag=1;case 8:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()});case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onSHTap:function(){this.$refs.popup.open()}}};t.default=a},"52c7":function(e,t,i){"use strict";var r={"mescroll-uni":i("f05e").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("mescroll-uni",{attrs:{up:e.upOption,down:e.downOption},on:{init:function(t){arguments[0]=t=e.$handleEvent(t),e.mescrollInit.apply(void 0,arguments)},down:function(t){arguments[0]=t=e.$handleEvent(t),e.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=e.$handleEvent(t),e.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"container",style:{minHeight:"100vh",width:"100%",padding:"20rpx 0 132rpx",position:"relative",background:"#fff",height:"auto"}},[i("v-uni-swiper",{staticClass:"swiper",style:{border:"0px dotted #f7de91",boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"40rpx 20rpx ",margin:"0px auto",borderColor:"#fb9a40",borderRadius:"20rpx",background:"url(http://codegen.caihongy.cn/20230307/57d76d86e78e4acc91caf16541d4d40b.png) no-repeat left top / 100% 100%,#fff",borderWidth:"0 0 0px",width:"calc(100% - 40rpx)",borderStyle:"solid",height:"560rpx"},attrs:{"indicator-dots":!0,autoplay:!0,circular:!0,"indicator-active-color":"#c00","indicator-color":"rgba(0, 0, 0, .3)",duration:500,interval:5e3,vertical:!1}},e._l(e.swiperList,(function(t,r){return i("v-uni-swiper-item",{key:r,style:{width:"100%",borderRadius:"20rpx",background:"none",height:"480rpx"}},["http"==t.substring(0,4)?i("v-uni-image",{style:{width:"calc(100% - 40rpx)",margin:"0px auto",objectFit:"cover",borderRadius:"20rpx",display:"block",height:"480rpx"},attrs:{mode:"aspectFill",src:t}}):i("v-uni-image",{style:{width:"calc(100% - 40rpx)",margin:"0px auto",objectFit:"cover",borderRadius:"20rpx",display:"block",height:"480rpx"},attrs:{mode:"aspectFill",src:e.baseUrl+t}})],1)})),1),i("v-uni-view",{staticClass:"detail-content",style:{padding:"0px 24rpx 24rpx",flexWrap:"wrap",background:"none",display:"flex",width:"100%",justifyContent:"space-between",height:"auto"}},[i("v-uni-view",{staticClass:"detail-list-item price priceFavor",style:{padding:"0px 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"40rpx 0 24rpx 0",borderColor:"#fbecf3",borderRadius:"0px",borderWidth:"0 0 2rpx",background:"none",display:"flex",width:"100%",borderStyle:"solid",justifyContent:"space-between",height:"100rpx"}},[1==e.storeupFlag?i("v-uni-view",{staticClass:"cuIcon-favorfill",style:{border:"2rpx solid #f0d9da",boxShadow:"0px 0px 0px #ccc",margin:"16rpx 12rpx 0",color:"#e28f90",textAlign:"center",display:"block",borderRadius:"100%",background:"none",width:"64rpx",lineHeight:"56rpx",fontSize:"48rpx",textShadow:"0px 0px 0px #ccc",height:"64rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.shoucang.apply(void 0,arguments)}}}):e._e(),0==e.storeupFlag?i("v-uni-view",{staticClass:"cuIcon-favor",style:{border:"2rpx solid #f0d9da",boxShadow:"0px 0px 0px #ccc",margin:"16rpx 12rpx 0",color:"#e28f90",textAlign:"center",display:"block",borderRadius:"100%",background:"none",width:"64rpx",lineHeight:"56rpx",fontSize:"48rpx",textShadow:"0px 0px 0px #ccc",height:"64rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.shoucang.apply(void 0,arguments)}}}):e._e()],1),i("v-uni-view",{staticClass:"detail-list-item title",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"20rpx 20rpx 20rpx",margin:"20rpx 0 20rpx 0",borderColor:"#fbecf3",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,#fff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx",borderColor:"#fbecf3",color:"#333",textAlign:"left",borderWidth:"0 0 2rpx",width:"100%",lineHeight:"68rpx",fontSize:"32rpx",borderStyle:"solid",fontWeight:"600"}},[e._v("故事名称：")]),i("v-uni-view",{staticClass:"text",style:{padding:"12rpx 20rpx 20rpx 0",margin:"0px 0 0",color:"#666",width:"100%",lineHeight:"48rpx",fontSize:"32rpx",textIndent:"2em"}},[e._v(e._s(e.detail.gushimingcheng))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"20rpx 20rpx 20rpx",margin:"20rpx 0 20rpx 0",borderColor:"#fbecf3",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,#fff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx",borderColor:"#fbecf3",color:"#333",textAlign:"left",borderWidth:"0 0 2rpx",width:"100%",lineHeight:"68rpx",fontSize:"32rpx",borderStyle:"solid",fontWeight:"600"}},[e._v("故事类型：")]),i("v-uni-view",{staticClass:"text",style:{padding:"12rpx 20rpx 20rpx 0",margin:"0px 0 0",color:"#666",width:"100%",lineHeight:"48rpx",fontSize:"32rpx",textIndent:"2em"}},[e._v(e._s(e.detail.gushileixing))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"20rpx 20rpx 20rpx",margin:"20rpx 0 20rpx 0",borderColor:"#fbecf3",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,#fff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx",borderColor:"#fbecf3",color:"#333",textAlign:"left",borderWidth:"0 0 2rpx",width:"100%",lineHeight:"68rpx",fontSize:"32rpx",borderStyle:"solid",fontWeight:"600"}},[e._v("故事由来：")]),i("v-uni-view",{staticClass:"text",style:{padding:"12rpx 20rpx 20rpx 0",margin:"0px 0 0",color:"#666",width:"100%",lineHeight:"48rpx",fontSize:"32rpx",textIndent:"2em"}},[e._v(e._s(e.detail.gushiyoulai))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"20rpx 20rpx 20rpx",margin:"20rpx 0 20rpx 0",borderColor:"#fbecf3",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,#fff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx",borderColor:"#fbecf3",color:"#333",textAlign:"left",borderWidth:"0 0 2rpx",width:"100%",lineHeight:"68rpx",fontSize:"32rpx",borderStyle:"solid",fontWeight:"600"}},[e._v("故事年份：")]),i("v-uni-view",{staticClass:"text",style:{padding:"12rpx 20rpx 20rpx 0",margin:"0px 0 0",color:"#666",width:"100%",lineHeight:"48rpx",fontSize:"32rpx",textIndent:"2em"}},[e._v(e._s(e.detail.gushinianfen))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"20rpx 20rpx 20rpx",margin:"20rpx 0 20rpx 0",borderColor:"#fbecf3",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,#fff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx",borderColor:"#fbecf3",color:"#333",textAlign:"left",borderWidth:"0 0 2rpx",width:"100%",lineHeight:"68rpx",fontSize:"32rpx",borderStyle:"solid",fontWeight:"600"}},[e._v("发布人：")]),i("v-uni-view",{staticClass:"text",style:{padding:"12rpx 20rpx 20rpx 0",margin:"0px 0 0",color:"#666",width:"100%",lineHeight:"48rpx",fontSize:"32rpx",textIndent:"2em"}},[e._v(e._s(e.detail.faburen))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"20rpx 20rpx 20rpx",margin:"20rpx 0 20rpx 0",borderColor:"#fbecf3",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,#fff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx",borderColor:"#fbecf3",color:"#333",textAlign:"left",borderWidth:"0 0 2rpx",width:"100%",lineHeight:"68rpx",fontSize:"32rpx",borderStyle:"solid",fontWeight:"600"}},[e._v("发布时间：")]),i("v-uni-view",{staticClass:"text",style:{padding:"12rpx 20rpx 20rpx 0",margin:"0px 0 0",color:"#666",width:"100%",lineHeight:"48rpx",fontSize:"32rpx",textIndent:"2em"}},[e._v(e._s(e.detail.fabushijian))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"20rpx 20rpx 20rpx",margin:"20rpx 0 20rpx 0",borderColor:"#fbecf3",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,#fff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx",borderColor:"#fbecf3",color:"#333",textAlign:"left",borderWidth:"0 0 2rpx",width:"100%",lineHeight:"68rpx",fontSize:"32rpx",borderStyle:"solid",fontWeight:"600"}},[e._v("点击次数：")]),i("v-uni-view",{staticClass:"text",style:{padding:"12rpx 20rpx 20rpx 0",margin:"0px 0 0",color:"#666",width:"100%",lineHeight:"48rpx",fontSize:"32rpx",textIndent:"2em"}},[e._v(e._s(e.detail.clicknum))])],1),e.thumbsupFlag||e.crazilyFlag?e._e():i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx 8rpx 0",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 24rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px",background:"none",display:"flex",width:"48%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"32rpx",color:"#333",textAlign:"right"}},[e._v("赞：")]),i("v-uni-view",{style:{width:"100%",flex:"1",justifyContent:"space-between",display:"flex",height:"auto"}},[i("v-uni-view",{style:{color:"#333",lineHeight:"80rpx",fontSize:"32rpx"}},[e._v(e._s(e.detail.thumbsupnum))]),i("v-uni-view",{staticClass:"cuIcon-appreciate",style:{border:"0px solid #f0d9da",boxShadow:"0px 0px 0px #afd3cc",color:"#e28f90",borderRadius:"100%",textAlign:"center",background:"#fff",width:"72rpx",lineHeight:"72rpx",fontSize:"40rpx",textShadow:"0px 0px 0px #ccc",height:"72rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.zan.apply(void 0,arguments)}}})],1)],1),e.thumbsupFlag?i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx 8rpx 0",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 24rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px",background:"none",display:"flex",width:"48%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"32rpx",color:"#333",textAlign:"right"}},[e._v("已赞：")]),i("v-uni-view",{style:{width:"100%",flex:"1",justifyContent:"space-between",display:"flex",height:"auto"}},[i("v-uni-view",{style:{color:"#333",lineHeight:"80rpx",fontSize:"32rpx"}},[e._v(e._s(e.detail.thumbsupnum))]),i("v-uni-view",{staticClass:"cuIcon-appreciate",style:{border:"0px solid #f0d9da",boxShadow:"0px 0px 0px #afd3cc",color:"#e28f90",borderRadius:"100%",textAlign:"center",background:"#fff",width:"72rpx",lineHeight:"72rpx",fontSize:"40rpx",textShadow:"0px 0px 0px #ccc",height:"72rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.zan.apply(void 0,arguments)}}})],1)],1):e._e(),e.thumbsupFlag||e.crazilyFlag?e._e():i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx 8rpx 0",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 24rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px",background:"none",display:"flex",width:"48%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"32rpx",color:"#333",textAlign:"right"}},[e._v("踩：")]),i("v-uni-view",{style:{width:"100%",flex:"1",justifyContent:"space-between",display:"flex",height:"auto"}},[i("v-uni-view",{style:{color:"#333",lineHeight:"80rpx",fontSize:"32rpx"}},[e._v(e._s(e.detail.crazilynum))]),i("v-uni-view",{staticClass:"cuIcon-appreciate",staticStyle:{transform:"rotate(180deg)"},style:{border:"0px solid #f0d9da",boxShadow:"0px 0px 0px #afd3cc",color:"#e28f90",borderRadius:"100%",textAlign:"center",background:"none",width:"72rpx",lineHeight:"72rpx",fontSize:"40rpx",textShadow:"0px 0px 0px #ddd",height:"72rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cai.apply(void 0,arguments)}}})],1)],1),e.crazilyFlag?i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx 8rpx 0",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 24rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px",background:"none",display:"flex",width:"48%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"32rpx",color:"#333",textAlign:"right"}},[e._v("踩：")]),i("v-uni-view",{style:{width:"100%",flex:"1",justifyContent:"space-between",display:"flex",height:"auto"}},[i("v-uni-view",{style:{color:"#333",lineHeight:"80rpx",fontSize:"32rpx"}},[e._v(e._s(e.detail.crazilynum))]),i("v-uni-view",{staticClass:"cuIcon-appreciate",staticStyle:{transform:"rotate(180deg)"},style:{border:"0px solid #f0d9da",boxShadow:"0px 0px 0px #afd3cc",color:"#e28f90",borderRadius:"100%",textAlign:"center",background:"none",width:"72rpx",lineHeight:"72rpx",fontSize:"40rpx",textShadow:"0px 0px 0px #ddd",height:"72rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cai.apply(void 0,arguments)}}})],1)],1):e._e(),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"20rpx 20rpx 20rpx",margin:"20rpx 0 20rpx 0",borderColor:"#fbecf3",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,#fff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx",borderColor:"#fbecf3",color:"#333",textAlign:"left",borderWidth:"0 0 2rpx",width:"100%",lineHeight:"68rpx",fontSize:"32rpx",borderStyle:"solid",fontWeight:"600"}},[e._v("故事简介")]),i("v-uni-view",{staticClass:"text",style:{padding:"12rpx 20rpx 20rpx 0",margin:"0px 0 0",color:"#666",width:"100%",lineHeight:"48rpx",fontSize:"32rpx",textIndent:"2em"}},[e._v(e._s(e.detail.gushijianjie))])],1),i("v-uni-view",{staticClass:"detail-list-item rich",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"40rpx 24rpx",margin:"0 0 24rpx 0",borderColor:"#fbecf3",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,#fff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"left",width:"100%",lineHeight:"1.5",fontSize:"32rpx",fontWeight:"600"}},[e._v("故事详情")]),i("v-uni-view",{staticClass:"rich-text",style:{minHeight:"240rpx",border:"0px solid #f7de91",padding:"8rpx 20rpx 0 0",boxShadow:"0 0px 0px rgba(182,158,18,.4),inset 0px 0px 0px 0px #fcf6d6",margin:"0",borderRadius:"0px",color:"#666",background:"none",width:"calc(100% - 8rpx)",lineHeight:"1.5",fontSize:"28rpx",textIndent:"2em"}},[i("v-uni-rich-text",{attrs:{nodes:e.detail.gushixiangqing}})],1)],1),i("v-uni-view",{staticClass:"time-content",style:{width:"100%",margin:"40rpx 0 24rpx 0",height:"auto"}},[i("v-uni-view",{staticClass:"comoment-header",style:{border:"0px solid #fdd802",boxShadow:"inset 0px 0px 0px 0px #fcf3bf",padding:"0px 20rpx",margin:"0 auto",borderRadius:"0px",background:"url(http://codegen.caihongy.cn/20230307/eda9025d32634665b029d678a6c01430.gif) no-repeat left top / 60% auto,url(http://codegen.caihongy.cn/20230307/84f122eda0474ce68d6b4e8917198877.gif) no-repeat right bottom / 60% auto",display:"flex",width:"calc(60% + 0px)",justifyContent:"space-between",height:"auto"}},[i("v-uni-view",{style:{padding:"0px 20rpx",lineHeight:"160rpx",fontSize:"44rpx",color:"#333",fontWeight:"600"}},[e._v("评论")]),i("v-uni-view",{staticClass:"btn-comment-content",staticStyle:{display:"flex","align-items":"center"},style:{border:"0px solid #64b7ea",padding:"0 0px 0 0px",margin:"0px ",borderRadius:"0px",background:"rgba(255,255,255,.0)",display:"flex"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onCommentTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cuIcon-add",style:{margin:"0px 8rpx 0",lineHeight:"160rpx",fontSize:"32rpx",color:"#333"}}),i("v-uni-view",{style:{margin:"0px 0 0",lineHeight:"160rpx",fontSize:"30rpx",color:"#333"}},[e._v("添加评论")])],1)],1),e._l(e.commentList,(function(t,r){return i("v-uni-view",{key:r,staticClass:"cu-item comment-item",style:{padding:"40rpx 24rpx 40rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"60rpx 0 32rpx",borderColor:"#fbecf3",borderRadius:"0px",background:"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,#fff",borderWidth:"2rpx 0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{style:{width:"100%",display:"flex",height:"auto"}},[t.avatarurl?i("v-uni-image",{style:{width:"60rpx",margin:"0 8rpx 0 0",borderRadius:"100%",display:"block",height:"60rpx"},attrs:{mode:"aspectFill",src:e.baseUrl+t.avatarurl}}):e._e(),i("v-uni-view",{staticClass:"text-grey",style:{color:"#333",lineHeight:"60rpx",fontSize:"32rpx"}},[e._v(e._s(t.nickname))])],1),i("v-uni-view",{staticClass:"text-gray text-content text-df",style:{margin:"8rpx 0",lineHeight:"1.5",fontSize:"32rpx",color:"#666",textIndent:"2em"}},[e._v(e._s(t.content))]),i("v-uni-view",{staticClass:"margin-top-sm text-gray text-df",style:{lineHeight:"24rpx",fontSize:"28rpx",color:"#666",textAlign:"right"}},[e._v(e._s(t.addtime))]),t.reply?i("v-uni-view",{staticClass:"text-gray text-content text-df",style:{margin:"8rpx 0",lineHeight:"1.5",fontSize:"32rpx",color:"#666",textIndent:"2em"}},[e._v("回复:"+e._s(t.reply))]):e._e()],1)}))],2),i("v-uni-view",{staticClass:"bottom-content bg-white tabbar border shop",style:{width:"100%",padding:"20rpx 0px",flexWrap:"wrap",background:"none",display:"flex",height:"auto"}})],1)],1)],1)],1)],1)},a=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}))},"671f":function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-0a4e72c1]{min-height:calc(100vh - 44px);box-sizing:border-box}.seat-list[data-v-0a4e72c1]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;background:#fff;margin:%?20?%;border-radius:%?20?%;padding:%?20?%;font-size:%?30?%}.seat-list .seat-item[data-v-0a4e72c1]{width:33.33%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?20?%}.seat-list .seat-item .seat-icon[data-v-0a4e72c1]{width:%?50?%;height:%?50?%;margin-bottom:%?10?%}uni-audio[data-v-0a4e72c1]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.audio[data-v-0a4e72c1] .uni-audio-default{width:inherit}',""]),e.exports=t},6859:function(e,t,i){"use strict";i.r(t);var r=i("52c7"),n=i("d00b");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("a80c");var o,s=i("f0c5"),p=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"0a4e72c1",null,!1,r["a"],o);t["default"]=p.exports},a5c9:function(e,t,i){var r=i("671f");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("519de1b6",r,!0,{sourceMap:!1,shadowMode:!1})},a80c:function(e,t,i){"use strict";var r=i("a5c9"),n=i.n(r);n.a},d00b:function(e,t,i){"use strict";i.r(t);var r=i("31dd"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a}}]);
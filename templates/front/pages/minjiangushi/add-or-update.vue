<template>
<view class="content">
	<view :style='{"minHeight":"100vh","padding":"0px 0 80rpx","borderColor":"#21d5ae","background":"url(http://codegen.caihongy.cn/20230308/302fb617e4e6405384ecd086ab1d7ea4.png) no-repeat right top / 50% auto,#fff","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
		<form :style='{"width":"100%","padding":"60rpx 40rpx","background":"none","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#fbecf3","borderRadius":"0px","borderWidth":"2rpx 0","background":"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"32rpx","color":"#333","textAlign":"right","fontWeight":"600"}' class="title">故事名称</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.gushimingcheng" v-model="ruleForm.gushimingcheng" placeholder="故事名称"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#fbecf3","borderRadius":"0px","borderWidth":"2rpx 0","background":"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"32rpx","color":"#333","textAlign":"right","fontWeight":"600"}' class="title">故事类型</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="gushileixingChange" :value="gushileixingIndex"  :range="gushileixingOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#666"}' class="uni-input">{{ruleForm.gushileixing?ruleForm.gushileixing:"请选择故事类型"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#fbecf3","borderRadius":"0px","borderWidth":"2rpx 0","background":"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="" @tap="tupianTap">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"32rpx","color":"#333","textAlign":"right","fontWeight":"600"}' class="title">图片</view>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-if="ruleForm.tupian" :src="baseUrl+ruleForm.tupian.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#fbecf3","borderRadius":"0px","borderWidth":"2rpx 0","background":"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"32rpx","color":"#333","textAlign":"right","fontWeight":"600"}' class="title">故事由来</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.gushiyoulai" v-model="ruleForm.gushiyoulai" placeholder="故事由来"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#fbecf3","borderRadius":"0px","borderWidth":"2rpx 0","background":"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"32rpx","color":"#333","textAlign":"right","fontWeight":"600"}' class="title">故事年份</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.gushinianfen" v-model="ruleForm.gushinianfen" placeholder="故事年份"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#fbecf3","borderRadius":"0px","borderWidth":"2rpx 0","background":"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"32rpx","color":"#333","textAlign":"right","fontWeight":"600"}' class="title">发布人</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.faburen" v-model="ruleForm.faburen" placeholder="发布人"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#fbecf3","borderRadius":"0px","borderWidth":"2rpx 0","background":"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"32rpx","color":"#333","textAlign":"right","fontWeight":"600"}' class="title">发布时间</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' mode="date" :value="ruleForm.fabushijian" @change="fabushijianChange">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#666"}' class="uni-input">{{ruleForm.fabushijian?ruleForm.fabushijian:"请选择发布时间"}}</view>
				</picker>
			</view>
			
			<!-- 否 -->
 

			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#fbecf3","borderRadius":"0px","borderWidth":"2rpx 0","background":"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"32rpx","color":"#333","textAlign":"right","fontWeight":"600"}' class="title">故事简介</view>
				<textarea :style='{"border":"0","minHeight":"240rpx","padding":"40rpx 40rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"none","fontSize":"28rpx"}' v-model="ruleForm.gushijianjie" placeholder="故事简介"></textarea>
			</view>
			
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0 0 0px 0","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"32rpx","color":"#333","fontWeight":"600"}' class="title">故事详情</view>
                <xia-editor ref="editor" :style='{"minHeight":"300rpx","padding":"24rpx 32rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","borderColor":"#fbecf3","borderRadius":"0px","color":"#666","background":"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,#fff","borderWidth":"2rpx 0","width":"100%","fontSize":"32rpx","borderStyle":"solid","height":"auto"}' v-model="ruleForm.gushixiangqing" placeholder="故事详情" @editorChange="gushixiangqingChange"></xia-editor>
			</view>
			
			<view :style='{"padding":"0px","margin":"40rpx 0 0 0","background":"none","display":"flex","width":"100%","justifyContent":"center","height":"auto"}' class="btn" >
				<button :style='{"padding":"0 40rpx","boxShadow":"0px 12rpx 12rpx -6rpx #ccc","margin":"0 40rpx 0 0","borderColor":"#ffe8f1","color":"#333","display":"inline","minWidth":"240rpx","borderRadius":"8rpx","background":"linear-gradient(200deg, rgba(255,255,255,1) 0%, rgba(242,212,224,1) 100%),#f2d4e0","borderWidth":"2rpx","width":"auto","lineHeight":"88rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

		<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="clicktimeConfirm" ref="clicktime" themeColor="#333333"></w-picker>
	</view>
</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
    import xiaEditor from '@/components/xia-editor/xia-editor';
	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				gushimingcheng: '',
				gushijianjie: '',
				gushileixing: '',
				tupian: '',
				gushixiangqing: '',
				gushiyoulai: '',
				gushinianfen: '',
				faburen: '',
				fabushijian: '',
				},
				gushileixingOptions: [],
				gushileixingIndex: 0,
				// 登陆用户信息
				user: {},
                ro:{
                   gushimingcheng : false,
                   gushijianjie : false,
                   gushileixing : false,
                   tupian : false,
                   gushixiangqing : false,
                   gushiyoulai : false,
                   gushinianfen : false,
                   faburen : false,
                   fabushijian : false,
                   thumbsupnum : false,
                   crazilynum : false,
                   clicktime : false,
                   clicknum : false,
                },
			}
		},
		components: {
			wPicker,
            xiaEditor
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},



		},
		async onLoad(options) {
            this.ruleForm.fabushijian = this.$utils.getCurDate();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取
			this.ruleForm.faburen = this.user.yonghuxingming
			this.ro.faburen = true;


			// 下拉框
			res = await this.$api.option(`gushileixing`,`gushileixing`,{});
			this.gushileixingOptions = res.data;
            this.gushileixingOptions.unshift("请选择故事类型");

			// 如果有登陆，获取登陆后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`minjiangushi`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='gushimingcheng'){
					this.ruleForm.gushimingcheng = obj[o];
					this.ro.gushimingcheng = true;
					continue;
					}
					if(o=='gushijianjie'){
					this.ruleForm.gushijianjie = obj[o];
					this.ro.gushijianjie = true;
					continue;
					}
					if(o=='gushileixing'){
					this.ruleForm.gushileixing = obj[o];
					this.ro.gushileixing = true;
					continue;
					}
					if(o=='tupian'){
					this.ruleForm.tupian = obj[o].split(",")[0];
					this.ro.tupian = true;
					continue;
					}
					if(o=='gushixiangqing'){
					this.ruleForm.gushixiangqing = obj[o];
					this.ro.gushixiangqing = true;
					continue;
					}
					if(o=='gushiyoulai'){
					this.ruleForm.gushiyoulai = obj[o];
					this.ro.gushiyoulai = true;
					continue;
					}
					if(o=='gushinianfen'){
					this.ruleForm.gushinianfen = obj[o];
					this.ro.gushinianfen = true;
					continue;
					}
					if(o=='faburen'){
					this.ruleForm.faburen = obj[o];
					this.ro.faburen = true;
					continue;
					}
					if(o=='fabushijian'){
					this.ruleForm.fabushijian = obj[o];
					this.ro.fabushijian = true;
					continue;
					}
					if(o=='thumbsupnum'){
					this.ruleForm.thumbsupnum = obj[o];
					this.ro.thumbsupnum = true;
					continue;
					}
					if(o=='crazilynum'){
					this.ruleForm.crazilynum = obj[o];
					this.ro.crazilynum = true;
					continue;
					}
					if(o=='clicktime'){
					this.ruleForm.clicktime = obj[o];
					this.ro.clicktime = true;
					continue;
					}
					if(o=='clicknum'){
					this.ruleForm.clicknum = obj[o];
					this.ro.clicknum = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
            gushixiangqingChange(e) {
                this.ruleForm.gushixiangqing = e
            },
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数

			fabushijianChange(e) {
				this.ruleForm.fabushijian = e.target.value;
				this.$forceUpdate();
			},

			// 日长控件选择日期时间
			clicktimeConfirm(val) {
				console.log(val)
				this.ruleForm.clicktime = val.result;
				this.$forceUpdate();
			},

			// 下拉变化
			gushileixingChange(e) {
				this.gushileixingIndex = e.target.value
				this.ruleForm.gushileixing = this.gushileixingOptions[this.gushileixingIndex]
			},

			tupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.tupian = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {



























//跨表计算判断
				var obj;
				if(this.ruleForm.thumbsupnum&&(!this.$validate.isIntNumer(this.ruleForm.thumbsupnum))){
					this.$utils.msg(`赞应输入整数`);
					return
				}
				if(this.ruleForm.crazilynum&&(!this.$validate.isIntNumer(this.ruleForm.crazilynum))){
					this.$utils.msg(`踩应输入整数`);
					return
				}
				if(this.ruleForm.clicknum&&(!this.$validate.isIntNumer(this.ruleForm.clicknum))){
					this.$utils.msg(`点击次数应输入整数`);
					return
				}
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
                        if(!obj) {
						    obj = uni.getStorageSync('crossObj');
                        }
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`minjiangushi`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`minjiangushi`, this.ruleForm);
						}else{
							await this.$api.add(`minjiangushi`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`minjiangushi`, this.ruleForm);
					}else{
						await this.$api.add(`minjiangushi`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>

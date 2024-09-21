<template>
<view class="content">
	<view class="box" :style='{"minHeight":"100vh","padding":"0px 0 0px","borderColor":"#21d5ae","background":"url(http://codegen.caihongy.cn/20230308/302fb617e4e6405384ecd086ab1d7ea4.png) no-repeat right top / 50% auto,#fff","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
		<view :style='{"width":"100%","padding":"60rpx 40rpx","background":"none","display":"block","height":"auto"}'>
			<view :style='{"padding":"0 20rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#fbecf3","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"2rpx 0","background":"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","width":"160rpx","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}'>用户账号</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' disabled="true"  v-model="ruleForm.yonghuzhanghao" placeholder="用户账号"></input>
			</view>
			<view :style='{"padding":"0 20rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#fbecf3","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"2rpx 0","background":"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","width":"160rpx","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}'>密码</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'  type="password" v-model="ruleForm.mima" placeholder="密码"></input>
			</view>
			<view :style='{"padding":"0 20rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#fbecf3","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"2rpx 0","background":"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","width":"160rpx","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}'>用户姓名</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.yonghuxingming" placeholder="用户姓名"></input>
			</view>
			<view v-if="tableName=='yonghu'" :style='{"padding":"0 20rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#fbecf3","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"2rpx 0","background":"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","width":"160rpx","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}' class="title">性别</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}'  @change="yonghuxingbieChange" :value="yonghuxingbieIndex" :range="yonghuxingbieOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#666"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#fbecf3","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"2rpx 0","background":"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" @tap="yonghutouxiangTap" class="">
				<view class="title" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","width":"160rpx","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}'>头像</view>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-if="ruleForm.touxiang" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-else class="avator" style="margin: 0;" src="../../static/gen/upload.png" mode=""></image>
			</view>
			<view :style='{"padding":"0 20rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#fbecf3","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"2rpx 0","background":"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","width":"160rpx","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}'>用户电话</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.yonghudianhua" placeholder="用户电话"></input>
			</view>
			<view :style='{"padding":"0 20rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#fbecf3","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"2rpx 0","background":"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","width":"160rpx","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}'>身份证号</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.shenfenzhenghao" placeholder="身份证号"></input>
			</view>
            <view :style='{"padding":"0 20rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#fbecf3","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"2rpx 0","background":"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,rgba(255,255,255,.8)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class=" select">
                <view :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","width":"160rpx","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}' class="title">注册时间</view>
                <picker :style='{"width":"100%","flex":"1","height":"auto"}' mode="date" :value="ruleForm.zhuceshijian" @change="yonghuzhuceshijianDateChange">
                    <view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#666"}' class="uni-input">{{ruleForm.zhuceshijian?ruleForm.zhuceshijian:"请选择注册时间"}}</view>
                </picker>
            </view>
			<view :style='{"padding":"0px","margin":"48rpx 0 0","background":"none","display":"flex","width":"100%","justifyContent":"center","height":"auto"}' class="btn">
				<button @tap="update()" class="cu-btn lg" :style='{"padding":"0 40rpx","boxShadow":"0px 12rpx 12rpx -6rpx #ccc","margin":"0 20rpx","borderColor":"#ffe8f1","color":"#333","minWidth":"240rpx","borderRadius":"8rpx","background":"linear-gradient(200deg, rgba(255,255,255,1) 0%, rgba(242,212,224,1) 100%),#f2d4e0","borderWidth":"2rpx","width":"auto","lineHeight":"88rpx","fontSize":"32rpx","borderStyle":"solid","fontWeight":"500","height":"88rpx"}'>保存</button>
				<button @tap="logout()" class="cu-btn lg" :style='{"padding":"0 40rpx","boxShadow":"0px 12rpx 12rpx -6rpx #ddd","margin":"0 20rpx","borderColor":"#eee","color":"#666","minWidth":"240rpx","borderRadius":"8rpx","background":"linear-gradient(200deg, rgba(255,255,255,1) 0%, rgba(238,238,238,1) 100%),#eee","borderWidth":"2rpx","width":"auto","lineHeight":"88rpx","fontSize":"32rpx","borderStyle":"solid","fontWeight":"500","height":"88rpx"}'>退出登录</button>
			</view>
		</view>
	</view>
</view>
</template>

<script>
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
				ruleForm: {
				},
				tableName:"",
				yonghuxingbieOptions: [],
				yonghuxingbieIndex: 0,
			}
		},
        components: {
            multipleSelect
        },
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad() {
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.ruleForm = res.data;
			this.tableName = table;
			// 自定义下拉框值
			if(this.tableName=='yonghu'){
				this.yonghuxingbieOptions = "男,女".split(',');
				this.yonghuxingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.yonghuxingbieIndex = index;
					}
				});
			}
            this.ruleForm.zhuceshijian = this.$utils.getCurDate();
			this.styleChange()
            this.$forceUpdate()
		},
		methods: {
            // 下拉变化
            yonghuxingbieChange(e) {
                    this.yonghuxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.yonghuxingbieOptions[this.yonghuxingbieIndex]
            },
			yonghutouxiangTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			},
            yonghuzhuceshijianDateChange(e) {
                this.ruleForm.zhuceshijian = e.target.value;
                this.$forceUpdate();
            },

            toggleTab(str) {
                this.$refs[str].show();
            },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('. .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.userInfoForm.list.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			logout() {
				uni.setStorageSync('token', '');
				this.$utils.jump('../login/login');
			},
			// 注册
			async update() {
				if((!this.ruleForm.yonghuzhanghao) && `yonghu` == this.tableName){
					this.$utils.msg(`用户账号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `yonghu` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if(`yonghu` == this.tableName && this.ruleForm.yonghudianhua&&(!this.$validate.isMobile(this.ruleForm.yonghudianhua))){
					this.$utils.msg(`用户电话应输入手机格式`);
					return
				}
				if(`yonghu` == this.tableName && this.ruleForm.shenfenzhenghao&&(!this.$validate.checkIdCard(this.ruleForm.shenfenzhenghao))){
					this.$utils.msg(`身份证号应输入身份证格式`);
					return
				}
				let table = uni.getStorageSync("nowTable");
				await this.$api.update(table, this.ruleForm);
				this.$utils.msgBack('修改成功');;
			},

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>

<template>
	<view class="content">
		<view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"0px 0 100rpx","background":"url(http://codegen.caihongy.cn/20230308/5857c19830e64e58981d3de0c66f827d.jpg) no-repeat center bottom / 100% auto,#346385","height":"100%"}'>
			<view :style='{"padding":"100rpx 80rpx 400rpx","boxShadow":"0px 0px 0px #eee","borderColor":"#eee","borderRadius":"0px","flexWrap":"wrap","background":"rgba(255,255,255,0)","borderWidth":"0px","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
				<image :style='{"margin":"0 auto","borderRadius":"8rpx","objectFit":"cover","top":"-320rpx","left":"0","display":"none","width":"100%","position":"absolute","opacity":".3","height":"auto"}' src="http://codegen.caihongy.cn/20221223/15e44917f9454ced9a9ebc4b2d40acc4.gif" mode="aspectFill"></image>
				<view v-if="loginType==1" :style='{"width":"100%","margin":"0 0 40rpx","borderRadius":"12rpx","background":"none","height":"auto"}' class="uni-form-item uni-column">
					<input v-model="username" :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#ddd","color":"#333","borderRadius":"40rpx","background":"rgba(255,255,255,.8)","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' type="text" class="uni-input" name="" placeholder="请输入账号" />
				</view>
				<view v-if="loginType==1" :style='{"width":"100%","margin":"0 0 40rpx","borderRadius":"12rpx","background":"none","height":"auto"}' class="uni-form-item uni-column">
					<input v-model="password" :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#ddd","color":"#333","borderRadius":"40rpx","background":"rgba(255,255,255,.8)","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' type="password" class="uni-input" name="" placeholder="请输入密码" />
				</view>
				<picker v-if="roleNum>1" :style='{"boxShadow":"0px 0px 0px #2c77cb","margin":"0 0 48rpx 0","borderColor":"#ddd","borderRadius":"40rpx","background":"rgba(255,255,255,.9)","borderWidth":"0px","width":"100%","borderStyle":"solid","height":"auto"}' @change="optionsChange" :value="index" :range="options">
					<view class="uni-picker-type" :style='{"width":"100%","padding":"0 24rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#767676"}'>{{options[index]}}</view>
				</picker>
				<button v-if="loginType==1" class="btn-submit" @tap="onLoginTap" type="primary" :style='{"padding":"0 40rpx","margin":"0px auto 40rpx","borderColor":"#f8e0eb","color":"#333","display":"block","borderRadius":"40rpx","background":"linear-gradient(200deg, rgba(255,255,255,1) 0%, rgba(242,194,216,1) 100%)","borderWidth":"0px","width":"100%","lineHeight":"88rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx","order":"10"}'>登录</button>
				<button v-if="loginType==2" class="btn-submit" @tap="onFaceLoginTap" type="primary" :style='{"padding":"0 40rpx","margin":"0px auto 40rpx","borderColor":"#f8e0eb","color":"#333","display":"block","borderRadius":"40rpx","background":"linear-gradient(200deg, rgba(255,255,255,1) 0%, rgba(242,194,216,1) 100%)","borderWidth":"0px","width":"100%","lineHeight":"88rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx","order":"10"}'>人脸识别登录</button>
				<view class="links" :style='{"boxShadow":"0px 0px 0px #eee","padding":"0px 0 0","margin":"0 0 0px","alignItems":"flex-start","textAlign":"center","display":"flex","justifyContent":"center","borderRadius":"0px","flexWrap":"wrap","background":"none","width":"100%","position":"relative","height":"auto"}'>
					<view class="link-highlight" @tap="onRegisterTap('yonghu')" :style='{"border":"0px solid #fbd341","padding":"16rpx 12rpx 16rpx","margin":"0 0 20rpx 20rpx","color":"#333","borderRadius":"40rpx","textAlign":"center","background":"rgba(255,255,255,.8)","display":"inline-block","width":"auto","fontSize":"32rpx"}'>注册用户</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				username: '',
				password: '',
                loginType:1,
				codes: [{
				  num: 1,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 2,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 3,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 4,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}],
				options: [
					'请选择登录用户类型'
				],
                optionsValues: [
					'',
                    'yonghu',
				],
				index: 0,
				roleNum:0
			}
		},
		onLoad() {
			let options = ['请选择登录用户类型'];
			let menus = menu.list();
			this.menuList = menus;
			for(let i=0;i<this.menuList.length;i++){
				if(this.menuList[i].hasFrontLogin=='是'){
					options.push(this.menuList[i].roleName);
					this.roleNum++;
				}
			}
			if(this.roleNum==1) {
				this.index = 1;
			}	
			this.options = options;
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.loginFrom.content.input.backgroundColor
					// })
				})
			},
			onRegisterTap(tableName) {
                uni.setStorageSync("loginTable", tableName);
				this.$utils.jump('../register/register')
			},
			async onLoginTap() {
                if (!this.username) {
					this.$utils.msg('请输入用户名')
					return
				}
                if (!this.password) {
					this.$utils.msg('请输入用户密码')
					return
				}
                if (!this.optionsValues[this.index]) {
					this.$utils.msg('请选择登陆用户类型')
					return
				}
				let res = await this.$api.login(`${this.optionsValues[this.index]}`, {
					username: this.username,
					password: this.password
				});
                uni.removeStorageSync("useridTag");
				uni.setStorageSync("token", res.token);
				uni.setStorageSync("nickname",this.username);
				uni.setStorageSync("nowTable", `${this.optionsValues[this.index]}`);
				res = await this.$api.session(`${this.optionsValues[this.index]}`);
                if(res.data.touxiang) {
                    uni.setStorageSync('headportrait', res.data.touxiang);
                } else if(res.data.headportrait) {
                    uni.setStorageSync('headportrait', res.data.headportrait);
                }
				// 保存用户id
				uni.setStorageSync("userid", res.data.id);
				if(res.data.vip) {
					uni.setStorageSync("vip", res.data.vip);
				}
				uni.setStorageSync("role", `${this.options[this.index]}`);
				this.$utils.tab('../index/index');
			},
			optionsChange(e) {
				this.index = e.target.value
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

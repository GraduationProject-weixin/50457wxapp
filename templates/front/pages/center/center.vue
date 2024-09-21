<template>
	<view class="content">
		<view :style='{"minHeight":"100vh","padding":"0px 0 80rpx","borderColor":"#21d5ae","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230308/302fb617e4e6405384ecd086ab1d7ea4.png) no-repeat right top / 50% auto,#fff","borderWidth":"0px 0 0","display":"block","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
			<view :style='{"padding":"40rpx 40rpx 60rpx","boxShadow":"inset 0px 0px 0px 0px #f7dcab","margin":"0px auto 40rpx","borderColor":"#999","display":"flex","justifyContent":"space-between","borderRadius":"0","flexWrap":"wrap","background":"url() no-repeat left bottom / 90% auto","borderWidth":"0px","width":"calc(100% - 0px)","position":"relative","borderStyle":"solid","height":"auto"}' @tap="onPageTap('../user-info/user-info')" class="header" v-bind:class="{'status':isH5Plus}">
				<view :style='{"padding":"0","margin":"0","alignItems":"flex-start","flexWrap":"wrap","background":"none","display":"flex","width":"calc(100% - 0px)","position":"static","height":"auto","order":"2"}' v-if="tableName=='yonghu'" class="userinfo">
					<image :style='{"padding":"0px","margin":"0px 0 20rpx 80rpx","borderColor":"#eee #f2c2d8","borderRadius":"100%","objectFit":"cover","textAlign":"center","background":"rgba(255,255,255,.6)","borderWidth":"8rpx 4rpx","width":"176rpx","borderStyle":"solid","height":"176rpx"}' :src="user.touxiang?baseUrl+user.touxiang:'/static/gen/upload.png'"></image>
					<view :style='{"padding":"40rpx 40rpx 80rpx","margin":"20rpx auto 0","borderColor":"#fbd341","flexDirection":"column","display":"block","float":"left","justifyContent":"center","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20230307/57d76d86e78e4acc91caf16541d4d40b.png) no-repeat left top / 100% 100%,rgba(255,255,255,.6)","borderWidth":"0px","width":"100%","borderStyle":"solid","height":"auto"}' class="info">
						<view :style='{"padding":"4rpx 8rpx","borderColor":"#ccc","margin":"0 0 0px","color":"#333","borderWidth":"0 0 2rpx","width":"90%","lineHeight":"60rpx","fontSize":"32rpx","borderStyle":"dashed","fontWeight":"600"}'>{{user.yonghuzhanghao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
					</view>
				</view>
				<view :style='{"padding":"40rpx 0 40rpx","margin":"20rpx 0 0","borderColor":"#f8e5e6 #f8e5e6 #f8e5e6 #ecaeb6","alignItems":"flex-end","display":"flex","right":"80rpx","justifyContent":"center","top":"28rpx","borderRadius":"8rpx 16rpx 16rpx 8rpx","background":"linear-gradient(270deg, rgba(255,255,255,.6) 0%, rgba(255,248,251,.8) 50%)","borderWidth":"2rpx 2rpx 2rpx 6rpx","width":"40%","position":"absolute","borderStyle":"solid","height":"auto"}' class="setting">
					<view :style='{"border":"0","width":"72rpx","lineHeight":"72rpx","fontSize":"84rpx","color":"#333","borderRadius":"0"}' class="cuIcon-settings"></view>
				</view>
			</view>
		
		
			<view :style='{"padding":"0px 2% 0 0","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0px","borderColor":"#1bd0a9","display":"block","justifyContent":"space-between","borderRadius":"0px","flexWrap":"wrap","background":"none","borderWidth":"0px 0px 0px 0px","width":"calc(100% - 0px)","borderStyle":"solid","height":"auto"}' class="list">

				<block v-for="item in menuList" v-bind:key="item.roleName">
					<block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.backMenu">
						<block v-bind:key="sort" v-for=" (child,sort) in menu.child">
							<view :style='{"padding":"0 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","borderColor":"#fbecf3","margin":"0 auto 40rpx","alignItems":"center","display":"flex","borderRadius":"0px","borderWidth":"2rpx","background":"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,#fff","width":"90%","lineHeight":"100rpx","borderStyle":"solid","height":"100rpx"}' v-if="child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' && child.tableName!='exampaper' && child.tableName!='examquestion' " @tap="onPageTap('../'+child.tableName+'/list?userid='+user.id)" class="li" hover-class="hover">
								<view v-if="true" :style='{"width":"64rpx","lineHeight":"64rpx","fontSize":"60rpx","color":"#333"}' :class="child.appFrontIcon"></view>
								<view :style='{"width":"100%","padding":"0 8rpx","lineHeight":"88rpx","fontSize":"32rpx","color":"#333","flex":"1"}' class="text">{{child.menu}}</view>
								<view v-if="true" :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"32rpx","color":"#333"}' class="cuIcon-right"></view>
							</view>
						</block>
					</block>
				</block>


			</view>
		</view>
	</view>
</template>
<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				isH5Plus: true,
				user: {},
				tableName:'',
				role: '',
				menuList: [],
        iconArr: [
          'cuIcon-same',
          'cuIcon-deliver',
          'cuIcon-evaluate',
          'cuIcon-shop',
          'cuIcon-ticket',
          'cuIcon-cascades',
          'cuIcon-discover',
          'cuIcon-question',
          'cuIcon-pic',
          'cuIcon-filter',
          'cuIcon-footprint',
          'cuIcon-pulldown',
          'cuIcon-pullup',
          'cuIcon-moreandroid',
          'cuIcon-refund',
          'cuIcon-qrcode',
          'cuIcon-remind',
          'cuIcon-profile',
          'cuIcon-home',
          'cuIcon-message',
          'cuIcon-link',
          'cuIcon-lock',
          'cuIcon-unlock',
          'cuIcon-vip',
          'cuIcon-weibo',
          'cuIcon-activity',
          'cuIcon-friendadd',
          'cuIcon-friendfamous',
          'cuIcon-friend',
          'cuIcon-goods',
          'cuIcon-selection'
        ],
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad(){
			this.role = uni.getStorageSync("role");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
		},
		async onShow(){
            uni.removeStorageSync("useridTag");
			this.role = uni.getStorageSync("role");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
		},
		methods: {
			onPageTap(url) {
                uni.setStorageSync("useridTag",1);
				uni.navigateTo({
					url: url,
					fail: function() {
						uni.switchTab({
							url: url
						});
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: calc(100vh - 94px);
		box-sizing: border-box;
	}
</style>

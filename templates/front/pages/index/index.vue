<template>
<view class="content">
	<view :style='{"minHeight":"100vh","width":"100%","padding":"20rpx 0 0","background":"#fff","height":"auto"}'>
		<swiper :style='{"padding":"40rpx 20rpx","boxShadow":"inset 0px 0px 0px 0px #f4ead8","borderColor":"#d7a37a","outline":"0px solid #bbb","margin":"0 auto","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20230307/57d76d86e78e4acc91caf16541d4d40b.png) no-repeat left top / 100% 100%,#fff","borderWidth":"0px","width":"calc(100% - 40rpx)","borderStyle":"solid","height":"520rpx"}' class="swiper" :indicator-dots='true' :autoplay='true' :circular='true' indicator-active-color='#c00' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
			<swiper-item :style='{"width":"calc(100% - 40rpx)","margin":"0 auto","position":"relative","borderRadius":"20rpx","background":"none","height":"440rpx"}' v-for="(swiper,index) in swiperList" :key="index" @tap="onSwiperTap(swiper)">
				<image :style='{"padding":"0px","margin":"0px auto","objectFit":"cover","borderRadius":"20rpx","display":"block","width":"calc(100% - 40rpx)","height":"440rpx"}' mode="aspectFill" :src="baseUrl+swiper.img"></image>
				<view v-if="false" :style='{"padding":"0 20rpx 32rpx","color":"#333","left":"20rpx","textAlign":"center","background":"rgba(255,255,255,.6)","bottom":"0px","width":"calc(100% - 40rpx)","lineHeight":"60rpx","fontSize":"28rpx","position":"absolute"}'>{{ swiper.title }}</view>
			</swiper-item>
		</swiper>

		<view class="cu-bar bg-white search" :style="[{top:CustomBar + 'px'}]">
			<picker v-if="queryList.length>1" mode="selector" :range="queryList" range-key="queryName" :value="queryIndex" @change="queryChange" style="padding-left: 20upx;">
				<view><image style="width: 20upx;height: 33upx;" src="../../static/center/to.png"></image></view>
			</picker>
			<view v-if="queryIndex==0" class="search-form round">
				<text class="cuIcon-search"></text>
				<input v-model="searchForm.minzuwenhuabiaoti" type="text" placeholder="标题" ></input>
			</view>
			<view v-if="queryIndex==0" class="action">
				<button @tap="onPageTap('minzuwenhua')" class="cu-btn shadow-blur round">搜索</button>
			</view>
			<view v-if="queryIndex==1" class="search-form round">
				<text class="cuIcon-search"></text>
				<input v-model="searchForm.chuantongjierijierimingcheng" type="text" placeholder="节日名称" ></input>
			</view>
			<view v-if="queryIndex==1" class="action">
				<button @tap="onPageTap('chuantongjieri')" class="cu-btn shadow-blur round">搜索</button>
			</view>
			<view v-if="queryIndex==2" class="search-form round">
				<text class="cuIcon-search"></text>
				<input v-model="searchForm.minjiangushigushimingcheng" type="text" placeholder="故事名称" ></input>
			</view>
			<view v-if="queryIndex==2" class="action">
				<button @tap="onPageTap('minjiangushi')" class="cu-btn shadow-blur round">搜索</button>
			</view>
		</view>

		<!-- menu -->
		<view v-if="true" class="menu" :style='{"padding":"40rpx 0","boxShadow":"0px 18rpx 8rpx -6rpx #ccc","margin":"0px auto","borderColor":"#21d5ae","display":"flex","outline":"0px solid #ccc","borderRadius":"8rpx","flexWrap":"wrap","background":"none","borderWidth":"0px","width":"calc(100% - 40rpx)","borderStyle":"dashed dashed dashed dashed","height":"auto"}'>
            <block v-for="item in menuList" v-bind:key="item.roleName">
                <block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.frontMenu">
                    <block v-bind:key="sort" v-for=" (child,sort) in menu.child">
                        <block v-bind:key="sort2" v-for=" (button,sort2) in child.buttons">
                            <view :style='{"width":"25%","padding":"20rpx 0","margin":"0","borderRadius":"100%","background":"none","height":"auto"}' class="menu-list" v-if="button=='查看' && child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' " @tap="onPageTap2('../'+child.tableName+'/list')">
                                <view class="iconarr" :class="child.appFrontIcon" :style='{"padding":"0px","margin":"0px auto","color":"#333","borderRadius":"100%","background":"none","display":"block","width":"64rpx","lineHeight":"64rpx","fontSize":"64rpx","height":"64rpx"}'></view>
                                <view :style='{"padding":"0","margin":"12rpx auto 0","color":"#333","textAlign":"center","width":"100%","lineHeight":"28rpx","fontSize":"28rpx"}'>{{child.menu.split("列表")[0]}}</view>
                            </view>
                        </block>
                    </block>
                </block>
            </block>
		</view>
		<!-- menu -->
		
		
		<!-- 系统简介 -->
		<view :style='{"padding":"0px","boxShadow":"0 0px 0px rgba(0,0,0,.2)","margin":"80rpx auto 0px","borderRadius":"0px","flexWrap":"wrap","background":"none","display":"flex","width":"calc(100% - 48rpx)","position":"relative","justifyContent":"center","height":"auto"}'>
		  <view :style='{"padding":"0 20rpx","margin":"0 20rpx","borderColor":"#eee","color":"#454553","alignItems":"center","textAlign":"center","display":"flex","overflow":"hidden","borderRadius":"8rpx","background":"none","borderWidth":"2rpx","width":"88rpx","lineHeight":"1.3","fontSize":"44rpx","borderStyle":"solid","fontWeight":"500","height":"auto"}'>{{systemIntroductionDetail.title}}</view>
		  <view :style='{"padding":"0px 80rpx 0 16rpx","margin":"0","overflow":"hidden","color":"#fff","borderRadius":"0","textAlign":"center","background":"url() no-repeat right top / auto 100%,#5489ed","display":"none","width":"auto","fontSize":"28rpx","lineHeight":"80rpx","height":"80rpx"}'>{{systemIntroductionDetail.subtitle}}</view>
		  <view :style='{"padding":"8rpx","margin":"0px 0 0 0","borderColor":"#d7a37a","display":"flex","justifyContent":"space-between","borderRadius":"40rpx","background":"#fff","borderWidth":"0px","flex":"1","width":"100%","position":"relative","borderStyle":"solid","height":"auto"}'>
		    <img :style='{"padding":"8rpx","margin":"0","borderColor":"#60dfc4","objectFit":"cover","borderRadius":"16rpx","borderWidth":"0px","display":"block","width":"48%","borderStyle":"solid","height":"360rpx"}' v-if="systemIntroductionDetail.picture1" :src="baseUrl+systemIntroductionDetail.picture1">
		    <img :style='{"padding":"16rpx","boxShadow":"inset 0px 0px 0px 0px #edf3fe","margin":"0","borderColor":"#aaa","objectFit":"cover","borderRadius":"24rpx","borderWidth":"0px 0px 0px 0px","display":"block","width":"48%","borderStyle":"dashed","height":"360rpx"}' v-if="systemIntroductionDetail.picture2" :src="baseUrl+systemIntroductionDetail.picture2">
		    <img :style='{"padding":"24rpx","boxShadow":"inset 0px 0px 112rpx 0px #fff","margin":"0","borderColor":"#e9be70","objectFit":"cover","display":"none","right":"12rpx","borderRadius":"10%","borderWidth":"8rpx 4rpx 4rpx 4rpx","width":"30%","position":"absolute","borderStyle":"solid","height":"400rpx"}' v-if="systemIntroductionDetail.picture3" :src="baseUrl+systemIntroductionDetail.picture3">
		  </view>
		  <view :style='{"padding":"28rpx 40rpx 60rpx","boxShadow":"inset 0px 0px 0px 0px #87acf1","margin":"40rpx 0px 0 0","borderColor":"#f9e1ec","color":"#333","textIndent":"2em","borderRadius":"16rpx","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,248,251,1) 50%)","borderWidth":"2rpx","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","borderStyle":"solid","height":"auto","order":"3"}' v-html="systemIntroductionDetail.content"></view>
		  <view :style='{"width":"82%","position":"absolute","top":"152rpx","background":"url() no-repeat","display":"none","height":"36rpx"}' />
		  <view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
		</view>

		<!-- 商品推荐 -->
		<view class="listBox recommend">
			<view v-if="false && 1 == 1" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"padding":"0 20rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.1)","margin":"80rpx auto 40rpx","overflow":"hidden","borderRadius":"0","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230307/eda9025d32634665b029d678a6c01430.gif) no-repeat left top / 60% auto,url(http://codegen.caihongy.cn/20230307/84f122eda0474ce68d6b4e8917198877.gif) no-repeat right bottom / 60% auto","width":"calc(60% - 0px)","lineHeight":"160rpx","height":"160rpx"}'>
				<view :style='{"padding":"0 0px","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"0","color":"#454553","borderRadius":"0","alignItems":"flex-end","background":"none","display":"flex","width":"auto","fontSize":"44rpx","fontWeight":"600","justifyContent":"center"}'>民间故事推荐</view>
			</view>
			
			<view v-if="false && 1 == 2" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			
			
			<!-- 样式3 -->
			<view class="list-box style3" :style='{"width":"100%","padding":"0px","margin":"0","background":"none","height":"auto"}'>
				<view @tap="onDetailTap('minjiangushi',product.id)" v-for="(product,index) in minjiangushilist" :key="index" class="list-item" :style='{"border":"0px solid #f5eae2","padding":"20rpx 20rpx","margin":"0 0 40rpx","borderRadius":"0px","alignItems":"center","flexWrap":"wrap","background":"none","display":"flex","width":"100%","height":"auto"}'>
					<image :style='{"border":"0px solid #d7a37b","padding":"0 40rpx","objectFit":"cover","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20230307/24100fcd15304f63a90bf00786ba1f3d.png) no-repeat left center / 100% 80%","display":"block","width":"360rpx","height":"300rpx","order":"2"}' class="list-item-image" mode="aspectFill" v-if="product.tupian.substring(0,4)=='http'" :src="product.tupian"></image>
					<image :style='{"border":"0px solid #d7a37b","padding":"0 40rpx","objectFit":"cover","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20230307/24100fcd15304f63a90bf00786ba1f3d.png) no-repeat left center / 100% 80%","display":"block","width":"360rpx","height":"300rpx","order":"2"}' class="list-item-image" mode="aspectFill" v-else :src="product.tupian?baseUrl+product.tupian.split(',')[0]:''"></image>
					<view class="list-item-body" :style='{"padding":"0","margin":"0","borderColor":"#d7a37a","alignItems":"flex-end","flexWrap":"wrap","borderWidth":"0px","background":"none","display":"flex","width":"calc(100% - 360rpx)","borderStyle":"solid","justifyContent":"center","height":"240rpx"}'>
						<view :style='{"padding":"0 20rpx","margin":"0 20rpx 0px","borderColor":"#f8deea","whiteSpace":"nowrap","color":"#454553","overflow":"hidden","background":"none","borderWidth":"2rpx 0 0","width":"calc(100% - 40rpx)","lineHeight":"60rpx","fontSize":"28rpx","textOverflow":"ellipsis","borderStyle":"solid","fontWeight":"500"}' class="list-item-title">故事名称:{{product.gushimingcheng}}</view>
					</view>
				</view>
			</view>
			
			  
			
			
			  
			
			  
			<view v-if="false && 1 == 3" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
		<!-- 商品推荐 -->
		
		
		<!-- 关于我们 -->
		<view :style='{"padding":"80rpx 0px","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"60rpx auto 40rpx","borderRadius":"0px","alignItems":"center","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230307/fb55f80a11b145148308bc56cf4230d2.png) no-repeat left top,url(http://codegen.caihongy.cn/20230307/19118f2203184dd0bc351f80f12a3b51.png) no-repeat right bottom,#fff","display":"flex","width":"calc(100% - 48rpx)","position":"relative","justifyContent":"center","height":"auto"}'>
		  <view :style='{"padding":"20rpx","margin":"0 20rpx","borderColor":"#eee","color":"#454553","alignItems":"center","textAlign":"center","display":"flex","overflow":"hidden","borderRadius":"8rpx","background":"none","borderWidth":"2rpx","width":"88rpx","lineHeight":"1.3","fontSize":"44rpx","borderStyle":"solid","fontWeight":"500","height":"auto"}'>{{aboutUsDetail.title}}</view>
		  <view :style='{"padding":"0px 80rpx 0 16rpx","margin":"0px 0 0","overflow":"hidden","color":"#fff","borderRadius":"0","textAlign":"center","background":"url() no-repeat right top / auto 100%,#5489ed","display":"none","width":"auto","fontSize":"28rpx","lineHeight":"80rpx","height":"80rpx"}'>{{aboutUsDetail.subtitle}}</view>
		  <view :style='{"border":"0px double #ffeeba","padding":"0px","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"0 20rpx 0 0","display":"flex","float":"right","justifyContent":"space-between","borderRadius":"0","flexWrap":"wrap","background":"none","width":"240rpx","height":"auto","order":"1"}'>
		    <img :style='{"padding":"8rpx","boxShadow":"inset 0px 0px 112rpx 0px #fff","margin":"0px 0 0","borderColor":"#eee #f2c2d8","objectFit":"cover","borderRadius":"100%","borderWidth":"8rpx 4rpx","background":"#fff","display":"inline-block","width":"240rpx","borderStyle":"solid","height":"240rpx"}' v-if="aboutUsDetail.picture1" :src="baseUrl+aboutUsDetail.picture1">
		    <img :style='{"padding":"0px","margin":"0px","borderColor":"#555","objectFit":"cover","borderRadius":"40rpx 40rpx 0 0","borderWidth":"0 0 2rpx","display":"none","width":"48%","borderStyle":"solid","height":"360rpx"}' v-if="aboutUsDetail.picture2" :src="baseUrl+aboutUsDetail.picture2">
		    <img :style='{"width":"48%","margin":"0px","objectFit":"cover","borderRadius":"16rpx","display":"none","height":"160rpx"}' v-if="aboutUsDetail.picture3" :src="baseUrl+aboutUsDetail.picture3">
		  </view>
		  <view :style='{"padding":"0","boxShadow":"0px 0px 0px #ccc","margin":"0","borderColor":"#c87940","color":"#333","display":"flex","textIndent":"2em","float":"left","overflow":"hidden","borderRadius":"0px","background":"none","borderWidth":"0px","flex":"1","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","borderStyle":"solid","height":"328rpx","order":"2"}' v-html="aboutUsDetail.content"></view>
		  <view :style='{"width":"80%","position":"absolute","top":"140rpx","background":"url() no-repeat","display":"none","height":"36rpx "}' />
		  <view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
		</view>

		<!-- 商品列表 -->
										<view class="listBox list">
			<view v-if="false && 1 == 1" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		  
			<view class="title" :style='{"padding":"0 20rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.1)","margin":"0 auto 0px","borderRadius":"0","background":"url(http://codegen.caihongy.cn/20230307/eda9025d32634665b029d678a6c01430.gif) no-repeat left top / 60% auto,url(http://codegen.caihongy.cn/20230307/84f122eda0474ce68d6b4e8917198877.gif) no-repeat right bottom / 60% auto","display":"flex","width":"calc(60% - 0px)","lineHeight":"160rpx","position":"relative","justifyContent":"space-between","height":"160rpx"}'>
				<view :style='{"padding":"0","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"0px auto 0","color":"#454553","alignItems":"flex-end","textAlign":"center","display":"flex","minWidth":"240rpx","justifyContent":"center","borderRadius":"0px","background":"none","width":"calc(100% - 0px)","fontSize":"44rpx","fontWeight":"600"}'>民族文化</view>
				<text :style='{"padding":"0 0px 0 0","margin":"0px 0px 0 0","color":"#555","alignItems":"center","background":"none","display":"flex","fontSize":"28rpx","position":"absolute","right":"-20%"}' @tap="onPageTap('minzuwenhua')">查看更多</text>
			</view>
			
			<view v-if="false && 1 == 2" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
		  		  <!-- 样式1 -->
		  <view class="list-box style1" :style='{"padding":"0px","boxShadow":"0 0px 0px rgba(0,0,0,.1)","margin":"80rpx auto","borderRadius":"0px","flexWrap":"wrap","background":"none","display":"flex","width":"calc(100% - 48rpx)","justifyContent":"space-between","height":"auto"}'>
			<view @tap="onDetailTap('minzuwenhua',product.id)" v-for="(product,index) in homeminzuwenhualist" :key="index" class="list-item" :style='{"padding":"0px","margin":"0 0 40rpx","backgroundColor":"#fff","borderColor":"#fbd341 #eee #fbd341","borderRadius":"60rpx","flexWrap":"wrap","borderWidth":"0px","display":"flex","width":"48%","borderStyle":"solid","height":"auto"}'>
			                			  <view :style='{"padding":"4rpx 20rpx","borderColor":"#f2c2d8","margin":"0 auto 20rpx","whiteSpace":"nowrap","color":"#333","textAlign":"center","overflow":"hidden","borderWidth":"0 0 2rpx","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis","borderStyle":"solid","order":"2"}' class="list-item-title ">{{product.biaoti}}</view>
			  			  			  			                			  			  			                			  			  <image :style='{"minHeight":"260rpx","padding":"0 40rpx","margin":"0 auto 10rpx","objectFit":"cover","borderRadius":"20rpx","background":"url(http://codegen.caihongy.cn/20230307/24100fcd15304f63a90bf00786ba1f3d.png) no-repeat left center / 100% 80%","display":"block","width":"100%","height":"auto"}' class="list-item-image" mode="aspectFill" v-if="product.tupian.substring(0,4)=='http'" :src="product.tupian"></image>
			  <image :style='{"minHeight":"260rpx","padding":"0 40rpx","margin":"0 auto 10rpx","objectFit":"cover","borderRadius":"20rpx","background":"url(http://codegen.caihongy.cn/20230307/24100fcd15304f63a90bf00786ba1f3d.png) no-repeat left center / 100% 80%","display":"block","width":"100%","height":"auto"}' class="list-item-image" mode="aspectFill" v-else :src="product.tupian?baseUrl+product.tupian.split(',')[0]:''"></image>
			  			  			                			  			  			                			  			  			                			  			  			                			  			  			                			  			  			  			</view>
		  </view>
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
			<view v-if="false && 1 == 3" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
												<view class="listBox list">
			<view v-if="false && 1 == 1" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		  
			<view class="title" :style='{"padding":"0 20rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.1)","margin":"0 auto 0px","borderRadius":"0","background":"url(http://codegen.caihongy.cn/20230307/eda9025d32634665b029d678a6c01430.gif) no-repeat left top / 60% auto,url(http://codegen.caihongy.cn/20230307/84f122eda0474ce68d6b4e8917198877.gif) no-repeat right bottom / 60% auto","display":"flex","width":"calc(60% - 0px)","lineHeight":"160rpx","position":"relative","justifyContent":"space-between","height":"160rpx"}'>
				<view :style='{"padding":"0","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"0px auto 0","color":"#454553","alignItems":"flex-end","textAlign":"center","display":"flex","minWidth":"240rpx","justifyContent":"center","borderRadius":"0px","background":"none","width":"calc(100% - 0px)","fontSize":"44rpx","fontWeight":"600"}'>传统节日</view>
				<text :style='{"padding":"0 0px 0 0","margin":"0px 0px 0 0","color":"#555","alignItems":"center","background":"none","display":"flex","fontSize":"28rpx","position":"absolute","right":"-20%"}' @tap="onPageTap('chuantongjieri')">查看更多</text>
			</view>
			
			<view v-if="false && 1 == 2" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
		  		  <!-- 样式1 -->
		  <view class="list-box style1" :style='{"padding":"0px","boxShadow":"0 0px 0px rgba(0,0,0,.1)","margin":"80rpx auto","borderRadius":"0px","flexWrap":"wrap","background":"none","display":"flex","width":"calc(100% - 48rpx)","justifyContent":"space-between","height":"auto"}'>
			<view @tap="onDetailTap('chuantongjieri',product.id)" v-for="(product,index) in homechuantongjierilist" :key="index" class="list-item" :style='{"padding":"0px","margin":"0 0 40rpx","backgroundColor":"#fff","borderColor":"#fbd341 #eee #fbd341","borderRadius":"60rpx","flexWrap":"wrap","borderWidth":"0px","display":"flex","width":"48%","borderStyle":"solid","height":"auto"}'>
			                			  <view :style='{"padding":"4rpx 20rpx","borderColor":"#f2c2d8","margin":"0 auto 20rpx","whiteSpace":"nowrap","color":"#333","textAlign":"center","overflow":"hidden","borderWidth":"0 0 2rpx","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis","borderStyle":"solid","order":"2"}' class="list-item-title ">节日名称:{{product.jierimingcheng}}</view>
			  			  			  			                			  			  			                			  			  			                			  			  <image :style='{"minHeight":"260rpx","padding":"0 40rpx","margin":"0 auto 10rpx","objectFit":"cover","borderRadius":"20rpx","background":"url(http://codegen.caihongy.cn/20230307/24100fcd15304f63a90bf00786ba1f3d.png) no-repeat left center / 100% 80%","display":"block","width":"100%","height":"auto"}' class="list-item-image" mode="aspectFill" v-if="product.fengmian.substring(0,4)=='http'" :src="product.fengmian"></image>
			  <image :style='{"minHeight":"260rpx","padding":"0 40rpx","margin":"0 auto 10rpx","objectFit":"cover","borderRadius":"20rpx","background":"url(http://codegen.caihongy.cn/20230307/24100fcd15304f63a90bf00786ba1f3d.png) no-repeat left center / 100% 80%","display":"block","width":"100%","height":"auto"}' class="list-item-image" mode="aspectFill" v-else :src="product.fengmian?baseUrl+product.fengmian.split(',')[0]:''"></image>
			  			  			                			  			  			                			  			  			                			  			  			                			  			  			                			  			  			                			  			  			  			</view>
		  </view>
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
			<view v-if="false && 1 == 3" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
												<view class="listBox list">
			<view v-if="false && 1 == 1" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		  
			<view class="title" :style='{"padding":"0 20rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.1)","margin":"0 auto 0px","borderRadius":"0","background":"url(http://codegen.caihongy.cn/20230307/eda9025d32634665b029d678a6c01430.gif) no-repeat left top / 60% auto,url(http://codegen.caihongy.cn/20230307/84f122eda0474ce68d6b4e8917198877.gif) no-repeat right bottom / 60% auto","display":"flex","width":"calc(60% - 0px)","lineHeight":"160rpx","position":"relative","justifyContent":"space-between","height":"160rpx"}'>
				<view :style='{"padding":"0","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"0px auto 0","color":"#454553","alignItems":"flex-end","textAlign":"center","display":"flex","minWidth":"240rpx","justifyContent":"center","borderRadius":"0px","background":"none","width":"calc(100% - 0px)","fontSize":"44rpx","fontWeight":"600"}'>民间故事</view>
				<text :style='{"padding":"0 0px 0 0","margin":"0px 0px 0 0","color":"#555","alignItems":"center","background":"none","display":"flex","fontSize":"28rpx","position":"absolute","right":"-20%"}' @tap="onPageTap('minjiangushi')">查看更多</text>
			</view>
			
			<view v-if="false && 1 == 2" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
		  		  <!-- 样式1 -->
		  <view class="list-box style1" :style='{"padding":"0px","boxShadow":"0 0px 0px rgba(0,0,0,.1)","margin":"80rpx auto","borderRadius":"0px","flexWrap":"wrap","background":"none","display":"flex","width":"calc(100% - 48rpx)","justifyContent":"space-between","height":"auto"}'>
			<view @tap="onDetailTap('minjiangushi',product.id)" v-for="(product,index) in homeminjiangushilist" :key="index" class="list-item" :style='{"padding":"0px","margin":"0 0 40rpx","backgroundColor":"#fff","borderColor":"#fbd341 #eee #fbd341","borderRadius":"60rpx","flexWrap":"wrap","borderWidth":"0px","display":"flex","width":"48%","borderStyle":"solid","height":"auto"}'>
			                			  <view :style='{"padding":"4rpx 20rpx","borderColor":"#f2c2d8","margin":"0 auto 20rpx","whiteSpace":"nowrap","color":"#333","textAlign":"center","overflow":"hidden","borderWidth":"0 0 2rpx","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis","borderStyle":"solid","order":"2"}' class="list-item-title ">故事名称:{{product.gushimingcheng}}</view>
			  			  			  			                			  			  			                			  			  			                			  			  <image :style='{"minHeight":"260rpx","padding":"0 40rpx","margin":"0 auto 10rpx","objectFit":"cover","borderRadius":"20rpx","background":"url(http://codegen.caihongy.cn/20230307/24100fcd15304f63a90bf00786ba1f3d.png) no-repeat left center / 100% 80%","display":"block","width":"100%","height":"auto"}' class="list-item-image" mode="aspectFill" v-if="product.tupian.substring(0,4)=='http'" :src="product.tupian"></image>
			  <image :style='{"minHeight":"260rpx","padding":"0 40rpx","margin":"0 auto 10rpx","objectFit":"cover","borderRadius":"20rpx","background":"url(http://codegen.caihongy.cn/20230307/24100fcd15304f63a90bf00786ba1f3d.png) no-repeat left center / 100% 80%","display":"block","width":"100%","height":"auto"}' class="list-item-image" mode="aspectFill" v-else :src="product.tupian?baseUrl+product.tupian.split(',')[0]:''"></image>
			  			  			                			  			  			                			  			  			                			  			  			                			  			  			                			  			  			                			  			  			                			  			  			                			  			  			                			  			  			  			</view>
		  </view>
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
			<view v-if="false && 1 == 3" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
																																		<!-- 商品列表 -->
		
		
		<!-- 新闻资讯 -->
																																		<view class="listBox news">
			<view v-if="false && 1 == 1" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"padding":"0 20rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.1)","margin":"0px auto 0px","borderRadius":"0","background":"url(http://codegen.caihongy.cn/20230307/eda9025d32634665b029d678a6c01430.gif) no-repeat left top / 60% auto,url(http://codegen.caihongy.cn/20230307/84f122eda0474ce68d6b4e8917198877.gif) no-repeat right bottom / 60% auto","display":"flex","width":"calc(60% - 0px)","lineHeight":"160rpx","position":"relative","justifyContent":"space-between","height":"160rpx"}'>
				<view :style='{"padding":"0","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"0px auto 0","color":"#454553","textAlign":"center","display":"flex","minWidth":"240rpx","justifyContent":"center","borderRadius":"0px","background":"none","width":"calc(100% - 0px)","fontSize":"44rpx","fontWeight":"600"}'>公告信息</view>
				<text :style='{"padding":"0","margin":"0","color":"#555","alignItems":"center","background":"none","display":"flex","fontSize":"28rpx","position":"absolute","right":"-20%"}' @tap="onPageTap('news')">查看更多</text>
			</view>
			
			<view v-if="false && 1 == 2" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
					  
						
						
		  <!-- 样式4 -->
		  		  <view class="news-box1" :style='{"padding":"0px 24rpx","margin":"60rpx 0 60rpx","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
			<view @tap="onNewsDetailTap(item.id)" v-for="(item,index) in news" :key="index" class="list-item" :style='{"padding":"20rpx 0 40rpx","margin":"0 0 40rpx","borderColor":"#d8e9f0","borderRadius":"0px","flexWrap":"wrap","background":"rgba(255,255,255,1)","borderWidth":"0 0 2rpx","display":"block","width":"100%","borderStyle":"dashed","height":"auto"}'>
			  <view class="list-item-body" :style='{"padding":"20rpx","margin":"20rpx 0 0 0","borderColor":"#f8deea","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,248,251,1) 50%)","borderWidth":"2rpx 0","width":"60%","borderStyle":"solid","float":"left","height":"auto","order":"2"}'>
				<view :style='{"padding":"0 20rpx","margin":"0","whiteSpace":"nowrap","overflow":"hidden","color":"#454553","width":"100%","lineHeight":"48rpx","fontSize":"32rpx","textOverflow":"ellipsis","fontWeight":"600","order":"2"}' class="title ">{{item.title}}</view>
				<view :style='{"padding":"0 20rpx","margin":"0","overflow":"hidden","color":"#666","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textIndent":"2em","height":"96rpx"}' class="desc ">{{item.introduction}}</view>
				<view :style='{"padding":"0 20rpx","margin":"0","color":"#999","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"28rpx"}' class="time">{{item.addtime.split(" ")[0]}}</view>
			  </view>
			  <image :style='{"padding":"0px","boxShadow":"8rpx -8rpx 0px #fbd8e8","margin":"0 auto","objectFit":"cover","borderRadius":"8rpx","display":"block","width":"36%","float":"right","height":"240rpx","order":"2"}' mode="aspectFill" class="listmpic" :src="baseUrl+item.picture"></image>
			</view>
		  </view>
		  		  
		  <!-- 样式5 -->
		  		  
		  <!-- 样式6 -->
		  		  
		  <!-- 样式7 -->
		  		  
		  <!-- 样式8 -->
		  		  
		  <!-- 样式9 -->
		  			
			<view v-if="false && 1 == 3" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
																										<!-- 新闻资讯 -->
				

	</view>
</view>
</template>

<script>
    import menu from '@/utils/menu'
	import '@/assets/css/global-restaurant.css'
	import uniIcons from "@/components/uni-ui/lib/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				options2: {
					effect: 'flip',
					loop : true
				},
				options3: {
					effect: 'cube',
					loop : true,
					cubeEffect: {
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}
				},
				rows: 2,
				column: 4,
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
                role : '',
                aboutUsDetail: {},
                systemIntroductionDetail: {},
                menuList: [],
                swiperMenuList:[],
                user: {},
                tableName:'',
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				queryList:[
					{
						queryName:"标题",
					},
					{
						queryName:"节日名称",
					},
					{
						queryName:"故事名称",
					},
				],
				queryIndex: 0,
				searchForm:{
					minzuwenhuabiaoti:'',
					chuantongjierijierimingcheng:'',
					minjiangushigushimingcheng:'',
				},
				CustomBar: '0',

				//轮播
				swiperList: [],
				minjiangushilist: [],
				homeminzuwenhualist: [],
				homechuantongjierilist: [],
				homeminjiangushilist: [],
				news: [],
			}
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
            this.menuList.forEach((item,key) => {
                if(this.role==item.roleName) {
                    item.frontMenu.forEach((item2,key2) => {
                        if(item2.child[0].buttons.indexOf("查看")>-1) {
                            this.swiperMenuList.push(item2);
                        }
                    })
                }
            })
        },
		async onShow() {
            this.btnColor = this.btnColor.sort(()=> {
                    return (0.5-Math.random());
            });
            let res;
			// 轮播图
			let swiperList = []
			res = await this.$api.page('config', {
				page: 1,
				limit: 5
			});
			for (let item of res.data.list) {
				if (item.name.indexOf('picture') >= 0 && item.value && item.value!="" && item.value!=null ) {
					swiperList.push({
						img: item.value,
                        title: item.name
					});
				}
			}
			if (swiperList) {
				this.swiperList = swiperList;
			}
            this.getAboutUs();
            this.getSystemIntroduction();
			// 公告信息
			res = await this.$api.list('news', {
				page: 1,
				limit: 6
			});
			this.news = res.data.list

			// 推荐信息
			if(uni.getStorageSync("userid")!==null) {
				res = await this.$api.recommend2('minjiangushi', {                                              
                    page: 1,
                    limit: 4
                });
			} else {
				res = await this.$api.recommend('minjiangushi', {                                              
                    page: 1,
                    limit: 4
                });
			}
			this.minjiangushilist = res.data.list

			res = await this.$api.list('minzuwenhua', {
				page: 1,

				limit: 4
			});
			this.homeminzuwenhualist = res.data.list
			res = await this.$api.list('chuantongjieri', {
				page: 1,

				limit: 4
			});
			this.homechuantongjierilist = res.data.list
			res = await this.$api.list('minjiangushi', {
				page: 1,

				limit: 4
			});
			this.homeminjiangushilist = res.data.list
		},

		methods: {

			//查询条件切换
			queryChange(e) {
				this.queryIndex=e.detail.value;
				this.searchForm.minzuwenhuabiaoti="";
				this.searchForm.chuantongjierijierimingcheng="";
				this.searchForm.minjiangushigushimingcheng="";
			},
			//轮播图跳转
			onSwiperTap(e) {

			},
            async getAboutUs() {
                let res = await this.$api.info('aboutus', 1)
                this.aboutUsDetail = res.data;
            },
            async getSystemIntroduction() {
                let res = await this.$api.info('systemintro', 1)
                this.systemIntroductionDetail = res.data;
            },
			// 新闻详情
			onNewsDetailTap(id) {
				this.$utils.jump(`../news-detail/news-detail?id=${id}`)
			},
			// 推荐列表点击详情
			onDetailTap(tableName, id) {
				this.$utils.jump(`../${tableName}/detail?id=${id}`)
			},
			onPageTap(tableName){
				if(this.queryIndex==0) {
					uni.setStorageSync('indexQueryCondition',this.searchForm.minzuwenhuabiaoti);
					this.searchForm.minzuwenhuabiaoti = '';
				}
				if(this.queryIndex==1) {
					uni.setStorageSync('indexQueryCondition',this.searchForm.chuantongjierijierimingcheng);
					this.searchForm.chuantongjierijierimingcheng = '';
				}
				if(this.queryIndex==2) {
					uni.setStorageSync('indexQueryCondition',this.searchForm.minjiangushigushimingcheng);
					this.searchForm.minjiangushigushimingcheng = '';
				}

				uni.navigateTo({
					url: `../${tableName}/list`,
					fail: function(){
						uni.switchTab({
							url: `../${tableName}/list`
						});
					}
				});
				// this.$utils.jump(`../${tableName}/list`)
			},
            onPageTap2(url) {
                uni.setStorageSync("useridTag",0);
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
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>

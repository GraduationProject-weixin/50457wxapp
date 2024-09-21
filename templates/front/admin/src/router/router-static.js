import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import minzuwenhua from '@/views/modules/minzuwenhua/list'
    import gushileixing from '@/views/modules/gushileixing/list'
    import minjiangushi from '@/views/modules/minjiangushi/list'
    import storeup from '@/views/modules/storeup/list'
    import discussminjiangushi from '@/views/modules/discussminjiangushi/list'
    import chuantongjieri from '@/views/modules/chuantongjieri/list'
    import discussminzuwenhua from '@/views/modules/discussminzuwenhua/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import jierileixing from '@/views/modules/jierileixing/list'
    import discusschuantongjieri from '@/views/modules/discusschuantongjieri/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/minzuwenhua',
        name: '民族文化',
        component: minzuwenhua
      }
      ,{
	path: '/gushileixing',
        name: '故事类型',
        component: gushileixing
      }
      ,{
	path: '/minjiangushi',
        name: '民间故事',
        component: minjiangushi
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/discussminjiangushi',
        name: '民间故事评论',
        component: discussminjiangushi
      }
      ,{
	path: '/chuantongjieri',
        name: '传统节日',
        component: chuantongjieri
      }
      ,{
	path: '/discussminzuwenhua',
        name: '民族文化评论',
        component: discussminzuwenhua
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/jierileixing',
        name: '节日类型',
        component: jierileixing
      }
      ,{
	path: '/discusschuantongjieri',
        name: '传统节日评论',
        component: discusschuantongjieri
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;

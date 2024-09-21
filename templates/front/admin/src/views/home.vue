<template>
<div class="content" :style='{"padding":"30px"}'>
	<div class="text" :style='{"margin":"50px auto","fontSize":"34px","color":"rgb(51, 51, 51)","textAlign":"center","fontWeight":"bold"}'>欢迎使用 {{this.$project.projectName}}</div>
    <div class="cardView">
        <div class="cards" :style='{"margin":"0 0 20px 0","alignItems":"center","justifyContent":"center","display":"flex"}'>
			<div :style='{"border":"1px solid #ccc","boxShadow":"0 0px 0px rgba(0,0,0,.3)","margin":"0 10px","borderRadius":"20px 40px","display":"flex"}' v-if="isAuth('yonghu','首页总数')">
				<div :style='{"width":"180px","borderRadius":"20px 40px","background":"#5497f2","height":"120px"}'></div>
				<div :style='{"width":"160px","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex","height":"120px"}'>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"34px","color":"#888","fontWeight":"bold","height":"24px"}'>{{yonghuCount}}</div>
					<div :style='{"margin":"10px 0","lineHeight":"24px","fontSize":"16px","color":"#666","height":"24px"}'>用户总数</div>
				</div>
			</div>
			<div :style='{"border":"1px solid #ccc","boxShadow":"0 0px 0px rgba(0,0,0,.3)","margin":"0 10px","borderRadius":"20px 40px","display":"flex"}' v-if="isAuth('chuantongjieri','首页总数')">
				<div :style='{"width":"180px","borderRadius":"20px 40px","background":"#5497f2","height":"120px"}'></div>
				<div :style='{"width":"160px","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex","height":"120px"}'>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"34px","color":"#888","fontWeight":"bold","height":"24px"}'>{{chuantongjieriCount}}</div>
					<div :style='{"margin":"10px 0","lineHeight":"24px","fontSize":"16px","color":"#666","height":"24px"}'>传统节日总数</div>
				</div>
			</div>
			<div :style='{"border":"1px solid #ccc","boxShadow":"0 0px 0px rgba(0,0,0,.3)","margin":"0 10px","borderRadius":"20px 40px","display":"flex"}' v-if="isAuth('minjiangushi','首页总数')">
				<div :style='{"width":"180px","borderRadius":"20px 40px","background":"#5497f2","height":"120px"}'></div>
				<div :style='{"width":"160px","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex","height":"120px"}'>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"34px","color":"#888","fontWeight":"bold","height":"24px"}'>{{minjiangushiCount}}</div>
					<div :style='{"margin":"10px 0","lineHeight":"24px","fontSize":"16px","color":"#666","height":"24px"}'>民间故事总数</div>
				</div>
			</div>
        </div>
        <div style="display: flex;align-items: center;width: 100%;margin-bottom: 10px;">
            <el-card style="width: 33.3%;margin: 0 10px;" v-if="isAuth('yonghu','首页统计')">
                <div id="yonghuChart1" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 33.3%;margin: 0 10px;" v-if="isAuth('chuantongjieri','首页统计')">
                <div id="chuantongjieriChart1" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 33.3%;margin: 0 10px;" v-if="isAuth('minjiangushi','首页统计')">
                <div id="minjiangushiChart1" style="width:100%;height:400px;"></div>
            </el-card>
        </div>
    </div>
</div>
</template>
<script>
//3
import router from '@/router/router-static'
import * as echarts from 'echarts'
export default {
	data() {
		return {
            yonghuCount: 0,
            chuantongjieriCount: 0,
            minjiangushiCount: 0,
		};
	},
  mounted(){
    this.init();
    this.getyonghuCount();
    this.yonghuChat1();
    this.getchuantongjieriCount();
    this.chuantongjieriChat1();
    this.getminjiangushiCount();
    this.minjiangushiChat1();
  },
  methods:{
    init(){
        if(this.$storage.get('Token')){
        this.$http({
            url: `${this.$storage.get('sessionTable')}/session`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code != 0) {
            router.push({ name: 'login' })
            }
        });
        }else{
            router.push({ name: 'login' })
        }
    },
    getyonghuCount() {
        this.$http({
            url: `yonghu/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.yonghuCount = data.data
            }
        })
    },

    yonghuChat1() {
      this.$nextTick(()=>{

        var yonghuChart1 = echarts.init(document.getElementById("yonghuChart1"),'macarons');
        this.$http({
            url: "yonghu/group/yonghuzhanghao",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].yonghuzhanghao);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].yonghuzhanghao
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '注册人数统计',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                yonghuChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    yonghuChart1.resize();
                };
            }
        });
      })
    },






    getchuantongjieriCount() {
        this.$http({
            url: `chuantongjieri/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.chuantongjieriCount = data.data
            }
        })
    },

    chuantongjieriChat1() {
      this.$nextTick(()=>{

        var chuantongjieriChart1 = echarts.init(document.getElementById("chuantongjieriChart1"),'macarons');
        this.$http({
            url: "chuantongjieri/group/fabushijian",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].fabushijian);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].fabushijian
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '节日文章统计',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        data: xAxis
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                chuantongjieriChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    chuantongjieriChart1.resize();
                };
            }
        });
      })
    },






    getminjiangushiCount() {
        this.$http({
            url: `minjiangushi/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.minjiangushiCount = data.data
            }
        })
    },

    minjiangushiChat1() {
      this.$nextTick(()=>{

        var minjiangushiChart1 = echarts.init(document.getElementById("minjiangushiChart1"),'macarons');
        this.$http({
            url: "minjiangushi/group/fabushijian",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].fabushijian);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].fabushijian
                    })
                }
                var option = {};
                option = {
                        title: {
                            text: '故事文章统计',
                            left: 'center'
                        },
                        tooltip: {
                          trigger: 'item',
                          formatter: '{b} : {c} ({d}%)'
                        },
                        series: [
                            {
                                type: 'pie',
                                radius: ['25%', '55%'],
                                center: ['50%', '60%'],
                                data: pArray,
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                };
                // 使用刚指定的配置项和数据显示图表。
                minjiangushiChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    minjiangushiChart1.resize();
                };
            }
        });
      })
    },






  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                /deep/.el-card__body{
                    padding: 0;
                }
            }
        }
    }
</style>

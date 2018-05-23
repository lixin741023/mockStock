<template>
	<div class="ZhiboDetail componentsInit">
		<div class="nav">
			<router-link :to="{name:'Zhibo'}" tag="span" class="mui-icon mui-icon-back"></router-link>
			<span>令狐老师</span>
		</div>
		<div style="height: 0.4rem;"></div>
		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" @top-status-change="handleTopChange">
			<div slot="top" class="mint-loadmore-top" style="font-size: 13px; color: #ccc;">
		      <span v-show="topStatus === 'pull'" :class="{ 'rotate': topStatus === 'drop' }">下拉加载</span>
		      <span v-show="topStatus === 'loading'">Loading...</span>
		      <span v-show="topStatus === 'drop'">即刻释放</span>
		    </div>
		<ul>
			<li class="ZhiboList">
				<div class="info">
					<img src="../images/Zhibo_img.jpg" />
					<div>
						<span>令狐老师</span>
						<span>04-17 15:30</span>
					</div>
					<div class="read">已阅读：12059次</div>
				</div>
				<h3>【项目标题项目标题项目标题项目标题】</h3>
				<div class="ZhiboContent">
					gitHub是一个面向开源及私有软件项目的托管平台，因为只支持git 作为唯一的版本库格式进行托管，故名gitHub。
					<div class="ZhiboContent_img">
						<img src="../images/ZhiboContent1.jpg" />
					</div>
					gitHub于2008年4月10日正式上线，除了git代码仓库托管及基本的 Web管理界面以外，还提供了订阅、讨论组、文本渲染、在线文件编辑
				</div>
			</li>
			<li class="ZhiboList">
				<div class="info">
					<img src="../images/Zhibo_img.jpg" />
					<div>
						<span>令狐老师</span>
						<span>04-17 15:30</span>
					</div>
					<div class="read">已阅读：12059次</div>
				</div>
				<h3>【项目标题项目标题项目标题项目标题】</h3>
				<div class="ZhiboContent">
					gitHub是一个面向开源及私有软件项目的托管平台，因为只支持git 作为唯一的版本库格式进行托管，故名gitHub。
					<div class="ZhiboContent_img">
						<img src="../images/ZhiboContent2.jpg" />
					</div>
					gitHub于2008年4月10日正式上线，除了git代码仓库托管及基本的 Web管理界面以外，还提供了订阅、讨论组、文本渲染、在线文件编辑
				</div>
			</li>
		</ul>
		</mt-loadmore>
	</div>
</template>

<script>
	import { Loadmore } from 'mint-ui';
	import Vue from 'vue';
	Vue.component(Loadmore.name, Loadmore);
	
	export default {
		data:()=>({
			allLoaded:false,
			topStatus:''
			
		}),
		methods:{
			loadTop(){
				setTimeout(()=>{this.$refs.loadmore.onTopLoaded()},1500)
			},
			loadBottom(){
				this.allLoaded = true;
  				this.$refs.loadmore.onBottomLoaded();
			},
			handleTopChange(status) {
        		this.topStatus = status;
      		}
		}
	}
</script>

<style lang="less" scoped>
	.nav {
		display: flex;
		align-items: center;
		position: relative;
		position: fixed;
		width: 100%;
		min-width: 360px;
		max-width: 1024px;
		z-index: 5;
		justify-content: center;
		height: 0.4rem;
		background-color: #0faef0;
		color: #fff;
		border-bottom: 1px solid #56ccfb;
		span:nth-child(1) {
			position: absolute;
			left: 0.1rem;
			font-size: 0.2rem;
		}
		span:nth-child(2) {
			font-size: 0.165rem;
		}
	}
	
	.ZhiboList {
		background-color: #fff;
		padding: 0.17rem 0.2rem;
		border-bottom: 0.05rem solid #D3D3D3;
	}
	
	.ZhiboList .info {
		display: flex;
	}
	
	.ZhiboList .info img {
		width: 0.45rem;
		height: 0.45rem;
		border-radius: 50%;
	}
	
	.ZhiboList .info div {
		margin-left: 0.1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	
	.ZhiboList .info div span:nth-child(1) {
		font-size: 0.14rem;
		font-weight: bold;
	}
	
	.ZhiboList .info div span:nth-child(2) {
		font-size: 0.11rem;
		color: #969696;
		font-weight: bold;
	}
	
	.ZhiboList h3 {
		font-size: 0.18rem;
		margin-top: 0.1rem!important;
		margin-bottom: 0.1rem!important;
	}
	
	.ZhiboList .ZhiboContent {
		text-indent: 0.25rem;
		line-height: 0.19rem;
		font-size: 0.125rem;
		letter-spacing: 1px;
	}
	
	.ZhiboList .read {
		margin-left: 0.8rem!important;
		font-size: 0.1rem;
		color: #b9b7b8;
	}
	
	.ZhiboContent_img {
		text-indent: 0;
		text-align: center;
		margin: 5px 0;
	}
	
	.ZhiboContent_img img {
		max-width: 100%;
		width: auto;
		height: auto;
	}
</style>
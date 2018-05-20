<template>
	<div class="teachersMessageList componentsInit">
		<div class="nav">
			<router-link :to="{name:'mine'}" tag="span" class="mui-icon mui-icon-back"></router-link>
			<span>导师消息</span>
		</div>
		<div style="height: 0.4rem;"></div>
		<div class="wrapperFather" style="height: 100%;">
		<ul style="padding: 0.1rem 0.1rem 0; ">
			<li>
				<div class="row1">
					<p class="title">红尘老师股票池变动</p>
					<p class="time">04-18:13:22</p>
					<p class="stockName">
						<span>股票名称：</span>
						<span>超能芯片</span>
					</p>
					<p class="stockCode">
						<span>股票代码：</span>
						<span>002284</span>
					</p>
					<p class="control">
						<span>操作类型：</span>
						<span>买入2成</span>
					</p>
					<div style="border-bottom: 1px solid #ccc;margin-top: 0.16rem;"></div>
				</div>
				<router-link :to="{name:'teachersDetail',params:{teachersDetail:231}}" tag="div" class="row2">
					<span>详细信息</span>
					<span class="mui-icon mui-icon-forward"></span>
				</router-link>
			</li>
			<li>
				<div class="row1">
					<p class="title">红尘老师股票池变动</p>
					<p class="time">04-18:13:22</p>
					<p class="stockName">
						<span>股票名称：</span>
						<span>超能芯片</span>
					</p>
					<p class="stockCode">
						<span>股票代码：</span>
						<span>002284</span>
					</p>
					<p class="control">
						<span>操作类型：</span>
						<span>买入2成</span>
					</p>
					<div style="border-bottom: 1px solid #ccc;margin-top: 0.16rem;"></div>
				</div>
				<router-link :to="{name:'teachersDetail',params:{teachersDetail:231}}" tag="div" class="row2">
					<span>详细信息</span>
					<span class="mui-icon mui-icon-forward"></span>
				</router-link>
			</li>
			<li>
				<div class="row1">
					<p class="title">红尘老师股票池变动</p>
					<p class="time">04-18:13:22</p>
					<p class="stockName">
						<span>股票名称：</span>
						<span>超能芯片</span>
					</p>
					<p class="stockCode">
						<span>股票代码：</span>
						<span>002284</span>
					</p>
					<p class="control">
						<span>操作类型：</span>
						<span>买入2成</span>
					</p>
					<div style="border-bottom: 1px solid #ccc;margin-top: 0.16rem;"></div>
				</div>
				<router-link :to="{name:'teachersDetail',params:{teachersDetail:231}}" tag="div" class="row2">
					<span>详细信息</span>
					<span class="mui-icon mui-icon-forward"></span>
				</router-link>
			</li>
			<li>
				<div class="row1">
					<p class="title">红尘老师股票池变动</p>
					<p class="time">04-18:13:22</p>
					<p class="stockName">
						<span>股票名称：</span>
						<span>超能芯片</span>
					</p>
					<p class="stockCode">
						<span>股票代码：</span>
						<span>002284</span>
					</p>
					<p class="control">
						<span>操作类型：</span>
						<span>买入2成</span>
					</p>
					<div style="border-bottom: 1px solid #ccc;margin-top: 0.16rem;"></div>
				</div>
				<router-link :to="{name:'teachersDetail',params:{teachersDetail:231}}" tag="div" class="row2">
					<span>详细信息</span>
					<span class="mui-icon mui-icon-forward"></span>
				</router-link>
			</li>
		</ul>
		</div>
	</div>
</template>
<script>
	export default {
		data:()=>({
			allLoaded:false
		}),
		mounted:function(){
			/*better-scroll滚动控制*/
			new Bscroll.default('.wrapperFather', {
				click: true
			});
		},
		methods:{
			
		}
		/*路由组件-离开守卫*/
//		beforeRouteLeave(to,form,next){
//			if(event.currentTarget.className=='row2'){
//				event.currentTarget.style.backgroundColor='#ccc';
//				setTimeout(()=>{next()},20);	
//			}else{
//				next();
//			};
//		}
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
			font-size: 0.2rem;
		}
	}
	
	.teachersMessageList {
		padding-bottom: 1rem;
	}
	
	.teachersMessageList ul li {
		border-radius: 0.08rem;
		background-color: #fff;
		font-family: "微软雅黑";
		margin-bottom: 0.1rem;
	}
	
	.teachersMessageList .row1 {
		padding: 0.13rem 0.12rem 0;
	}
	
	.teachersMessageList .row1 .title {
		font-size: 0.15rem;
	}
	
	.teachersMessageList .row1 .time {
		margin-top: 0.05rem!important;
		font-size: 0.13rem;
		color: #6D6D72;
	}
	
	.teachersMessageList .row1 .stockName {
		margin-top: 0.05rem!important;
		font-size: 0.14rem;
	}
	
	.teachersMessageList .row1 .stockCode {
		margin-top: 0.05rem!important;
		font-size: 0.14rem;
	}
	
	.teachersMessageList .row1 .control {
		margin-top: 0.05rem!important;
		font-size: 0.14rem;
	}
	
	.teachersMessageList .row2 {
		display: flex;
		padding: 0.13rem 0.15rem 0.13rem 0.12rem;
		justify-content: space-between;
		align-items: center;
	}
	
	.teachersMessageList .row2 span:nth-child(1) {
		color: #6D6D72;
		font-size: 0.14rem;
	}
	
	.teachersMessageList .row2 span:nth-child(2) {
		color: #6D6D72;
		font-size: 0.13rem;
		font-weight: bold;
	}
	
	.teachersMessageList .row2:active {
		background-color: #ccc;
		color: #fff!important;
	}
</style>
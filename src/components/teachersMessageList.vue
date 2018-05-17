<template>
	<div id="refreshContainer" class="mui-content mui-scroll-wrapper">
		<div class="nav">
			<router-link :to="{name:'mine'}" tag="span" class="mui-icon mui-icon-arrowthinleft" style="font-weight: bold;"></router-link>
			<span>导师消息</span>
		</div>
		<div style="height: 0.4rem;"></div>
		<div class="mui-scroll">
			<!--数据列表-->
			<ul style="padding: 0.1rem 0.1rem 0;">
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
					<div class="row2">
						<span>详细信息</span>
						<span class="mui-icon mui-icon-forward"></span>
					</div>
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
					<div class="row2">
						<span>详细信息</span>
						<span class="mui-icon mui-icon-forward"></span>
					</div>
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
					<div class="row2">
						<span>详细信息</span>
						<span class="mui-icon mui-icon-forward"></span>
					</div>
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
					<div class="row2">
						<span>详细信息</span>
						<span class="mui-icon mui-icon-forward"></span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import mui from '../plugins/mui/mui.js';
	export default {
		mounted: function(){
				mui.init({
				pullRefresh: {
					container: "#refreshContainer", //下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
					down: {
						height: 60, //可选,默认50.触发下拉刷新拖动距离,
						auto: true, //可选,默认false.首次加载自动下拉刷新一次
						contentdown: "下拉可以刷新", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
						contentover: "释放立即刷新", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
						contentrefresh: "正在刷新...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
						callback: function() {
							console.log('下拉模拟请求中……')
							setTimeout(function() {
								mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
							}, 1000)
						} //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
					}
				}
			});
			console.log(1)
		}
	} //
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
	
	#refreshContainer {
		padding-bottom: 0.7rem;
	}
	
	#refreshContainer ul li {
		border-radius: 0.08rem;
		background-color: #fff;
		font-family: "微软雅黑";
		margin-bottom: 0.1rem;
	}
	
	#refreshContainer .row1 {
		padding: 0.13rem 0.12rem 0;
	}
	
	#refreshContainer .row1 .title {
		font-size: 0.15rem;
	}
	
	#refreshContainer .row1 .time {
		margin-top: 0.05rem!important;
		font-size: 0.13rem;
		color: #6D6D72;
	}
	
	#refreshContainer .row1 .stockName {
		margin-top: 0.05rem!important;
		font-size: 0.14rem;
	}
	
	#refreshContainer .row1 .stockCode {
		margin-top: 0.05rem!important;
		font-size: 0.14rem;
	}
	
	#refreshContainer .row1 .control {
		margin-top: 0.05rem!important;
		font-size: 0.14rem;
	}
	
	#refreshContainer .row2 {
		display: flex;
		padding: 0.13rem 0.15rem 0.13rem 0.12rem;
		justify-content: space-between;
		align-items: center;
	}
	
	#refreshContainer .row2 span:nth-child(1) {
		color: #6D6D72;
		font-size: 0.14rem;
	}
	
	#refreshContainer .row2 span:nth-child(2) {
		color: #6D6D72;
		font-size: 0.13rem;
		font-weight: bold;
	}
	
	#refreshContainer .row2:active {
		background-color: #ccc;
		color: #fff!important;
	}
</style>
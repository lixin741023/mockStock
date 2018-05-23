<template>
	<div class="ChicangMore componentsInit">
		<div class="nav">
			<span @click="goBack()" class="mui-icon mui-icon-arrowthinleft" style="font-weight: bold;"></span>
			<span>当前持仓</span>
		</div>
		<div style="height: 0.4rem;"></div>
		<div class="wrapper_ChicangMore" style="height: 100%;">
		<ul>
			<li class="ChicangList">
				<p class="stockTitle">股市掘金(002500)</p>
				<div class="row">
					<div class="item">
						<span>成本价</span>
						<span>5:00元</span>
					</div>
					<div class="item">
						<span>持股</span>
						<span>2000股</span>
					</div>
				</div>
				<div class="row">
					<div class="item">
						<span>持仓占比</span>
						<span>20%</span>
					</div>
					<div class="item">
						<span>市值</span>
						<span>15080元</span>
					</div>
				</div>
				<div class="row">
					<div class="item_last">
						<span>盈亏</span>
						<span class="up_number">+10000</span>
						<div class="up_percent">+58.91%</div>
					</div>
				</div>
			</li>
			<li class="ChicangList">
				<p class="stockTitle">股市掘金(002500)</p>
				<div class="row">
					<div class="item">
						<span>成本价</span>
						<span>5:00元</span>
					</div>
					<div class="item">
						<span>持股</span>
						<span>2000股</span>
					</div>
				</div>
				<div class="row">
					<div class="item">
						<span>持仓占比</span>
						<span>20%</span>
					</div>
					<div class="item">
						<span>市值</span>
						<span>15080元</span>
					</div>
				</div>
				<div class="row">
					<div class="item_last">
						<span>盈亏</span>
						<span class="down_number">+10000</span>
						<div class="down_percent">+58.91%</div>
					</div>
				</div>
			</li>
			<li class="ChicangList">
				<p class="stockTitle">股市掘金(002500)</p>
				<div class="row">
					<div class="item">
						<span>成本价</span>
						<span>5:00元</span>
					</div>
					<div class="item">
						<span>持股</span>
						<span>2000股</span>
					</div>
				</div>
				<div class="row">
					<div class="item">
						<span>持仓占比</span>
						<span>20%</span>
					</div>
					<div class="item">
						<span>市值</span>
						<span>15080元</span>
					</div>
				</div>
				<div class="row">
					<div class="item_last">
						<span>盈亏</span>
						<span class="up_number">+10000</span>
						<div class="up_percent">+58.91%</div>
					</div>
				</div>
			</li>
			<li class="ChicangList">
				<p class="stockTitle">股市掘金(002500)</p>
				<div class="row">
					<div class="item">
						<span>成本价</span>
						<span>5:00元</span>
					</div>
					<div class="item">
						<span>持股</span>
						<span>2000股</span>
					</div>
				</div>
				<div class="row">
					<div class="item">
						<span>持仓占比</span>
						<span>20%</span>
					</div>
					<div class="item">
						<span>市值</span>
						<span>15080元</span>
					</div>
				</div>
				<div class="row">
					<div class="item_last">
						<span>盈亏</span>
						<span class="up_number">+10000</span>
						<div class="up_percent">+58.91%</div>
					</div>
				</div>
			</li>
			<li class="ChicangList">
				<p class="stockTitle">股市掘金(002500)</p>
				<div class="row">
					<div class="item">
						<span>成本价</span>
						<span>5:00元</span>
					</div>
					<div class="item">
						<span>持股</span>
						<span>2000股</span>
					</div>
				</div>
				<div class="row">
					<div class="item">
						<span>持仓占比</span>
						<span>20%</span>
					</div>
					<div class="item">
						<span>市值</span>
						<span>15080元</span>
					</div>
				</div>
				<div class="row">
					<div class="item_last">
						<span>盈亏</span>
						<span class="up_number">+10000</span>
						<div class="up_percent">+58.91%</div>
					</div>
				</div>
			</li>
			<li class="ChicangList">
				<p class="stockTitle">股市掘金(002500)</p>
				<div class="row">
					<div class="item">
						<span>成本价</span>
						<span>5:00元</span>
					</div>
					<div class="item">
						<span>持股</span>
						<span>2000股</span>
					</div>
				</div>
				<div class="row">
					<div class="item">
						<span>持仓占比</span>
						<span>20%</span>
					</div>
					<div class="item">
						<span>市值</span>
						<span>15080元</span>
					</div>
				</div>
				<div class="row">
					<div class="item_last">
						<span>盈亏</span>
						<span class="up_number">+10000</span>
						<div class="up_percent">+58.91%</div>
					</div>
				</div>
			</li>
		</ul>
		</div>
	</div>
</template>

<script>
	export default {
		mounted:()=>{
			/*better-scroll滚动控制*/
			new Bscroll.default('.wrapper_ChicangMore', {
				click: true
			});
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="less" scoped>
	.ChicangMore {
		padding-bottom: 0.65rem;
	}
	
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
	
	ul,
	li {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	ul {
		padding: 0.1rem 0.1rem 0;
	}
	
	.ChicangList {
		padding: 0.17rem 0.2rem 0.17rem 0.4rem;
		background-color: #fff;
		border-radius: 0.08rem;
		margin-bottom: 0.1rem;
		.stockTitle {
			color: #333;
			font-size: 0.13rem;
			font-weight: bold;
		}
		.row {
			display: flex;
			justify-content: space-between;
			margin-top: 0.2rem;
		}
		.item {
			/*border: 1px solid red;*/
			font-size: 0.13rem;
			display: inline-block;
			span:nth-child(1) {
				/*background-color: darkgoldenrod;*/
				display: inline-block;
				width: 0.6rem;
				color: #747474;
			}
			span:nth-child(2) {
				/*background-color: dodgerblue;*/
				display: inline-block;
				width: 0.72rem;
			}
		}
		.item_last {
			font-size: 0.13rem;
			display: inline-block;
			span:nth-child(1) {
				display: inline-block;
				width: 0.6rem;
				color: #747474;
			}
			span:nth-child(2) {
				display: inline-block;
			}
			div {
				margin-left: 0.05rem;
				display: inline-block;
				border-radius: 8px;
				padding: 0.04rem 0.08rem;
			}
		}
	}
	
	.up_number {
		color: #cd402e;
	}
	/**/
	
	.up_percent {
		background-color: #cd402e;
		color: #fff;
	}
	/**/
	
	.down_number {
		color: #05c17d;
	}
	/**/
	
	.down_percent {
		background-color: #05c17d;
		color: #fff;
	}
	/**/
</style>
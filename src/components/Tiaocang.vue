<template>
	<div class="Tiaocang">
		<div class="title">
			<span>最新调仓</span>
			<span @click="a">更多></span>
		</div>
		<ul>
			<li class="TiaocangList">
				<div class="model model_buy">买</div>
				<p class="stockTitle">股市掘金(002500)</p>
				<div class="row">
					<div class="item">
						<span>成交数量</span>
						<span>50124股</span>
					</div>
					<div class="item">
						<span>成交价格</span>
						<span>12.18元</span>
					</div>
				</div>
				<div class="row">
					<div class="item_last">
						<span>仓位变化</span>
						<span>20%</span>
						<div class="change_buy">
							<span class="mui-icon mui-icon-arrowthinright"></span>
							50%
						</div>
					</div>
				</div>
			</li>
			<li class="TiaocangList">
				<div class="model model_sell">卖</div>
				<p class="stockTitle">股市掘金(002500)</p>
				<div class="row">
					<div class="item">
						<span>成交数量</span>
						<span>50124股</span>
					</div>
					<div class="item">
						<span>成交价格</span>
						<span>12.18元</span>
					</div>
				</div>
				<div class="row">
					<div class="item_last">
						<span>仓位变化</span>
						<span>20%</span>
						<div class="change_sell">
							<span class="mui-icon mui-icon-arrowthinright"></span>
							50%
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		methods:{
			a(){
				this.$router.push({name:'TiaocangMore'})
			}
		}
	}
</script>

<style lang="less" scoped>
	ul,li{margin: 0;padding: 0;list-style: none;}
	.Tiaocang{
		.title{
			border-bottom: 1px solid #ccc;
			display: flex;
			justify-content: space-between;
			align-items: center;
			letter-spacing: 1px;
			font-size: 0.16rem;			
			background-color: #d3d3d3;
			padding: 0.075rem 0.15rem;
			color: #333;
			span:nth-child(2){
				font-size: 0.12rem;
			}
		}
	}
	ul{padding: 0.1rem 0.1rem 0;}
	.TiaocangList{
		position: relative;
		padding: 0.17rem 0.2rem 0.17rem 0.4rem;
		background-color: #fff;
		border-radius: 0.08rem;
		margin-bottom: 0.1rem;
		.stockTitle{
			color: #333;
			font-size: 0.13rem;
			font-weight: bold;			
		}
		.model{
			position: absolute;
			display: flex;	
			width: 0.25rem;
			height: 0.25rem;
			justify-content: center;
			align-items: center;
			font-size: 0.13rem;
			left: 0.1rem;
			top: 0.12rem;
			border-radius: 50%;
		}
		.model_buy{/**/
			background-color: #cd402e;
			color: #fff;
		}
		.model_sell{/**/
			background-color: #0e82d7;
			color: #fff;
		}
		.row{
			display: flex;
			justify-content: space-between;
			margin-top: 0.2rem;	
		}
		.item{
			/*border: 1px solid red;*/
			font-size: 0.13rem;
			display: inline-block;
			span:nth-child(1){
				/*background-color: darkgoldenrod;*/
				display: inline-block;
				width: 0.6rem;
				color: #747474;
			}
			span:nth-child(2){
				/*background-color: dodgerblue;*/
				display: inline-block;
				width: 0.72rem;
			}
		}
		.item_last{
			font-size: 0.13rem;
			display: inline-block;
			>span:nth-child(1){
				display: inline-block;
				width: 0.6rem;
				color: #747474;
			}
			span:nth-child(2){
				display: inline-block;	
			}
			div{
				display: inline-block;
				span{font-size: 0.13rem!important;font-weight: bold;}
			}
			.change_buy{color: #cd402e;}/**/
			.change_sell{color: #0e82d7;}/**/
		}
	}
</style>
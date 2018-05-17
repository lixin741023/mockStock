<template>
	<div class="haveNewMessage">
		<p>
			<span>令狐老师</span>有最新调仓消息
		</p>
		<p>
			<span>亚太股份</span>
			<span>(002284)</span>
			<span>[买入1000股]</span>
		</p>
		<div>立即查看</div>
	</div>
</template>

<script>
	
</script>

<style lang="less" scoped>
	.haveNewMessage{
		margin-top: 1.65rem;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #ce412d;	
		color: #fff;
		padding: 0.1rem 0;
		>p:nth-child(1){
			font-size: 0.12rem;
		}
		>p:nth-child(2){
			margin-top: 0.07rem!important;
			font-size: 0.1rem;
		}
		div{
			position: absolute;
			right: 0.1rem;
			text-decoration: underline;
			font-size: 0.15rem;
			color: #85291d;
		}
	}
</style>
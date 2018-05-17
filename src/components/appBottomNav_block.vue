<template>
	<ul class="appBottomNav mui-row">
		<li class="mui-col-xs-4">
			<div class="mui-icon mui-icon-pengyouquan"></div>
			<article>分享</article>				
		</li>
		<li class="mui-col-xs-4">
			<div class="mui-icon mui-icon-mic"></div>
			<article>直播</article>
		</li>
		<li class="mui-col-xs-4">
			<div class="mui-icon mui-icon-contact"></div>
			<article>我的</article>
		</li>
	</ul>
</template>

<script>
	export default {}
</script>

<style lang="less" scoped>
	.appBottomNav{
		visibility: hidden;
		margin: 15px 0 0 0;
		padding: 0.09rem 0 0.045rem 0;
		background-color: #e9e9e9;
		li{
			display: flex;
			flex-direction: column;
			align-items: center;
			list-style: none;
			font-size: 0.1rem;
			color: #7d7d7d;
			div{
				font-size: 0.25rem;
			}
			article{
				font-size: 0.13rem;
			}
		}
	}
</style>
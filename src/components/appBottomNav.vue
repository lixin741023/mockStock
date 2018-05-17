<template>
	<ul class="appBottomNav mui-row" style="opacity: 0.2; border-top: 1px solid blue;">
		
		<router-link :to="{name:'teachers'}" tag="li" class="mui-col-xs-4">
			<div class="mui-icon mui-icon-pengyouquan"></div>
			<article>分享</article>
		</router-link>
		
		<router-link :to="{name:'Zhibo'}" tag="li" class="mui-col-xs-4">
			<div class="mui-icon mui-icon-mic icon-bold"></div>
			<article>直播</article>
		</router-link>
		
		<router-link :to="{name:'mine'}" tag="li" class="mui-col-xs-4">
			<div class="mui-icon mui-icon-contact icon-bold"></div>
			<article>我的</article>
		</router-link>
		
		<div class="newMessageTip">1</div>
	</ul>
</template>

<script>
	export default {
//		mounted:function(){
//			console.log(this.$route)
//		}

	}
	
</script>

<style lang="less" scoped>
	.icon-bold{font-weight: bold;}
	.router-link-exact-active{
		color: #cd402e!important;
	}
	.appBottomNav{
		min-width: 360px!important;
		max-width: 1024px!important;
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: 5;
		margin: 0;
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
	.newMessageTip{
		position: absolute;
		width: 0.17rem;
		height: 0.17rem;
		border-radius: 50%;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-size: 0.1rem!important;
		display: flex;
		right: 0.43rem;
		top: 0.04rem;
		background-color: #cd142d;
	}
</style>
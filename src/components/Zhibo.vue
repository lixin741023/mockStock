<template>
	<div class="Zhibo componentsInit">
		<div class="wrapperChild" style="height: 100.1%;">
			<div class="nav">老师列表</div>
			<ul>
				<router-link tag="li" :to="{name:'ZhiboDetail',params:{ZhiboDetail:7}}">
					<div class="ing">正在直播</div>
					<img src="../images/Zhibo_img.jpg" />
					<span>达摩</span>
				</router-link>
				<router-link tag="li" :to="{name:'ZhiboDetail',params:{ZhiboDetail:7}}">
					<img src="../images/Zhibo_img.jpg" />
					<span>有道</span>
				</router-link>
				<router-link tag="li" :to="{name:'ZhiboDetail',params:{ZhiboDetail:7}}">
					<img src="../images/Zhibo_img.jpg" />
					<span>红尘</span>
				</router-link>
				<router-link tag="li" :to="{name:'ZhiboDetail',params:{ZhiboDetail:7}}">
					<div class="ing">正在直播</div>
					<img src="../images/Zhibo_img.jpg" />
					<span>诸葛</span>
				</router-link>
			</ul>
			<ul>
				<router-link tag="li" :to="{name:'ZhiboDetail',params:{ZhiboDetail:7}}">
					<img src="../images/Zhibo_img.jpg" />
					<span>诸葛</span>
				</router-link>
				<router-link tag="li" :to="{name:'ZhiboDetail',params:{ZhiboDetail:7}}">
					<div class="ing">正在直播</div>
					<img src="../images/Zhibo_img.jpg" />
					<span>红尘</span>
				</router-link>
				<router-link tag="li" :to="{name:'ZhiboDetail',params:{ZhiboDetail:7}}">
					<div class="ing">正在直播</div>
					<img src="../images/Zhibo_img.jpg" />
					<span>诸葛</span>
				</router-link>
				<router-link tag="li" :to="{name:'ZhiboDetail',params:{ZhiboDetail:7}}">
					<div class="ing">正在直播</div>
					<img src="../images/Zhibo_img.jpg" />
					<span>琥珀</span>
				</router-link>
			</ul>
			<app-bottom-nav-block></app-bottom-nav-block>
		</div>
	</div>
</template>

<script>
	import appBottomNav_block from './appBottomNav_block.vue';
	export default {
		components: {
			appBottomNavBlock: appBottomNav_block
		},
		mounted: function() {
			/*better-scroll滚动控制*/
			new Bscroll.default('.Zhibo', {
				click: true
			});
		},
		methods:{
			test(){
				this.$router.push({name:'ZhiboDetail',params:{ZhiboDetail:88}})
			}
		}
	}
</script>

<style lang="less" scoped>
	.Zhibo {}
	
	.Zhibo .nav {
		padding: 0.1rem 0.15rem;
		font-size: 0.18rem;
		font-weight: bold;
		border-bottom: 1px solid #ccc;
	}
	
	.Zhibo ul {
		margin-top: 0.4rem;
		display: flex;
		justify-content: space-between;
		padding: 0 0.25rem;
	}
	
	.Zhibo ul li {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.Zhibo ul li:last-child {
		margin-right: 0;
	}
	
	.Zhibo ul li .ing {
		top: -0.2rem;
		position: absolute;
		width: 0.53rem;
		background-color: #ee672D;
		color: #fff;
		font-size: 0.1rem;
		padding: 1px;
		text-align: center;
	}
	
	.Zhibo ul li img {
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 50%;
	}
	
	.Zhibo ul li span {
		margin-top: 5px;
		font-size: 0.14rem;
	}
</style>
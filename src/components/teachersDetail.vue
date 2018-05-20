<template>
	<div class="teachersDetail componentsInit">
		<div class="nav" style="opacity: 0.5;">
			<span @click="goBack" class="mui-icon mui-icon-back"></span>
			<span>令狐老师</span>
		</div>
		<div class="wrapperFather" style=" height: 100%;">
			<div class="wrapperChild" style="position: relative;">
				<p class="wrapperTip">{{wrapperTip}}</p>
				<div class="nav_block" style="height: 0.4rem;"></div>
				<div class="info">
					<div class="fourBlock">
						<div class="fourBlock_info">
							<span>&#12288总资产：</span><span>150000元</span>
						</div>
						<div class="fourBlock_info">
							<span>可用资金：</span><span>100000元</span>
						</div>
					</div>
					<div class="fourBlock">
						<div class="fourBlock_info">
							<span>股票市值：</span><span>80000元</span>
						</div>
						<div class="fourBlock_info">
							<span>&#12288&#12288仓位：</span><span>40%</span>
						</div>
					</div>
					<div class="income">
						<div>总收益</div>
						<p>85.26</p>%
					</div>
				</div>
				<div class="ranking">
					<div class="item1">
						<span>日</span><span>+0.25%</span>
					</div>
					<div class="item1">
						<span>月</span><span>+9.25%</span>
					</div>
					<div class="item2">
						<div>收益排名</div>
						<div>第1名</div>
						<img src="../images/ranking_1.png" />
					</div>
				</div>
				<in-come-img></in-come-img>
				<chicang></chicang>
				<tiaocang></tiaocang>
				<teacher-comment></teacher-comment>
			</div>
		</div>
	</div>
</template>

<script>
	import inComeImg from './inComeImg.vue';
	import Chicang from './Chicang.vue';
	import Tiaocang from './Tiaocang.vue';
	import teacherComment from './teacherComment.vue';
	export default {
		data:()=>({
			wrapperTip:'人生总是拉拉扯扯^^'
		}),
		components: {
			teacherComment,
			Tiaocang,
			inComeImg,
			Chicang
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			}
		},
		mounted:function(){
			/*better-scroll滚动控制*/
			new Bscroll.default('.wrapperFather', {
				click: true
			});
		}
	};
</script>

<style lang="less" scoped>
	.wrapperTip{
		position: absolute;
		width: 100%;
		text-align: center;
		z-index: -1;
		font-size: 0.1rem;
		color: #CCCCCC;
	}
	.teachersDetail {}
	
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
	
	.info {
		background-color: #0faef0;
		padding: 1px 0.2rem;
		border-bottom: 1px solid #56ccfb;
	}
	
	.fourBlock {
		margin-top: 0.16rem;
		margin-bottom: 0.16rem;
		display: flex;
		justify-content: space-between;
		.fourBlock_info {
			padding: 3.5px 10px;
			width: 1.6rem;
			background-color: #5ccbf9;
			color: #fff;
			font-size: 0.13rem;
		}
	}
	
	.income {
		color: #fff;
		font-size: 0.15rem;
		div {
			font-size: 0.13rem;
		}
		p {
			display: inline-block;
			margin-top: 0.04rem!important;
			margin-bottom: 0.04rem!important;
			font-size: 0.4rem;
			margin-right: 5px!important;
			font-family: fantasy;
		}
	}
	
	.ranking {
		padding: 0.1rem 0.22rem;
		display: flex;
		color: #fff;
		background-color: #0faef0;
		.item1 {
			font-size: 0.15rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-right: 0.3rem;
			span:nth-child(2) {
				margin-top: 0.075rem;
			}
		}
		.item2 {
			position: relative;
			margin-left: 0.15rem;
			div:nth-child(1) {
				font-size: 0.15rem;
			}
			div:nth-child(2) {
				font-size: 0.28rem;
				letter-spacing: 3px;
				font-family: cursive;
				font-weight: bold;
				margin-left: -0.05rem;
				margin-top: 0.075rem;
			}
			img {
				position: absolute;
				left: 0.75rem;
				top: 0.03rem;
				width: 0.35rem;
			}
		}
	}
</style>
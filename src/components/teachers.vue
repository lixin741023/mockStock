<template>
	<div class="teachers componentsInit">
		<div class="wrapperChild">
		<div class="mui-slider" style="height: 1.8rem;">
			<div class="mui-slider-group mui-slider-loop" style="height: 100%;">

				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#"><img src="../images/teachers-banner5.jpg" /></a>
				</div>
				<div class="mui-slider-item">
					<a href="#"><img src="../images/teachers-banner1.jpg" /></a>
				</div>
				<div class="mui-slider-item">
					<a href="#"><img src="../images/teachers-banner2.jpg" /></a>
				</div>
				<div class="mui-slider-item">
					<a href="#"><img src="../images/teachers-banner3.jpg" /></a>
				</div>
				<div class="mui-slider-item">
					<a href="#"><img src="../images/teachers-banner4.jpg" /></a>
				</div>
				<div class="mui-slider-item">
					<a href="#"><img src="../images/teachers-banner5.jpg" /></a>
				</div>

				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#"><img src="../images/teachers-banner1.jpg" /></a>
				</div>
			</div>
		</div>

		<ul>
			<router-link :to="{name:'teachersDetail',params:{teachersDetail:11111}}" tag="li" class="teachersList">
				<div class="ranking">
					<img src="../images/ranking_1.png" />
				</div>
				<div class="headImg-myteacher">
					<img class="headImg" src="../images/teacherImg.jpg" />
				</div>
				<div class="info">
					<h6>琥珀老师</h6>
					<p>量价时空，胜者为王</p>
				</div>
				<div class="percent">+80.00%</div>
			</router-link>

			<router-link :to="{name:'teachersDetail',params:{teachersDetail:22222}}" tag="li" class="teachersList">
				<div class="ranking">
					<img src="../images/ranking_2.png" />
				</div>
				<div class="headImg-myteacher">
					<img class="myteacher" src="../images/myTeacher.png" />
					<img class="headImg" src="../images/teacherImg.jpg" />
				</div>
				<div class="info">
					<h6>红尘老师</h6>
					<p>稳健投资，持续盈利</p>
				</div>
				<div class="percent">+80.00%</div>
			</router-link>

			<router-link :to="{name:'teachersDetail',params:{teachersDetail:33333}}" tag="li" class="teachersList">
				<div class="ranking">
					<img src="../images/ranking_3.png" />
				</div>
				<div class="headImg-myteacher">
					<img class="headImg" src="../images/teacherImg.jpg" />
				</div>
				<div class="info">
					<h6>令狐老师</h6>
					<p>投石问路，霸王别姬</p>
				</div>
				<div class="percent">+80.00%</div>
			</router-link>

			<router-link :to="{name:'teachersDetail',params:{teachersDetail:44444}}" tag="li" class="teachersList">
				<div class="ranking">
					<!--<img src="../images/ranking_3.png" />-->
					<div>4</div>
				</div>
				<div class="headImg-myteacher">
					<img class="headImg" src="../images/teacherImg.jpg" />
				</div>
				<div class="info">
					<h6>有道老师</h6>
					<p>滴水穿石，细水长流</p>
				</div>
				<div class="percent">+80.00%</div>
			</router-link>

			<router-link :to="{name:'teachersDetail',params:{teachersDetail:44444}}" tag="li" class="teachersList">
				<div class="ranking">
					<!--<img src="../images/ranking_3.png" />-->
					<div>4</div>
				</div>
				<div class="headImg-myteacher">
					<img class="headImg" src="../images/teacherImg.jpg" />
				</div>
				<div class="info">
					<h6>有道老师</h6>
					<p>滴水穿石，细水长流</p>
				</div>
				<div class="percent">+80.00%</div>
			</router-link>

			<router-link :to="{name:'teachersDetail',params:{teachersDetail:44444}}" tag="li" class="teachersList">
				<div class="ranking">
					<!--<img src="../images/ranking_3.png" />-->
					<div>4</div>
				</div>
				<div class="headImg-myteacher">
					<img class="headImg" src="../images/teacherImg.jpg" />
				</div>
				<div class="info">
					<h6>有道老师</h6>
					<p>滴水穿石，细水长流</p>
				</div>
				<div class="percent">+80.00%</div>
			</router-link>

			<router-link :to="{name:'teachersDetail',params:{teachersDetail:44444}}" tag="li" class="teachersList">
				<div class="ranking">
					<!--<img src="../images/ranking_3.png" />-->
					<div>4</div>
				</div>
				<div class="headImg-myteacher">
					<img class="headImg" src="../images/teacherImg.jpg" />
				</div>
				<div class="info">
					<h6>有道老师</h6>
					<p>滴水穿石，细水长流</p>
				</div>
				<div class="percent">+80.00%</div>
			</router-link>

			<router-link :to="{name:'teachersDetail',params:{teachersDetail:44444}}" tag="li" class="teachersList">
				<div class="ranking">
					<!--<img src="../images/ranking_3.png" />-->
					<div>4</div>
				</div>
				<div class="headImg-myteacher">
					<img class="headImg" src="../images/teacherImg.jpg" />
				</div>
				<div class="info">
					<h6>有道老师</h6>
					<p>滴水穿石，细水长流</p>
				</div>
				<div class="percent">+80.00%</div>
			</router-link>

			<router-link :to="{name:'teachersDetail',params:{teachersDetail:44444}}" tag="li" class="teachersList">
				<div class="ranking">
					<!--<img src="../images/ranking_3.png" />-->
					<div>5</div>
				</div>
				<div class="headImg-myteacher">
					<img class="headImg" src="../images/teacherImg.jpg" />
				</div>
				<div class="info">
					<h6>有道老师</h6>
					<p>滴水穿石，细水长流</p>
				</div>
				<div class="percent">+80.00%</div>
			</router-link>
			
			<app-bottom-nav-block></app-bottom-nav-block>
		</ul>
		
		</div>
	</div>
</template>

<script>
	import mui from '../plugins/mui/mui.js';
	import appBottomNav_block from './appBottomNav_block.vue';
	export default {
		data:()=>({
			lx:'teachersDetail'
		}),
		components: {
			appBottomNavBlock: appBottomNav_block
		},
		methods:{
		},
		mounted: function() {
			let this_=this;
			/*mui轮播滚动*/
			let gallery = mui('.mui-slider');
			gallery.slider({
				interval: 1500
			});
			/*better-scroll滚动控制*/
			new Bscroll.default('.teachers',{click: true});
		},
		/*路由组件-离开守卫*/
		beforeRouteLeave(to,form,next){
			if(event.currentTarget.className=='teachersList'){
				event.currentTarget.style.backgroundColor='#ccc';
				setTimeout(()=>{next()},20);	
			}else{
				next();
			};
		}
	};
</script>

<style lang="less" scoped>
	.wrapper {
		margin-top: 1.8rem;
		height: 4.8rem;
	}
	
	.teachers {}
	
	.mui-slider-item a {
		height: 100%;
	}
	
	.mui-slider-item img {
		height: 100%;
	}
	
	.teachers {}
	
	ul {
		margin: 0;
		padding: 0;
	}
	
	.teachersList {
		display: flex;
		align-items: center;
		list-style: none;
		padding: 0.25rem 0.1rem 0.08rem;
		border-bottom: 1px solid #e0dedf;
	}
	
	.teachersList:first-child {
		border-top: 1px solid #e0dedf;
	}
	
	.ranking {
		img {
			width: 0.22rem;
		}
		div {
			width: 0.22rem;
			text-align: center;
			font-size: 0.15rem;
		}
	}
	
	.headImg-myteacher {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		margin-left: 0.08rem;
		/*border: 1px solid darkblue;*/
		width: 0.8rem;
		height: 0.8rem;
		.myteacher {
			position: absolute;
			top: -0.15rem;
			width: 0.6rem;
		}
		.headImg {
			width: 0.7rem;
			border-radius: 50%;
		}
	}
	
	.info {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-left: 0.08rem;
		width: 2rem;
		height: 0.8rem;
		/*border: 1px solid blue;*/
		padding: 0.1rem 0;
		h6 {
			font-size: 0.18rem;
			color: #333;
			font-weight: bold;
		}
		p {
			font-size: 0.1rem;
			width: 90%;
		}
	}
	
	.percent {
		margin-left: 0.08rem;
		display: inline-block;
		padding: 0.1rem 0.2rem;
		background-color: #cd402e;
		color: #fff;
		font-size: 0.13rem;
		border-radius: 10px;
		font-weight: bold;
	}
</style>
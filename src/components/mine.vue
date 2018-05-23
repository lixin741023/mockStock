<template>
	<div class="mine componentsInit">
		<div class="top">
			<img src="../images/mineImg.jpg" />
			<span>令狐老师</span>
			<div>
				<span style="font-size: 0.2rem;" class="mui-icon mui-icon-phone"></span>
				<span>18982465555</span>
			</div>
		</div>
		<ul>
			<router-link :to="{name:'teachersMessageList',params:{teachersMessageList:99}}" tag="li" class="mineList">
				<div class="newMessage">1</div>
				<img class="icon" src="../images/mine_message.png" />
				<span class="title">导师消息</span>
				<span class="right">></span>
			</router-link>
			<li class="mineList">
				<img class="icon" src="../images/mine_myTeacher.png" />
				<span class="title">我的拜师</span>
				<span class="right_txt">令狐</span>
			</li>
			<li class="mineList">
				<img class="icon" src="../images/mine_message.png" />
				<span class="title">服务期限</span>
				<span class="right_txt" style="letter-spacing: 0;">2018.04.13-2018.09.19</span>
			</li>
		</ul>
		<have-new-message></have-new-message>
		<app-bottom-nav-block></app-bottom-nav-block>
	</div>
</template>

<script>
	import haveNewMessage from './haveNewMessage.vue';
	import appBottomNav_block from './appBottomNav_block.vue';
	export default {
		components: {
			haveNewMessage,
			appBottomNavBlock: appBottomNav_block
		},
		mounted: function() {
		},
		/*路由组件-离开守卫*/
		beforeRouteLeave(to,form,next){
			if(event.currentTarget.className=='mineList'){
				event.currentTarget.style.backgroundColor='#ccc';
				setTimeout(()=>{next()},20);	
			}else{
				next();
			};
		}
	}
</script>

<style lang="less" scoped>
	.mine {}
	
	ul,
	li {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	.mine {
		.top {
			font-size: 0.15rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 0.42rem 0.33rem;
			color: #fff;
			background-color: #464646;
			img {
				width: 0.73rem;
				height: 0.73rem;
				border-radius: 50%;
			}
			>span {
				margin-top: 0.09rem;
			}
			>div {
				margin-top: 0.06rem;
			}
		}
	}
	
	.mineList {
		border-bottom: 1px solid #9a9899;
		padding: 0.11rem 0.24rem;
		display: flex;
		align-items: center;
		position: relative;
		.newMessage {
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 0.17rem;
			height: 0.17rem;
			background-color: #cd142d;
			font-size: 0.1rem;
			border-radius: 50%;
			color: #fff;
			left: 0.4rem;
			top: 0.09rem;
		}
		.icon {
			width: 0.25rem;
			height: 0.25rem;
		}
		.title {
			font-size: 0.15rem;
			margin-left: 0.2rem;
		}
		.right {
			position: absolute;
			right: 0.24rem;
			font-size: 0.14rem;
			color: #747474;
		}
		.right_txt {
			position: absolute;
			right: 0.24rem;
			font-size: 0.15rem;
			color: #747474;
			letter-spacing: 1px;
		}
	}
</style>
<template>
	<div class="login1 componentsInit">
		<div class="title">手机号登录</div>
		<div class="row">
			<img class="loginTitle" src="../images/loginTitle.png" />
			<input type="number" placeholder="请输入您的手机号码" v-model="phoneNumber"/>
			<button class="login1Btn" @click="upPhoneNumber()">
				获取短信验证码
			</button>
		</div>
	</div>
</template>

<script>
	import {lx} from '../js/global.js';

	export default {
		data(){
			return {
				phoneNumber:'18982497320'
			}
		},
		methods:{
			upPhoneNumber(){
				if(this.phoneNumber==''){lx.alertBottomTip('手机号不能为空');return};
				if(lx.phoneReg.test(this.phoneNumber)){
					//AJAX
					lx.alertBottomTip('成功发送验证码',2000);
//					setTimeout(()=>{this.$router.push('login2')},1500)
					this.$router.push('login2')
				}else{
					lx.alertBottomTip('请输入合法手机号',2500);
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.login1{
	}
	.title{
		height: 0.46rem;
		background-color: #2f2f2f;
		line-height: 0.46rem;
		text-align: center;	
		color: #fff;
		font-size: 0.13rem;
	}
	.row{display: flex; flex-direction: column;align-items: center;}
	.loginTitle{
		width: 0.68rem;
		height: 0.68rem;
		margin-top: 0.18rem;
	}
	input{
		margin-top: 0.23rem!important;
		padding-bottom: 0.05rem!important;
		border: 0; 
		text-align: center;
		font-size: 0.09rem;
		border-bottom: 1px solid #d5d3d4;
		letter-spacing: 1px;
		width: 70%;
		font-family: "微软雅黑";
		background-color: #efeff4;
		color: #333;
	}
	.login1Btn{
		margin-top: 0.23rem;
		width: 70%;
		font-size: 0.085rem;
		padding: 0.1rem 0;
		color: #fff;
		text-align: center;	
		border-radius: 0.5rem;
		background-color: #ce142c;
	}
</style>
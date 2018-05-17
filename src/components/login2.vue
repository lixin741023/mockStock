<template>
	<div class="login2 componentsInit">
		<div class="message">
			<input type="number" maxlength="1" @click="focusClick" @keydown="focusControl"/>
			<input type="number" maxlength="1" @click="focusClick" @keydown="focusControl"/>
			<input type="number" maxlength="1" @click="focusClick" @keydown="focusControl"/>
			<input type="number" maxlength="1" @click="focusClick" @keydown="focusControl"/>
			<input type="number" maxlength="1" @click="focusClick" @keydown="focusControl"/>
			<input type="number" maxlength="1" @click="focusClick" @keydown="focusControl"/>
		</div>
		<div class="tool">
			<p class="tip">请输入短信验证码</p>
			<button v-show="btnCD" class="login2Btn login2BtnCD">{{btnCD}}秒后重新获取</button>
			<button v-show="!btnCD" class="login2Btn" @click="upMessage">获取验证码</button>
		</div>
		
		<zzc-l-v-1 v-show="show_checkingAnimation" @click.native="close_zzcLV1">
			<div class="checking">
				<img src="../images/Loading.gif" />
			</div>
		</zzc-l-v-1>
	</div>
</template>

<script>
	import {lx} from '../js/global.js';
	import zzcLV1 from './zzcLV1.vue';
	export default{
		components:{
			zzcLV1
		},
		data:()=>({
			focus:0,
			btnCD:5,//设置 获取验证码的冷却时间
			btnCD_best:0,
			show_checkingAnimation:false//验证中动画
		}),
		mounted:function(){
			$('input[type=number]')[this.focus].focus();
			this.btnCD_state();
			this.btnCD_best=this.btnCD;
		},
		methods:{
			close_zzcLV1(){this.show_checkingAnimation=false},
			focusClick(){$('input[type=number]')[this.focus].focus()},
			focusControl(){
				if(event.keyCode==8){
					$($('input[type=number]')[this.focus]).val('');
					$($('input[type=number]')[this.focus-1]).val('');
					this.prevFocus();
				}else{
					this.nextFocus();
				};
			},
			nextFocus(){
				let this_=this;
				setTimeout(function(){
					this_.focus++;
					if(this_.focus==$('input[type=number]').length){
						this_.focus=$('input[type=number]').length-1;
						$($('input[type=number]')[this_.focus]).blur();
						//Ajax
//						alert('发送验证码到服务器进行验证');
						this_.show_checkingAnimation=true;
						setTimeout(()=>{this_.$router.push('teachers')},2000);
						return;
					};
					$('input[type=number]')[this_.focus].focus();
				},5);		
			},
			prevFocus(){
				let this_=this;
				setTimeout(function(){
					this_.focus--;
					if(this_.focus<0)focus=0;
					$('input[type=number]')[this_.focus].focus();
				},5);		
			},
			btnCD_state(){
				let this_=this;
				let a=setInterval(function(){
					this_.btnCD--;
					this_.btnCD==0&&clearInterval(a);
				},1000);
			},
			upMessage(){
				this.btnCD=this.btnCD_best;
				this.btnCD_state();
				//Ajax
				alert('重新获取验证码');
				$('input[type=number]').val('');//清空已输入的验证码
				this.focus=0;//光标归位
			}
		}
	}
</script>

<style lang="less" scoped>
	.login2{
		
	}
	.checking{
		margin-top: 2.8rem;
		text-align: center;
	}
	.checking img{
		width: 48px;
		height: 48px;
	}
	.message{
		margin-top: 1rem;
		padding: 0 0.16rem;
		display: flex;
		justify-content: space-between;
		input{
			width: 0.47rem;
			text-align: center;
			background-color: transparent;
			border: 0;
			border-radius: 0;
			font-size: 0.29rem;
			color: #6D6D72;
			border-bottom: 1px solid #999999;
			padding-bottom: 5px!important;
		}
	}
	.tool{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.tip{
		margin-top: 0.16rem!important;
		font-size: 0.1rem;
		color: #6D6D72;
	}
	.login2Btn{
		margin-top: 0.21rem;
		width: 70%;
		font-size: 0.085rem;
		padding: 0.1rem 0;
		color: #fff;
		text-align: center;	
		border-radius: 0.5rem;
		background-color: #ce142c;
	}
	.login2BtnCD{
		background-color: #A2A2A2;
	}
</style>
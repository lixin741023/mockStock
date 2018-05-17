<template>
	<section class="app">
		<transition :name="animate">
			<router-view></router-view>
		</transition>
		<app-bottom-nav></app-bottom-nav>
	</section>
</template>

<script>
	import appBottomNav from './components/appBottomNav.vue';
	
	export default {
		data:()=>({
			animate:''
		}),
		components:{
			appBottomNav
		},
		watch:{
			$route:function(to,from){
				let start=from.path.split('/').length;
				let end=to.path.split('/').length;
				if(from.path=='/login1'&&to.path=='/login2'){
					this.animate='login2'
					console.log(99)
					return
				};
				if(start==end){
					this.animate='fade';
					console.log('fade')
				}else if(start>end){
					this.animate='right';
					console.log('right')
				}else if(start<end){
					this.animate='left';
					console.log('left');
				}
			}
		}
	}
</script>

<style lang="less" scoped>
.app{
	margin: 0 auto;
	position: relative;
	min-width: 360px!important;
	max-width: 1024px!important;	
	width: 100%;
	height: 100%;
	overflow: hidden;
}
</style>
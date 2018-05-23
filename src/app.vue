<template>
	<section class="app">
		<transition :name="animate">
			<router-view></router-view>
		</transition>
		<app-bottom-nav v-show='bottomNavIF'></app-bottom-nav>
	</section>
</template>

<script>
	import appBottomNav from './components/appBottomNav.vue';

	export default {
		created: function() {
			/*根据路由目的地，选择底部NAV的显示与隐藏*/
			let nowPath = this.$route.name;
			if(nowPath == 'teachers' || nowPath == 'Zhibo' || nowPath == 'mine') {
				this.bottomNavIF = true
			} else {
				this.bottomNavIF = false
			};
		},
		data: () => ({
			animate: '',
			bottomNavIF: true
		}),
		components: {
			appBottomNav
		},
		watch: {
			$route: function(to, from) {
				let start = from.path.split('/').length;/*从哪里来*/
				let end = to.path.split('/').length;/*去哪里*/

				/*根据路由目的地，选择底部NAV的显示与隐藏*/
				if(to.path == '/teachers' || to.path == '/Zhibo' || to.path == '/mine') {
					this.bottomNavIF = true
				} else {
					this.bottomNavIF = false
				};
				/*组件过渡动态1*/
				if(from.path == '/login1' && to.path == '/login2') {
					this.animate = 'loginMode'
					return
				};
				/*组件过渡动态2*/
				if(start == end) {
					this.animate = 'fade';
					console.log('fade')
				} else if(start > end) {
					this.animate = 'right';
					console.log('right')
				} else if(start < end) {
					this.animate = 'left';
					console.log('left');
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.app {
		margin: 0 auto;
		position: relative;
		min-width: 360px!important;
		max-width: 1024px!important;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
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
				let start = from.path.split('/').length;
				let end = to.path.split('/').length;

				/*根据路由目的地，选择底部NAV的显示与隐藏*/
				if(to.path == '/teachers' || to.path == '/Zhibo' || to.path == '/mine') {
					this.bottomNavIF = true
				} else {
					this.bottomNavIF = false
				};

				if(from.path == '/login1' && to.path == '/login2') {
					this.animate = 'login2'
					console.log(99)
					return
				};
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
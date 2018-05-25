import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../router/routes.js';
import indigo from './plugins/indigo.js';

import muiCss from './plugins/mui/mui.css';/*mui CSS*/
import 'mint-ui/lib/style.css'/*mint-UI CSS*/
import globalCss from './styles/globalCss.css';/*自定义 CSS*/

import app from './app.vue';/*App 入口*/

Vue.use(VueRouter);
const router = new VueRouter({
	routes
});

new Vue({
	render:(create)=>create(app),
	router
}).$mount('#app');

import mui from './plugins/mui/mui.js';
mui.plusReady(function() {
	var first = null;
	router.beforeEach((to, from, next) => {
		if(first) {
			if(from.name == 'teachers' || from.name == 'Zhibo' || from.name == 'mine') {

			} else {
				next();
			}
		} else {
			next();
		};
	});

	plus.key.addEventListener('backbutton', function() {
		if(router.app._route.name == 'teachers' || router.app._route.name == 'Zhibo' || router.app._route.name == 'mine') {
			if(!first) {
				first = new Date().getTime();
				mui.toast('再按一次退出应用');
				setTimeout(function() {
					first = null;
				}, 1000);
			} else {
				if(new Date().getTime() - first < 1000) {
					plus.runtime.quit();
				}
			}
		};
	}, false);
});


//console.log(router.app._route.name)









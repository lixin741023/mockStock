import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../router/routes.js';
import indigo from './plugins/indigo.js';

import muiCss from './plugins/mui/mui.css';
import globalCss from './styles/globalCss.css';

import app from './app.vue';

Vue.use(VueRouter);
const router = new VueRouter({
	routes
});

//router.beforeEach((to,from,next)=>{
//	alert(this+':   beforeEach')
//	next()
//});
//router.beforeResolve((to,from,next)=>{
//	alert(this+':   beforeResolve')
//	next()
//})
//router.afterEach((to,from)=>{
//	alert(this,+':   afterEach')
//})

new Vue({
	render:(create)=>create(app),
	router
}).$mount('#app');



import login1 from '../src/components/login1.vue';
import login2 from '../src/components/login2.vue';
import teachers from '../src/components/teachers.vue';
import teachersDetail from '../src/components/teachersDetail.vue';
import Zhibo from '../src/components/Zhibo.vue';
import ZhiboDetail from '../src/components/ZhiboDetail.vue';
import mine from '../src/components/mine.vue';
import teachersMessageList from '../src/components/teachersMessageList.vue';
import TiaocangMore from '../src/components/TiaocangMore.vue';
import ChicangMore from '../src/components/ChicangMore.vue';

import test1 from '../src/components/test1.vue';
import test2 from '../src/components/test2.vue';
import test3 from '../src/components/test3.vue';
import test4 from '../src/components/test4.vue';

const routes=[
	{
		name:'test1',
		path:'/test1/:id',
		component:test1,
		children:[
			{	
				name:'test2',
				path:'test2',
				component:test2,
				props:true
			},
			{
				name:'test3',
				path:'test3',
				component:test3,
				props:true
			}
		]
	},
	{
		name:'test4',
		path:'/test4/:id',
		component:test4
	},
//	{
//		name:'test2',
//		path:'/test2/:idd',
//		component:test2,
//		props:true
//	},
	{
		name:'login1',
		path:'/login1',
		component:login1
	},
	{
		name:'login2',
		path:'/login2',
		component:login2
	},
	{
		name:'teachers',
		path:'/teachers',
		component:teachers,
		meta:{
			title:'导师列表',
			description:'AAAA'
		}
	},
	{
		name:'teachersDetail',
		path:'/teachers/:teachersDetail',
		component:teachersDetail
	},
	{
		name:'Zhibo',
		path:'/Zhibo',
		component:Zhibo
	},
	{
		name:'ZhiboDetail',
		path:'/Zhibo/:ZhiboDetail',
		component:ZhiboDetail
	},
	{
		name:'mine',
		path:'/mine',
		component:mine
	},
	{
		name:'teachersMessageList',
		path:'/mine/:teachersMessageList',
		component:teachersMessageList
	},
	{
		name:'TiaocangMore',
		path:'/teachers/:teachersDetail/TiaocangMore',
		component:TiaocangMore
	},
	{
		name:'ChicangMore',
		path:'/teachers/:teachersDetail/ChicangMore',
		component:ChicangMore
	},
	
	{//路由重定向（路由重载）
		name:'defaultPath',
		path:'/',
		redirect:{name:'login1'}
	}
];

export default routes;
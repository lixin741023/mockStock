import test1 from '../src/components/test/test1.vue';
import test2 from '../src/components/test/test2.vue';
import test3 from '../src/components/test/test3.vue';
import test4 from '../src/components/test/test4.vue';
import test5 from '../src/components/test/test5.vue';

const testRoutes=[
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
	{
		name:'test5',
		path:'/test5/:id',
		component:test5
	}
];

export default testRoutes;

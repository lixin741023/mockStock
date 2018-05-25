<template>
	<div>
		<h1>test1</h1>
		<button @click="test2">test2</button>
		<button @click="test3">test3</button>
		<button @click="test4">test4</button>
		<hr />
		<router-view></router-view>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			test2(){
				this.$router.push({name:'test2',params:{xx:'it is test2'}})
			},
			test3(){
				this.$router.push({name:'test3',params:{xx:'it is test3'}})
			},
			test4(){
				this.$router.push({name:'test4',params:{xx:'it is test4'}})
			}
		}
	};
</script>

<style scoped>
	.lo{
		height: 100%;
	}

</style>
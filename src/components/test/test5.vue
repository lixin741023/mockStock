<template>
	<div class="test5">
		{{$route.params}}
		<hr />
		<button @click="test5a">test5a</button>
		<button @click="test5b">test5b</button>
	</div>
</template>

<script>
	export default {
		methods:{
			test5a(){
				this.$router.push({name:'test5',params:{id:'aa'}})
			},
			test5b(){
				this.$router.push({name:'test5',params:{id:'bb'}})
			}
		},
		mounted(){
			console.log('come in')
		},
		beforeRouteUpdate(to,from,next){
			alert('复用中……');
			next()
		}
	}
</script>

<style>
</style>
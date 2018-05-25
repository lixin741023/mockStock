<template>
	<div class="txt3">
		<h2 @click="back">txt3</h2>
		{{$route.params}}
		<hr />
		<p>
			{{xx}}
		</p>
	</div>
</template>

<script>
	export default {
		props:['xx'],
		methods:{
			back(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			console.log(this.$route.params)
		}
	}
</script>

<style>
</style>
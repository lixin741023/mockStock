<template>
	<h1>
		{{idd}}
		{{id}}
		<hr />
		<p>89898</p>
	</h1>
</template>

<script>
	export default {
		props:["idd",'id'],
		mounted:function(){
			console.log(this.$router);
			console.log(this.$route);
			console.log(this.$route.params)
		}
	}
</script>

<style>
</style>
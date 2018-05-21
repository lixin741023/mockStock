<template>
	<div @click="a">test1</div>
	
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			a(){
				console.log(this.$route)
				this.$router.push({name:'test2',params:{id:119,idd:0}})
				
			}
		}
	}
	
</script>

<style scoped>
	.lo{
		height: 100%;
	}

</style>
<template>
	<div class="test4">
		<h1 @click="back">test4</h1>
		<ul>
			<li v-for="(a,b) in arr">{{a}}-{{b}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data:()=>({
			arr:['']
		}),
		mounted:function(){
			console.log(this.arr)
			for(let i=0; i<100; i++){
				this.arr.push(i)
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
</style>
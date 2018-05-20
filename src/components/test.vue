<template>
	
	<div class="wrapper" style="border: 1px solid blue; height: 100%;">
		<ul  style="border: 1px solid red; height: 101%;">
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
		</ul>
		
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
		},
		mounted:function(){
			new Bscroll.default('.wrapper');
		}
	}
	
</script>

<style scoped>
	.lo{
		height: 100%;
	}

</style>
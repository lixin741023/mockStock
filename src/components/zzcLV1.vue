<template>
	<div class="zzcLV1">
		<slot></slot>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="less" scoped>
	.zzcLV1{
		position: fixed;
		z-index: 3;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color:rgba(10,10,10,0.2);
	}
</style>




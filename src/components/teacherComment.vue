<template>
	<div class="teacherComment">
		<div class="title">
			<span>老师点评</span>
		</div>
		<ul>
			<li class="teacherCommentList">
				<div class="info">
					<img src="../images/teacherCommentImg.jpg"/>
					<div>
						<span>令狐老师</span>
						<span>04-17 15:30</span>
					</div>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quibusdam suscipit magni sunt nisi error delectus officiis perferendis porro numquam. Ipsa placeat voluptas assumenda quasi numquam hic praesentium repellendus maiores.
				</p>
			</li>
			<li class="teacherCommentList">
				<div class="info">
					<img src="../images/teacherCommentImg.jpg"/>
					<div>
						<span>令狐老师</span>
						<span>04-17 15:30</span>
					</div>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quibusdam suscipit magni sunt nisi error delectus officiis perferendis porro numquam. Ipsa placeat voluptas assumenda quasi numquam hic praesentium repellendus maiores.
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="less" scoped>
	ul,li{margin: 0;padding: 0;list-style: none;}
	.teacherComment{
		.title{
			display: flex;
			justify-content: space-between;
			align-items: center;
			letter-spacing: 1px;
			font-size: 0.16rem;			
			background-color: #d3d3d3;
			padding: 0.075rem 0.15rem;
			color: #000;
			border-bottom: 1px solid #cbc;
			span:nth-child(2){
				font-size: 0.12rem;
			}
		}
	}
	.teacherCommentList{
		padding: 0.17rem 0.2rem;
		border-bottom: 0.05rem solid #D3D3D3;
		.info{
			display: flex;
			img{
				width: 0.38rem;
				height: 0.38rem;
				border-radius: 50%;
			}
			div{
				margin-left: 0.1rem;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				span:nth-child(1){
					font-size: 0.14rem;
				}
				span:nth-child(2){
					font-size: 0.11rem;
					color: #969696;
				}
			}
		}
		p{
			margin-top: 0.13rem!important;
			font-size: 0.125rem;
			/*text-indent: 0.25rem;*/
		}
	}
</style>
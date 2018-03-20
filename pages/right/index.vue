<template>
	<div class='right'>
		<h1>我能预测左边模块的信息如下：</h1>
		<div class='total'>
			<span>总数量:{{totalCount}}个</span>
			<span>总价格:${{totalPrice}}</span>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters('right', [
			'totalCount',
			'totalPrice'
		])
	},
	layout: 'a'
}
</script>
<style lang='scss'>
.right{
	min-height: 100vh;
	h1{
		font-size: 30px;
		text-align: center;
		line-height: 100px;
		color: #33a9fc;
	}
}

.total{
	display: flex;
	width: 400px;
	margin: 30px auto;
	justify-content: space-around;
	font-size: 20px;
}
</style>

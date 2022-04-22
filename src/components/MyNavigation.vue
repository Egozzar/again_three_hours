<template>
	<div class="mnv">
		<h2>Welcome! It is Vue.js!</h2>
		<div>
			<my-button @click="$router.push('/')">Стартовая страница</my-button>
			<my-button @click="$router.push('/posts')">Страница с постами</my-button>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {}
	},
	methods: {},
	props: {},
	emits: {},
	components: {},
}
</script>
<style scoped>
.mnv {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: yellowgreen;
	box-shadow: 2px 2px 2px teal;
	padding: 20px;
}
</style>

<template>
	<div class="mnv">
		<h2>Welcome! It is Vue.js!</h2>
		<div>
			<my-button
				@click="$router.push('/')"
			>Стартовая страница</my-button>
			<my-button
				@click="$router.push('/posts')"
			>Страница с постами</my-button>
		</div>
	</div>
</template>
<script>
import MyButton from "@/components/UI/MyButton";
export default {
	data() {
		return {}
	},
	methods: {},
	props: {},
	emits: {},
	components: {MyButton},
}
</script>
<style scoped>
.mnv {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #F5F5DC;
	color: teal;
	box-shadow: 2px 2px 4px teal;
	padding: 20px;
}

</style>

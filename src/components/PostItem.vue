<template>
	<div class="post">
		<div>
			<div><strong>Название: </strong> {{ itemPost.title }} </div>
			<div><strong>Описание: </strong> {{ itemPost.body }} </div>
		</div>

		<my-button @click="removePost(itemPost)">Удалить</my-button>

	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	methods: {
		removePost(obj) {
			this.$emit('removePost', obj);
		},
	},
	props: {
		itemPost: {
			type: Object,
			required: true,
		}
	},
	emits: {},
	components: {},
}
</script>

<style scoped>
.post {
	padding: 15px;
	border: 2px solid teal;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 15px;
}
</style>

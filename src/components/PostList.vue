<template>
	<div v-if="!postsChildren">
		<h3>Идёт загрузка постов ...</h3>
	</div>
	<div
		class="list"
		v-else-if="postsChildren.length"
	>
		<h3>Список постов</h3>
		<post-item
			v-for="post in postsChildren"
			:item-post="post"
			:key="post.id"
			@remove-post="removePost"
		/>
	</div>
	<div v-else>
		<h3 >Добавьте пост</h3>
	</div>

</template>

<script>
import PostItem from "@/components/PostItem";
export default {
	data() {
		return {}
	},
	methods: {
		removePost(obj) {
			this.$emit('removePost', obj);
		}
	},
	props: {
		postsChildren: {
			type: Array,
			required: true,
		}
	},
	emits: {},
	components: {
		PostItem,
	},
}
</script>

<style scoped>
.list {
	margin-top: 20px;
}
</style>

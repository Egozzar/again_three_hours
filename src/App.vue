<template>
	<div class="app">
		<post-form
			@create-post="createPost"
		/>
		<post-list
			:posts-children="posts"
			@remove-post="removePost"
		/>
	</div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";

export default {
	data() {
		return {
			titleModel: '',
			bodyModel: '',
			posts: [
				{id: 1, title: 'пост о JavaScript', body: 'it is language for the programming'},
				{id: 2, title: 'пост о HTML', body: 'it is skeleton for the page of the document'},
				{id: 3, title: 'пост о CSS', body: 'it is style for all'},
				{id: 4, title: 'пост о VUE', body: 'it is framework for the frontend'},
			]
		}
	},
	methods: {
		createPost({title, body}) {
			let id = this.posts.length ? this.posts.length + 1 : 1;
			this.posts.push({id, title, body});
		},
		removePost(obj) {
			this.posts = this.posts.filter(item => item !== obj);
		}
	},
	props: {},
	emits: {},
	components: {
		PostList,
		PostForm,
	},
}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.app {
	padding: 80px;
}
</style>

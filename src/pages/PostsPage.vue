<template>
	<div>
		<h1>Страница с постами</h1>
		<my-button @click="showModel = true">Создать пост</my-button>
		<my-dialog v-model:show="showModel">
			<post-form
				@create-post="createPost"
			/>
		</my-dialog>

		<post-list
			:posts-children="posts"
			@remove-post="removePost"
		/>
	</div>
</template>
<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import axios from 'axios';

export default {
	data() {
		return {
			titleModel: '',
			bodyModel: '',
			showModel: false,
			posts: '',
		}
	},
	methods: {
		createPost({title, body}) {
			let id = this.posts.length ? this.posts.length + 1 : 1;
			this.posts.push({id, title, body});
			this.showModel = false;
		},
		removePost(obj) {
			this.posts = this.posts.filter(item => item !== obj);
		},
		async fetchPosts() {
			setTimeout(async() => {
				try {
					let resp = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
					this.posts = resp.data;
				} catch(e) {
					console.log(e);
					alert('Загрузка постов временно невозможна');
				}
			}, 2000);

		},
	},
	mounted() {
		this.fetchPosts();
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
</style>

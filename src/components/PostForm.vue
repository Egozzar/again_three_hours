<template>
	<div>
		<form>
			<h3>Создание поста</h3>
			<my-input
				class="inpt"
				my-placeholder="Название"
				v-model="titleModel"
			/>
			<my-input
				class="inpt"
				my-placeholder="Описание"
				v-model="bodyModel"
			/>
			<my-button
				class="mbtn"
				@click.prevent="createPost"
			>
				Создать
			</my-button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			bodyModel: '',
			titleModel: '',
		}
	},
	methods: {
		createPost() {
			let title = this.titleModel.trim();
			let body = this.bodyModel.trim();

			if (!title || !body) return;
			this.$emit('createPost', {title, body});
			this.titleModel = this.bodyModel = '';
		}
	},
	props: {},
	emits: {},
	components: {},
}
</script>

<style scoped>
form {
	display: flex;
	flex-direction: column;
}
.mbtn {
	align-self: flex-end;
}
.inpt {
	margin-top: 15px;
}
</style>

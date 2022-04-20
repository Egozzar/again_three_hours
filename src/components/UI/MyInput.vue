<template>
		<input
			type="text"
			class="inpt"
			:placeholder="myPlaceholder"
		>
</template>
<script>
export default {
	name: 'MyInput',
	data() {
		return {}
	},
	methods: {},
	props: {
		myPlaceholder: {
			type: String,
		}
	},
	emits: {},
	components: {},
}
</script>

<style scoped>
.inpt {
	padding: 10px 15px;
	border: 2px solid teal;
}
</style>

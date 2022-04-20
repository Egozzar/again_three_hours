<template>
	<div>
		<button class="btn"><slot></slot></button>
	</div>
</template>

<script>
export default {
	name: 'MyButton',
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
.btn {
	align-self: flex-end;
	margin-top: 15px;
	padding: 10px 15px;
	color: teal;
	background: none;
	border: 2px solid teal;
}

.btn:hover {
	color: white;
	background: teal;
}
.btn:active {
	color: white;
	background: teal;
	border: none;
	margin: 17px 2px 2px 2px;
}
</style>

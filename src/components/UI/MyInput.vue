<template>
		<input
			@input="templModel"
			:value="modelValue"
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
	methods: {
		templModel(event) {
			this.$emit('update:modelValue', event.target.value);
		}
	},
	props: {
		myPlaceholder: {
			type: String,
		},
		modelValue: [String, Number],
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

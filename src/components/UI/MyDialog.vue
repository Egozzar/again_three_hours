<template>
	<div
		class="dlg"
		v-if="show"
		@click="hideDialog"
	>
		<div class="content" @click.stop>
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	name: 'my-dialog',
	data() {
		return {}
	},
	methods: {
		hideDialog() {
			this.$emit('update:show', false);
		}
	},
	props: {
		show: {
			type: Boolean,
			default() {
				return false;
			},
		},
	},
	emits: {},
	components: {},
}
</script>

<style scoped>
.dlg {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	background: rgba(0, 0, 0, 0.5);
}
.content {
	margin: auto;
	background: #fff;
	border-radius: 12px;
	min-width: 500px;
	min-height: 100px;
	padding: 20px;
}
</style>

<script lang="ts">
	let { children } = $props();
</script>

<div class="auth-container">
	<!-- Dito papasok yung Login page mo -->
	{@render children()}
</div>

<style>
	.auth-container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}
</style>
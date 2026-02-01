<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>Welcome, {$page.data.user?.username}!</h1>
<p>This is your student planner dashboard.</p>

<form method="POST" action="/logout">
	<button type="submit">Logout</button>
</form>
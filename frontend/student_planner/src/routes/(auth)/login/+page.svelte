<script lang="ts">
	import { enhance } from '$app/forms';
	let { form } = $props();

	let loading = $state(false);
</script>

<!-- Main Wrapper -->
<div class="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
	
	<!-- Login Container Card -->
	<div class="flex w-full max-w-250 min-h-150 bg-white rounded-xl overflow-hidden shadow-md">
		
		<!-- LEFT SIDE: Branding (Hidden on mobile/tablet, visible on LG screens) -->
		<div class="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-600 to-violet-700 p-12 text-white flex-col gap-6 relative overflow-hidden">

			<div class="relative z-10">
				<div class="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-8 border border-white/30">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
				</div>
				<h1 class="text-4xl font-extrabold leading-tight tracking-tight">
					Master Your <br/><span class="text-indigo-200">Academic Journey</span>
				</h1>
				<p class="mt-4 text-indigo-100 text-md max-w-xs leading-relaxed">
					The simplest way to manage your subjects, tasks, and deadlines in one place.
				</p>
			</div>

			<div class="relative z-10 space-y-2">
				<div class="flex items-center gap-3 text-sm font-medium text-indigo-100/80">
					<span class="w-1.5 h-1.5 bg-indigo-300 rounded-full"></span> Smart Task Tracking
				</div>
				<div class="flex items-center gap-3 text-sm font-medium text-indigo-100/80">
					<span class="w-1.5 h-1.5 bg-indigo-300 rounded-full"></span> Focus-Mode Schedule
				</div>
			</div>
		</div>

		<!-- RIGHT SIDE: Form Section -->
		<div class="flex-1 flex flex-col items-center justify-center p-8 sm:p-12 lg:p-16">
			<div class="w-full max-w-sm">
				
				<!-- Mobile Logo (Visible only on small/med screens) -->
				<div class="flex lg:hidden items-center gap-2 mb-8 group">
					<div class="p-2 bg-indigo-600 rounded-lg text-white">
						<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
					</div>
					<span class="text-xl font-bold tracking-tight text-slate-800">Student Planner</span>
				</div>

				<div class="mb-10">
					<h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome Back</h2>
					<p class="text-slate-500 mt-2">Please enter your credentials to continue.</p>
				</div>

				<form 
					method="POST" 
					action="?/login" 
					use:enhance={() => {
						loading = true;
						return async ({ update }) => {
							await update();
							loading = false;
						};
					}}
					class="space-y-6"
				>
					<div class="space-y-2">
						<label for="username" class="text-sm font-semibold text-slate-700 ml-1">Username</label>
						<input 
							type="text" 
							id="username" 
							name="username" 
							placeholder="e.g. johndoe_23" 
							required 
							class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 transition-all bg-slate-50/50"
						/>
					</div>

					<div class="space-y-2">
						<div class="flex justify-between items-center px-1">
							<label for="password" class="text-sm font-semibold text-slate-700">Password</label>

						</div>
						<input 
							type="password" 
							id="password" 
							name="password" 
							placeholder="••••••••" 
							required 
							class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 transition-all bg-slate-50/50"
						/>
					</div>

                    <a href="/forgot" class="text-xs font-bold text-indigo-600 hover:text-indigo-700">Forgot?</a>

					{#if form?.error}
						<div class="bg-rose-50 border border-rose-100 text-rose-600 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2 animate-in fade-in slide-in-from-top-1">
							<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
							{form.error}
						</div>
					{/if}

					<button 
						type="submit" 
						disabled={loading}
						class="w-full bg-slate-900 hover:bg-slate-800 text-white py-3.5 rounded-xl font-semibold transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center h-12"
					>
						{#if loading}
							<div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
						{:else}
							Sign In
						{/if}
					</button>
				</form>

				<p class="mt-10 text-center text-sm text-slate-500">
					Don't have an account? 
					<a href="/register" class="text-indigo-600 font-bold hover:underline underline-offset-4 ml-1">Sign up here</a>
				</p>
			</div>
		</div>
	</div>
</div>
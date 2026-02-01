import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { dev } from '$app/environment';

export const actions: Actions = {
	login: async ({ cookies, request }) => {
		const formData = await request.formData();
		const username = formData.get('username') as string;
		const password = formData.get('password') as string;

		// 1. Validation
		if (!username || !password) {
			return fail(400, { error: 'Username and password are required' });
		}

		// 2. AUTH LOGIC (Dito ka magche-check sa DB)
		if (username === 'admin' && password === '1234') {
			// 3. Set Cookie
			cookies.set('session', 'secret-token-here', {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: !dev, // True sa production, false sa dev
				maxAge: 60 * 60 * 24 // 1 day
			});

			throw redirect(303, '/dashboard');
		}

		return fail(401, { error: 'Invalid credentials' });
	}
};
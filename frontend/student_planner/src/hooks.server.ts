import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// 1. Basahin ang session cookie
	const session = event.cookies.get('session');

	// 2. I-validate ang session (sa totoong app, check ito sa Database)
	if (!session) {
		event.locals.user = null;
	} else {
		// Dito mo ilalagay ang user data galing sa DB base sa cookie/token
		event.locals.user = {
			id: '101',
			username: 'JuanLuna',
			role: 'student'
		};
	}

	// 3. Route Protection Logic
	const isAppRoute = event.url.pathname.startsWith('/dashboard');
	const isAuthRoute = event.url.pathname.startsWith('/login');

	if (isAppRoute && !event.locals.user) {
		throw redirect(303, '/login');
	}

	if (isAuthRoute && event.locals.user) {
		throw redirect(303, '/dashboard');
	}

	return await resolve(event);
};
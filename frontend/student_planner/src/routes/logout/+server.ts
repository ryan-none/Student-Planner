import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = ({ cookies }) => {
	// Burahin ang cookie
	cookies.delete('session', { path: '/' });
	
	// Balik sa login
	throw redirect(303, '/login');
};
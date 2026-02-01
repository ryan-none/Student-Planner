import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals }) => {
	// Ipapasa nito ang event.locals.user (galing sa hooks) papunta sa Client-side
	return {
		user: locals.user
	};
};
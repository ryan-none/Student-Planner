// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			// Dito nakatago ang user info habang nasa server
			user: {
				id: string;
				username: string;
				role: string;
			} | null;
		}
		// interface PageData {} // Para sa data na laging nasa pages
	}
}

export {};

export {};

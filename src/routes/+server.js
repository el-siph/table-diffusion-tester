import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { card } = await request.json();

	return json(`/img/french-trad/${card._suit.substring(0, 1)}${card._pips}.png`);
}

import type { PageLoad } from './$types';
import content from 'content/home';

export const load: PageLoad = async () => {
	return content;
};

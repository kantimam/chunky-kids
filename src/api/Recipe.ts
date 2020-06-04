import { handleError } from './util';

const API_BASE = "http://localhost:5000/api"

export function apiScrapeRecipe(url: string) {
    return fetch(`${API_BASE}/scrape?recipe=${encodeURIComponent(url)}`).then(handleError);
}
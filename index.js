import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
/**
 * @param {Location} location
 * @returns {string}
 */
function load_md(location)
{
	/** @type {string} */
	let rel_loc = location.hash;
	if (rel_loc == ""){
		rel_loc = "#README";
	}
	fetch(`https://raw.githubusercontent.com/GiftedR/GiftedR.github.io/refs/heads/development/pages/${rel_loc.replace("#", "")}.md`)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error: ${response.status}`);
			}
			return response.text();
		})
		.then((text) => {
			// Output Goes Here
			document.querySelector('main').innerHTML = format_md(text);
		})
		.catch((error) => {
			console.error(error);
			document.querySelector('main').innerHTML = format_md(`
# Page not found!

The location you are looking for is not found.

Click [here](#) to return to home
				`);
		});
}
/** 
 * @param {string} page
 * @returns {string}
 */
function format_md(page)
{
	return marked.parse(page);
}

let old_loc = window.location.href;

setInterval(() => {
	if (window.location.href !== old_loc)
	{
		old_loc = window.location.href;
		load_md(window.location);
	}
}, 30);

load_md(window.location);
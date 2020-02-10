const puppeteer = require('puppeteer-extra');

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function scrapeProduct(urls) {
	urls.map(async function(url, index) {
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.goto(url);
await page.setViewport({ width: 1450, height: 700 });
// await page.waitFor(5000);

await page.click("#reviews-medley-footer .a-spacing-large a");
await page.waitFor(5000);

console.log("clicked button & loading...");
const result = await page.$$eval('.filterable-reviews-content .a-section .review', rows => {
	return rows.map(review => {
		const properties = {};
			const titleElement = review.querySelector(".review-title-content span");
			properties.title = titleElement.innerText;
			const starElement = review.querySelector(".review-rating");
			properties.ranking = starElement.innerText;
			const reviewDateElement = review.querySelector(".review-date");
			properties.reviewDate = reviewDateElement.innerText;
			const authorName = review.querySelector(".a-profile-name");
			properties.authorName = authorName.innerText;
			// const properties = {
			// 	title: titleElement,
			// 	stars: starElement,
			// 	reviewDate: reviewDateElement,
			// 	author: authorName
			// };
				return properties;
			})
			// let final = [...result, ...result]
			// console.log(final,"final");
		})


// await page.$$eval('#cm_cr-review_list .review', rows => {
// 	console.log("loggin rows....")
// 	return rows.map(async function(review) {
// 		const properties = {};
// 		const titleElement = review.querySelector(".review-title-content span");
// 				properties.title = titleElement.innerText;
// 				console.log("title:", titleElement.innerText, review);
				
// 				const starElement = review.querySelector(".review-rating");
// 				properties.ranking = starElement.innerText;
// 				const reviewDateElement = review.querySelector(".review-date");
// 				properties.reviewDate = reviewDateElement.innerText;
// 				const authorName = review.querySelector(".a-profile-name");
// 				properties.authorName = authorName.innerText;
// 				console.log(properties)
// 				return properties;
// 			})
// 		})

		// await page.screenshot({ path: `stealth.png`, fullPage: true });
		await page.click(".a-pagination .a-last");
		await page.waitFor(5000);
		// await page.screenshot({ path: `stealth1.png`, fullPage: true });

		console.log(result);
		// await browser.close();
	});
	
}
//i need to loop over the main element and grab each elements xpath.


//review text, review date, review title, star rating, author name,
scrapeProduct([
	// "https://www.amazon.com/dp/B002YRB35I"
	"https://www.amazon.com/Funko-Pop-Pokemon-Pikachu-Waving/dp/B07XYKSNXL/ref=sxin_0_ac_d_pm?ac_md=1-0-VW5kZXIgJDI1-ac_d_pm&cv_ct_cx=funko&keywords=funko&pd_rd_i=B07XYKSNXL&pd_rd_r=d3740c10-e4a5-4b8f-99b3-c11754119b67&pd_rd_w=nOVnV&pd_rd_wg=htyxv&pf_rd_p=b8b03b37-bd30-4468-adff-11c42ccb6582&pf_rd_r=DPQPW7ZRCN53R9AC613X&psc=1&qid=1580333670&sr=1-1-22d05c05-1231-4126-b7c4-3e7a9c0027d0"
]);

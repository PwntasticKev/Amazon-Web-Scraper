const puppeteer = require('puppeteer-extra');

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function scrapeProduct(urls) {
	urls.map(async function(url, index) {
		const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();
		await page.goto(url);
		await page.waitFor(5000);

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
				return properties;
			})
		})
		console.log(result);
		await browser.close();
	});
	
}
//i need to loop over the main element and grab each elements xpath.


//review text, review date, review title, star rating, author name,
scrapeProduct([
	"https://www.amazon.com/dp/B002YRB35I"
]);
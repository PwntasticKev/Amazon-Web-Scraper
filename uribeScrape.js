const puppeteer = require('puppeteer-extra');

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

let data = [];
async function scrapeProduct(urls) {
	urls.map(async function(url, index) {
		const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();
		await page.goto(url);
		// await page.setViewport({ width: 800, height: 600 });
		await page.waitFor(5000);

		const result = await page.$$eval('.filterable-reviews-content', rows => {
			return rows.map(review => {
				const properties = {};
				const titleElement = review.querySelector(".review-title-content span");
				properties.title = titleElement.innerText;
				properties.ranking = review.querySelector(".review-title-content span");
				// return properties;
			})
		})

		// let content = await page.evaluate(() => {
		// 	let divs = [...document.querySelectorAll('.filterable-reviews-content')];
		// 	return divs.map(item => {
		// 		return item.textContent.replace(/(\r\n|\n|\r)/gm,"")
		// 	} );
		//   });
		
		// console.log({productImg, productTitle, buyBoxUsername, productPrice});
		// data.push({ reviewText });
		// console.log(data);
		console.log(result);
		await browser.close();
	});
	
}
//i need to loop over the main element and grab each elements xpath.


//review text, review date, review title, star rating, author name,
scrapeProduct([
	"https://www.amazon.com/dp/B002YRB35I"
]);

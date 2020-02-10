const puppeteer = require('puppeteer-extra');
require('dotenv').config();
// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
async function scrapeProduct(url) {
	let data = [];
	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();
	await page.goto(url);
	await page.setViewport({ width: 800, height: 600 });
	await page.waitFor(5000);
	await page.click("#ap_email");
	console.log("Logging in using:", process.env.SELLER_LOGIN)
	await page.keyboard.type(process.env.SELLER_LOGIN);
	await page.click("#ap_password");
	console.log("Logging in using:", process.env.SELLER_PASSWORD.length)
	await page.keyboard.type(process.env.SELLER_PASSWORD);

	await page.keyboard.type("TEST");
	await page.click(".a-checkbox label input");
	await page.screenshot({ path: `stealth.png`, fullPage: true });

	// const [el] = await page.$x('//*[@id="landingImage"]');
	// const src = await el.getProperty('src');
	// const productImg = await src.jsonValue();

	// const [el2] = await page.$x('//*[@id="productTitle"]');
	// const txt = await el2.getProperty('textContent');
	// const titleTxt = await txt.jsonValue();
	// const productTitle = titleTxt.trim();

	await browser.close();
}

scrapeProduct("https://sellercentral.amazon.com/inventory/ref=xx_invmgr_dnav_xx?tbla_myitable=sort:%7B%22sortOrder%22%3A%22DESCENDING%22%2C%22sortedColumnId%22%3A%22date%22%7D;search:;pagination:1;");

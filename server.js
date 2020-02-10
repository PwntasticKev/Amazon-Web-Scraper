require("dotenv").config()
const cors = require("cors")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
app.use("/static", express.static("public", { redirect: true }))
app.use(cors())

const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());


async function scrapeProduct(urls) {
	let data = [];
	urls.map(async function(url, index) {
		const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();
		await page.goto(url);
		// await page.setViewport({ width: 800, height: 600 });
		// await page.screenshot({ path: `stealth${index}.png`, fullPage: true });
		await page.waitFor(5000);

		const [el] = await page.$x('//*[@id="landingImage"]');
		
		const src = await el.getProperty('src');
		const productImg = await src.jsonValue();

		const [el2] = await page.$x('//*[@id="productTitle"]');
		const txt = await el2.getProperty('textContent');
		const titleTxt = await txt.jsonValue();
		const productTitle = titleTxt.trim();

		const [buyBoxUser] = await page.$x('//*[@id="sellerProfileTriggerId"]');
		const buyBoxTxt = await buyBoxUser.getProperty('textContent');
		const buyBoxEl = await buyBoxTxt.jsonValue();
		const buyBoxUsername = buyBoxEl.trim();

		// the buy box price is different on different pages. so check if one exists. if not do the other.await page.$x('//*[@id="price_inside_buybox"]'); //*[@id="priceblock_ourprice"] //*[@id="priceblock_ourprice"]
		let [price] = await page.$x('//*[@id="priceblock_ourprice"]')
		const priceTxt = await price.getProperty('textContent');
		const priceTxtJson = await priceTxt.jsonValue();
		var productPrice = priceTxtJson.trim();

		data.push({ productImg, productTitle, buyBoxUsername, productPrice });
		console.log(data);
		await browser.close();
	});
}

scrapeProduct([
	'https://www.amazon.com/LG-27UD68-W-27-Inch-Monitor-FreeSync/dp/B01C3BZIIC/ref=sr_1_4?keywords=lg+4k+monitor&qid=1581044404&sr=8-4',
	'https://www.amazon.com/Inutile-League-Legends-Unforgiven-Action/dp/B0737K7ZRY/ref=sr_1_3?keywords=league%2Bof%2Blegends+figure&qid=1579825956&sr=8-3'
]);

app.listen(3006, () => {
  console.log(`AQUI EN LA ${3006}`)
})
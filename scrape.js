
const puppeteer = require('puppeteer-extra')

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// async function scrapeProduct(urls) {
	
// 	let data = []
// 	urls.map( async function(url,index) {
// 		const browser = await puppeteer.launch({ headless: true });
// 			const page = await browser.newPage();
// 			await page.goto(url)
// 			await page.setViewport({ width: 800, height: 600 })
// 			await page.waitFor(5000)
// 			await page.screenshot({ path: `stealth${index}.png`, fullPage: true })
	
// 			const [el] = await page.$x('//*[@id="landingImage"]')
// 			const src = await el.getProperty('src');
// 			const productImg = await src.jsonValue()
	
// 			const [el2] = await page.$x('//*[@id="productTitle"]')
// 			const txt = await el2.getProperty('textContent');
// 			const titleTxt = await txt.jsonValue()
// 			const productTitle = titleTxt.trim()
	
// 			const [buyBoxUser] = await page.$x('//*[@id="sellerProfileTriggerId"]')
// 			const buyBoxTxt = await buyBoxUser.getProperty('textContent');
// 			const buyBoxEl = await buyBoxTxt.jsonValue()
// 			const buyBoxUsername = buyBoxEl.trim()
	
// 			const [price] = await page.$x('//*[@id="price_inside_buybox"]')
// 			const priceTxt = await price.getProperty('textContent');
// 			const priceTxtJson = await priceTxt.jsonValue()
// 			const productPrice = priceTxtJson.trim()
	
// 			// console.log({productImg, productTitle, buyBoxUsername, productPrice});
// 			data.push({ productImg, productTitle, buyBoxUsername, productPrice })
// 			console.log(data)
// 			await browser.close()
// 		})
		
// }




// 				scrapeProduct(["https://www.amazon.com/Inutile-League-Legends-Unforgiven-Action/dp/B0737K7ZRY/ref=sr_1_3?keywords=league%2Bof%2Blegends+figure&qid=1579825956&sr=8-3", "https://www.amazon.com/AEmber-Legends-Tibbers-Birthday-Christmas/dp/B07KTWR82K/ref=sr_1_2?keywords=league%2Bof%2Blegends+figure&qid=1579826278&sr=8-2"])


				async function scrapeProduct(urls) {

					urls.map( async function(url,index) {
						const browser = await puppeteer.launch({ headless: true, executablePath: "./node_modules/puppeteer/.local-chromium/win64-656675/chrome-win/chrome.exe" });
							const page = await browser.newPage();
							await page.goto(url)
							await page.setViewport({ width: 1400, height: 600 })
							await page.waitFor(5000)
							await page.screenshot({ path: `Test${index}.png`, fullPage: true })
							await browser.close()
						})
						
				}
				
				scrapeProduct(["https://experience.visithouston.com/checkout/3/visit-houston/8/houston-marketplace",
								"https://deals.baltimore.org/checkout/259/visit-baltimore/1468/baltimore-show-your-badge",
								"https://connectpass.visitsaltlake.com/checkout/162/visit-salt-lake/687/attractions-hub"])
				

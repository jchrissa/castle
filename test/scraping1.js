const puppeteer = require('puppeteer');

(async () => {

const browser=await puppeteer.launch();

    const page=await browser.newPage();
    await page.goto('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-1',{waitUntil:'networkidle2'});
const partnersOnPage=await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText));
    




    console.log(partnersOnPage);

await browser.close();
})();


























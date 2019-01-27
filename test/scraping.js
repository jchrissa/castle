const puppeteer = require('puppeteer');

(async () => {

const extractPartners = async url =>{

const page = await browser.newPage();

await page.goto(url,{waitUntil:'networkidle2'});

  //  await page.goto(url, {timeout: 3000000});
    
   const partnersOnPage = await page.evaluate(() =>

   	Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText));
    
    
            
    await page.close();

    // Recursively scrape the next page
    if (partnersOnPage.length == 0) {
      // Terminate if no partners exist
      return partnersOnPage
    } else {
      // Go fetch the next page ?page=X+1
     const nextPageNumber=parseInt(url.match(/page-(\d+)$/)[1],10)+1;
	const nextUrl ='https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-${nextPageNumber}';
	return partnersOnPage.concat(await extractPartners(nextUrl))
    }
  };

  const browser = await puppeteer.launch({
  headless: true
});
  const firstUrl =
    "https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-1";
  const partners = await extractPartners(firstUrl);

  // Todo: Update database with partners
  console.log(partners);

  await browser.close();
})();
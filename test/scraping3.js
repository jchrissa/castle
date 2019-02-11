
const puppeteer = require('puppeteer');


var oneStar=[];
var twoStars=[];
var threeStars=[];




(async () => {

const browser=await puppeteer.launch();

    const page=await browser.newPage();
    await page.goto('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-1',{waitUntil:'networkidle2'});
 
let RestOneStar=[];
let RestTwoStars=[];
let RestThreeStars=[];

var allStars=[];
 /* allStars=allStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));*/
      allStars= allStars.concat(await page.evaluate(() =>

   Array.from(document.querySelectorAll("div.panel-pane-inside")).map(compact => ({

       title: compact.querySelector('.poi_card-display-title').innerText(),
       image: compact.querySelector('.poi_card-picture img').src

    })))); 
    

let url='https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-\i'
 let index=await page.evaluate(() =>

    document.querySelector('div.item-list ul.pager li.last').previousElementSibling.innerText);

 
   for (i = 1; i <= index; i++)
{
    url='https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-'+i;
    
        await page.goto(url,{waitUntil:'networkidle2'});
     /* allStars= allStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));*/

       allStars= allStars.concat(await page.evaluate(() =>

   Array.from(document.querySelectorAll("div.panel-pane-inside")).map(compact => ({

       title: compact.querySelector('.poi_card-display-title').innerText(),
       image: compact.querySelector('.poi_card-picture img').src

    })))); 

}
url='https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin';
    
        await page.goto(url,{waitUntil:'networkidle2'});

/*oneStar=oneStar.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));*/

    
 oneStar= oneStar.concat(await page.evaluate(() =>

   Array.from(document.querySelectorAll("div.panel-pane-inside")).map(compact => ({

       title: compact.querySelector('.poi_card-display-title').innerText(),
       image: compact.querySelector('.poi_card-picture img').src

    })))); 

index=await page.evaluate(() =>

    document.querySelector('div.item-list ul.pager li.last').previousElementSibling.innerText);


   for (i = 1; i <= index; i++)
{
    url='https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/page-'+i;
    
        await page.goto(url,{waitUntil:'networkidle2'});
   /*   oneStar= oneStar.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));*/

       oneStar= oneStar.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside")).map(compact => ({

       title: compact.querySelector('.poi_card-display-title').innerText(),
       image: compact.querySelector('.poi_card-picture img').src

    })))); 
      
    
}
url='https://restaurant.michelin.fr/restaurants/france/restaurants-2-etoile-michelin';
    
        await page.goto(url,{waitUntil:'networkidle2'});



/*twoStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));*/


       twoStars= twoStars.concat(await page.evaluate(() =>

   Array.from(document.querySelectorAll("div.panel-pane-inside")).map(compact => ({

       title: compact.querySelector('.poi_card-display-title').innerText(),
       image: compact.querySelector('.poi_card-picture img').src

    })))); 
index=await page.evaluate(() =>

    document.querySelector('div.item-list ul.pager li.last').previousElementSibling.innerText);


   for (i = 1; i <= index; i++)
{
    url='https://restaurant.michelin.fr/restaurants/france/restaurants-2-etoile-michelin/page-'+i;
    
        await page.goto(url,{waitUntil:'networkidle2'});
      /* twoStars= twoStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));*/

        twoStars= twoStars.concat(await page.evaluate(() =>

Array.from(document.querySelectorAll("div.panel-pane-inside")).map(compact => ({

       title: compact.querySelector('.poi_card-display-title').innerText(),
       image: compact.querySelector('.poi_card-picture img').src

    })))); 
}
url='https://restaurant.michelin.fr/restaurants/france/restaurants-3-etoile-michelin';
    
        await page.goto(url,{waitUntil:'networkidle2'});


 threeStars= threeStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside")).map(compact => ({

       title: compact.querySelector('.poi_card-display-title').innerText(),
       image: compact.querySelector('.poi_card-picture img').src

    })))); 
    
/*threeStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));*/
index=await page.evaluate(() =>

    document.querySelector('div.item-list ul.pager li.last').previousElementSibling.innerText);


   for (i = 1; i <= index; i++)
{
    url='https://restaurant.michelin.fr/restaurants/france/restaurants-3-etoile-michelin/page-'+i;
    
        await page.goto(url,{waitUntil:'networkidle2'});
      /* threeStars= threeStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText))); */
     threeStars= threeStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside")).map(compact => ({

       title: compact.querySelector('.poi_card-display-title').innerText(),
       image: compact.querySelector('.poi_card-picture img').src

    })))); 
    
}
console.log(oneStar);
console.log(twoStars);
console.log(threeStars);

await browser.close();
})();


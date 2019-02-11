const puppeteer = require('puppeteer');

(async () => {

const browser=await puppeteer.launch();

    const page=await browser.newPage();
    

  

/* Resto=Resto.concat(await page.evaluate(() =>
Array.from(document.querySelectorAll('div.hotelQuickView h3.mainTitle3 a span')).map(compact => compact.innerText)));*/

     
   await page.goto('https://www.relaischateaux.com/fr/destinations/europe/france',{waitUntil:'networkidle2'});

 

  var Resto=[];




let indexList=await page.evaluate(() => document.querySelectorAll('ul.pagination li').length);
      
//try{



  Resto=Resto.concat(await page.evaluate(() =>
Array.from(document.querySelectorAll('div.hotelQuickView')).map(compact =>({

  title:compact.querySelector('h3.mainTitle3 a span').innerText,
  image:compact.querySelector('div.col-1-2 div.slick-slide img').src,
 addresse:compact.querySelector('div.hotelQuickView div.col-1-2 h4 span').innerText
 // prix:compact.querySelector('div.col-1-2 div.tag span.price').innerText
}))))

while(indexList >0)
{


await page.$$eval('ul.pagination li.next a', elements => elements[0].click());
await page.waitFor(4000);


if(await page.evaluate(() =>Array.from(document.querySelectorAll('div.hotelQuickView div.col-1-2 div.tag span.price'))== null))
{

  Resto=Resto.concat(await page.evaluate(() =>
Array.from(document.querySelectorAll('div.hotelQuickView')).map(compact =>({

  title:compact.querySelector('h3.mainTitle3 a span').innerText,
  image:compact.querySelector('div.col-1-2 div.slick-slide img').src,
  addresse:compact.querySelector('div.hotelQuickView div.col-1-2 h4 span').innerText
  //prix: if(compact.querySelector('div.col-1-2 div.tag span.price').innerText != null)

}))))

}
else
{
    Resto=Resto.concat(await page.evaluate(() =>
Array.from(document.querySelectorAll('div.hotelQuickView')).map(compact =>({

  title:compact.querySelector('h3.mainTitle3 a span').innerText,
  image:compact.querySelector('div.col-1-2 div.slick-slide img').src,
  addresse:compact.querySelector('div.hotelQuickView div.col-1-2 h4 span').innerText,
  prix:compact.querySelector('div.col-1-2 div.tag span.price').innerText 

}))))
}





      //let doc=await page.evaluate(() => document.querySelector('li.current').innerText);

//console.log(doc);
indexList--;
}
//}
//catch
//{

//}

console.log(Resto.length);
console.log(Resto);



await browser.close();
})();



























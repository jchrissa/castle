var rp = require('request-promise');
const cheerio = require('cheerio');
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
  /*allStars=allStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));*/
       allStars= allStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside")).map(compact => ({

       title: compact.querySelector("div.poi_card-display-title").innerText(),
       image: compact.querySelector("poi_card-picture").src

    }))));
    

let url='https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-\i'
 let index=await page.evaluate(() =>

    document.querySelector('div.item-list ul.pager li.last').previousElementSibling.innerText);

 
   for (i = 1; i <= index; i++)
{
	url='https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-'+i;
	
	    await page.goto(url,{waitUntil:'networkidle2'});
     /*  allStars= allStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));*/

       allStars= allStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside")).map(compact => ({

       title: compact.querySelector("div.poi_card-display-title").innerText(),
       image: compact.querySelector("poi_card-picture").src

    }))));

}
url='https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin';
	
	    await page.goto(url,{waitUntil:'networkidle2'});

/*oneStar=oneStar.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));*/

    
 oneStar= oneStar.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside")).map(compact => ({

       title: compact.querySelector('div.poi_card-display-title').innerText(),
       image: compact.querySelector('poi_card-picture').src

    }))));

index=await page.evaluate(() =>

    document.querySelector('div.item-list ul.pager li.last').previousElementSibling.innerText);


   for (i = 1; i <= index; i++)
{
	url='https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/page-'+i;
	
	    await page.goto(url,{waitUntil:'networkidle2'});
     /*  oneStar= oneStar.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));*/

        oneStar= oneStar.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside")).map(compact => ({

       title: compact.querySelector('div.poi_card-display-title').innerText(),
       image: compact.querySelector('poi_card-picture').src

    }))));

      
    
}
url='https://restaurant.michelin.fr/restaurants/france/restaurants-2-etoile-michelin';
	
	    await page.goto(url,{waitUntil:'networkidle2'});



/*twoStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));*/


        twoStars= twoStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside")).map(compact => ({

       title: compact.querySelector('div.poi_card-display-title').innerText(),
       image: compact.querySelector('poi_card-picture').src

    }))));
index=await page.evaluate(() =>

    document.querySelector('div.item-list ul.pager li.last').previousElementSibling.innerText);


   for (i = 1; i <= index; i++)
{
	url='https://restaurant.michelin.fr/restaurants/france/restaurants-2-etoile-michelin/page-'+i;
	
	    await page.goto(url,{waitUntil:'networkidle2'});
       /*twoStars= twoStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));*/

        twoStars= twoStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside")).map(compact => ({

       title: compact.querySelector('div.poi_card-display-title').innerText(),
       image: compact.querySelector('poi_card-picture').src

    }))));
    
}
url='https://restaurant.michelin.fr/restaurants/france/restaurants-3-etoile-michelin';
	
	    await page.goto(url,{waitUntil:'networkidle2'});


 threeStars= threeStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside")).map(compact => ({

       title: compact.querySelector('div.poi_card-display-title').innerText(),
       image: compact.querySelector('poi_card-picture').src

    })))); 
    
/*threeStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));*/
index=await page.evaluate(() =>

    document.querySelector('div.item-list ul.pager li.last').previousElementSibling.innerText);


   for (i = 1; i <= index; i++)
{
	url='https://restaurant.michelin.fr/restaurants/france/restaurants-3-etoile-michelin/page-'+i;
	
	    await page.goto(url,{waitUntil:'networkidle2'});
     /*  threeStars= threeStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText))); */
     threeStars= threeStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside")).map(compact => ({

       title: compact.querySelector('div.poi_card-display-title').innerText(),
       image: compact.querySelector('poi_card-picture').src

    })))); 
    
}





let Resto=Scrap();




console.log(Resto);
await browser.close();
})();


function  Scrap(){
const url = 'https://www.relaischateaux.com/fr/destinations/europe/france';
let Res=[];
var name="";
var rate="";
var price="";
for (var i = 1 ; i <=8; i++)
{
    var options = {
        method: 'POST',
        uri: 'https://www.relaischateaux.com/fr/update-destination-results',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: 'areaId=78&page=' + i 
    };
    rp(options)
        .then(function(data){
            //succes 
            //console.log(data);
            const content = JSON.parse(data);
            //console.log(content.status);
            const $ = cheerio.load(content.html);
           $(".hotelQuickView ").each(function (index, element) {




                 name = $(element).find('span[itemprop="name"]').text();
                 rate = $(element).find('div.rate').attr("data-reviewrate");
                 price = $(element).find('span[class="price"]').text();
                 image=$(element).find("div[class=slick-slide.slick-active]").children().text();
                 link=$(element).find('a[role="track-compte-fav-resa"]').attr("href");
                 explanation=$(element).find('p[itemprop="description"]').text();
                Res.push({name:name,price:price,rate:rate,photo:image,lien:link,description:explanation});
                /*console.log(name);
                console.log(rate);
                conso;le.log(price);*/
            console.log(Res.length);

            if(Res.length == 150)
            {
            	useNextLoad(Res);
            	//return Res;
            }

           
              });
            
        })
        .catch(function(err){
            console.log(err);
            //handle error
        });
         
        
}
}

function useNextLoad(Res){
	
	




var RestoOneStar=[];
for(i=0;i<oneStar.length;i++)
{
	for(j=0;j<Res.length;j++)
	{
		if(Res[j].name.includes(oneStar[i]))
		{
            Res[j].photo=oneStar[i].image;
             RestoOneStar=RestoOneStar.concat(Res[j]);
		}
	}
}
var RestoTwoStars=[];
for(i=0;i<twoStars.length;i++)
{
	for(j=0;j<Res.length;j++)
	{
		if(Res[j].name.includes(twoStars[i]))
		{
            Res[j].photo=twoStars[i].image;
             RestoTwoStars=RestoTwoStars.concat(Res[j]);
		}
	}
}
var RestoThreeStars=[];
for(i=0;i<threeStars.length;i++)
{
	for(j=0;j<Res.length;j++)
	{
		if(Res[j].name.includes(threeStars[i]))
		{
             Res[j].photo=threeStars[i].image;
             RestoThreeStars=RestoThreeStars.concat(Res[j]);
		}
	}
}


for(i=0;i<RestoOneStar.length;i++)
{
	for(j=i+1;j<RestoOneStar.length;j++)
	{
		if(RestoOneStar[j]==RestoOneStar[i])
		{
             RestoOneStar.splice(i,1);
		}
	}
}

console.log("one");
console.log(RestoOneStar);
console.log("two");
console.log(RestoTwoStars);
console.log("three");
console.log(RestoThreeStars);

   
}


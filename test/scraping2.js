var rp = require('request-promise');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const fs = require('fs');



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
  allStars=allStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));

    

let url='https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-\i'
 let index=await page.evaluate(() =>

    document.querySelector('div.item-list ul.pager li.last').previousElementSibling.innerText);

 
   for (i = 1; i <= index; i++)
{
	url='https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-'+i;
	
	    await page.goto(url,{waitUntil:'networkidle2'});
       allStars= allStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));

}
url='https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin';
	
	    await page.goto(url,{waitUntil:'networkidle2'});

oneStar=oneStar.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));

index=await page.evaluate(() =>

    document.querySelector('div.item-list ul.pager li.last').previousElementSibling.innerText);


   for (i = 1; i <= index; i++)
{
	url='https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/page-'+i;
	
	    await page.goto(url,{waitUntil:'networkidle2'});
      oneStar= oneStar.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));

      
    
}
url='https://restaurant.michelin.fr/restaurants/france/restaurants-2-etoile-michelin';
	
	    await page.goto(url,{waitUntil:'networkidle2'});



twoStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));


        
index=await page.evaluate(() =>

    document.querySelector('div.item-list ul.pager li.last').previousElementSibling.innerText);


   for (i = 1; i <= index; i++)
{
	url='https://restaurant.michelin.fr/restaurants/france/restaurants-2-etoile-michelin/page-'+i;
	
	    await page.goto(url,{waitUntil:'networkidle2'});
       twoStars= twoStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));

    
    
}
url='https://restaurant.michelin.fr/restaurants/france/restaurants-3-etoile-michelin';
	
	    await page.goto(url,{waitUntil:'networkidle2'});


    
threeStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText)));
index=await page.evaluate(() =>

    document.querySelector('div.item-list ul.pager li.last').previousElementSibling.innerText);


   for (i = 1; i <= index; i++)
{
	url='https://restaurant.michelin.fr/restaurants/france/restaurants-3-etoile-michelin/page-'+i;
	
	    await page.goto(url,{waitUntil:'networkidle2'});
      threeStars= threeStars.concat(await page.evaluate(() =>

    Array.from(document.querySelectorAll("div.panel-pane-inside div.poi_card-display-title")).map(compact => compact.innerText))); 
    
}





Scrap();




//console.log(RestoOneStar);
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
                 price = $(element).find('span[class="price"] span[class="price"]').text();
                 rank="";
                 link=$(element).find('a[role="track-compte-fav-resa"]').attr("href");
                 type=$(element).find('div.category span').text();
                 explanation=$(element).find('p[itemprop="description"]').text().trim();
                 image=$(element).find('img[itemprop="photo"]').attr("src");

                Res.push({name:name,price:price,rate:rate,etoile:rank,lien:link,type:type,description:explanation,region:"",image:image});
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
var RestoTwoStars=[];
var RestoThreeStars=[];

var departement=["morbihan","vaucluse","aveyron","gironde","alpes-de-haute-provence","alpes-maritimes","loiret","indre-et-loire","paris","haute-vienne","pyrenees-atlantique","corse","allier","vendee","rhone","bas-rhin","gard","loire-atlantique","dordogne","rhone-alpes","cote-d-or","lot","haute-savoie","landes","seine-maritime","charente-maritime","cantal","savoie","saonne-et-loire","pas-de-calais","lot-et-garonne","champagne-ardenne","bouches-du-rhone","drome","ain","haute-loire"];





for(i=0;i<oneStar.length;i++)
{
	for(j=0;j<Res.length;j++)
	{
		if(Res[j].name.includes(oneStar[i]))
		{
             for(k=0;k<departement.length;k++)
             {
                if(Res[j].lien.includes(departement[k]))
                {
                    Res[j].region=departement[k];
                }
             }
              if(Res[j].type[15]==="a")
            {
                Res[j].type="Hôtel + Restaurant";
            }
            if(Res[j].type[15]==="u")
            {
                Res[j].type="Restaurant";
            }
            Res[j].etoile=1;
           console.log(Res[j].region);
             RestoOneStar=RestoOneStar.concat(Res[j]);

		}
	}
}

for(i=0;i<twoStars.length;i++)
{
	for(j=0;j<Res.length;j++)
	{
		if(Res[j].name.includes(twoStars[i]))
		{
                 for(k=0;k<departement.length;k++)
             {
                if(Res[j].lien.includes(departement[k]))
                {
                    Res[j].region=departement[k];
                }
             }
              if(Res[j].type[15]==="a")
            {
                Res[j].type="Hôtel + Restaurant";
            }
            if(Res[j].type[15]==="u")
            {
                Res[j].type="Restaurant";
            }
            Res[j].etoile=2;
               console.log(Res[j].region);
             RestoTwoStars=RestoTwoStars.concat(Res[j]);
		}
	}
}

for(i=0;i<threeStars.length;i++)
{
	for(j=0;j<Res.length;j++)
	{
		if(Res[j].name.includes(threeStars[i]))
		{
              for(k=0;k<departement.length;k++)
             {
                if(Res[j].lien.includes(departement[k]))
                {
                    Res[j].region=departement[k];
                }
             }
              if(Res[j].type[15]==="a")
            {
                Res[j].type="Hôtel + Restaurant";
            }
            if(Res[j].type[15]==="u")
            {
                Res[j].type="Restaurant";
            }
             Res[j].etoile=3;
             console.log(Res[j].region);
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

RestoOneStar=RestoOneStar.concat(RestoTwoStars);
RestoOneStar=RestoOneStar.concat(RestoThreeStars);
const RestoneStarJson=JSON.stringify(RestoOneStar);

console.log(RestoneStarJson);
fs.writeFile("reactapi/src/data/oneStar.json",RestoneStarJson, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});    
}


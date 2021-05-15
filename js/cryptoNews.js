

var symbol = " ";
var urlSymbol = " ";
var symbolArray = [];
var topRankingNews = [];
var breakingNewsArray = [];
var sentimentAnalysis = [];
var breakingNewsURL = `https://cryptonews-api.com/api/v1/category?section=general&items=${APIKEY}`;

// --breakingNews EventListener Fetch and display
// const breakingNews = document.getElementById('breakingNews');
// const sentimentMenu = document.querySelector('.sentiment-menu');
// breakingNews.addEventListener("click", e => {
//     urlSymbol = `https://cryptonews-api.com/api/v1/category?section=general&items=50&token=${APIKEY}`;
//     console.log(`This is symbol in Event Listener: ${symbol}`);
//     displayBreakingNews();
// })

function displayBreakingNews(){
    fetch(breakingNewsURL)
    .then(apiData2 => apiData2.json())
    .then(breakingNewsData => {
        // console.log(breakingNewsData);
        breakingNewsArray = breakingNewsData;
        console.log(`This is breakingNewsArray`);
        // console.log(breakingNewsArray);

        //Create News0 Info
        let imageURL0 = breakingNewsArray.data[0].image_url;
        let newsImage0 = document.getElementById('news-image0');
        newsImage0.setAttribute('src', imageURL0);

        let titleText0 = breakingNewsArray.data[0].title;
        let newsTitle0 = document.getElementById('news-title0');
        newsTitle0.innerText = titleText0.toString();

        let date0 = breakingNewsArray.data[0].date;
        let newsDate0 = document.getElementById('news-date0');
        newsDate0.innerText = date0.toString();

        let sentiment0 = breakingNewsArray.data[0].sentiment;
        let newsSentiment0 = document.getElementById('news-sentiment0');
        newsSentiment0.innerText = `Sentiment: ${sentiment0.toString()}`;

        let source0 = breakingNewsArray.data[0].source_name;
        let sourceName0 = document.getElementById('news-source_name0');
        sourceName0.innerText = source0.toString();
        //END Create News0 Info

        //Create News1 Info
        let imageURL1 = breakingNewsArray.data[1].image_url;
        let newsImage1 = document.getElementById('news-image1');
        newsImage1.setAttribute('src', imageURL1);

        let titleText1 = breakingNewsArray.data[1].title;
        let newsTitle1 = document.getElementById('news-title1');
        newsTitle1.innerText = titleText1.toString();

        let date1 = breakingNewsArray.data[1].date;
        let newsDate1 = document.getElementById('news-date1');
        newsDate1.innerText = date1.toString();

        let sentiment1 = breakingNewsArray.data[1].sentiment;
        let newsSentiment1 = document.getElementById('news-sentiment1');
        newsSentiment1.innerText = `Sentiment: ${sentiment1.toString()}`;

        let source1 = breakingNewsArray.data[1].source_name;
        let sourceName1 = document.getElementById('news-source_name1');
        sourceName1.innerText = source1.toString();
        //END Create News1 Info

        //Create News2 Info
        let imageURL2 = breakingNewsArray.data[2].image_url;
        let newsImage2 = document.getElementById('news-image2');
        newsImage2.setAttribute('src', imageURL2);

        let titleText2 = breakingNewsArray.data[2].title;
        let newsTitle2 = document.getElementById('news-title2');
        newsTitle2.innerText = titleText2.toString();

        let date2 = breakingNewsArray.data[2].date;
        let newsDate2 = document.getElementById('news-date2');
        newsDate2.innerText = date2.toString();

        let sentiment2 = breakingNewsArray.data[2].sentiment;
        let newsSentiment2 = document.getElementById('news-sentiment2');
        newsSentiment2.innerText = `Sentiment: ${sentiment2.toString()}`;

        let source2 = breakingNewsArray.data[2].source_name;
        let sourceName2 = document.getElementById('news-source_name2');
        sourceName2.innerText = source2.toString();
        //END Create News2 Info
    })
}
// -- END breakingNews EventListener Fetch and display


// --newsMenu EventListener Fetch and display
const newsMenu = document.querySelector('.dropdown-menu');
const sentimentMenu = document.querySelector('.sentiment-menu');
newsMenu.addEventListener("click", e => {
    symbol = e.target.innerText;
    urlSymbol = `https://cryptonews-api.com/api/v1?tickers=${symbol}&items=50&token=${APIKEY}`;
    console.log(`This is symbol in Event Listener: ${symbol}`);
    displaySymbol();
})

function displaySymbol(){
    fetch(urlSymbol)
    .then(apiData1 => apiData1.json())
    .then(symbolData => {
        console.log(symbolData);
        // console.log(`This is symbol in Fetch: ${symbol}`);
        // console.log(`This is description: ${description}`);
        // console.log(`This is icon: ${icon}`);
        // console.log(degF)

        symbolArray = symbolData;
      
        console.log(`This is symbolArray`);
        console.log(symbolArray);
        // let div = document.getElementById('symbol');

        // div.innerText = `${symbol.title}`;
        // div.innerText = `${symbol.text}`;
        // div.innerText = `${symbol.source_name}`;
        // div.innerText = `${symbol.date}`;
        // div.innerText = `${symbol.sentiment}`;
        // div.innerText = `${symbol.type}`;
        // div.innerText = `${symbol.news_url}`;
        // // console.log(symbol)
        // let span = document.getElementById('conditions');
        // span.innerText = `${degF.toString()}F ${description}`;
        // //Create icon image
        // var image = document.getElementById('image');
        // image.setAttribute('src', symbolData.image_url);
        // image.width = "250";
        // image.height = "250";
        
        // let imageBin = document.getElementById('pic');
        // imageBin.append(image);

        // input.value = "";//for clearing the input
    })
}
// -- END newsMenu EventListener Fetch and display


displayBreakingNews()


var symbol = " ";
var urlSymbol = " ";
var symbolArray = [];
var topRankingNews = [];
var breakingNewsArray = [];
var sentimentAnalysis = [];
var breakingNewsURL = `https://cryptonews-api.com/api/v1/category?section=general&items=50&token=${APIKEY}`;

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
        console.log(breakingNewsArray);

        const breakingNews = document.getElementById('breakingNews');
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
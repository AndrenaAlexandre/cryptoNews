

var symbol = " ";
var urlSymbol = " ";
var symbolArray = [];
const dropMenu = document.querySelector('.dropdown-item');
const input = document.getElementById('symbol');
// const input = document.getElementById('symbol2');
// const input = document.getElementById('symbol3');
dropMenu.addEventListener("click", e => {
    symbol = input.innerText;
    urlSymbol = `https://cryptonews-api.com/api/v1?tickers=${symbol}&items=50&token=${APIKEY}`;
    console.log(`This is symbol in Submit: ${symbol}`);
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
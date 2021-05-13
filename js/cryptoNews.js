// let's write some fumctions below //

var symbol = ""
var urlSymbol = " "
const form = document.querySelector('.form-group');// needs to be coordinated with Andrena
const input = document.getElementById('input-symbol');// needs to be coordinated with Andrena
form.addEventListener("submit", e => {
    e.preventDefault();
    symbol = input.value;
    symbol = symbol.toUpperCase();
    urlSymbol = `https://cryptonews-api.com/api/v1?tickers=${symbol}&items=50&token=${APIKEY}`;
    // console.log(`This is symbol in Submit: ${symbol}`);
    // console.log(`This is URL in Submit: ${url}`);
    displaySymbol();
})

function displaySymbol(){
    fetch(urlSymbol)
    .then(apiData1 => apiData1.json())
    .then(symbolData => {
        // console.log(symbolData);
        // console.log(`This is symbol in Fetch: ${symbol}`);
        let degF = symbolData.main.temp;
        let icon = symbolData.weather[0].icon;
        let description = symbolData.weather[0].description;
        let imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        // console.log(`This is description: ${description}`);
        // console.log(`This is icon: ${icon}`);
        // console.log(degF)
        let div = document.getElementById('symbol');
        div.innerText = `${symbol}`;
        // console.log(symbol)
        let span = document.getElementById('conditions');
        span.innerText = `${degF.toString()}F ${description}`;
        //Create icon image
        var image = document.getElementById('icon');
        image.setAttribute('src', imageUrl);
        image.width = "250";
        image.height = "250";
        
        let imageBin = document.getElementById('pic');
        imageBin.append(image);

        input.value = "";//for clearing the input
    })
}
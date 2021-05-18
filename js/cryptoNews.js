

var symbolArray = [];
var topRankingNews = [];
var breakingNewsArray = [];
var sentimentAnalysis = [];

function displayBreakingNews(){
    let breakingNewsURL = `https://cryptonews-api.com/api/v1/category?section=general&items=50&token=${APIKEY}`
    fetch(breakingNewsURL)
    .then(apiData2 => apiData2.json())
    .then(breakingNewsData => {
        
        breakingNewsArray = breakingNewsData;
        // window.open("/cryptoNews/results.html",`_news`)
        let fontColorTitle = "white";
        let fontColor = "goldenrod";
        let fontSize = "25px";
        let fontSize1 = "20px";
        
        let count = 0;
        while(count < 15){
            let sentimentColor = "white"
            if(breakingNewsArray.data[count].sentiment == "Positive"){
                sentimentColor = "dodgerblue";
            }
            else if(breakingNewsArray.data[count].sentiment == "Negative"){
                sentimentColor = "red";
            }

            let button = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute("data-bs-target", "#carouselExampleCaptions");
            button.setAttribute("data-bs-slide-to", `${count}`);
            button.setAttribute("class", "active");
            button.setAttribute("aria-current", "true");
            button.setAttribute("aria-label", `Slide ${count + 1}`);
            let appendButtons = document.getElementById('slide-buttons');
            appendButtons.append(button);

            let div = document.createElement("div");
            if(count == 0){
                div.setAttribute('class', "carousel-item active");
            }
            else{
                div.setAttribute('class', "carousel-item");
            }
            div.setAttribute('id', `news-div${count}`);
            let appendDiv = document.getElementById('breaking-news');
            appendDiv.append(div);

            let image = document.createElement("img");
            let imageURL = breakingNewsArray.data[count].image_url;
            image.setAttribute('src', imageURL);
            image.setAttribute('class', "d-block w-100");
            image.setAttribute('id', `news-image${count}`);
            let appendInfo = document.getElementById(`news-div${count}`);
            appendInfo.append(image);

            let div1 = document.createElement("div");
            div1.setAttribute('class', "carousel-caption d-none d-md-block");
            div1.setAttribute('id', `caption-div${count}`);
            appendInfo.append(div1);

            let title = document.createElement("a");
            let titleText = breakingNewsArray.data[count].title
            div1.setAttribute('href', breakingNewsArray.data[count].news_url);
            title.setAttribute('id', `news-title${count}`);
            title.setAttribute('style', `color: ${fontColorTitle}; font-size: ${fontSize}`);
            title.innerText = titleText.toString();
            let appendSubs = document.getElementById(`caption-div${count}`);
            appendSubs.append(title);

            let date = document.createElement("p");
            let dateText = breakingNewsArray.data[count].date;
            date.setAttribute('id', `news-date${count}`);
            date.setAttribute('style', `color: ${fontColor}; font-size: ${fontSize1}`);
            date.innerText = dateText.toString();
            appendSubs.append(date);
            
            let sentiment = document.createElement("p");
            let sentimentText = breakingNewsArray.data[count].sentiment;
            sentiment.setAttribute('id', `news-sentiment${count}`);
            sentiment.setAttribute('style', `color: ${sentimentColor}; font-size: ${fontSize1}`);
            sentiment.innerText = `Sentiment: ${sentimentText.toString()}`;
            appendSubs.append(sentiment);

            let source = document.createElement("p");
            let sourceText = breakingNewsArray.data[count].source_name;
            source.setAttribute('id', `news-source${count}`);
            source.setAttribute('style', `color: ${fontColor}; font-size: ${fontSize1}`);
            source.innerText = `Source: ${sourceText.toString()}`;
            appendSubs.append(source);

            count = count + 1;
            //END Create News Info
        }
        return false
    })
}
// -- END breakingNews EventListener Fetch and display

// --newsMenu EventListener Fetch and display
const newsMenu = document.querySelector('.dropdown-menu');
const sentimentMenu = document.querySelector('.sentiment-menu');
newsMenu.addEventListener("click", e => {
    e.preventDefault();
    if(e.target.id === "BTC" || e.target.id === "ETH" || e.target.id ==="XRP"){
        localStorage.symbol = e.target.id; 
        window.location.href = "results.html"
    }
})


function displaySymbol(){
    
    let symbol = localStorage.symbol;
    // if(localStorage.symbol == undefined || localStorage == null ? "BTC" : localStorage.symbol)
    let urlSymbol = `https://cryptonews-api.com/api/v1?tickers=${symbol}&items=50&token=${APIKEY}`;

    fetch(urlSymbol)
    .then(apiData1 => apiData1.json())
    .then(symbolData => {

        symbolArray = symbolData;
        // console.log(`This is symbolArray`);
        // console.log(symbolArray.data.length);
        
        let fontColorTitle = "black";
        let fontColor = "black";
        let fontSize = "20px";
        let fontSize1 = "20px";
        let count = 0;

        while(count < 4){
            //Create results
            let div = document.createElement("div");
            div.setAttribute('class', "carousel-item active d-flex flex-row spacing");
            div.setAttribute('id', `results-div${count}`);
            let appendDiv = document.querySelector('.results');
            appendDiv.append(div);

            let image = document.createElement("img");
            let imageURL = symbolArray.data[count].image_url;
            image.setAttribute('src', imageURL);
            image.setAttribute('class', "d-block justify-center");
            image.setAttribute('id', `results-image${count}`);
            let appendInfo = document.getElementById(`results-div${count}`);
            appendInfo.append(image);

            let title = document.createElement("h4");
            let titleText = symbolArray.data[count].title
            title.setAttribute('id', `results-title${count}`);
            title.setAttribute('style', `color: ${fontColorTitle}; font-size: ${fontSize}`);
            title.innerText = titleText.toString();
            appendInfo.append(title);

            let date = document.createElement("h5");
            let dateText = symbolArray.data[count].date;
            date.setAttribute('id', `results-date${count}`);
            date.setAttribute('style', `color: ${fontColor}; font-size: ${fontSize1}`);
            date.innerText = dateText.toString();
            appendInfo.append(date);
            
            let sentiment = document.createElement("h5");
            let sentimentText = symbolArray.data[count].sentiment;
            sentiment.setAttribute('id', `results-sentiment${count}`);
            sentiment.setAttribute('style', `color: ${fontColor}; font-size: ${fontSize1}`);
            sentiment.innerText = `Sentiment: ${sentimentText.toString()}`;
            appendInfo.append(sentiment);

            let source = document.createElement("h5");
            let sourceText = symbolArray.data[count].source_name;
            source.setAttribute('id', `results-source${count}`);
            source.setAttribute('style', `color: ${fontColor}; font-size: ${fontSize1}`);
            source.innerText = `Source: ${sourceText.toString()}`;
            appendInfo.append(source);

            count = count + 1;
            // END Create results
        } 
    })
}
// -- END resultMenu EventListener Fetch and display


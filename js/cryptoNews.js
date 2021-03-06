

var symbolArray = [];
var topRankingNews = [];
var breakingNewsArray = [];
var sentimentAnalysis = [];
var positiveSentimentArray = [];
var negativeSentimentArray = [];
var videoNewsArray = [];

// onLoad() for Index.html on-page-load execution
function onLoad(){
    displayBreakingNews();
    topRanking();
    positiveSentiment();
    negativeSentiment();
}
// -- End OnLoad()

// -- Begin displayBreakingNews()
function displayBreakingNews(){
    let breakingNewsURL = `https://cryptonews-api.com/api/v1/category?section=general&items=50&token=${APIKEY}`
    fetch(breakingNewsURL)
    .then(apiData2 => apiData2.json())
    .then(breakingNewsData => {
        
        breakingNewsArray = breakingNewsData;
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
            title.setAttribute('href', breakingNewsArray.data[count].news_url);
            title.setAttribute('target', '_blank');
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
// -- END displayBreakingNews()

// -- Begin displaySymbol()
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
        let fontColorTitle = "";
        let fontColor = "";
        let fontSize = "18px";
        let fontSize1 = "18px";
        let count = 0;

        while(count < symbolArray.data.length){
            let sentimentColor = "goldenrod"
            if(symbolArray.data[count].sentiment == "Positive"){
                sentimentColor = "dodgerblue";
            }
            else if(symbolArray.data[count].sentiment == "Negative"){
                sentimentColor = "red";
            }
            //Begin results
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

            let title = document.createElement("a");
            let titleText = symbolArray.data[count].title
            title.setAttribute('href', symbolArray.data[count].news_url);
            title.setAttribute('target', '_blank');
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
            sentiment.setAttribute('style', `color: ${sentimentColor}; font-size: ${fontSize1}`);
            sentiment.innerText = `Sentiment: ${sentimentText.toString()}`;
            appendInfo.append(sentiment);

            let source = document.createElement("h5");
            let sourceText = symbolArray.data[count].source_name;
            source.setAttribute('id', `results-source${count}`);
            source.setAttribute('style', `color: ${fontColor}; font-size: ${fontSize1}`);
            source.innerText = `Source: ${sourceText.toString()}`;
            appendInfo.append(source);

            count = count + 1;
            // END results
        } 
    })
}
// -- END displaySymbol()

// -- Begin topRanking()
function topRanking(){
    let urlTopRanking = `https://cryptonews-api.com/api/v1/category?section=general&items=10&extra-fields=rankscore&sortby=rank&days=3&token=${APIKEY}`;

    fetch(urlTopRanking)
    .then(apiData3 => apiData3.json())
    .then(topRankingData => {

        topRankingArray = topRankingData;
        let fontColorTitle = "";
        let fontColor = "";
        let fontSize = "18px";
        let fontSize1 = "18px";
        let count = 0;

        while(count < topRankingArray.data.length){
            let sentimentColor = "goldenrod"
            if(topRankingArray.data[count].sentiment == "Positive"){
                sentimentColor = "dodgerblue";
            }
            else if(topRankingArray.data[count].sentiment == "Negative"){
                sentimentColor = "red";
            }
            //Create results
            let div = document.createElement("div");
            div.setAttribute('class', "carousel-item active d-flex flex-row spacing");
            div.setAttribute('id', `topranking-div${count}`);
            let appendDiv = document.getElementById('top-ranking');
            appendDiv.append(div);

            let image = document.createElement("img");
            let imageURL = topRankingArray.data[count].image_url;
            image.setAttribute('src', imageURL);
            image.setAttribute('class', "d-block justify-center");
            image.setAttribute('id', `topranking-image${count}`);
            let appendInfo = document.getElementById(`topranking-div${count}`);
            appendInfo.append(image);

            let title = document.createElement("a");
            let titleText = topRankingArray.data[count].title
            title.setAttribute('href', topRankingArray.data[count].news_url);
            title.setAttribute('target', '_blank');
            title.setAttribute('id', `topranking-title${count}`);
            title.setAttribute('style', `color: ${fontColorTitle}; font-size: ${fontSize}`);
            title.innerText = titleText.toString();
            appendInfo.append(title);

            let date = document.createElement("h5");
            let dateText = topRankingArray.data[count].date;
            date.setAttribute('id', `topranking-date${count}`);
            date.setAttribute('style', `color: ${fontColor}; font-size: ${fontSize1}`);
            date.innerText = dateText.toString();
            appendInfo.append(date);
            
            let sentiment = document.createElement("h5");
            let sentimentText = topRankingArray.data[count].sentiment;
            sentiment.setAttribute('id', `topranking-sentiment${count}`);
            sentiment.setAttribute('style', `color: ${sentimentColor}; font-size: ${fontSize1}`);
            sentiment.innerText = `Sentiment: ${sentimentText.toString()}`;
            appendInfo.append(sentiment);

            let source = document.createElement("h5");
            let sourceText = topRankingArray.data[count].source_name;
            source.setAttribute('id', `topranking-source${count}`);
            source.setAttribute('style', `color: ${fontColor}; font-size: ${fontSize1}`);
            source.innerText = `Source: ${sourceText.toString()}`;
            appendInfo.append(source);

            count = count + 1;
            // END Create topranking
        } 
    })
}
// -- END topRanking()

// -- Begin positiveSentiment()
function positiveSentiment(){
    let urlpositiveSentiment = `https://cryptonews-api.com/api/v1/category?section=general&items=10&extra-fields=rankscore&sortby=rank&sentiment=positive&token=${APIKEY}`;

    fetch(urlpositiveSentiment)
    .then(apiData4 => apiData4.json())
    .then(positiveSentimentData => {

        positiveSentimentArray = positiveSentimentData;
        let fontColorTitle = "";
        let fontColor = "";
        let fontSize = "18px";
        let fontSize1 = "18px";
        let count = 0;

        while(count < positiveSentimentArray.data.length){
            //Create positiveSentiment
            let div = document.createElement("div");
            div.setAttribute('class', "carousel-item active d-flex flex-row spacing");
            div.setAttribute('id', `positvesentiment-div${count}`);
            let appendDiv = document.getElementById('positiveSentiment');
            appendDiv.append(div);

            let image = document.createElement("img");
            let imageURL = positiveSentimentArray.data[count].image_url;
            image.setAttribute('src', imageURL);
            image.setAttribute('class', "d-block justify-center");
            image.setAttribute('id', `positvesentiment-image${count}`);
            let appendInfo = document.getElementById(`positvesentiment-div${count}`);
            appendInfo.append(image);

            let title = document.createElement("a");
            let titleText = positiveSentimentArray.data[count].title
            title.setAttribute('href', positiveSentimentArray.data[count].news_url);
            title.setAttribute('target', '_blank');
            title.setAttribute('id', `positvesentiment-title${count}`);
            title.setAttribute('style', `color: ${fontColorTitle}; font-size: ${fontSize}`);
            title.innerText = titleText.toString();
            appendInfo.append(title);

            let date = document.createElement("h5");
            let dateText = positiveSentimentArray.data[count].date;
            date.setAttribute('id', `positvesentiment-date${count}`);
            date.setAttribute('style', `color: ${fontColor}; font-size: ${fontSize1}`);
            date.innerText = dateText.toString();
            appendInfo.append(date);

            let source = document.createElement("h5");
            let sourceText = positiveSentimentArray.data[count].source_name;
            source.setAttribute('id', `positvesentiment-source${count}`);
            source.setAttribute('style', `color: ${fontColor}; font-size: ${fontSize1}`);
            source.innerText = `Source: ${sourceText.toString()}`;
            appendInfo.append(source);

            count = count + 1;
            // END Create positiveSentiment
        } 
    })
}
// -- END positiveSentiment()

// -- Begin negativeSentiment()
function negativeSentiment(){
    let urlnegativeSentiment = `https://cryptonews-api.com/api/v1/category?section=general&items=10&extra-fields=rankscore&sortby=rank&sentiment=negative&token=${APIKEY}`;

    fetch(urlnegativeSentiment)
    .then(apiData5 => apiData5.json())
    .then(negativeSentimentData => {

        negativeSentimentArray = negativeSentimentData;
        let fontColorTitle = "";
        let fontColor = "";
        let fontSize = "18px";
        let fontSize1 = "18px";
        let count = 0;

        while(count < negativeSentimentArray.data.length){
            //Create negativeSentiment
            let div = document.createElement("div");
            div.setAttribute('class', "carousel-item active d-flex flex-row spacing");
            div.setAttribute('id', `negativesentiment-div${count}`);
            let appendDiv = document.getElementById('negativeSentiment');
            appendDiv.append(div);

            let image = document.createElement("img");
            let imageURL = negativeSentimentArray.data[count].image_url;
            image.setAttribute('src', imageURL);
            image.setAttribute('class', "d-block justify-center");
            image.setAttribute('id', `negativesentiment-image${count}`);
            let appendInfo = document.getElementById(`negativesentiment-div${count}`);
            appendInfo.append(image);

            let title = document.createElement("a");
            let titleText = negativeSentimentArray.data[count].title
            title.setAttribute('href', negativeSentimentArray.data[count].news_url);
            title.setAttribute('target', '_blank');
            title.setAttribute('id', `negativesentiment-title${count}`);
            title.setAttribute('style', `color: ${fontColorTitle}; font-size: ${fontSize}`);
            title.innerText = titleText.toString();
            appendInfo.append(title);

            let date = document.createElement("h5");
            let dateText = negativeSentimentArray.data[count].date;
            date.setAttribute('id', `negativesentiment-date${count}`);
            date.setAttribute('style', `color: ${fontColor}; font-size: ${fontSize1}`);
            date.innerText = dateText.toString();
            appendInfo.append(date);
            
            let source = document.createElement("h5");
            let sourceText = negativeSentimentArray.data[count].source_name;
            source.setAttribute('id', `negativesentiment-source${count}`);
            source.setAttribute('style', `color: ${fontColor}; font-size: ${fontSize1}`);
            source.innerText = `Source: ${sourceText.toString()}`;
            appendInfo.append(source);

            count = count + 1;
            // END Create negativeSentiment
        } 
    })
}
// -- END negativeSentiment()

// -- Begin displayVideo()
function displayVideo(){
    
    // let symbol = localStorage.symbol;
    // if(localStorage.symbol == undefined || localStorage == null ? "BTC" : localStorage.symbol)
    let urlVideo = `https://cryptonews-api.com/api/v1/category?section=general&items=10&extra-fields=rankscore&sortby=rank&type=video&token=${APIKEY}`;

    fetch(urlVideo)
    .then(apiData6 => apiData6.json())
    .then(videoData => {

        videoNewsArray = videoData;
        let fontColorTitle = "";
        let fontColor = "";
        let fontSize = "18px";
        let fontSize1 = "18px";
        let count = 0;

        while(count < videoNewsArray.data.length){
            let sentimentColor = "goldenrod"
            if(videoNewsArray.data[count].sentiment == "Positive"){
                sentimentColor = "dodgerblue";
            }
            else if(videoNewsArray.data[count].sentiment == "Negative"){
                sentimentColor = "red";
            }
            //Create results
            let div = document.createElement("div");
            div.setAttribute('class', "carousel-item active d-flex flex-row spacing");
            div.setAttribute('id', `video-div${count}`);
            let appendDiv = document.getElementById('video-results');
            appendDiv.append(div);

            let appendInfo = document.getElementById(`video-div${count}`);

            let iframe = document.createElement("iframe");
            iframe.setAttribute('src', videoNewsArray.data[count].news_url);
            iframe.setAttribute('id', `video-iframe${count}`);
            iframe.setAttribute('style', `color: ${fontColorTitle}; font-size: ${fontSize}`);
            appendInfo.append(iframe);

            let title = document.createElement("h5");
            let titleText = videoNewsArray.data[count].title
            title.setAttribute('id', `video-title${count}`);
            title.setAttribute('style', `color: ${fontColorTitle}; font-size: ${fontSize}`);
            title.innerText = titleText.toString();
            appendInfo.append(title);

            let date = document.createElement("h5");
            let dateText = videoNewsArray.data[count].date;
            date.setAttribute('id', `video-date${count}`);
            date.setAttribute('style', `color: ${fontColor}; font-size: ${fontSize1}`);
            date.innerText = dateText.toString();
            appendInfo.append(date);
            
            let sentiment = document.createElement("h5");
            let sentimentText = videoNewsArray.data[count].sentiment;
            sentiment.setAttribute('id', `video-sentiment${count}`);
            sentiment.setAttribute('style', `color: ${sentimentColor}; font-size: ${fontSize1}`);
            sentiment.innerText = `Sentiment: ${sentimentText.toString()}`;
            appendInfo.append(sentiment);

            let source = document.createElement("h5");
            let sourceText = videoNewsArray.data[count].source_name;
            source.setAttribute('id', `video-source${count}`);
            source.setAttribute('style', `color: ${fontColor}; font-size: ${fontSize1}`);
            source.innerText = `Source: ${sourceText.toString()}`;
            appendInfo.append(source);

            count = count + 1;
            // END Create video-results
        } 
    })
}
// -- END displayVideo()

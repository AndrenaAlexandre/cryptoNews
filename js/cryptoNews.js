

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
        // console.log(breakingNewsArray);

        // window.open("/cryptoNews/results.html",`_news`)
        
        let count = 0;
        while(count < 10){

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

            let title = document.createElement("h5");
            let titleText = breakingNewsArray.data[count].title
            title.setAttribute('id', `news-title${count}`);
            title.setAttribute('style', "color: goldenrod; font-size: 30px");
            title.innerText = titleText.toString();
            let appendSubs = document.getElementById(`caption-div${count}`);
            appendSubs.append(title);

            let date = document.createElement("p");
            let dateText = breakingNewsArray.data[count].date;
            date.setAttribute('id', `news-date${count}`);
            date.setAttribute('style', "color: goldenrod; font-size: 20px");
            date.innerText = dateText.toString();
            appendSubs.append(date);
            
            let sentiment = document.createElement("p");
            let sentimentText = breakingNewsArray.data[count].sentiment;
            sentiment.setAttribute('id', `news-sentiment${count}`);
            sentiment.setAttribute('style', "color: goldenrod; font-size: 20px");
            sentiment.innerText = `Sentiment: ${sentimentText.toString()}`;
            appendSubs.append(sentiment);

            let source = document.createElement("p");
            let sourceText = breakingNewsArray.data[count].source_name;
            source.setAttribute('id', `news-source${count}`);
            source.setAttribute('style', "color: goldenrod; font-size: 20px");
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
    symbol = e.target.innerText;
    urlSymbol = `https://cryptonews-api.com/api/v1?tickers=${symbol}&items=50&token=${APIKEY}`;
    console.log(`This is symbol in Event Listener: ${symbol}`);
    displaySymbol();
})

function displaySymbol(){
    fetch(urlSymbol)
    .then(apiData1 => apiData1.json())
    .then(symbolData => {
        console.log(symbolData.length);
        // symbolArray = symbolData;
        // symbolArray = [...symbolArray, ...symbolData];
        symbolArray = symbolData;
        // console.log(`This is symbolArray`);
        console.log(symbolArray.length);
      
        // window.open("/cryptoNews/results.html");
        let count = 0;

        while(count < 4){

            //Create results
            let div = document.createElement("div");
            div.setAttribute('class', "carousel-item active");
            div.setAttribute('id', `results-div${count}`);
            let appendDiv = document.querySelector('.results');
            appendDiv.append(div);

            let image = document.createElement("img");
            let imageURL = symbolArray.data[count].image_url;
            image.setAttribute('src', imageURL);
            image.setAttribute('class', "d-block w-25");
            image.setAttribute('id', `results-image${count}`);
            let appendInfo = document.getElementById(`results-div${count}`);
            appendInfo.append(image);

            let title = document.createElement("h5");
            let titleText = symbolArray.data[count].title
            title.setAttribute('id', `results-title${count}`);
            title.innerText = titleText.toString();
            appendInfo.append(title);

            let date = document.createElement("h5");
            let dateText = symbolArray.data[count].date;
            date.setAttribute('id', `results-date${count}`);
            date.innerText = dateText.toString();
            appendInfo.append(date);
            
            let sentiment = document.createElement("h5");
            let sentimentText = symbolArray.data[count].sentiment;
            sentiment.setAttribute('id', `results-sentiment${count}`);
            sentiment.innerText = `Sentiment: ${sentimentText0.toString()}`;
            appendInfo.append(sentiment);

            let source = document.createElement("h5");
            let sourceText = symbolArray.data[count].source_name;
            source.setAttribute('id', `results-source${count}`);
            source.innerText = `Source: ${sourceText.toString()}`;
            appendInfo.append(source);

            count = count + 1;

            // END Create results
        } 
    })
}
// -- END resultMenu EventListener Fetch and display


displayBreakingNews()


function topRanking(){
    var topRankingNewsURL = `https://cryptonews-api.com/api/v1/category?section=general&items=50&extra-fields=rankscore&token=${APIKEY}` 
    fetch(topRankingNewsURL)
    .then(apiData2 => apiData2.json())
    .then(topRankingNewsData => {
        // console.log(breakingNewsData);
        topRankingNewsArray = topRankingNewsData;
        console.log(`This is topRankingNewsArray`);
        console.log(topRankingNewsArray);

        // window.open("/cryptoNews/results.html",`_news`)
        
        let count = 0;
        while(count < 10){

            // let button = document.createElement("button");
            // button.setAttribute("type", "button");
            // button.setAttribute("data-bs-target", "#carouselExampleCaptions");
            // button.setAttribute("data-bs-slide-to", `${count}`);
            // button.setAttribute("class", "active");
            // button.setAttribute("aria-current", "true");
            // button.setAttribute("aria-label", `Slide ${count + 1}`);
            // let appendButtons = document.getElementById('slide-buttons');
            // appendButtons.append(button);

            let div = document.createElement("div");
            // if(count == 0){
            //     div.setAttribute('class', "carousel-item active");
            // }
            // else{
            //     div.setAttribute('class', "carousel-item");
            // }
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

            let title = document.createElement("h5");
            let titleText = breakingNewsArray.data[count].title
            title.setAttribute('id', `news-title${count}`);
            title.setAttribute('style', "color: goldenrod; font-size: 30px");
            title.innerText = titleText.toString();
            let appendSubs = document.getElementById(`caption-div${count}`);
            appendSubs.append(title);

            let date = document.createElement("p");
            let dateText = breakingNewsArray.data[count].date;
            date.setAttribute('id', `news-date${count}`);
            date.setAttribute('style', "color: goldenrod; font-size: 20px");
            date.innerText = dateText.toString();
            appendSubs.append(date);
            
            let sentiment = document.createElement("p");
            let sentimentText = breakingNewsArray.data[count].sentiment;
            sentiment.setAttribute('id', `news-sentiment${count}`);
            sentiment.setAttribute('style', "color: goldenrod; font-size: 20px");
            sentiment.innerText = `Sentiment: ${sentimentText.toString()}`;
            appendSubs.append(sentiment);

            let source = document.createElement("p");
            let sourceText = breakingNewsArray.data[count].source_name;
            source.setAttribute('id', `news-source${count}`);
            source.setAttribute('style', "color: goldenrod; font-size: 20px");
            source.innerText = `Source: ${sourceText.toString()}`;
            appendSubs.append(source);

            count = count + 1;
            //END Create News Info
        }
        return false
    })
}
// -- END breakingNews EventListener Fetch and display
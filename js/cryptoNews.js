

var symbol = " ";
var urlSymbol = " ";
var symbolArray = [];
var topRankingNews = [];
var breakingNewsArray = [];
var sentimentAnalysis = [];
var breakingNewsURL = `https://cryptonews-api.com/api/v1/category?section=general&items=50&token=e446xcdkplpcjckgwkr4glm2e9noxcwdipinyqbo`;

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

        let count = 0;
        while(count < 10){

            // <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
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

            let image0 = document.createElement("img");
            let imageURL0 = breakingNewsArray.data[count].image_url;
            image0.setAttribute('src', imageURL0);
            image0.setAttribute('class', "d-block w-100");
            image0.setAttribute('id', `news-image${count}`);
            let appendInfo = document.getElementById(`news-div${count}`);
            appendInfo.append(image0);

            let div1 = document.createElement("div");
            div1.setAttribute('class', "carousel-caption d-none d-md-block");
            // div1.setAttribute('class', "carousel-caption");
            div1.setAttribute('id', `caption-div${count}`);
            // let appendDiv1 = document.getElementById(`news-div${count}`);
            appendInfo.append(div1);

            let title0 = document.createElement("h5");
            let titleText0 = breakingNewsArray.data[count].title
            title0.setAttribute('id', `news-title${count}`);
            title0.innerText = titleText0.toString();
            let appendSubs = document.getElementById(`caption-div${count}`);
            appendSubs.append(title0);

            let date0 = document.createElement("p");
            let dateText0 = breakingNewsArray.data[count].date;
            date0.setAttribute('id', `news-date${count}`);
            date0.innerText = dateText0.toString();
            appendSubs.append(date0);
            
            let sentiment0 = document.createElement("p");
            let sentimentText0 = breakingNewsArray.data[count].sentiment;
            sentiment0.setAttribute('id', `news-sentiment${count}`);
            sentiment0.innerText = `Sentiment: ${sentimentText0.toString()}`;
            appendSubs.append(sentiment0);

            let source0 = document.createElement("p");
            let sourceText0 = breakingNewsArray.data[count].source_name;
            source0.setAttribute('id', `news-source${count}`);
            source0.innerText = `Source: ${sourceText0.toString()}`;
            appendSubs.append(source0);

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

        while(count < 5){

            //Create results
            let div = document.createElement("div");
            div.setAttribute('class', "carousel-item active");
            div.setAttribute('id', `results-div${count}`);
            let appendDiv = document.querySelector('.results');
            appendDiv.append(div);

            let image0 = document.createElement("img");
            let imageURL0 = symbolArray.data[count].image_url;
            image0.setAttribute('src', imageURL0);
            image0.setAttribute('class', "d-block w-25");
            image0.setAttribute('id', `results-image${count}`);
            let appendInfo = document.getElementById(`results-div${count}`);
            appendInfo.append(image0);

            let title0 = document.createElement("h5");
            let titleText0 = symbolArray.data[count].title
            title0.setAttribute('id', `results-title${count}`);
            title0.innerText = titleText0.toString();
            appendInfo.append(title0);

            let date0 = document.createElement("h5");
            let dateText0 = symbolArray.data[count].date;
            date0.setAttribute('id', `results-date${count}`);
            date0.innerText = dateText0.toString();
            appendInfo.append(date0);
            
            let sentiment0 = document.createElement("h5");
            let sentimentText0 = symbolArray.data[count].sentiment;
            sentiment0.setAttribute('id', `results-sentiment${count}`);
            sentiment0.innerText = `Sentiment: ${sentimentText0.toString()}`;
            appendInfo.append(sentiment0);

            let source0 = document.createElement("h5");
            let sourceText0 = symbolArray.data[count].source_name;
            source0.setAttribute('id', `results-source${count}`);
            source0.innerText = `Source: ${sourceText0.toString()}`;
            appendInfo.append(source0);

            count = count + 1;

            // END Create results
        } 
    })
}
// -- END resulMenu EventListener Fetch and display


displayBreakingNews()
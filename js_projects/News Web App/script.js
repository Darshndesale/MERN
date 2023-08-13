const api_key = "1e364ebafccd4f6394e864a1c4dc5d50";
const url = "https://newsapi.org/v2/everything?q="; 

window.addEventListener("load", () => 
fetchnews("Maharashtra")
);

// make the function to fetch the news from api
async function fetchnews(query) {
    
    const res = await fetch(`${url}${query}&apiKey=${api_key}`);
    const data = await res.json();

    console.log(data);

    //time to bind the article by using the function
    bindData(data.articles);
}

function bindData(article) {
    // which position to show add from html
    const cardContainer = document.getElementById('card-container')
    const newsCardTemplet = document.getElementById('templet')

    // handle the edeg case : whis is the when any article do not have the img then ignore it
    cardContainer.innerHTML = "";
    article.forEach((article) => {
        if(!article.urlToImage) return ;
        
        // clone the all card templet dives properly
        const cardClone = newsCardTemplet.content.cloneNode(true);

        // id : 101 filldata function for afer the append the info
        filldata(article,cardClone);
        // I direcly push the card into main container thet shows all the new news properly wrap form
        cardContainer.appendChild(cardClone);

    });

}

//seperation of concern id :- 101 
function filldata(article,cardClone) {
        let newsimage = cardClone.querySelector('#news-img');
        let newstitle = cardClone.querySelector('#news-title');
        let newsscr = cardClone.querySelector('#news-src');
        let newsdesc = cardClone.querySelector('#news-desc');
        // let weblink = cardClone.querySelector('#web-link');

        // let imgurl = article.urlToImage;
        // console.log(article.urlToImage)
        newsimage.src = article.urlToImage;
        newstitle.innerHTML = article.title;
        newsdesc.innerHTML = article.description;
        
        let date = new Date(article.publishedAt).toLocaleString("en-US", {
            timeZone: "Asia/Jakarta"
        });


        newsscr.innerHTML = `${article.source.name} . ${date}` 

        // click on the childs of card and g to explore the more news description
        let weblink = article.url;
        cardClone.firstElementChild.addEventListener('click', ()=>{
            window.open(`${weblink}`);
        })
}

// search the user i/p news;
let currselected = null;
function onnavitems(id) {
    fetchnews(id);
    let navitem = document.getElementById(id);
    // active the active class
    currselected?.classList.remove('active');
    currselected = navitem;
    currselected.classList.add('active');
}

// add the event on button
let searchbutton = document.getElementById('searchbutton');
let searchbox = document.getElementById('searchbox');

searchbutton.addEventListener("click", ()=>{
    let searchquery = searchbox.value;
        if(!searchquery) return;

        fetchnews(searchquery);
        searchbox.value = "";
        currselected?.classList.remove('active');
})


function reload() {
    window.location.reload();
}

// gif loaded logic
function loadgif() {
    setTimeout(() => {
        document.getElementById('gif').style.display = 'none'
    }, 1000);
}
// document.getElementById('gif').style.display = 'visible'
//     setTimeout(() => {
//         document.getElementById('gif').style.display = 'none'
//     }, 1000);






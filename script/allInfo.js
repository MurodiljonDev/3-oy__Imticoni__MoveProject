const hollewoodWrapper = document.querySelector("#holly");
const twoRow = document.querySelector("#row__two")
const threeRow = document.querySelector("#row__three")
const fourRow = document.querySelector("#row__four")
const fiveRow = document.querySelector("#row__Five")

const imgWrapper = document.querySelector(".image__wrapper");
const moveInfo = document.querySelector(".move__info");
const reyting = document.querySelector(".reyting");
const relizeBox = document.querySelector(".relize__box");
const vote__num = document.querySelector(".vote__num");
const language = document.querySelector(".language");


const movieId = +new URLSearchParams(window.location.search).get("movieId");
console.log(movieId);

const methodTooking = {
    method:"GET",
    headers:{
        accept:"application/json",
        Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDM5YTFiZDYyY2Q3ODk2OTM4MTVlMWVmZGM3Yjk2YyIsInN1YiI6IjY1MDEzODBjZGI0ZWQ2MTAzMmE3YzE3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EjuMwCzqHn_NZnhF1fxSPFJnuymapRa3hLwJ6xKlRVU'
    }
};

let unicLink = 'https://image.tmdb.org/t/p/original/'

fetch(`https://api.themoviedb.org/3/movie/${movieId}`, methodTooking)
    .then(response => response.json())
    .then(data => renderingFetchMovie(data))

function renderingFetchMovie(date){
    const img = document.createElement("img");
    img.src = unicLink + date.backdrop_path;
    img.className ="img__class";
    imgWrapper.appendChild(img)

    console.log(date)

    const h3 = document.createElement("h3");
    h3.className ="move__title";
    h3 = date.title;
    console.log(h3)
    moveInfo.appendChild(h3);    

}


fetch(`https://api.themoviedb.org/3/discover/tv`, methodTooking)
    .then(response => response.json())
    .then(data => renderOneRow(data))

function renderOneRow(data){
    const oneRowFragment = document.createDocumentFragment()
    data.results.forEach(el => {
        let unicLink = 'https://image.tmdb.org/t/p/original/'
        const h3 = document.createElement("h3")
        const div = document.createElement("div")
        h3.style=`
            min-width:300px;
            font-size:30px;
            color:rgb(2, 44, 30);
            background-color:rgb(188, 182, 182);
            border-radius:20px;
            text-align:center;
            vertical-align: middle;
            box-shadow: 7px 8px 4px grey;
        `
        div.innerHTML = `
            <a href="./pages/InfoAllMove.html?movieId=${el.id}">
                <img src="${unicLink + el.backdrop_path}" alt="">
            </a>
        `
        h3.innerHTML = `
            ${el.name}
        `
        div.appendChild(h3)
        div.style = `
            position:relative;
        `
        oneRowFragment.appendChild(div)
    })
    hollewoodWrapper.appendChild(oneRowFragment)
}



fetch(`https://api.themoviedb.org/3/discover/movie?&with_genres=28`, methodTooking)
    .then(responce => responce.json())
    .then(data => renderTwoRow(data,twoRow))

fetch(`https://api.themoviedb.org/3/discover/movie?&with_genres=12`, methodTooking)
    .then(response => response.json())
    .then(data => renderTwoRow(data, threeRow))


fetch(`https://api.themoviedb.org/3/discover/movie?&with_genres=35`, methodTooking)
    .then(responce => responce.json())
    .then(data => renderTwoRow(data,fourRow))

fetch(`https://api.themoviedb.org/3/discover/movie?&with_genres=16`, methodTooking)
    .then(reponce => reponce.json())
    .then(data => renderTwoRow(data,fiveRow))


function renderTwoRow(data, wrappering){
        const oneRowFragment = document.createDocumentFragment()
        data.results.forEach(el => {
            let unicLink = 'https://image.tmdb.org/t/p/original/'
            const img = document.createElement("img");
            const h3 = document.createElement("h3")
            const div = document.createElement("div")
            h3.style=`
                min-width:300px;
                font-size:24px;
                color:rgb(2, 44, 30);
                background-color:rgb(188, 182, 182);
                border-radius:20px;
                text-align:center;
                vertical-align: middle;
                box-shadow: 7px 8px 4px grey;
            `
            div.innerHTML = `
            <a href="./pages/InfoAllMove.html?movieId=${el.id}">
                <img src="${unicLink + el.backdrop_path}" alt="">
            </a>
            `
            h3.innerHTML = `
                ${el.title}
            `
            div.appendChild(h3)
           
            oneRowFragment.appendChild(div)
            })
        wrappering.appendChild(oneRowFragment)
    }    

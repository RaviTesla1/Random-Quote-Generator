let quote = document.getElementById("quote");
let author = document.getElementById("author");

let apiUrl = "https://api.quotable.io/quotes/random";

async function getData(url){
    let response = await fetch(url);
    let data = await response.json();
    quote.innerText = data[0].content;
    author.innerText = data[0].author;
    console.log(data[0].content);
    addData();
}

function addData(){
    localStorage.setItem("Quote",quote.innerHTML);
    localStorage.setItem("Author",author.innerHTML);
}

function showData(){
    quote.innerHTML = localStorage.getItem("Quote");
    author.innerHTML = localStorage.getItem("Author");
}

showData();


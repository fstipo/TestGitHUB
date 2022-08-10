// DOM elements
const title = document.querySelector(".title");
const msg = document.querySelector(".message");
const msg2 = document.querySelector(".message2");
const msg3 = document.querySelector(".message3");
const msg4 = document.querySelector(".message4");
const msg5 = document.querySelector(".message5");
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const btn4 = document.querySelector(".btn4")
const btn5 = document.querySelector(".btn5")

// const response = fetch("https://es-demo.azurewebsites.net/v1/People").then(res => res.json()).then(d => console.log(d)).catch((err) => console.log(er.message));

// let data = response.then(res => res.json());
// console.log(data);


const getData = async (url) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    console.log("Fetching data");
    const res = await fetch(url)
    console.log(res);
    const data = await res.json();
    // change date format to readable format in data obj
    data.map(item => {
        item.changedAt = new Date(item.changedAt).toLocaleDateString("en-US", options)
    });
    console.log(data.map(item => { console.log(item) }));
}

const data = getData("https://es-demo.azurewebsites.net/v1/People");






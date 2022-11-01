

const container = document.querySelector(".container");



async function getElements() {
    response = await fetch("http://localhost:8080/armors");
    data = await response.json();
    console.log(data);

}

getElements();
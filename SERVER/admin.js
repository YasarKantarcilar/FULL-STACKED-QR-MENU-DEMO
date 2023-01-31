function writeData(data){
    const d = document;
    const list = d.getElementById("list");
    for(let i = 0;i < data.length; i++){
        const newLi = d.createElement("li");
        const nameP = d.createElement("p");
        nameP.innerText = data[i].name;
        newLi.appendChild(nameP);
        const descP = d.createElement("p");
        descP.innerText = data[i].description;
        newLi.appendChild(descP);
        const priceP = d.createElement("p");
        priceP.innerText = data[i].price;
        newLi.appendChild(priceP);
        const idP = d.createElement("p");
        idP.innerText = data[i]._id;
        newLi.appendChild(idP);
        list.appendChild(newLi)
        console.log(data[i]._id)
    }
}

async function getData(){
    const response = await fetch("http://localhost:3000/food")
    const data = await response.json()
    console.log(data)
    writeData(data)
}

getData()
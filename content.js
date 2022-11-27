const mpg = 35.0
const costOfGallon = 2.70

const collection = document.getElementsByClassName("XdKEzd");

console.log(collection)

const calculateCost = (dist) =>{
    
    return Math.round((dist / mpg) * costOfGallon * 100) / 100;

}



for (var i = 0; i < collection.length; i++) {
    
    //parsing distance for trip
    let dist = collection[i].outerText.split('\n');
    let end = dist[1].indexOf(' ');
    dist = dist[1].substring(0, end);
    dist = parseFloat(dist.replace(/,/g, ''));
    
    //Calculating the cost
    let cost = calculateCost(dist);

    //Adding the cost to DOM
    const div = document.createElement("div")
    div.innerText = "$" + cost;
    collection[i].appendChild(div)
    
    
    

}

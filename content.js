const mpg = 35.0
const costOfGallon = 2.70

alert("Match!")


const calculateCost = (dist) =>{
    
    return Math.round((dist / mpg) * costOfGallon * 100) / 100;

}


const generate = (collection) => {
    

            console.log(collection.length)
            for (var i = 0; i < collection.length; i++) {
                

                //parsing distance for trip
                let dist = collection[i].outerText.split('\n');
                let end = dist[1].indexOf(' ');
                dist = dist[1].substring(0, end);
                dist = parseFloat(dist.replace(/,/g, ''));
                
                //Calculating the cost
                let cost = calculateCost(dist);
                console.log(cost);
            
                //Adding the cost to DOM
                const div = document.createElement("div")
                div.innerText = "$" + cost;
                collection[i].appendChild(div)

            }

}




window.addEventListener("keyup", (event) => {
    
    if (event.key === "Enter") {
        
        setTimeout( () => {
            collection = document.getElementsByClassName("XdKEzd");
            generate(collection);
    
        },3000)
        
    
        
        
        
    }
});
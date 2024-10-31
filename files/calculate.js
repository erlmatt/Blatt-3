
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("color").addEventListener("input", update);
    document.getElementById("width").addEventListener("input", update);
    document.getElementById("height").addEventListener("input", update);
    document.querySelectorAll("input[name='thickness']").forEach(radio => radio.addEventListener("change", update));
});

function update(){
    const widthInput = document.getElementById("width");
    const heightInput = document.getElementById("height");
    const thicknessInput = document.querySelector("input[name=thickness]:checked");
    const colorInput = document.getElementById("color");
    const priceInput = document.getElementById("price");

    if (
        widthInput.checkValidity() &&
        heightInput.checkValidity() &&
        thicknessInput &&
        colorInput.checkValidity()
    ) {
        const width = parseFloat(widthInput.value);
        const height = parseFloat(heightInput.value);
        const thickness = parseFloat(thicknessInput.value);
        const colorHex = colorInput.value;

        const price = calculate(width, height, thickness, colorHex);
        priceInput.value = price.toFixed(2); // Zeigt den Preis mit zwei Dezimalstellen
    } else {
        priceInput.value = "-"; // Zeigt ein Minuszeichen, wenn Eingaben ungültig sind
    }
}

function isGrey(colorHex){
    const r = parseInt(colorHex.slice(1,3), 16)
    const g = parseInt(colorHex.slice(3,5), 16)
    const b = parseInt(colorHex.slice(5,7), 16)

    if (r === g === b){
        return true;
    }else{
        return false;
    }
}
function calculate(width,height,thickness, colorHex){
    let price
    
    const r = parseInt(colorHex.slice(1,3), 16)
    const g = parseInt(colorHex.slice(3,5), 16)
    const b = parseInt(colorHex.slice(5,7), 16)

    const isGray = (r === g === b)

    if(isGray){
        price = width * height * (thickness / 10) / 100 
    }else{
        price = width * height * (thickness / 10) / 64
    }
    return price;
}

   
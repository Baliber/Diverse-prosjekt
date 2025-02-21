
let anTallrakkerSlider = document.getElementById("anTallrakkerSlider")
/* let antallRekker = document.getElementById("sliderValue").value */
let antall = 0
let høyde = 100
let brett = document.getElementById("brett")
let distanseFraTop = 0
let distanseFraLeft = 500
function lagBrett(antallRekker){
    antall = 0
    høyde = 100
    distanseFraTop = 0
    distanseFraLeft = 500
    LeftØkning = 0
    for(let i = 0; i < antallRekker+1; i++){
        for(let j = 0; j < antall; j++)
        {
            if(j>0){
                distanseFraLeft+= høyde
            }
            const div = document.createElement("div");
            [div.style.width, div.style.height] = [høyde + "px",høyde + "px"];
            div.style.background = "yellow";
            div.style.color = "white";
            div.innerHTML = "1";
            div.style.top = distanseFraTop + "px"
            div.style.left = distanseFraLeft + "px"
            div.setAttribute("class", "rute")

            const sirkel = document.createElement("div");
            sirkel.style.width = "40px";
            sirkel.style.height = "40px";
            sirkel.style.backgroundColor = "black";
            sirkel.style.borderRadius = "50%";
            sirkel.style.position = "absolute";
            sirkel.style.top = "50%";
            sirkel.style.left = "50%";
            sirkel.style.transform = "translate(-50%, -50%)";
            const brikke = document.createElement("div");
            brikke.style.width = "30px";
            brikke.style.height = "30px";
            brikke.style.backgroundColor = "green";
            if (i == 1 && j ==0){
                brikke.style.backgroundColor = "red";
                brikke.setAttribute("class", "rødBrikke")
            }
            brikke.style.borderRadius = "50%";
            brikke.style.position = "absolute";
            brikke.style.top = "50%";
            brikke.style.left = "50%";
            brikke.style.transform = "translate(-50%, -50%)";
            brikke.setAttribute("id", i +" " +parseInt(j+1))
            /* console.log(brikke.id) */
            sirkel.appendChild(brikke);
            div.appendChild(sirkel);
            brett.appendChild(div);

            /* const rect = div.getBoundingClientRect();
            console.log(`Top: ${rect.top}, Left: ${rect.left}`); */

            
        }
        antall += 1
        distanseFraTop += høyde
        distanseFraLeft -= 50 + høyde*(i-1)

        "Math.tan(30*(Math.PI/180))*høyde"
    }
    console.log(antallRekker+" "+parseInt(antallRekker/2 +1))
    document.getElementById(String(antallRekker+" "+parseInt(antallRekker/2 + 1))).remove()
}
lagBrett(parseInt(document.getElementById("sliderValue").value))

anTallrakkerSlider.addEventListener("input", function() {
    document.querySelectorAll(".rute").forEach(div => div.remove());
    lagBrett(parseInt(document.getElementById("sliderValue").value)); // Call your function
  });

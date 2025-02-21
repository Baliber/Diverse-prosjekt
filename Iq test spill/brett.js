
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
            sirkel.setAttribute("class","container");
            sirkel.setAttribute("id","container "+ i +" " +parseInt(j+1));

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
            brikke.setAttribute("draggable", true);
            brikke.setAttribute("class","brikke");
            brikke.setAttribute("id", "brikke " + i +" " +parseInt(j+1));
            /* console.log(brikke.id) */
            sirkel.appendChild(brikke);
            div.appendChild(sirkel);
            brett.appendChild(div);
            
        }
        antall += 1
        distanseFraTop += høyde
        distanseFraLeft -= 50 + høyde*(i-1)

        "Math.tan(30*(Math.PI/180))*høyde"
    }
    console.log(antallRekker+" "+parseInt(antallRekker/2 +1))
    document.getElementById(String("brikke " + antallRekker+" "+parseInt(antallRekker/2 + 1))).remove()
}
lagBrett(parseInt(document.getElementById("sliderValue").value))

anTallrakkerSlider.addEventListener("input", function() {
    document.querySelectorAll(".rute").forEach(div => div.remove());
    lagBrett(parseInt(document.getElementById("sliderValue").value)); // Call your function
  });



containere = document.getElementsByClassName("container")
console.log(containere.length)
for (let i = 0; i < containere.length; i++){
    containere[i].addEventListener("dragover", dragOver);
   
    containere[i].addEventListener("dragenter", dragEnter);
  
    containere[i].addEventListener("drop", dragDrop);
 }
brikker = document.getElementsByClassName("brikke")
for (let i = 0; i < brikker.length; i++){
    brikker[i].addEventListener("dragstart", dragStart)
    brikker[i].addEventListener("dragend", dragEnd)
}
let tempBrikke
let fargedeRuter
function dragStart() {
    let e = this;
    tempBrikke = e
    brikkeType = tempBrikke.id
    brikkeForelder = tempBrikke.parentElement
    let i = Number(brikkeForelder.id[10])
    let j = Number(brikkeForelder.id[12])
    
  }

 
  function dragEnd() {
    //Nullstiller alle fargede ruter og nullstiller variablene
    for (let rute of fargedeRuter) {
        rute.style.backgroundImage = "";
        rute.style.backgroundColor = "transparent"
    }
    tempBrikke = ""
    fargedeRuter = []

 }
 
 
 
 
function dragOver(e) {
    e.preventDefault(); 
    //lar brikkene bli plassert inn i ruten dersom den er farget
    if (fargedeRuter.includes(this)) {
        //default oppførsel er å ikke tillate drop 
        e.preventDefault(); 
    }
}
 
 
 
 
function dragEnter(e) {
    e.preventDefault();
}
 
 
 
 
function dragDrop() {
    let i = Number(this.id[0])
    let j = Number(this.id[2])
    let a = Number(brikkeForelder.id[10])
    let b = Number(brikkeForelder.id[12])
    let tittelEl = document.querySelector("#tittel")
    this.innerHTML = ""
    //setter brikken inn i divven
    this.append(tempBrikke);

/*     //oppdaterer brikkeoppsett arrayen
    brikkeOppsett[i][j] = brikkeTekst
    brikkeOppsett[a][b] = "e" */

}
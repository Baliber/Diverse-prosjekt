
let anTallrakkerSlider = document.getElementById("anTallrakkerSlider")
/* let antallRekker = document.getElementById("sliderValue").value */
let antall
let høyde = 100
let brett = document.getElementById("brett")
let distanseFraTop = 0
let distanseFraLeft = 500
let brikkeOppsett
let antallRekker
function lagBrett(){

    antall = 1
    høyde = 100
    distanseFraTop = 0
    distanseFraLeft = 500
    LeftØkning = 0
    for(let i = 0; i < antallRekker; i++){
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
            sirkel.setAttribute("id","container "+ parseInt(i) +" " +parseInt(j));

            const brikke = document.createElement("div");
            brikke.style.width = "30px";
            brikke.style.height = "30px";
            brikke.style.backgroundColor = "green";
            if (i == 0 && j ==0){
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
            brikke.setAttribute("id", "brikke " + parseInt(i) +" " +parseInt(j));
            sirkel.appendChild(brikke);
            div.appendChild(sirkel);
            brett.appendChild(div);
            
        }
        antall += 1
        distanseFraTop += høyde
        distanseFraLeft -= 50 + høyde*(i)

        "Math.tan(30*(Math.PI/180))*høyde"
    }
    document.getElementById(String("brikke " + Number(antallRekker-1)+" "+parseInt(antallRekker/2))).remove()
    document.getElementById("brikke " + "2 2").remove()
    brikkeOppsett = []
    for (let i = 0; i<antallRekker;i++){
        brikkeOppsett[i] = []
        for(let j = 0; j < i+1; j++){
            brikkeOppsett[i][j] = "g"
            
        }
    }
    brikkeOppsett[0][0]="r"
    brikkeOppsett[antallRekker-1][parseInt(antallRekker/2)]="e"
    brikkeOppsett[2][2] ="e"
    console.log(brikkeOppsett)
    
}
antallRekker = parseInt(document.getElementById("sliderValue").value)
lagBrett()

anTallrakkerSlider.addEventListener("input", function() {
    document.querySelectorAll(".rute").forEach(div => div.remove());
    antallRekker = parseInt(document.getElementById("sliderValue").value)
    lagBrett(); // Call your function
  });



containere = document.getElementsByClassName("container")
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
let fargedeRuter = []


function fargRuter(brikke){
    //console.log(brikkeOppsett)
    let a = parseInt(brikke.parentElement.id[10])
    let b = parseInt(brikke.parentElement.id[12])

    /* for(let i = a-1; i < a + 1;i++){
        for(let j = b-1; j < b + 1;j++){
            if([i-1, j, i+(1*(i-a))-1, j+(1*(j-b))].every(num => num >= 0 && num <= antallRekker-1)){
                //console.log([i, j, i+(1*(i-a)), j+(1*(j-b))])
                //console.log([brikkeOppsett[i+(1*(i-a))-1][j+(1*(j-b))-1], brikkeOppsett[i-1][j-1]])
                console.log([i-1, j, i+(1*(i-a))-1, j+(1*(j-b)-1)])
                if (brikkeOppsett[i+(1*(i-a)-1)][j+(1*(j-b)-1)]=="e" && brikkeOppsett[i-1][j]=="g"){
                    console.log(i, j)
                    fargedeRuter.push(document.getElementById("container "+ parseInt(i+(1*(i-a)-1)) +" " +parseInt(j+(1*(j-b)-1))))
                    console.log("brikkeOppsett")
                }
            }
        }
    } */
   for(let i = a-1; i < a + 1; i++){
        for(let j = b-1; j < b + 1; j++){
            //console.log(antallRekker-1-(antallRekker%i))
            if([j].every(num => num >= 0 && num <= antallRekker-(antallRekker%i))){
                if([i].every(num => num >= 0 && num <= antallRekker-1)){
                    //Sjekke om posisjonen bak brikken er valid.
                    console.log(i+(1*(i-a)), j+(1*(j-b)))
                    if([j+(1*(j-b))].every(num => num >= 0 && num <= antallRekker-(antallRekker%i))){
                        if([i+(1*(i-a))].every(num => num >= 0 && num <= antallRekker-1)){
                            //console.log(i, j)
                            if(brikkeOppsett[i][j] == "g" && brikkeOppsett[i+(1*(i-a))][j+(1*(j-b))]=="e"){
                                //console.log(i, j)
                                fargedeRuter.push(document.getElementById("container "+ parseInt(i+(1*(i-a))) +" " +parseInt(j+(1*(j-b)))))
                                console.log(fargedeRuter)
                            }
                            
                        }
                    }
                }
            }
        }
   }
    for(let rute of fargedeRuter){
        rute.style.backgroundColor = "blue"
    }
}
function dragStart() {
    console.log(brikkeOppsett)
    fargRuter(this)
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
        rute.style.backgroundColor = "black"
    }
    //tempBrikke = ""
    fargedeRuter = []
    
 }
 
 
 
 
function dragOver(e) {
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
    console.log(this.id)
    this.append(tempBrikke);
    let i = Number(this.childNodes[0].id[7])
    let j = Number(this.childNodes[0].id[9])
    let a = Number(this.id[10])
    let b = Number(this.id[12])
    //let tittelEl = document.querySelector("#tittel")
    //this.innerHTML = ""
    //setter brikken inn i divven
    

    //oppdaterer brikkeoppsett arrayen
    document.getElementById("container" + Number(i-1)+" "+j)
    console.log(i, j,a,b)
    
    brikkeOppsett[i-1][j-1] = "e"
    brikkeOppsett[a-1][b-1] = "g"
    this.setAttribute("id","brikke "+ brikkeForelder.id[10]+" "+brikkeForelder.id[12])
    console.log(brikkeOppsett)
}
const products = [
{name:"Roggenmischbrot",desc:"Klassisches deutsches Brot aus Roggen & Weizen",img:"images/roggenmischbrot.jpg"},
{name:"Vollkornbrot",desc:"Mindestens 90% Vollkorn",img:"images/vollkornbrot.jpg"},
{name:"Weißbrot",desc:"Helles Weizenbrot",img:"images/weißbrot.jpg"},
{name:"Pumpernickel",desc:"Dunkles Roggenbrot",img:"images/pumpernickel.jpg"},
{name:"Dinkelbrot",desc:"Nussig und gesund",img:"images/dinkelbrot.jpg"},
{name:"Sauerteigbrot",desc:"Kräftiger Geschmack",img:"images/sauerteigbrot.jpg"},
{name:"Mehrkornbrot",desc:"Mehrere Getreidearten",img:"images/mehrkornbrot.jpg"},
{name:"Baguette",desc:"Knusprig und luftig",img:"images/baguette.jpg"},
{name:"Ciabatta",desc:"Italienisches Brot",img:"images/ciabatta.jpg"},
{name:"Walnussbrot",desc:"Mit Nüssen verfeinert",img:"images/walnussbrot.jpg"},


];

const track=document.getElementById("track");

function createImage(p){
  let img = document.createElement("img");
  img.src = p.img;
  img.onclick = () => openModal(p.name, p.desc);
  return img;
}

// 🔴 WICHTIG: zuerst leeren (falls doppelt geladen wird)
track.innerHTML = "";

// ORIGINAL
products.forEach(p=>{
  track.appendChild(createImage(p));
});

// 🔥 DUPLIKAT → für endlosen Loop
products.forEach(p=>{
  track.appendChild(createImage(p));
});

function openModal(title,desc){
 const modal =document.getElementById("modal");
document.getElementById("title").textContent=title;
document.getElementById("desc").textContent=desc;
modal.classList.add("active");

}

function closeModal(){
document.getElementById("modal").classList.remove("active");;
}

// Öffnungszeiten
function checkOpen(){
const now=new Date();
const d=now.getDay(),h=now.getHours();
let open=(d>=1&&d<=5&&h>=7&&h<18)||(d==6&&h>=7&&h<14);
document.getElementById("status").textContent=open?"🟢 Geöffnet":"🔴 Geschlossen";
}
checkOpen();



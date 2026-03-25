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

products.forEach(p=>{
let img=document.createElement("img");
img.src = p.img;
img.onclick=()=>openModal(p.name,p.desc);
track.appendChild(img);
});

function openModal(title,desc){
document.getElementById("modal").style.display="flex";
document.getElementById("title").textContent=title;
document.getElementById("desc").textContent=desc;
}

function closeModal(){
document.getElementById("modal").style.display="none";
}

// Öffnungszeiten
function checkOpen(){
const now=new Date();
const d=now.getDay(),h=now.getHours();
let open=(d>=1&&d<=5&&h>=7&&h<18)||(d==6&&h>=7&&h<14);
document.getElementById("status").textContent=open?"🟢 Geöffnet":"🔴 Geschlossen";
}
checkOpen();

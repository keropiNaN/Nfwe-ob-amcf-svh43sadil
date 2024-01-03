

function bigImg(x) {
	name = x+"2.png"
	console.log(name);
	document.getElementById(x).src = "imgs/char/"+name;
	
}

function normalImg(x) {
  name = x+".png"
  document.getElementById(x).src = "imgs/char/"+name;
}
function removeDIV(){
	try{document.getElementById("popInfogeral").remove();}catch{};
	
}
function criarDIV2(pos){
	
	const grido = `<div class="NomeChar"></div>

  <div class="cone_a1">
    <div class="ca1_ico"></div>
    <div class="ca1_nome"></div>
  </div>
  <div class="cone_a2">
    <div class="ca2_ico"></div>
    <div class="co2_nome"></div>
    <div class="ca2_nome"></div>
  </div>
  <div class="cone_a3">
    <div class="ca3_ico"></div>
    <div class="ca3_nome"></div>
  </div>

  <div class="arte_a1"></div>
  <div class="arte_a2"></div>
  <div class="arte_a3"></div>
  <div class="orna_a1"></div>
  <div class="orna_a2"></div>`;
	
	
	
	
	try{document.getElementById("popInfo").remove();}catch{}
	const x = event.clientX;
	const y = event.clientY;
	const pos_x = x+'px';
	const div = document.createElement("div");
	console.log(pos_x);
  div.style.width = '350px';
  div.style.height = '500px';
  div.style.position = 'absolute';	
  div.style.top = '20%';
  div.style.left = '25%';
  div.id ="popInfo";
  div.innerHTML +=grido; 
  div.addEventListener ("click", removeDIV);
  document.body.appendChild(div);
  populateInfo(pos);
  
}

function criarDIV(pos){
	
	const grido = `
  <div id="popInfo" style="width: 350px; height:500px; position: absolute;">
  <div class="NomeChar"></div>
  <div class="Cones">
	<div class="Cone1" style="position: relative;">
		<div class="cn1" style="position: absolute;top: 0;/*! right: 1px; */border-style: solid;border-radius: 5px;width: 15px;text-align: center;background-color: #1e1b46;border-color: #fff8bf;">1</div>
	</div>
	<div class="Cone2" style="position: relative;">
		<div class="cn2" style="position: absolute;top: 0;/*! right: 1px; */border-style: solid;border-radius: 5px;width: 15px;text-align: center;background-color: #1e1b46;border-color: #cdcdcd;">2</div>
	</div>
	<div class="Cone3" style="position: relative;">
		<div class="cn3" style="position: absolute;top: 0;/*! right: 1px; */border-style: solid;border-radius: 5px;width: 15px;text-align: center;background-color: #1e1b46;border-color: #d7845b;">3</div>
	</div>
  </div>
  <div class="inforeliquias"></div>
  <div class="Area_sts">
    <div class="asts_titulo">Status Principais</div>
    <div class="asts_conteudo">
      <div class="main_corpo_ico"><img src="imgs/ico/corpo.png" style="width: 30px; padding-left:10px;"></img></div>
      <div class="main_corpo_descri" style="display: flex;align-items: center;font-size: 12px;"></div>
      <div class="main_pes_ico"><img src="imgs/ico/pe.png" style="width: 30px; padding-left:10px;"></img></div>
      <div class="main_pes_descri" style="display: flex;align-items: center;font-size: 12px;"></div> 
      <div class="main_esfera_descri" style="display: flex;align-items: center;font-size: 12px;"></div>
      <div class="mian_esfera_ico"><img src="imgs/ico/esfera.png" style="width: 30px; padding-left:10px;"></img></div>
      <div class="main_corda_ico"><img src="imgs/ico/corda.png" style="width: 30px; padding-left:10px;"></img></div>
      <div class="main_corda_descri" style="display: flex;align-items: center;font-size: 12px;"></div>
    </div>
  </div>
  <div class="area_substs">
    <div class="ass_titulo">Status Secundarios</div>
    <div class="ass_conteudo">
      <div class="sub_corpo_ico"><img src="imgs/ico/corpo.png" style="width: 30px; padding-left:10px;"></div>
      <div class="sub_corpo_descri" style="display: flex;align-items: center;font-size: 12px;"></div>
      <div class="sub_pes_ico"><img src="imgs/ico/pe.png" style="width: 30px; padding-left:10px;"></div>
      <div class="sub_pes_descri" style="display: flex;align-items: center;font-size: 12px;"></div>
      <div class="sub_esfera_ico"><img src="imgs/ico/esfera.png" style="width: 30px; padding-left:10px;"></div>
      <div class="sub_esfera_descri" style="display: flex;align-items: center;font-size: 12px;"></div>
      <div class="sub_corda_ico"><img src="imgs/ico/corda.png" style="width: 30px; padding-left:10px;"></div>
      <div class="sub_corda_descri" style="display: flex;align-items: center;font-size: 12px;"></div>
    </div>
  </div></div>`;
	
	
	
	
	try{document.getElementById("popInfogeral").remove();}catch{}
	const x = event.clientX;
	const y = event.clientY;
	const div = document.createElement("div");
  let Ssize = screen.height;	
  let pTop = Ssize * 0.3;	
  console.log(pTop);
  div.style.marginTop = pTop;
  div.style.marginLeft = '50%';
  div.style.display = 'grid';
  div.style.placeItems = 'center';
  div.style.position = 'absolute';	
  div.style.top = '0';
  div.style.left = '0';
  div.id ="popInfogeral";
  div.innerHTML +=grido; 
  div.addEventListener ("click", removeDIV);
  document.body.appendChild(div);
  populateInfo(pos);
  
}




let Nombre;
let Cone1;
let Cone2;
let Cone3;
let peito;
let pes;
let esfera;
let corda;
let artifact;

function populateInfo(pos){
	fetch("dataAuto.json")
    .then((response) => response.json())
    .then((json) => {
	Nombre = json.content[pos].Char;
	Cone1 = json.content[pos]["cone 1"];
	Cone2 = json.content[pos]["cone 2"];
	Cone3 = json.content[pos]["cone 3"];
	artifact = json.content[pos].reliquia;
	artifact2 = json.content[pos].reliquia2;
	orna = json.content[pos].ornamento;
	peito = json.content[pos].peito;
	pes = json.content[pos].pes;
	esfera = json.content[pos].esfera;
	corda = json.content[pos].corda;
	subpeito = json.content[pos].sub_peito;
	subpes = json.content[pos].sub_pes;
	subesfera = json.content[pos].sub_esfera;
	subcorda = json.content[pos].sub_corda;
	
	const nomeCharDiv = document.querySelector('.NomeChar');
	const corpoDescri = document.querySelector('.main_corpo_descri');  
	const SubcorpoDescri = document.querySelector('.sub_corpo_descri');  
	const pesDescri = document.querySelector('.main_pes_descri');
	const SubpesDescri = document.querySelector('.sub_pes_descri');
	const esfeDescri = document.querySelector('.main_esfera_descri');
	const SubesfeDescri = document.querySelector('.sub_esfera_descri');
	const cordaDescri = document.querySelector('.main_corda_descri');
	const SubcordaDescri = document.querySelector('.sub_corda_descri');
	
	nomeCharDiv.innerHTML = Nombre;
	corpoDescri.innerHTML = peito;
	pesDescri.innerHTML = pes;
	esfeDescri.innerHTML = esfera;
	cordaDescri.innerHTML = corda;
	
	SubcorpoDescri.innerHTML = subpeito;
	SubpesDescri.innerHTML = subpes;
	SubesfeDescri.innerHTML = subesfera;
	SubcordaDescri.innerHTML = subcorda;
	
//	nomeCharDiv.appendChild(h1);
	console.log("art:"+artifact);
	populateCone(Cone1,Cone2,Cone3);
	populateArtefato(artifact);
	populateOrnament(orna);
	});
	
}

function populateArtefato(r1){
	console.log("Entrei no artefato com valor:"+r1);
	fetch("https://raw.githubusercontent.com/keropiNaN/Nfwe-ob-amcf-svh43sadil/main/relic.json")
    .then((response) => response.json())
    .then((json) => {
		artifact = json.content[r1].pt;
	const artPos = document.querySelector('.inforeliquias');
	const ima = document.createElement('img');
	ima.src = "imgs/reli/"+r1+".png";
	ima.title = artifact;
	ima.style = "width: 50px;";
	console.log("artifact:"+ima.src);
	artPos.appendChild(ima);
});
}


function populateOrnament(r1){
		console.log("Entrei no ornamento com valor:"+r1);

	fetch("https://raw.githubusercontent.com/keropiNaN/Nfwe-ob-amcf-svh43sadil/main/ornamento.json")
    .then((response) => response.json())
    .then((json) => {
	artifact = json.content[r1].pt;
	const artPos = document.querySelector('.inforeliquias');
	const ima = document.createElement('img');
	ima.src = "imgs/orna/"+r1+".png";
	ima.title = artifact;
	ima.style = "width: 50px;";
	console.log("artifact:"+ima.src);
	artPos.appendChild(ima);
});
}




function populateCone(c1,c2,c3){
	fetch("https://raw.githubusercontent.com/keropiNaN/Nfwe-ob-amcf-svh43sadil/main/cones.json")
    .then((response) => response.json())
    .then((json) => {
	Cone1 = json.content[c1].pt;
	Cone2 = json.content[c2].pt;
	Cone3 = json.content[c3].pt;
	const coneIcoArea = document.querySelector('.Cone1');
	const coneIcoArea2 = document.querySelector('.Cone2');
	const coneIcoArea3 = document.querySelector('.Cone3');
	const reliquiaArea = document.querySelector('.infoReliquias');
		
	const ima = document.createElement('img');
	ima.id = "img_ouro";
	ima.src = "imgs/cone/"+c1+".png";
	ima.title= Cone1;
	coneIcoArea.appendChild(ima);
	
	const ima2 = document.createElement('img');
	ima2.id = "img_prata";
	ima2.src = 'imgs/cone/'+c2+'.png';
	ima2.title= Cone2;
	coneIcoArea2.appendChild(ima2);
	
	const ima3 = document.createElement('img');
	ima3.id = "img_bronze";
	ima3.src ='imgs/cone/'+c3+'.png';
	ima3.title= Cone3;
	coneIcoArea3.appendChild(ima3);
	

	
});
}

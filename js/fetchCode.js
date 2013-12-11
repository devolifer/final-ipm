function alteraTopo(str) {
	var result = "<li class='active'><a style='border-style:ridge' onclick='menuMenu()'>Menu";
	if (str) {
		result += str;
		document.getElementById('topo').innerHTML = result;
	}
}

function alteraJumbo(str) {
	if (str) {
		document.getElementById('jumbo').innerHTML = str;
	}
}



/////////
function atualizaCheeseburguer() {
	document.getElementById("imgIten").setAttribute("src", "../img/cheeseburguer.jpg");
	document.getElementById("nomeIten").innerHTML = "Cheeseburguer 1,00€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Cheeseburguer', '1.00')");
}
function atualizaSloppy_joes() {
	document.getElementById("imgIten").setAttribute("src", "../img/hamburguer.png");
	document.getElementById("nomeIten").innerHTML = "Sloppy joe's 0,50€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Sloppy joes', '0.50')");
}
function atualizaCBO() {
	document.getElementById("imgIten").setAttribute("src", "../img/cbo.png");
	document.getElementById("nomeIten").innerHTML = "CBO 1,50€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('CBO', '1.50')");
}


function menuCompraHamburguer() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuConsumo()'>Consumo</a></li><li class='active'><a style='border-style:groove'>Hamburguer</a></li>";

	var txt = " ";
	var aux = "class";
	var aux2 = "list-group-item";
	var aux3 = "list-group-item active"
	var body = "<div class='panel-group'><div class='panel panel-heading'><div class='thumbnail col-sm-4'><img id='imgIten' align='center' src='../img/cheeseburguer.jpg' alt='imagem fugiu'><h5 id='nomeIten' align='center'>Cheeseburguer 1,00€</h5></div><div style='font-size: 10px; max-height: 180px;' align='center' id='ListaItens' class='list-group panel nav col-sm-8'>";
	var Things = ["Cheeseburguer", "1,00€", "Sloppy_joes", "0,50€", "CBO", "1,50€"];
	alteraTopo(Ctopo);

	for (var i = 0; i < Things.length; i += 2) {
		txt += "<a align='center' class='list-group-item' onclick=";
		txt += "'atualiza";
		txt += Things[i];
		txt += "();'";
		txt += aux;
		txt += ">";
		txt += Things[i];
		txt += " ";
		txt += Things[i + 1];
		txt += "</a>";
	};
	txt += "</div><div align='center' class='panel col-sm-12'><button onclick='decrQuant();' class='col-sm-4  btn-danger btn-md'  type='button'>-</button><label id='quantitativo' class='col-sm-4 disabled label-info' >1</label><button onclick='incrQuant()' class='col-sm-4  btn-success btn-md'  type='button'>+</button></div></div><button id='btnCompra' onclick='addCompra('Cheeseburguer', '1.00')' class='btn btn-lg col-sm-12 btn-primary'  type='button'>Comprar</button></div>";
	body += txt;
	alteraJumbo(body);
	atualizaCheeseburguer();
}


function atualizaSandes_presunto() {
	document.getElementById("imgIten").setAttribute("src", "../img/sandesPresunto.png");
	document.getElementById("nomeIten").innerHTML = "Sandes de presunto 2,00€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Sandes de presunto', '2.00')");
}
function atualizaSandes_geleia() {
	document.getElementById("imgIten").setAttribute("src", "../img/jamSandes.jpg");
	document.getElementById("nomeIten").innerHTML = "Sandes de geleia 0,80€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Sandes de geleia', '0.80')");
}
function atualizaSandes_bifana() {
	document.getElementById("imgIten").setAttribute("src", "../img/bifana.jpg");
	document.getElementById("nomeIten").innerHTML = "Sandes de bifana 1,50€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Sandes de bifana', '1.50')");
}


function menuCompraSandes() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuConsumo()'>Consumo</a></li><li class='active'><a style='border-style:groove'>Sandes</a></li>";

	var txt = " ";
	var aux = "class";
	var aux2 = "list-group-item";
	var aux3 = "list-group-item active"
	var body = "<div class='panel-group'><div class='panel panel-heading'><div class='thumbnail col-sm-4'><img id='imgIten' align='center' src='../img/sandesPresunto.png' alt='imagem fugiu'><h5 id='nomeIten' align='center'>Sandes de presunto</h5></div><div style='font-size: 10px; max-height: 180px;' align='center' id='ListaItens' class='list-group panel nav col-sm-8'>";
	var Things = ["Sandes_presunto", "2,00€", "Sandes_geleia", "0,80€", "Sandes_bifana", "1,50€"];
	alteraTopo(Ctopo);

	for (var i = 0; i < Things.length; i += 2) {
		txt += "<a align='center' class='list-group-item' onclick=";
		txt += "'atualiza";
		txt += Things[i];
		txt += "();'";
		txt += aux;
		txt += ">";
		txt += Things[i];
		txt += " ";
		txt += Things[i + 1];
		txt += "</a>";
	};
	txt += "</div><div align='center' class='panel col-sm-12'><button onclick='decrQuant();' class='col-sm-4  btn-danger btn-md'  type='button'>-</button><label id='quantitativo' class='col-sm-4 disabled label-info' >1</label><button onclick='incrQuant()' class='col-sm-4  btn-success btn-md'  type='button'>+</button></div></div><button id='btnCompra' onclick='addCompra('Sandes de presunto', '2.00')' class='btn btn-lg col-sm-12 btn-primary'  type='button'>Comprar</button></div>";
	body += txt;
	alteraJumbo(body);
	atualizaSandes_presunto()
}


function atualizaPipocas() {
	document.getElementById("imgIten").setAttribute("src", "../img/pipocas.jpg");
	document.getElementById("nomeIten").innerHTML = "Pipocas 1,00€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Pipocas', '1.00')");
}
function menuCompraPipocas() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuConsumo()'>Consumo</a></li><li class='active'><a style='border-style:groove'>Pipocas</a></li>";

	var txt = " ";
	var aux = "class";
	var aux2 = "list-group-item";
	var aux3 = "list-group-item active"
	var body = "<div class='panel-group'><div class='panel panel-heading'><div class='thumbnail col-sm-4'><img id='imgIten' align='center' src='../img/pipocas.jpg' alt='imagem fugiu'><h5 id='nomeIten' align='center'>Pipocas 1,00€</h5></div><div style='font-size: 10px; max-height: 180px;' align='center' id='ListaItens' class='list-group panel nav col-sm-8'>";
	var Things = ["Pipocas", "1,00€"];
	alteraTopo(Ctopo);

	for (var i = 0; i < Things.length; i += 2) {
		txt += "<a align='center' class='list-group-item' onclick=";
		txt += "'atualiza";
		txt += Things[i];
		txt += "();'";
		txt += aux;
		txt += ">";
		txt += Things[i];
		txt += " ";
		txt += Things[i + 1];
		txt += "</a>";
	};
	txt += "</div><div align='center' class='panel col-sm-12'><button onclick='decrQuant();' class='col-sm-4  btn-danger btn-md'  type='button'>-</button><label id='quantitativo' class='col-sm-4 disabled label-info' >1</label><button onclick='incrQuant()' class='col-sm-4  btn-success btn-md'  type='button'>+</button></div></div><button id='btnCompra' onclick='' class='btn btn-lg col-sm-12 btn-primary'  type='button'>Comprar</button></div>";
	body += txt;
	alteraJumbo(body);
	atualizaPipocas()
}


function atualizaSagres33cl() {
	document.getElementById("imgIten").setAttribute("src", "../img/sagres33.jpg");
	document.getElementById("nomeIten").innerHTML = "Sagres 33cl 0,80€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Sagres 33cl', '0.80')");
}
function atualizaImperial() {
	document.getElementById("imgIten").setAttribute("src", "../img/imperial.jpg");
	document.getElementById("nomeIten").innerHTML = "Imperial 1,00€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Imperial', '1.00')");
}
function atualizaSagres20cl() {
	document.getElementById("imgIten").setAttribute("src", "../img/sagres20.jpg");
	document.getElementById("nomeIten").innerHTML = "Sagres 20cl 0,50€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Sagres 20cl', '0.50')");
}

function menuCompraCerveja() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuConsumo()'>Consumo</a></li><li class='active'><a style='border-style:groove'>Cerveja</a></li>";

	var txt = " ";
	var aux = "class";
	var aux2 = "list-group-item";
	var aux3 = "active";
	var body = "<div class='panel-group'><div class='panel panel-heading'><div class='thumbnail col-sm-4'><img id='imgIten' align='center' src='../img/beer.jpg' alt='imagem fugiu'><h5 id='nomeIten' align='center'>Sagres média</h5></div><div style='font-size: 10px; max-height: 180px;' align='center' id='ListaItens' class='list-group panel nav col-sm-8'>";
	var Things = ["Sagres33cl", "0,80€", "Imperial", "1,00€", "Sagres20cl", "0,50€"];
	alteraTopo(Ctopo);

	for (var i = 0; i < Things.length; i += 2) {
		txt += "<a align='center' class='list-group-item' onclick=";
		txt += "'atualiza";
		txt += Things[i];
		txt += "();'";
		txt += aux;
		txt += ">";
		txt += Things[i];
		txt += " ";
		txt += Things[i + 1];
		txt += "</a>";
	};
	txt += "</div><div align='center' class='panel col-sm-12'><button onclick='decrQuant();' class='col-sm-4  btn-danger btn-md'  type='button'>-</button><label id='quantitativo' class='col-sm-4 disabled label-info' >1</label><button onclick='incrQuant()' class='col-sm-4  btn-success btn-md'  type='button'>+</button></div></div><button id='btnCompra' onclick='ativaBebida()' class='btn btn-lg col-sm-12 btn-primary'  type='button'>Comprar</button></div>";
	body += txt;
	alteraJumbo(body);
	atualizaSagres33cl();
}
function atualizaLuso() {
	document.getElementById("imgIten").setAttribute("src", "../img/luso.jpg");
	document.getElementById("nomeIten").innerHTML = "Luso 0,70€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Luso', '0.70')");
}
function atualizaFrize() {
	document.getElementById("imgIten").setAttribute("src", "../img/frize.jpg");
	document.getElementById("nomeIten").innerHTML = "Frize 1,80€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Frize', '1.80')");
}
function menuCompraAgua() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuConsumo()'>Consumo</a></li><li class='active'><a style='border-style:groove'>Água</a></li>";

	var txt = " ";
	var aux = "class";
	var aux2 = "list-group-item";
	var aux3 = "list-group-item active"
	var body = "<div class='panel-group'><div class='panel panel-heading'><div class='thumbnail col-sm-4'><img id='imgIten' align='center' src='../img/agua.jpg' alt='imagem fugiu'><h5 id='nomeIten' align='center'>Luso 0,30cl</h5></div><div style='font-size: 10px; max-height: 180px;' align='center' id='ListaItens' class='list-group panel nav col-sm-8'>";
	var Things = ["Luso", "0,70€", "Frize", "1,80€"];
	alteraTopo(Ctopo);

	for (var i = 0; i < Things.length; i += 2) {
		txt += "<a align='center' class='list-group-item' onclick=";
		txt += "'atualiza";
		txt += Things[i];
		txt += "();'";
		txt += aux;
		txt += ">";
		txt += Things[i];
		txt += " ";
		txt += Things[i + 1];
		txt += "</a>";
	};
	txt += "</div><div align='center' class='panel col-sm-12'><button onclick='decrQuant();' class='col-sm-4  btn-danger btn-md'  type='button'>-</button><label id='quantitativo' class='col-sm-4 disabled label-info' >1</label><button onclick='incrQuant()' class='col-sm-4  btn-success btn-md'  type='button'>+</button></div></div><button id='btnCompra' onclick='ativaBebida()' class='btn btn-lg col-sm-12 btn-primary'  type='button'>Comprar</button></div>";
	body += txt;
	alteraJumbo(body);
	atualizaLuso();
}

function atualizaShotdesespero() {
	document.getElementById("imgIten").setAttribute("src", "../img/shotdesespero.jpg");
	document.getElementById("nomeIten").innerHTML = "Shot de desespero 1,00€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Shot de desespero', '1.00')");
}
function atualizaShottequila() {
	document.getElementById("imgIten").setAttribute("src", "../img/shottequila.jpg");
	document.getElementById("nomeIten").innerHTML = "Shot de tequila 1,00€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Shot de tequila', '1.00')");
}
function atualizaShotwhisky() {
	document.getElementById("imgIten").setAttribute("src", "../img/shotwhisky.jpg");
	document.getElementById("nomeIten").innerHTML = "Shot de whisky 1,00€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Shot de whisky', '1.00')");
}
function atualizaShotvodka() {
	document.getElementById("imgIten").setAttribute("src", "../img/shotvodka.jpg");
	document.getElementById("nomeIten").innerHTML = "Shot de vodka 1,00€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Shot de vodka', '1.00')");
}
function menuCompraShots() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuConsumo()'>Consumo</a></li><li class='active'><a style='border-style:groove'>Shots</a></li>";

	var txt = " ";
	var aux = "class";
	var aux2 = "list-group-item";
	var aux3 = "list-group-item active"
	var body = "<div class='panel-group'><div class='panel panel-heading'><div class='thumbnail col-sm-4'><img id='imgIten' align='center' src='../img/shots.jpg' alt='imagem fugiu'><h5 id='nomeIten' align='center'>Shot de vodka</h5></div><div style='font-size: 10px; max-height: 180px;' align='center' id='ListaItens' class='list-group panel nav col-sm-8'>";
	var Things = ["desespero", "1,00€", "tequila", "1,00€", "whisky", "1,00€", "vodka", "7,50€"];
	alteraTopo(Ctopo);

	for (var i = 0; i < Things.length; i += 2) {
		txt += "<a align='center' class='list-group-item' onclick=";
		txt += "'atualizaShot";
		txt += Things[i];
		txt += "();'";
		txt += aux;
		txt += ">Shot de ";
		txt += Things[i];
		txt += " ";
		txt += Things[i + 1];
		txt += "</a>";
	};
	txt += "</div><div align='center' class='panel col-sm-12'><button onclick='decrQuant();' class='col-sm-4  btn-danger btn-md'  type='button'>-</button><label id='quantitativo' class='col-sm-4 disabled label-info' >1</label><button onclick='incrQuant()' class='col-sm-4  btn-success btn-md'  type='button'>+</button></div></div><button id='btnCompra' onclick='ativaBebida()' class='btn btn-lg col-sm-12 btn-primary'  type='button'>Comprar</button></div>";
	body += txt;
	alteraJumbo(body);
	atualizaShotdesespero();
}

/*
function menuCompraFood() {
var Ctopo = "</a></li><li class='active'><a onclick='menuConsumo()'>Consumo</a></li><li class='active'><a>Food</a></li>";
alteraTopo(Ctopo);
var txt = "<div class='panel-group'><div class='panel panel-heading'><div class='thumbnail col-sm-4'><img id='imgIten' align='center' src='../img/hamburger.png' alt='imagem fugiu'><h5 id='nomeIten' align='center'>Hamburguer</h5></div><div style='font-size: 10px; max-height: 180px;' id='ListaItens' class='list-group panel nav col-sm-8'><a onmouseover='this.setAttribute("+aux+","+aux2"+");' onmouseout='this.setAttribute('class', 'list-group-item');' class='list-group-item'>Hamburguer 1,00€</a><a onmouseover='this.setAttribute("+aux+","+aux2"+");' onmouseout='this.setAttribute('class', 'list-group-item');' class='list-group-item'>Sandes 1,80€</a><a onmouseover='this.setAttribute("+aux+","+aux2"+");' onmouseout='this.setAttribute('class', 'list-group-item');' class='list-group-item'>Sandes 1,80€</a></div><div align='center' class='panel col-sm-12'><button onclick='decrQuant();' class='col-sm-4  btn-danger btn-md'  type='button'>-</button><label id='quantitativo' class='col-sm-4 disabled label-info' >1</label><button onclick='incrQuant()' class='col-sm-4  btn-success btn-md'  type='button'>+</button></div></div><button onclick='ativaComida()' class='btn btn-lg col-sm-12 btn-primary'  type='button'>Comprar</button></div>";
alteraJumbo(txt);
}
*/
///////
var coisasComida = ["Hamburguer", "Sandes", "Pipocas"];
var coisasBebida = ["Cerveja", "Agua", "Shots"];

function menuConsumo() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:groove'>Consumo</a></li>";
	var txt = "<div class='panel-group' id='accordion'><div class='panel panel-default'><a style='text-decoration: none' data-toggle='collapse' data-parent='#accordion' href='#collapseOne'><div class='panel-heading'>	<h4 align='center' class='panel-title'> Comida </h4></div> </a><div align='center' id='collapseOne' class='panel-collapse collapse'>";
	quantidade = 1;
	alteraTopo(Ctopo);

	

	for (var i = 0; i < coisasComida.length; i++) {
		txt += "<a onclick='menuCompra";
		txt += coisasComida[i];
		txt += "(); quantidade=1;'><div class='panel-body col-md-4 btn-primary'>";
		txt += coisasComida[i];
		txt += "</div></a>";
	}
	txt += "</div></div>";

	txt += "<div class='panel panel-default'><a style='text-decoration: none' data-toggle='collapse' data-parent='#accordion' href='#collapseTwo'><div class='panel-heading'>	<h4 align='center' class='panel-title'> Bebidas </h4></div> </a><div align='center' id='collapseTwo' class='panel-collapse collapse'>"

	for (var i = 0; i < coisasBebida.length; i++) {
		txt += "<a onclick='menuCompra";
		txt += coisasBebida[i];
		txt += "()'><div class='panel-body col-md-4 btn-primary'>";
		txt += coisasBebida[i];
		txt += "</div></a>";
	}
	txt += "</div></div></div>";

	alteraJumbo(txt);
}







///////

var coisasMapas = ["Bilhar", "Wc", "Space_invaders", "Bar", "Checkout"];

function menuMapa() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:groove'>Cantos do Bar</a></li>";
	alteraTopo(Ctopo);
	var txt = "<div class='row'>";

	for (var i = 0; i < coisasMapas.length; i++) {
		txt += "<div class='col-6 col-sm-4 col-lg-3' onclick='menuMapa";
		txt += coisasMapas[i];
		txt += "()'><div class='thumbnail'>	<h4 align='center'>";
		txt += coisasMapas[i];
		txt += "</h4><img src='../img/";
		txt += coisasMapas[i];
		txt += ".jpg' alt=";
		txt += "'imagem fugiu'></div></div>";
	}
	txt += "</div>";
	alteraJumbo(txt);
}

///////
var listaUsersBilhar = ["Zé", "<i>Anónimo</i>", "João", "<i>Anónimo</i>", "<i>Anónimo</i>"];

function menuMapaBilhar() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuMapa()'>Cantos do Bar</a></li><li class='active'><a style='border-style:groove'>Bilhar</a></li>";
	alteraTopo(Ctopo);

	var txt = "<div class='row'><div class='thumbnail col-sm-8'><img src='../img/bilhar.jpg' alt='imagem fugiu'><img src='../img/maps.jpg' alt='imagem fugiu'>";
	if (listaUsersBilhar.length > 5)
		txt += "<button onclick='ativaFilaBilhar()' type='button' class='btn col-sm-12 btn-lg btn-info' id='togglerROW'>sair da fila de espera</button>";
	else txt += "<button onclick='ativaFilaBilhar()' type='button' class='btn col-sm-12 btn-lg' id='togglerROW'>entrar na fila de espera</button>";
	txt += "</div><div align='center' style='font-size: 10px;' class='list-group panel nav col-sm-3 col-sm-offset-1'>Pessoas à frente:";

	for (var i = 0; i < listaUsersBilhar.length; i++) {
		txt += "<a class='list-group-item panel'><img src='../img/glyphicons_003_user.png'/>";
		txt += listaUsersBilhar[i];
		txt += "</a>";
	}

	txt += "</div></div>";
	alteraJumbo(txt);
}

function ativaFilaBilhar() {
	if (listaUsersBilhar.length > 5)
		listaUsersBilhar.pop();
	else listaUsersBilhar[listaUsersBilhar.length] = "Eu";
	
	menuMapaBilhar();
}
///////
function menuMapaWc() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuMapa()'>Cantos do Bar</a></li><li class='active'><a style='border-style:groove'>Casas de banho</a></li>";
	alteraTopo(Ctopo);

	var txt = "<div class='row'><div class='thumbnail col-sm-12'><img src='../img/toilets.png' alt='imagem fugiu'><img src='../img/maps.jpg' alt='imagem fugiu'>";
	txt += "</div></div>";
	alteraJumbo(txt);
}
///////

var listaUsersSI = ["<i>Anónimo</i>", "Maria", "<i>Anónimo</i>"];
function menuMapaSpace_invaders() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuMapa()'>Cantos do Bar</a></li><li class='active'><a style='border-style:groove'>Space Invaders</a></li>";
	alteraTopo(Ctopo);

	var txt = "<div class='row'><div class='thumbnail col-sm-8'><img src='../img/spaceinvaders.jpg' alt='imagem fugiu'><img src='../img/maps.jpg' alt='imagem fugiu'>";
	if (listaUsersSI.length > 3)
		txt += "<button onclick='ativaFilaSI()' type='button' class='btn col-sm-12 btn-lg btn-info' id='togglerROW'>sair da fila de espera</button>";
	else txt +=	"<button onclick='ativaFilaSI()' type='button' class='btn col-sm-12 btn-lg' id='togglerROW'>entrar na fila de espera</button>";
	txt += "</div><div align='center' style='font-size: 10px;' class='list-group panel nav col-sm-3 col-sm-offset-1'>Pessoas à frente:";
	
	for (var i = 0; i < listaUsersSI.length; i++) {
		txt += "<a class='list-group-item panel'><img src='../img/glyphicons_003_user.png'/>";
		txt += listaUsersSI[i];
		txt += "</a>";
	}

	txt += "</div></div>";
	alteraJumbo(txt);
}

function ativaFilaSI() {
	if (listaUsersSI.length > 3)
		listaUsersSI.pop();
	else listaUsersSI[listaUsersSI.length] = "Eu";
	menuMapaSpace_invaders();
}
///////


function menuMapaBar() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuMapa()'>Cantos do Bar</a></li><li class='active'><a style='border-style:groove'>Balcão do bar</a></li>";
	alteraTopo(Ctopo);

	var txt = "<div class='row'><div class='thumbnail col-sm-12'><img src='../img/balcony.jpg' alt='imagem fugiu'><img src='../img/maps.jpg' alt='imagem fugiu'>";

	txt += "</div></div>";
	alteraJumbo(txt);
}

function menuMapaCheckout() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuMapa()'>Cantos do Bar</a></li><li class='active'><a style='border-style:groove'>Saída e pagamento</a></li>";
	alteraTopo(Ctopo);

	var txt = "<div class='row'><div class='thumbnail col-sm-12'><img src='../img/checkout.jpg' alt='imagem fugiu'><img src='../img/maps.jpg' alt='imagem fugiu'>";

	txt += "<p align='center'>Para efectuar o pagamento, aceda a este balcão</p></div></div>";
	alteraJumbo(txt);
}
///////

///////
var shopCart = new Array();
//
shopCart[0] = new Array("1", "easter_egg", "entrada", "0.00");


/////////codigo para comprar as cenas, shopcart
/////////////////
var quantidade = 1;
function incrQuant(){
	quantidade += 1;
	document.getElementById('quantitativo').innerHTML = quantidade;
}
function decrQuant(){
	quantidade -= 1;
	if (quantidade <= 0)
		quantidade = 1;
	document.getElementById('quantitativo').innerHTML = quantidade;
}




function limpaCompra() {
	shopCart = new Array();
}


function addCompra(nome, price) {
	var txt = "Confirmar compra: ";
	txt += quantidade;
	
	price = (parseFloat(price) * parseInt(quantidade)).toFixed(2);
	
	txt += "x ";
	txt += nome;
	txt += " custo: ";
	txt += price;
	txt += "€";
	
	var notify = quantidade;
	notify += " ";
	notify += nome;
	notify += " a ser preparado";
	
	
	if (confirm(txt)) {
		addSB(notify);
		shopCart[shopCart.length] = new Array(quantidade, nome, "pedido a ser preparado", price);
	}
		 
	
	
}



//////////

function addSB(str){
	var auxID = shopCart.length;
	var entrada = document.createElement("a");
	entrada.setAttribute("class", "list-group-item");
	entrada.setAttribute("id", auxID);
	var t = document.createTextNode(str);
	var closeBtn = document.createElement("button");
	var aux = "document.getElementById('";
	aux += auxID;
	aux += "').setAttribute('class','hide')"
	closeBtn.setAttribute("onclick", aux);
	closeBtn.setAttribute("type", "button");
	closeBtn.setAttribute("class", "close");
	closeBtn.setAttribute("aria-hidden", "true");
	var t2 = document.createTextNode("x");
	closeBtn.appendChild(t2);
	
	entrada.appendChild(t);
	entrada.appendChild(closeBtn);
	document.getElementById("esconde").appendChild(entrada);
	
		
}


function menuUser() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:groove'>Histórico de Consumo</a></li>";
	alteraTopo(Ctopo);

	var txt = "<div class='row panel'><div align='center' class='panel-heading col-md-3'>Quantidade</div><div align='center' class='panel-heading col-md-3'>Designação</div><div align='center' class='panel-heading col-md-3'>Estado Actual</div><div align='center' class='panel-heading col-md-3'>Custo</div></div><div class='row panel' style='max-height: 300px; overflow-y: scroll;'>";
	var result = 0;
	for (var i = 1; i < shopCart.length; i++) {
		txt += "<div style='font-size: 10px;' align='center' class='panel-body col-md-3'>";
		txt += shopCart[i][0];
		txt += "x</div>";
		txt += "<div style='font-size: 10px;' align='center' class='panel-body col-md-3'>";
		txt += shopCart[i][1];
		txt += "</div>";
		txt += "<div style='font-size: 10px;' align='center' class='panel-body col-md-3'>";
		txt += shopCart[i][2];
		txt += "</div>";
		txt += "<div style='font-size: 10px;' align='center' class='panel-body col-md-3'>";
		txt += shopCart[i][3];
		result += parseFloat(shopCart[i][3]);
		txt += "€</div>";
	}
	txt += "</div>"
	txt += "<div class='row panel'><div style='font-size:15px;' align='center' class='col-md-3 panel-left'>Custo Total:</div>";
	txt += "<div align='left' class='col-md-3 panel'>";
	result = result.toFixed(2);
	txt += result;
	txt += "€</div>";
	
	txt += "<div style='font-size:15px;' align='center' class='col-md-3 panel'>Limite de consumo:</div>";
	txt += "<div onclick='toggleNumber()' align='center' class='col-md-3 panel-right'>";
	txt += "<a id='limitor'  onclick='toggleNumber()'>";
	if (numpadValue == 0)
		txt += "-,--";
	else txt += numpadValue;
	
	txt += "</a>";
	txt += "€</div>";
	txt += "<div align='left' id='numpad' class='col-md-3 panel-right collapse'>";
	//aqui vou fazer uma sub interface de numpad
	
	txt += "<button onclick='insUM()' type='button' class='col-md-4 btn-sm'>1</button>";
	txt += "<button onclick='insDOIS()' type='button' class='col-md-4 btn-sm'>2</button>";
	txt += "<button onclick='insTRES()' type='button' class='col-md-4 btn-sm'>3</button>";
	txt += "<button onclick='insQUAT()' type='button' class='col-md-4 btn-sm'>4</button>";
	txt += "<button onclick='insCINC()' type='button' class='col-md-4 btn-sm'>5</button>";
	txt += "<button onclick='insSEIS()' type='button' class='col-md-4 btn-sm'>6</button>";
	txt += "<button onclick='insSETE()' type='button' class='col-md-4 btn-sm'>7</button>";
	txt += "<button onclick='insOITO()' type='button' class='col-md-4 btn-sm'>8</button>";
	txt += "<button onclick='insNOVE()' type='button' class='col-md-4 btn-sm'>9</button>";
	txt += "<button onclick='insLIPA()' type='button' class='col-md-4 btn-sm'>C</button>";
	txt += "<button onclick='insZERO()' type='button' class='col-md-4 btn-sm'>0</button>";
	txt += "<button onclick='insBACK()' type='button' class='col-md-4 btn-sm'><-</button>";
	
	txt += "</div></div>";
	txt += "</div>"
	alteraJumbo(txt);
}

var numpadValue = 0;
var numpadModifier = 10;
function insUM() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= numpadModifier;
	nbr += 1;
	
	var txt = nbr;
	numpadValue = nbr;
	document.getElementById("limitor").innerHTML = txt;
}
function insDOIS() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= numpadModifier;
	nbr += 2;
	
	var txt = nbr;
	numpadValue = nbr;
	document.getElementById("limitor").innerHTML = txt;
}

function insTRES() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= numpadModifier;
	nbr += 3;
	
	var txt = nbr;
	numpadValue = nbr;
	document.getElementById("limitor").innerHTML = txt;
}

function insQUAT() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= numpadModifier;
	nbr += 4;
	
	var txt = nbr;
	numpadValue = nbr;
	document.getElementById("limitor").innerHTML = txt;
}

function insCINC() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= numpadModifier;
	nbr += 5;
	
	var txt = nbr;
	numpadValue = nbr;
	document.getElementById("limitor").innerHTML = txt;
}

function insSEIS() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= numpadModifier;
	nbr += 6;
	
	var txt = nbr;
	numpadValue = nbr;
	document.getElementById("limitor").innerHTML = txt;
}

function insSETE() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= numpadModifier;
	nbr += 7;
	
	var txt = nbr;
	numpadValue = nbr;
	document.getElementById("limitor").innerHTML = txt;
}

function insOITO() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= numpadModifier;
	nbr += 8;
	
	var txt = nbr;
	numpadValue = nbr;
	document.getElementById("limitor").innerHTML = txt;
}

function insNOVE() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= numpadModifier;
	nbr += 9;
	
	var txt = nbr;
	numpadValue = nbr;
	document.getElementById("limitor").innerHTML = txt;
}

function insLIPA() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= 0;
	var txt = nbr;
	numpadValue = nbr;
	document.getElementById("limitor").innerHTML = txt;
}

function insZERO() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= numpadModifier;
	nbr += 0;
	
	var txt = nbr;
	numpadValue = nbr;
	document.getElementById("limitor").innerHTML = txt;
}

function insBACK() {
	var nbr = parseInt(numpadValue);
	nbr *= 0.1;
	
	nbr.toFixed(0);
	
	var txt = parseInt(nbr);
	numpadValue = nbr;
	document.getElementById("limitor").innerHTML = txt;
}


//<a data-original-title="A Title" href="#" class="btn btn-lg btn-danger" data-toggle="popover" title="" data-content="And here's some amazing content. It's very engaging. right?" role="button">Click to toggle popover</a>
var numpadPresn = false;
function toggleNumber() {
	if (numpadPresn) {
		numpadPresn = false;
		document.getElementById("numpad").setAttribute("class", "col-md-3 panel-right collapse");
	} else {
		numpadPresn = true;
		numpadValue = 0;
		numpadModifier = 10;
		document.getElementById("limitor").setAttribute("class", "active");
		document.getElementById("numpad").setAttribute("class", "col-md-3 panel-right");
	}
		
	//confirm("teste;")
}

///////
function menuMenu() {
	var Ctopo = "<li class='active'><a style='border-style:groove' onclick='menuMenu()'>Menu</a></li>";
	document.getElementById('topo').innerHTML = Ctopo;
	
	var txt = "<div align='center'  class='list-group'><a onclick='menuConsumo()' class='list-group-item'>Consumir</a>";
	txt += "<a onclick='menuMapa()' class='list-group-item'>Lugares</a><a onclick='menuMusica()' class='list-group-item'>Música</a>";
	txt += "<a onclick='menuUser()'' class='list-group-item'>Histórico do consumo</a></div>";
	alteraJumbo(txt);
}

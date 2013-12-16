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
/////////  LicorVodka smirnoff_vodka.jpg
/////////  LicorGin Gin.jpg
/////////  LicorBrandy brandy.jpg 
/////////  LicorWhisky whiskyLicor.jpg
/////////  LicorTequila tequilabottle.jpg
/////////  LicorRum Bacardi_Rum.jpg

function atualizaBacardi_Rum() {
	document.getElementById("imgIten").setAttribute("src", "../img/Bacardi_Rum.jpg");
	document.getElementById("nomeIten").innerHTML = "Bacardi 2,50€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Bacardi', '2.50')");
}

function atualizaDon_Pedro_Brandy() {
	document.getElementById("imgIten").setAttribute("src", "../img/brandy.jpg ");
	document.getElementById("nomeIten").innerHTML = "Don Pedro 4,70€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Don Pedro', '4.70')");
}

function atualizaSmirnoff_Vodka() {
	document.getElementById("imgIten").setAttribute("src", "../img/smirnoff_vodka.jpg");
	document.getElementById("nomeIten").innerHTML = "Smirnoff 1,30€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Smirnoff', '1.30')");
}
function atualizaOlmeca_Tequila() {
	document.getElementById("imgIten").setAttribute("src", "../img/tequilabottle.jpg");
	document.getElementById("nomeIten").innerHTML = "Olmeca 3,00€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Olmeca', '3.00')");
}

function atualizaJohnnie_Walker_Whisky() {
	document.getElementById("imgIten").setAttribute("src", "../img/whiskyLicor.jpg");
	document.getElementById("nomeIten").innerHTML = "Johnnie_Walker 2,50€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Johnnie_Walker', '2.50')");
}

function atualizaMalborough_Gin() {
	document.getElementById("imgIten").setAttribute("src", "../img/Gin.jpg");
	document.getElementById("nomeIten").innerHTML = "Malborough 2,30€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Malborough', '2.30')");
}

function menuCompraLicor() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuConsumo()'>Consumo</a></li><li class='active'><a style='border-style:groove'>Licores</a></li>";

	var txt = " ";
	var aux = "class";
	var aux2 = "list-group-item";
	var aux3 = "list-group-item active"
	var body = "<div class='panel-group'><div class='panel panel-heading'><div class='thumbnail col-sm-4'><img id='imgIten' align='center' src='../img/cheeseburguer.jpg' alt='imagem fugiu'><h5 id='nomeIten' align='center'>Cheeseburguer 1,00€</h5></div><div style='font-size: 10px; max-height: 180px;' align='center' id='ListaItens' class='list-group panel nav col-sm-8'>";
	var Things = ["Bacardi_Rum", "2,50€","Don_Pedro_Brandy", "4,70€", "Smirnoff_Vodka", "1,30€", "Olmeca_Tequila", "3,00€", "Johnnie_Walker_Whisky", "2,50€", "Malborough_Gin", "2,30€"];
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
	atualizaBacardi_Rum()
}


/////////  SumoIcetea  liptoncan.png
///////// Sumo7up 7upCan.jpg
///////// SumoCC coca-cola-can.jpg
function atualizaLipton_ice_tea() {
	document.getElementById("imgIten").setAttribute("src", "../img/liptoncan.png");
	document.getElementById("nomeIten").innerHTML = "Lipton Ice Tea 0,80€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('IceTea, '0.80')");
}

function atualiza7up() {
	document.getElementById("imgIten").setAttribute("src", "../img/7upCan.jpg");
	document.getElementById("nomeIten").innerHTML = "Seven Up 0,80€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('7up', '0.80')");
}

function atualizaCoca_cola() {
	document.getElementById("imgIten").setAttribute("src", "../img/coca-cola-can.jpg");
	document.getElementById("nomeIten").innerHTML = "Coca cola 0,80€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('CocaCola', '0.80')");
}

function menuCompraRefrigerante() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuConsumo()'>Consumo</a></li><li class='active'><a style='border-style:groove'>Refrigerantes</a></li>";

	var txt = " ";
	var aux = "class";
	var aux2 = "list-group-item";
	var aux3 = "list-group-item active"
	var body = "<div class='panel-group'><div class='panel panel-heading'><div class='thumbnail col-sm-4'><img id='imgIten' align='center' src='../img/cheeseburguer.jpg' alt='imagem fugiu'><h5 id='nomeIten' align='center'>Cheeseburguer 1,00€</h5></div><div style='font-size: 10px; max-height: 180px;' align='center' id='ListaItens' class='list-group panel nav col-sm-8'>";
	var Things = ["Lipton_ice_tea", "0,80€", "7up", "0,80€", "Coca_cola", "0,80€"];
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
	atualizaLipton_ice_tea();
}

///////// CafeExpr cafe_expresso.jpg
function atualizaExpresso() {
	document.getElementById("imgIten").setAttribute("src", "../img/cafe_expresso.jpg");
	document.getElementById("nomeIten").innerHTML = "Café 0,50€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Café', '0.50')");
}

function menuCompraCafe() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuConsumo()'>Consumo</a></li><li class='active'><a style='border-style:groove'>Café</a></li>";

	var txt = " ";
	var aux = "class";
	var aux2 = "list-group-item";
	var aux3 = "list-group-item active"
	var body = "<div class='panel-group'><div class='panel panel-heading'><div class='thumbnail col-sm-4'><img id='imgIten' align='center' src='../img/cheeseburguer.jpg' alt='imagem fugiu'><h5 id='nomeIten' align='center'>Cheeseburguer 1,00€</h5></div><div style='font-size: 10px; max-height: 180px;' align='center' id='ListaItens' class='list-group panel nav col-sm-8'>";
	var Things = ["Expresso", "0,50€"];
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
	atualizaExpresso()
}

///////// EnerMonster  monstercan.jpg
///////// EnerRB redbullcan.jpg
function atualizaRed_Bull() {
	document.getElementById("imgIten").setAttribute("src", "../img/redbullcan.jpg");
	document.getElementById("nomeIten").innerHTML = "Red Bull 1,00€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Red Bull', '1.00')");
}

function atualizaMonster() {
	document.getElementById("imgIten").setAttribute("src", "../img/monstercan.jpg");
	document.getElementById("nomeIten").innerHTML = "Monster 1,50€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Monster', '1.50')");
}

function menuCompraEnergeticas() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuConsumo()'>Consumo</a></li><li class='active'><a style='border-style:groove'>Energéticas</a></li>";

	var txt = " ";
	var aux = "class";
	var aux2 = "list-group-item";
	var aux3 = "list-group-item active"
	var body = "<div class='panel-group'><div class='panel panel-heading'><div class='thumbnail col-sm-4'><img id='imgIten' align='center' src='../img/cheeseburguer.jpg' alt='imagem fugiu'><h5 id='nomeIten' align='center'>Cheeseburguer 1,00€</h5></div><div style='font-size: 10px; max-height: 180px;' align='center' id='ListaItens' class='list-group panel nav col-sm-8'>";
	var Things = ["Red_Bull", "1,00€", "Monster", "1,50€"];
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
	atualizaRed_Bull();
}

///////// GeladoCopo IceInCup.jpg
///////// GeladoCone chococone.jpg
function atualizaGelado_Cone() {
	document.getElementById("imgIten").setAttribute("src", "../img/chococone.jpg");
	document.getElementById("nomeIten").innerHTML = "Cone 0,50€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Celado cone', '0.50')");
}

function atualizaGelado_Prato() {
	document.getElementById("imgIten").setAttribute("src", "../img/IceInCup.jpg");
	document.getElementById("nomeIten").innerHTML = "Taça 1,00€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Gelado taça', '1.00')");
}

function menuCompraGelados() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuConsumo()'>Consumo</a></li><li class='active'><a style='border-style:groove'>Gelados</a></li>";

	var txt = " ";
	var aux = "class";
	var aux2 = "list-group-item";
	var aux3 = "list-group-item active"
	var body = "<div class='panel-group'><div class='panel panel-heading'><div class='thumbnail col-sm-4'><img id='imgIten' align='center' src='../img/cheeseburguer.jpg' alt='imagem fugiu'><h5 id='nomeIten' align='center'>Cheeseburguer 1,00€</h5></div><div style='font-size: 10px; max-height: 180px;' align='center' id='ListaItens' class='list-group panel nav col-sm-8'>";
	var Things = ["Gelado_Cone", "0,50€", "Gelado_Prato", "1,00€"];
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
	atualizaGelado_Cone();
}

///////// BoloChoco ChocoCake.jpg
///////// PastelBelem PastelBl.jpg
function atualizaFatia_Bolo_Chocolate() {
	document.getElementById("imgIten").setAttribute("src", "../img/chocoCake.jpg");
	document.getElementById("nomeIten").innerHTML = "Bolo Chocolate 0,90€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Bolo Chocolate', '0.90')");
}

function atualizaPastel_Belem() {
	document.getElementById("imgIten").setAttribute("src", "../img/PastelBl.jpg");
	document.getElementById("nomeIten").innerHTML = "Pastel de Belém 1,50€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Pastel Belem', '1.50')");
}

function menuCompraBolos() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuConsumo()'>Consumo</a></li><li class='active'><a style='border-style:groove'>Bolos</a></li>";

	var txt = " ";
	var aux = "class";
	var aux2 = "list-group-item";
	var aux3 = "list-group-item active"
	var body = "<div class='panel-group'><div class='panel panel-heading'><div class='thumbnail col-sm-4'><img id='imgIten' align='center' src='../img/cheeseburguer.jpg' alt='imagem fugiu'><h5 id='nomeIten' align='center'>Cheeseburguer 1,00€</h5></div><div style='font-size: 10px; max-height: 180px;' align='center' id='ListaItens' class='list-group panel nav col-sm-8'>";
	var Things = ["Fatia_Bolo_Chocolate", "0,90€", "Pastel_Belem", "1,50€"];
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
	atualizaFatia_Bolo_Chocolate();
}

///////// Nachos nachos.jpg
///////// BatataFrita ChipsInCup.jpg
function atualizaNachos() {
	document.getElementById("imgIten").setAttribute("src", "../img/nachos.jpg");
	document.getElementById("nomeIten").innerHTML = "Nachos 0,80€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Nachos', '0.80')");
}

function atualizaBatatas_fritas() {
	document.getElementById("imgIten").setAttribute("src", "../img/ChipsInCup.jpg");
	document.getElementById("nomeIten").innerHTML = "Batatas Fritas 1,50€";
	document.getElementById("btnCompra").setAttribute("onclick", "addCompra('Batatas Fritas', '1.50')");
}

function menuCompraFritos() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuConsumo()'>Consumo</a></li><li class='active'><a style='border-style:groove'>Fritos</a></li>";

	var txt = " ";
	var aux = "class";
	var aux2 = "list-group-item";
	var aux3 = "list-group-item active"
	var body = "<div class='panel-group'><div class='panel panel-heading'><div class='thumbnail col-sm-4'><img id='imgIten' align='center' src='../img/cheeseburguer.jpg' alt='imagem fugiu'><h5 id='nomeIten' align='center'>Cheeseburguer 1,00€</h5></div><div style='font-size: 10px; max-height: 180px;' align='center' id='ListaItens' class='list-group panel nav col-sm-8'>";
	var Things = ["Nachos", "0,80€", "Batatas_fritas", "1,50€"];
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
	atualizaNachos()
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
var coisasComida = ["Hamburguer", "Sandes", "Pipocas", "Fritos", "Bolos", "Gelados"];
var coisasBebida = ["Cerveja", "Agua", "Shots", "Energeticas", "Cafe", "Refrigerante", "Licor"];

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
	var Ctopo = "</a></li><li class='active'><a style='border-style:groove'>Mapa do Bar</a></li>";
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
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuMapa()'>Mapa do Bar</a></li><li class='active'><a style='border-style:groove'>Bilhar</a></li>";
	alteraTopo(Ctopo);

	var txt = "<div class='row'><div class='thumbnail col-sm-8'><img src='../img/bilhar.jpg' alt='imagem fugiu'><img src='../img/maps.jpg' alt='imagem fugiu'>";
	if (listaUsersBilhar.length > 5)
		txt += "<button onclick='ativaFilaBilhar()' type='button' class='btn col-sm-12 btn-lg btn-info' id='togglerROW'>sair da fila de espera</button>";
	else
		txt += "<button onclick='ativaFilaBilhar()' type='button' class='btn col-sm-12 btn-lg' id='togglerROW'>entrar na fila de espera</button>";
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
	else
		listaUsersBilhar[listaUsersBilhar.length] = "Eu";

	menuMapaBilhar();
}

///////
function menuMapaWc() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuMapa()'>Mapa do Bar</a></li><li class='active'><a style='border-style:groove'>Casas de banho</a></li>";
	alteraTopo(Ctopo);

	var txt = "<div class='row'><div class='thumbnail col-sm-12'><img src='../img/toilets.png' alt='imagem fugiu'><img src='../img/maps.jpg' alt='imagem fugiu'>";
	txt += "<p>Casas de banhos; Custumávamos ter mais que uma, mas o sr.eng. diz que uma é suficiente</p>"
	txt += "</div></div>";
	alteraJumbo(txt);
}

///////

var listaUsersSI = ["<i>Anónimo</i>", "Maria", "<i>Anónimo</i>"];
function menuMapaSpace_invaders() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuMapa()'>Mapa do Bar</a></li><li class='active'><a style='border-style:groove'>Space Invaders</a></li>";
	alteraTopo(Ctopo);

	var txt = "<div class='row'><div class='thumbnail col-sm-8'><img src='../img/spaceinvaders.jpg' alt='imagem fugiu'><img src='../img/maps.jpg' alt='imagem fugiu'>";
	if (listaUsersSI.length > 3)
		txt += "<button onclick='ativaFilaSI()' type='button' class='btn col-sm-12 btn-lg btn-info' id='togglerROW'>sair da fila de espera</button>";
	else
		txt += "<button onclick='ativaFilaSI()' type='button' class='btn col-sm-12 btn-lg' id='togglerROW'>entrar na fila de espera</button>";
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
	else
		listaUsersSI[listaUsersSI.length] = "Eu";
	menuMapaSpace_invaders();
}

///////

function menuMapaBar() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuMapa()'>Mapa do Bar</a></li><li class='active'><a style='border-style:groove'>Balcão do bar</a></li>";
	alteraTopo(Ctopo);

	var txt = "<div class='row'><div class='thumbnail col-sm-12'><img src='../img/balcony.jpg' alt='imagem fugiu'><img src='../img/maps.jpg' alt='imagem fugiu'>";

	txt += "</div></div>";
	alteraJumbo(txt);
}

function menuMapaCheckout() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:ridge' onclick='menuMapa()'>Mapa do Bar</a></li><li class='active'><a style='border-style:groove'>Saída e pagamento</a></li>";
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
function incrQuant() {
	quantidade += 1;
	document.getElementById('quantitativo').innerHTML = quantidade;
}

function decrQuant() {
	quantidade -= 1;
	if (quantidade <= 0)
		quantidade = 1;
	document.getElementById('quantitativo').innerHTML = quantidade;
}

function limpaCompra() {
	shopCart = new Array();
}

var numpadValue = 0;

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

	var result = 0;
	for (var i = 1; i < shopCart.length; i++) {
		result += parseFloat(shopCart[i][3]);
	}
	result += parseFloat(price);
	result = parseFloat(result).toFixed(2);
	if ((result > numpadValue) && (numpadValue != 0)) {
		var txtAux = "Compra anulada, limite de consumo ultrapassado!\n";
		txtAux += numpadValue;
		txtAux += "\n";
		txtAux += result;
		alert(txtAux);
	} else {
		if (confirm(txt)) {
			addSB(notify);
			shopCart[shopCart.length] = new Array(quantidade, nome, "pedido a ser preparado", price);
			var txtAlerta = "Espere aqui, a seguinte lista de pedidos vai aqui ser entregue:\n";
			for (var i = 1; i < shopCart.length; i++) {
				txtAlerta += shopCart[i][0];
				txtAlerta += "x ";
				txtAlerta += shopCart[i][1];
				txtAlerta += "\n";
			}
			alert(txtAlerta);
		}
	}
}

//////////

function addSB(str) {
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
	var Ctopo = "</a></li><li class='active'><a style='border-style:groove'>Carrinho de compras</a></li>";
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
	txt += "<div onclick='toggleNumber()' align='center' class='col-md-3 panel-right btn-info btn-md'>";
	txt += "<span id='limitor'>";
	if (numpadValue == 0)
		txt += "-,--";
	else
		txt += parseInt(numpadValue);

	txt += "</span>";
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

function insUM() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= 10;
	nbr += 1;

	var txt = nbr;
	numpadValue = parseInt(nbr);
	document.getElementById("limitor").innerHTML = txt;
}

function insDOIS() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= 10;
	nbr += 2;

	var txt = nbr;
	numpadValue = parseInt(nbr);
	document.getElementById("limitor").innerHTML = txt;
}

function insTRES() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= 10;
	nbr += 3;

	var txt = nbr;
	numpadValue = parseInt(nbr);
	document.getElementById("limitor").innerHTML = txt;
}

function insQUAT() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= 10;
	nbr += 4;

	var txt = nbr;
	numpadValue = parseInt(nbr);
	document.getElementById("limitor").innerHTML = txt;
}

function insCINC() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= 10;
	nbr += 5;

	var txt = nbr;
	numpadValue = parseInt(nbr);
	document.getElementById("limitor").innerHTML = txt;
}

function insSEIS() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= 10;
	nbr += 6;

	var txt = nbr;
	numpadValue = parseInt(nbr);
	document.getElementById("limitor").innerHTML = txt;
}

function insSETE() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= 10;
	nbr += 7;

	var txt = nbr;
	numpadValue = parseInt(nbr);
	document.getElementById("limitor").innerHTML = txt;
}

function insOITO() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= 10;
	nbr += 8;

	var txt = nbr;
	numpadValue = parseInt(nbr);
	document.getElementById("limitor").innerHTML = txt;
}

function insNOVE() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= 10;
	nbr += 9;

	var txt = nbr;
	numpadValue = parseInt(nbr);
	document.getElementById("limitor").innerHTML = txt;
}

function insLIPA() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= 0;
	var txt = nbr;
	numpadValue = parseInt(nbr);
	document.getElementById("limitor").innerHTML = txt;
}

function insZERO() {
	var nbr = parseFloat(numpadValue).toFixed(2);
	nbr *= 10;
	nbr += 0;

	var txt = nbr;
	numpadValue = parseInt(nbr);
	document.getElementById("limitor").innerHTML = txt;
}

function insBACK() {
	var nbr = parseInt(numpadValue);
	nbr *= 0.1;

	nbr.toFixed(0);

	var txt = parseInt(nbr);
	numpadValue = parseInt(nbr);
	document.getElementById("limitor").innerHTML = txt;
}

var numpadPresn = false;
function toggleNumber() {
	if (numpadPresn) {
		numpadPresn = false;
		document.getElementById("numpad").setAttribute("class", "col-md-3 panel-right collapse");
	} else {
		numpadPresn = true;
		numpadValue = 0;
		document.getElementById("limitor").setAttribute("class", "active");
		document.getElementById("numpad").setAttribute("class", "col-md-3 panel-right");
	}

	//confirm("teste;")
}

///////
function menuMenu() {
	var Ctopo = "<li class='active'><a style='border-style:groove' onclick='menuMenu()'>Menu</a></li>";
	document.getElementById('topo').innerHTML = Ctopo;

	var txt = "<div align='center'  class='list-group'><a onclick='menuConsumo()' class='list-group-item'><img src='../img/fast-food-icon.png'>Consumir</a>";
	txt += "<a onclick='menuMapa()' class='list-group-item'><img src='../img/Maps-icon.png'>Mapa do bar</a><a onclick='menuMusica()' class='list-group-item'><img src='../img/turnable-icon.png'>Música</a>";
	txt += "<a onclick='menuUser()'' class='list-group-item'><img src='../img/shopping-cart-icon.png'>Carrinho de compras</a></div>";
	alteraJumbo(txt);
}

/////////////////
var quantidade = 1;
function incrQuant() {
	quantidade += 1;
	document.getElementById('quantitativo').innerHTML = quantidade;
}

function decrQuant() {
	quantidade -= 1;
	if (quantidade <= 0)
		quantidade = 1;
	document.getElementById('quantitativo').innerHTML = quantidade;
}

////////
var SbStt = true;
function toggleBotao() {
	if (SbStt) {
		SbStt = false;
		document.getElementById("botaoNOTBAR").innerHTML = "»» mostrar notificações »»";
		document.getElementById("esconde").setAttribute("class", "list-group collapse");
	} else {
		SbStt = true;
		document.getElementById("botaoNOTBAR").innerHTML = "«« esconde notificações ««";
		document.getElementById("esconde").setAttribute("class", "list-group collapse in");
	}
}

//entrada mplayer: esta a acompanhar a musica a tocar
var MusicStt = false;
///////
var listaMusica = ["Tony Carreira", "Música Pimba", "Hotel California"];
function menuMusica() {
	var Ctopo = "</a></li><li class='active'><a style='border-style:groove'>Música</a></li>";
	alteraTopo(Ctopo);

	var txt = "<div class='row'><div align='center' class='thumbnail col-sm-8'><img src='../img/dj-hero.jpg' alt='imagem fugiu'>Dj viraDiscos";
	if (MusicStt)
		txt += "<button onclick='ativaMplayer()' type='button' class='btn col-sm-12 btn-lg btn-info' id='togglerMP'>Deixar de acompanhar a música</button>";
	else
		txt += "<button onclick='ativaMplayer()' type='button' class='btn col-sm-12 btn-lg btn-primary' id='togglerMP'>Acompanhar a música</button>";
	txt += "</div><div align='center' style='font-size: 10px;' class='list-group panel nav col-sm-3 col-sm-offset-1'>Lista de músicas:";

	for (var i = 0; i < listaMusica.length; i++) {
		txt += "<a class='list-group-item panel'><img align='left' src='../img/glyphicons_017_music.png'/>";
		txt += listaMusica[i];
		txt += "</a>";
	}

	txt += "</div></div>";
	alteraJumbo(txt);
}

function ativaMplayer() {
	if (MusicStt) {
		MusicStt = false;
		document.getElementById("mplayer").setAttribute("class", "list-group-item hide");
		document.getElementById("togglerMP").setAttribute("class", "btn col-sm-12 btn-lg btn-primary");
		document.getElementById("togglerMP").innerHTML = "Acompanhar a música";
	} else {
		MusicStt = true;
		document.getElementById("mplayer").setAttribute("class", "list-group-item");
		document.getElementById("togglerMP").setAttribute("class", "btn col-sm-12 btn-lg btn-info");
		document.getElementById("togglerMP").innerHTML = "Deixar de acompanhar a música";
	}
}


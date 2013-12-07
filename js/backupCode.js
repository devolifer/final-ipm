///////////atoms cookies
function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else
		var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ')
		c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0)
			return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name, "", -1);
}

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



///////////gerir sidebar
function resetCookie() {
	eraseCookie('SBstatus');
	createCookie('SBstatus', 'on', 1);
}



////////
function checkCookie() {
	var SBcookie = readCookie('SBstatus');
	var MPcookie = readCookie('MUSICstatus');

	if (SBcookie != null && SBcookie != "" && SBcookie == 'off') {
		document.getElementById("botaoNOTBAR").innerHTML = "»» mostrar notificações »»";
		document.getElementById("esconde").setAttribute("class", "list-group collapse");
	} else if (SBcookie != null && SBcookie != "" && SBcookie == 'on') {
		document.getElementById("botaoNOTBAR").innerHTML = "«« esconde notificações ««";
		document.getElementById("esconde").setAttribute("class", "list-group collapse in");
	} else {
	}


	if (MPcookie != null && MPcookie != "" && MPcookie == 'off') {

		document.getElementById("mplayer").setAttribute("class", "list-group-item hide");
		document.getElementById("togglerMP").setAttribute("class", "btn col-sm-12 btn-lg btn-primary");
		document.getElementById("togglerMP").innerHTML = "Acompanhar a música";
	} else if (MPcookie != null && MPcookie != "" && MPcookie == 'on') {
		document.getElementById("mplayer").setAttribute("class", "list-group-item");
		document.getElementById("togglerMP").setAttribute("class", "btn col-sm-12 btn-lg btn-info");
		document.getElementById("togglerMP").innerHTML = "Deixar de acompanhar a música";
	} else {
	}

}

////////
function toggleBotao() {
	var theCookie = readCookie('SBstatus');

	if (theCookie != null && theCookie != "" && theCookie == 'on') {
		createCookie('SBstatus', 'off', 1);
	} else if (theCookie != null && theCookie != "" && theCookie == 'off') {
		createCookie('SBstatus', 'on', 1);
	} else {
		resetCookie();
	}
	checkCookie();
}

///////////gerir entradas
/*o truqe vai ser que existem apenas 4 entradas declaras, q estarao hide em todas as interfaces que requiram
* o checkcookies vai ver todas as cookies que serao um total de 5 ate agora, para cada pagina
*
*/
//entrada comida: encomendou um hamburguer
function ativaComida() {
	var theCookie = readCookie('FOODstatus');

	if (theCookie != null && theCookie != "" && theCookie == 'on') {
	} else if (theCookie != null && theCookie != "" && theCookie == 'off') {

		createCookie('FOODstatus', 'on', 1);
	} else {
		createCookie('FOODstatus', 'on', 1);
	}
	var r = confirm("Confirmar pedido 1x Hamburguer");
	if (r == true) {
	} else {
		createCookie('FOODstatus', 'off', 1);
	}
	checkCookie();
}

//entrada bebida: encomendou duas cervejas
function ativaBebida() {
	var theCookie = readCookie('DRINKstatus');

	if (theCookie != null && theCookie != "" && theCookie == 'on') {
		alert();
	} else if (theCookie != null && theCookie != "" && theCookie == 'off') {
		createCookie('DRINKstatus', 'on', 1);
	} else {
		createCookie('DRINKstatus', 'on', 1);
	}
	checkCookie();
}

//entrada mplayer: esta a acompanhar a musica a tocar
function ativaMplayer() {
	var theCookie = readCookie('MUSICstatus');

	if (theCookie != null && theCookie != "" && theCookie == 'on') {
		createCookie('MUSICstatus', 'off', 1);
	} else if (theCookie != null && theCookie != "" && theCookie == 'off') {
		createCookie('MUSICstatus', 'on', 1);
	} else {
		createCookie('MUSICstatus', 'on', 1);
	}
	checkCookie();
}

//entrada fila: user esta a espera pela sua vez de jogar bilhar
function ativaFila() {
	var theCookie = readCookie('ROWstatus');

	if (theCookie != null && theCookie != "" && theCookie == 'on') {
		createCookie('ROWstatus', 'off', 1);
	} else if (theCookie != null && theCookie != "" && theCookie == 'off') {
		createCookie('ROWstatus', 'on', 1);
	} else {
		createCookie('ROWstatus', 'on', 1);
	}
	checkCookie();
}



/*
 function addConsumo() {

 function
 var para = document.createElement("a");
 para.setAttribute("class", "list-group-item");
 var node = document.createTextNode("incrtester");
 para.appendChild(node);

 var element = document.getElementById("esconde");
 element.appendChild(para);
 addEntry()

 }
 */
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
var SbStt = false;
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
	else txt += "<button onclick='ativaMplayer()' type='button' class='btn col-sm-12 btn-lg btn-primary' id='togglerMP'>Acompanhar a música</button>";
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


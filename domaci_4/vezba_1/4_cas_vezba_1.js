
// **1. vezba 'zamena elemenata u nizu po trazenoj vrednosti'**
//----------------------------------------

function zamenaVrednosti(niz, trazenaVrednost, vrednostZaZamenu) {
	
var noviNiz = [];

for (var i = 0; i < niz.length; i++) {
	
	if (niz[i] === trazenaVrednost) {
		niz[i] = vrednostZaZamenu;
			}
			noviNiz.push(niz[i]);
	}

	return(console.log("novi niz: " + noviNiz));
}

zamenaVrednosti([7, 4, 52, 10, 4, 5, 12, 1, 3, 6], 4, 25);





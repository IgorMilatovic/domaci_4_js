
// **2. vezba 'ima li duplikata u nizu'**
//----------------------------------------

function ajdeBre(niz) {

	for (n = 0; n < niz.length; n++)	{
		 
		 for (i = n + 1; i < niz.length; i++) {
			
			if (niz[n] === niz[i]) {
				return true; 
			}
		}
	}
	
	return false;
}

if (ajdeBre([7,4,5,8,1,9,2,7])) {
	console.log('oh yeah, theres a duplicates');
}

else {
	console.log('oh no, everybodys single');
}
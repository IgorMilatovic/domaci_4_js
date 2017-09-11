
// **3. vezba 'tereti'**
//----------------------------------------

function mozemoLiPoneti(weight1, weight2, maxWeight) {
	if (weight1 + weight2 <= maxWeight) { 
		console.log('nosimo oba');
	}
	
	else if (weight1 > maxWeight && weight2 > maxWeight) {
		console.log('ne mozemo ni jedan da ponesemo');
	}

	else if (weight1 <= maxWeight && weight2 > maxWeight) {
		console.log('mozemo prvi');
	}

	else if (weight1 > maxWeight && weight2 <= maxWeight) {
		console.log('mozemo drugi');
	}

	else {
		console.log('mozemo da biramo koji cemo, ali ne mozemo oba');
	}
}

//poziv funkcije
mozemoLiPoneti(6, 6, 10);
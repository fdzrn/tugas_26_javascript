function tugas26(){
	let data = [2,39,76,50,9,7,41,2,24,1,16];
	let data2 = isFinite([2,39,76,50,9,7,41,2,24,1,16]);
	if (data2 === false) {
		for(let i = 0; i < data.length; i++){
			console.log('Angka ' + data[i] + ' NOT Infinity')
		}
	} else {
		console.log('Angka ' + data[i] + ' Infinity')
	}
}
tugas26();
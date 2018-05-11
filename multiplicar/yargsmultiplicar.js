const fs=require('fs');
const colors=require('colors');

let listarTabla=(base,limite)=>{
	return new Promise((resolve,reject)=>{

		if(!Number(base)){
			reject('No es un numero');
			return;
		}

		let data='';

		console.log('==================='.green)
		console.log(`tabla del ${base}`.green)
		console.log('==================='.green)

		for (let i =1; i <=limite; i++) {
			let res=base*i;
			//data+=(`${base} x ${i} = ${res}\n`);
			console.log(`${base} x ${i} = ${res}\n`);
		}


	})

}




let crearArchivo=(base,limite)=>{
	return new Promise((resolve, reject)=>{

if(!Number(base)){
	reject('No es un numero');
	return;
}


let data='';

for (let i =1; i <=limite; i++) {
	let res=base*i;
	data+=(`${base} x ${i} = ${res}\n`);
}

fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
	  
	  if (err) 
	  	reject (err)
	  else
	  	resolve(`tabla-${base}.txt`);
	 
	
	});

		
	})
}

module.exports ={

	crearArchivo,
	listarTabla
}

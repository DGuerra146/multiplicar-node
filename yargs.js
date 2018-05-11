const argv=require('yargs')
.command('listar','Imprime en consola la tabla de multiplicar',{
	base:{
		demand:true,
		alias:'b'
	},
	limite:{
		alias:'l',
		default:10
	}
})
.command('crear','Crea archivo en carpeta',{
	base:{
		demand:true,
		alias:'b'
	},
	limite:{
		alias:'l',
		default:10
	}
})

.help()
.argv;








const { crearArchivo } =require('./multiplicar/yargsmultiplicar.js');
const { listarTabla } =require('./multiplicar/yargsmultiplicar.js');

let comando=argv._[0];

switch(comando){

	case 'listar':
		listarTabla(argv.base,argv.limite)
			//.then(archivo=>console.log(`Archivo creado: ${archivo}`))
			//.catch(e=>console.log(e));
		break;

	case 'crear':
		crearArchivo(argv.base,argv.limite)
			.then(archivo=>console.log(`Archivo creado: ${archivo}`))
			.catch(e=>console.log(e));
		break;

	default:
		console.log('Comando no reconocido');
}

//console.log(process.argv);
//let argv2=process.argv;

//console.log(argv.base);
//console.log(argv.limite);


//let parametro=argv[2];
//let base=parametro.split('=')[1];


//console.log(base);


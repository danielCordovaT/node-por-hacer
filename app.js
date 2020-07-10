const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0]

switch(comando){
    case 'crear':
        let tarea =porHacer.crear(argv.descripcion)
        console.log(tarea)
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado){
            console.log('=======Por=Hacer======='.rainbow)
            console.log(tarea.descripcion);
            console.log(`estado : ${tarea.completado}`)
            console.log('======================='.rainbow)
        }
        break;
    case 'actualizar':
        let actulizado = porHacer.actualizar(argv.descripcion,argv.completado)
        console.log(actulizado)
        break;
    case 'borrar':
        let borrado =porHacer.borrar(argv.descripcion)
        console.log(borrado) 
        break;
    default:
        console.log('comando no reconocido')
    
}
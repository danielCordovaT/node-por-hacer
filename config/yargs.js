const descripcion = {
    demand:true,
    alias: 'd',
    desc:'descripcion de la tarea por hacer'


}
const completado = {
    alias: 'c',
    default: true
}


const argv = require('yargs')
    .command('crear','crear un elemento',{
        descripcion
    })
    .command('actualizar','actualiza el estado completado de una tarea',{
        descripcion,
        completado
    })
    .command('borrar','borra alguna tarea',{
        descripcion,
        completado

    })
    .help()
    .argv;


module.exports={
    argv
}
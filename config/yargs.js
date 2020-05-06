const opts={
    descripcion:{
        demand:true,
        alias:'d',
        desc:'Descripcion de la tarea por hacer'
    },
    completado:{
        default:true,
        alias:'c',
        desc:'Marca como completado o pendiente la tarea'
    }
};

const argv=require('yargs')
    .command('actualizar', 'Actulizar el estado completado de una tarea',opts)
    .command('crear', 'Crear un elemento por hacer',opts)
    .command('borrar', 'Borrar un elemento',opts)
    .help()
    .argv;

module.exports= {
    argv
};
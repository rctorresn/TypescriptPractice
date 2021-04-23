/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio:number;
}

const reproductor: Reproductor={
    volumen: 90,
    segundo:36,
    cancion: 'Snuff',
    detalles:{
        anio:2015,
        autor:'Slipknot'
    }
}

const{volumen,segundo,cancion,detalles}=reproductor;
const{autor}=detalles;

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const[p1,p2,p3]=dbz;


console.log('Personaje 1: ', p1);

console.log('El volumen actual es: ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('la cancion actual es: ', cancion);
console.log('El autor es: ', autor);

/*
    ===== Código de TypeScript =====
*/
function sumar(a:number, b:number):number {
    return a+b;
}


const sumarFlecha = (a:number, b:number):number => {
    return a+b;
}

function multiplicar ( numero:number, otroNumero?: number, base:number=2):number{
    return numero * base;
}

interface PersonajeLOR{
    nombre:string;
    pv:number;
    mostrarHp:()=> void;
}

function curar(personaje:PersonajeLOR, curarx:number):void{
    personaje.pv += curarx;    
}

const nuevoPersonaje:PersonajeLOR =  {
    nombre: 'ramses',
    pv: 50,
    mostrarHp()
    {
        console.log('Puntos de vida:', this.pv);
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();
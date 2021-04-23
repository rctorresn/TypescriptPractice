/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe{
    nombre:string;
    edad:number;
    direccion:Direccion,
    mostrarDireccion:()=>string;
}

interface Direccion{
        calle:string;
        pais:string;
        ciudad:string;
}

const superHeroe:SuperHeroe={
    nombre: 'StarLord',
    edad:30,
    direccion:{
        calle:'Angels',
        pais:'USA',
        ciudad: 'Misouri'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;   }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);
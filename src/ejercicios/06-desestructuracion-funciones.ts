/*
    ===== Código de TypeScript =====
*/

export interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc:'Huawei P20',
    precio: 150
}

const tableta:Producto ={
    desc:'iPad Pro',
    precio:500
}

export function calcularISV( productos: Producto[] ):[number,number]{
    
    let total = 0;

    productos.forEach( ({precio})=>{
        total += precio;
    })
    return [total, total*0.15];
}

const articulos = [telefono, tableta];

const [total, isv] = calcularISV( articulos );

console.log('Total: ', total);
console.log('ISV: ', isv);
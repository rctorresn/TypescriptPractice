import { Producto, calcularISV } from './06-desestructuracion-funciones';
/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[]=[
    {
        desc: 'Phone1',
        precio: 200
    },
    {
        desc: 'iPhone1',
        precio:500
    }
];

const[total, isv] = calcularISV (carritoCompras);

console.log('total', total);
console.log('ISV', isv);
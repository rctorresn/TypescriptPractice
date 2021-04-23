
/*
    ===== Código de TypeScript =====
*/

class personaNormal{
    constructor(
        public nombre:string,
        public direccion:string
    ){}
}





class Heroe extends personaNormal{
    constructor(
        public alterEgo:string,
        public edad: number,
        public nombreReal:string
    ){
        super(nombreReal,'new york, Usa');
    }
    
}

const ironman = new Heroe('Ironman', 45,'Tony');

console.log(ironman);
//Clase
class Articulo{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
    }
}
const articulo1 = new Articulo("Zapatillas deportivas", 12000, 0);
const articulo2 = new Articulo("Zapatos formlaes", 10000, 0);
const articulo3 = new Articulo("Remera lisa", 3000, 0);
const articulo4 = new Articulo("Vaquero azul", 4900, 0);
const articulo5 = new Articulo("Buzo hoodie", 6000, 0);
const articulo6 = new Articulo("Campera termica", 8000, 0);
const articulo7 = new Articulo("Blusa de gasa", 3000, 0);
const articulo8 = new Articulo("Conjunto deportivo", 12500, 0);
const articulo9 = new Articulo("Zapatillas urbanas", 9000, 0);
const articulo10 = new Articulo("Calza de algodon", 2000, 0);
const articulo11 = new Articulo("Gorro de lana", 2200, 0);
const articulo12 = new Articulo("Bufanda de lana", 1500, 0);
const articulo13 = new Articulo("Borcegos", 15000, 0);
//Arreglo
const articulos = [articulo1, articulo2, articulo3, articulo4, articulo5, articulo6, articulo7, articulo8, articulo9, articulo10, articulo11, articulo12, articulo13];
const carritoArticulos = [];
const carritoValorTotal = [];

//variables
let closeMain = true;
let genero = "hombre";

function sumaTotal(){
    let total = carritoValorTotal.reduce((a, b) => a + b, 0);
    const carritoInfo = prompt(
        `Mi Carrito de Compras:\n` +
        `\n` +
        `${carritoArticulos.join("")}\n` +
        `\n` +
        `Total de la compra: $${total}\n` +
        `\n` +
        `1 | Pagar\n` +
        `2 | ↩`
    );
    switch(carritoInfo){
        case "1":
            alert(
                `Se ha completado la compra!\n` +
                `\n` +
                `Recibira su factura y/o comprobante de compra al siguiente mail:\n` +
                `example******@mail.com\n`
            );
            carritoArticulos.splice(0, carritoArticulos.length);
            carritoValorTotal.splice(0, carritoValorTotal.length);
            mainMenu();
        case "2":
            mainMenu();
        default:
            sumaTotal();
    }
}
//Calzado Hombre
function calzadoH(){
    const calzadoHombre = prompt(
        `Calzado para ${genero}\n` +
        `\n` +
        `1 | ${articulo1.nombre} $${articulo1.precio}\n` +
        `2 | ${articulo2.nombre} $${articulo2.precio}\n` +
        `\n` +
        `3 | ↩\n` +
        `4 | Inicio`
    );
    switch(calzadoHombre){
        case `1`:
            articulo1.cantidad = articulo1.cantidad + 1;
            carritoArticulos.push(`${articulo1.nombre} $${articulo1.precio}\n`);
            carritoValorTotal.push(12000);
            alert(
                `Se ha agregado al carrito de compras:\n` +
                `\n` +
                `${articulo1.nombre}\n` +
                `\n` +
                `Cantidad en carrito: ${articulo1.cantidad}`
            );
            calzadoH();
        case "2":
            articulo2.cantidad = articulo2.cantidad + 1;
            carritoArticulos.push(`${articulo2.nombre} $${articulo2.precio}\n`);
            carritoValorTotal.push(10000);
            alert(
                `Se ha agregado al carrito de compras:\n` +
                `\n` +
                `${articulo2.nombre}\n` +
                `\n` +
                `Cantidad en carrito ${articulo2.cantidad}`
            );
            calzadoH();
        case "3":
            productos();
        default:
            calzadoH();
        case "4":
            mainMenu();
    }
}
//Calzado Mujer
function calzadoM(){
    const calzadoMujer = prompt(
        `Calzado para ${genero}\n` +
        `\n` +
        `1 | ${articulo9.nombre} $${articulo9.precio}\n` +
        `2 | ${articulo13.nombre} $${articulo13.precio}\n` +
        `\n` +
        `3 | ↩\n` +
        `4 | Inicio`
    );
    switch(calzadoMujer){
        case `1`:
            articulo9.cantidad = articulo9.cantidad + 1;
            carritoArticulos.push(`${articulo9.nombre} $${articulo9.precio}\n`);
            carritoValorTotal.push(9000);
            alert(
                `Se ha agregado al carrito de compras:\n` +
                `\n` +
                `${articulo9.nombre}\n` +
                `\n` +
                `Cantidad en carrito: ${articulo9.cantidad}`
            );
            calzadoM();
        case "2":
            articulo13.cantidad = articulo13.cantidad + 1;
            carritoArticulos.push(`${articulo13.nombre} $${articulo13.precio}\n`);
            carritoValorTotal.push(1500);
            alert(
                `Se ha agregado al carrito de compras:\n` +
                `\n` +
                `${articulo13.nombre}\n` +
                `\n` +
                `Cantidad en carrito ${articulo13.cantidad}`
            );
            calzadoM();
        case "3":
            productos();
        default:
            calzadoM();
        case "4":
            mainMenu();
    }
}
//Indumentaria / Hombre
function indumentariaHombre(){
    const indumentariaHombreItems = prompt(
        `Indumentaria para ${genero}\n` +
        `\n` +
        `1 | ${articulo3.nombre} $${articulo3.precio}\n` +
        `2 | ${articulo4.nombre} $${articulo4.precio}\n` +
        `3 | ${articulo5.nombre} $${articulo5.precio}\n` +
        `4 | ${articulo6.nombre} $${articulo6.precio}\n` +
        `5 | ${articulo12.nombre} $${articulo12.precio}\n` +
        `\n` +
        `6 | ↩\n` +
        `7 | Inicio`
    );
    switch(indumentariaHombreItems){
        case "1":
            articulo3.cantidad = articulo3.cantidad + 1;
            carritoArticulos.push(`${articulo3.nombre} $${articulo3.precio}\n`);
            carritoValorTotal.push(3000);
            alert(
                `Se ha agregado al carrito de compras:\n` +
                `\n` +
                `${articulo3.nombre} $${articulo3.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${articulo3.cantidad}`
            );
            indumentariaHombre();
        case "2":
            articulo4.cantidad = articulo4.cantidad + 1;
            carritoArticulos.push(`${articulo4.nombre} $${articulo4.precio}\n`);
            carritoValorTotal.push(4900);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${articulo4.nombre} $${articulo4.precio}\n` +
                `\n` +
                `Cantdad en carrito: ${articulo4.cantidad}`
            );
            indumentariaHombre()
        case "3":
            articulo5.cantidad = articulo5.cantidad + 1;
            carritoArticulos.push(`${articulo5.nombre} $${articulo5.precio}\n`);
            carritoValorTotal.push(6000);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${articulo5.nombre} $${articulo5.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${articulo5.cantidad}`
            );
            indumentariaHombre();
        case "4":
            articulo6.cantidad = articulo6.cantidad + 1;
            carritoArticulos.push(`${articulo6.nombre} $${articulo6.precio}\n`);
            carritoValorTotal.push(8000);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${articulo6.nombre} $${articulo6.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${articulo6.cantidad}`
            );
            indumentariaHombre();
        case "5":
            articulo12.cantidad = articulo12.cantidad + 1;
            carritoArticulos.push(`${articulo12.nombre} $${articulo12.precio}\n`);
            carritoValorTotal.push(1500);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${articulo12.nombre} $${articulo12.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${articulo12.cantidad}`
            );
            indumentariaHombre();
        case "6":
            productos();
        default:
            indumentariaHombre();
        case "7":
            mainMenu();
    }
}
//Indumentaria / Mujer
function indumentariaMujer(){
    genero = "mujer";
    const indumentariaMujerItems = prompt(
        `Indumentaria para ${genero}\n` +
        `\n` +
        `1 | ${articulo7.nombre} $${articulo7.precio}\n` +
        `2 | ${articulo10.nombre} $${articulo10.precio}\n` +
        `3 | ${articulo8.nombre} $${articulo8.precio}\n` +
        `4 | ${articulo11.nombre} $${articulo11.precio}\n` +
        `\n` +
        `5 | ↩\n` +
        `6 | Inicio`
    );
    switch(indumentariaMujerItems){
        case `1`:
            articulo7.cantidad = articulo7.cantidad + 1;
            carritoArticulos.push(`${articulo7.nombre} $${articulo7.precio}\n`);
            carritoValorTotal.push(3000);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${articulo7.nombre} $${articulo7.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${articulo7.cantidad}`
            );
            indumentariaMujer();
        case `2`:
            articulo10.cantidad = articulo10.cantidad + 1;
            carritoArticulos.push(`${articulo10.nombre} $${articulo10.precio}\n`);
            carritoValorTotal.push(2000);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${articulo10.nombre} $${articulo10.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${articulo10.cantidad}`
            );
            indumentariaMujer();
        case `3`:
            articulo8.cantidad = articulo8.cantidad + 1;
            carritoArticulos.push(`${articulo8.nombre} $${articulo8.precio}\n`);
            carritoValorTotal.push(12500);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${articulo8.nombre} $${articulo8.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${articulo8.cantidad}`
            );
            indumentariaMujer();
        case `4`:
            articulo11.cantidad = articulo11.cantidad + 1;
            carritoArticulos.push(`${articulo11.nombre} $${articulo11.precio}\n`);
            carritoValorTotal.push(2200);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${articulo11.nombre} $${articulo11.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${articulo11.cantidad}`
            );
            indumentariaMujer();
        case `5`:
            productos();
        default:
            indumentariaMujer();
        case `6`:
            genero = "hombre";
            mainMenu();
    }
}
//Productos categorias
function productos(){
    const productosCategoria = prompt(
        `Articulos de ${genero}:\n` +
        `\n` +
        `1 | Calzado\n` +
        `2 | Indumentaria\n` +
        `\n` +
        `3 | ↩\n`
    );
    switch(productosCategoria){
        case "1":
            if(genero == "hombre"){
                calzadoH();
            }else{
                calzadoM();
            }
        case "2":
            if(genero == "hombre"){
                indumentariaHombre();
            }else{
                indumentariaMujer();
            };
        case "3":
            mainMenu();
        default:
            productos();
    }
}
//Menu principal de la tienda
function mainMenu(){
    const userMenuPrincipal = prompt(
        `Tienda de indumentaria.\n` +
        `\n` +
        `seleccione una categoria:\n` +
        `\n` +
        `1 | Hombre\n` +
        `2 | Mujer\n` +
        `\n` +
        `3 | Carrito\n`
    )
    switch(userMenuPrincipal){
        default:
            mainMenu();
        case "1":
            productos();
        case "2":
            genero = "mujer";
            productos();
        case "3":
            sumaTotal();
    }
}
//Ejecucion
while(closeMain){
    mainMenu();
}
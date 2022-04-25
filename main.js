//variables
let closeMain = true;
let genero = "hombre";
// Items
let calzadoDvoPrecio = 10000; let calzadoDvoCantidad = 0; let mostrarCalDep = ``;
let calzadoFmalPrecio = 15000; let calzadoFmalCantidad = 0; let mostrarCalFmal = ``;
let remeraPrecio = 4000; let remeraCantidad = 0; let mostrarRemera = ``;
let vaqueroPrecio = 6000; let vaqueroCantidad = 0; let mostrarVaquero = ``;
let buzoPrecio = 7000; let buzoCantidad = 0; let mostrarBuzo = ``;
let camperaDvaPrecio = 8500; let camperaDvaCantidad = 0; let mostrarCamDep = ``;
//Items / Mujer
let blusaPrecio = 3000; let blusaCantidad = 0; let mostrarBlusa = ``;
let conjuntoDvoPrecio = 14000; let conjuntoDvoCantidad = 0; let mostrarConjDep = ``;
//Sumatoria y productos
let totalPagar = 0;
let productosCarrito;
function sumaTotal(){
    totalPagar = (calzadoDvoPrecio * calzadoDvoCantidad) + (calzadoFmalPrecio * calzadoFmalCantidad) + (remeraPrecio * remeraCantidad) + (vaqueroPrecio * vaqueroCantidad) + (buzoPrecio * buzoCantidad) + (camperaDvaPrecio * camperaDvaCantidad) + (blusaPrecio * blusaCantidad) + (conjuntoDvoPrecio * conjuntoDvoCantidad);
    productosCarrito = mostrarCalDep + mostrarCalFmal + mostrarRemera + mostrarVaquero + mostrarBuzo + mostrarCamDep + mostrarBlusa + mostrarConjDep;
    const carritoInfo = prompt(
        `Mi Carrito de Compras:\n` +
        `\n` +
        `${productosCarrito}\n` +
        `\n` +
        `Total de la compra: $${totalPagar}\n` +
        `\n` +
        `1 | Pagar\n` +
        `2 | ↩`
    )
    switch(carritoInfo){
        case "1":
            alert(
                `Se ha completado la compra!\n` +
                `\n` +
                `Recibira su factura y/o comprobante de compra al siguiente mail:\n` +
                `example******@mail.com\n`
            );
            calzadoDvoCantidad = 0; mostrarCalDep = ``;
            calzadoFmalCantidad = 0; mostrarCalFmal = ``;
            remeraCantidad = 0; mostrarRemera = ``;
            vaqueroCantidad = 0; mostrarVaquero = ``;
            buzoCantidad = 0; mostrarBuzo = ``;
            camperaDvaCantidad = 0; mostrarCamDep = ``;
            blusaCantidad = 0; mostrarBlusa = ``;
            conjuntoDvoCantidad = 0; mostrarConjDep = ``;
            mainMenu();
        case "2":
            mainMenu();
        default:
            sumaTotal();
    }
}
//Calzado ambos generos
function calzado(){
    const calzadoItems = prompt(
        `Calzado para ${genero}\n` +
        `\n` +
        `1 | Zapatillas Deportivas $10.000\n` +
        `2 | Zapatos formales $15.000\n` +
        `\n` +
        `3 | ↩\n` +
        `4 | Inicio`
    );
    switch(calzadoItems){
        case `1`:
            calzadoDvoCantidad = calzadoDvoCantidad + 1;
            mostrarCalDep = `Zapatillas Deportivas $10.000 | Cantidad: ${calzadoDvoCantidad}\n`;
            alert(
                `Se ha agregado al carrito de compras:\n` +
                `\n` +
                `Zapatillas Deportivas $10.000\n` +
                `\n` +
                `Cantidad en carrito: ${calzadoDvoCantidad}`
            );
            calzado();
        case "2":
            calzadoFmalCantidad = calzadoFmalCantidad + 1;
            mostrarCalFmal = `Zapatos Formales $15.000 | Cantidad: ${calzadoFmalCantidad}\n`;
            alert(
                `Se ha agregado al carrito de compras:\n` +
                `\n` +
                `Zapatos formales $15.000\n` +
                `\n` +
                `Cantidad en carrito ${calzadoFmalCantidad}`
            );
            calzado();
        case "3":
            productos();
        default:
            calzado();
        case "4":
            mainMenu();
    }
}
//Indumentaria / Hombre
function indumentariaHombre(){
    const indumentariaHombreItems = prompt(
        `Indumentaria para ${genero}\n` +
        `\n` +
        `1 | Remera basica $4.000\n` +
        `2 | Vaquero azul $6.000\n` +
        `3 | Buzo hoodie $7.000\n` +
        `4 | Campera Deportvia $8.500\n` +
        `\n` +
        `5 | ↩\n` +
        `6 | Inicio`
    );
    switch(indumentariaHombreItems){
        case "1":
            remeraCantidad = remeraCantidad + 1;
            mostrarRemera = `Remera basica $4.000 | Cantidad: ${remeraCantidad}\n`;
            alert(
                `Se ha agregado al carrito de compras:\n` +
                `\n` +
                `Remera basica $4.000\n` +
                `\n` +
                `Cantidad en carrito: ${remeraCantidad}`
            );
            indumentariaHombre();
        case "2":
            vaqueroCantidad = vaqueroCantidad + 1;
            mostrarVaquero = `Vaquero azul $6.000 | Cantidad: ${vaqueroCantidad}\n`;
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `Vaquero azul $6.000\n` +
                `\n` +
                `Cantdad en carrito: ${vaqueroCantidad}`
            );
            indumentariaHombre()
        case "3":
            buzoCantidad = buzoCantidad + 1;
            mostrarBuzo = `Buzo hoodie $7.000 | Cantidad: ${buzoCantidad}\n`;
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `Buzo hoodie $7.000\n` +
                `\n` +
                `Cantidad en carrito: ${buzoCantidad}`
            );
            indumentariaHombre();
        case "4":
            camperaDvaCantidad = camperaDvaCantidad + 1;
            mostrarCamDep = `Campera Deportiva $8.500 | Cantidad: ${camperaDvaCantidad}\n`;
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `Campera Deportvia $8.500\n` +
                `\n` +
                `Cantidad en carrito: ${camperaDvaCantidad}`
            );
            indumentariaHombre();
        case "5":
            productos();
        default:
            indumentariaHombre();
        case "6":
            mainMenu();
    }
}
//Indumentaria / Mujer
function indumentariaMujer(){
    genero = "mujer";
    const indumentariaMujerItems = prompt(
        `Indumentari para ${genero}\n` +
        `\n` +
        `1 | Blusa de gasa $3.000\n` +
        `2 | Vaquero azul $6.000\n` +
        `3 | Buzo hoodie $7.000\n` +
        `4 | Conjunto Deportivo $14.000\n` +
        `\n` +
        `5 | ↩\n` +
        `6 | Inicio\n`
    );
    switch(indumentariaMujerItems){
        case `1`:
            blusaCantidad = blusaCantidad + 1;
            mostrarBlusa = `Blusa de gasa $3.000 | Cantidad: ${blusaCantidad}\n`;
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `Blusa de gasa $3.000\n` +
                `\n` +
                `Cantidad en carrito: ${blusaCantidad}`
            );
            indumentariaMujer();
        case "2":
            vaqueroCantidad = vaqueroCantidad + 1;
            mostrarVaquero = `Vaquero Azul $6.000 | Cantidad: ${vaqueroCantidad}\n`;
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `Vaquero azul $6.000\n` +
                `\n` +
                `Cantidad en carrito: ${vaqueroCantidad}`
            );
            indumentariaMujer();
        case "3":
            buzoCantidad = buzoCantidad + 1;
            mostrarBuzo = `Buzo hoodie $7.000 | Cantidad: ${buzoCantidad}\n`;
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `Buzo hoodie $7.000\n` +
                `\n` +
                `Cantidad en carrito: ${buzoCantidad}`
            );
            indumentariaMujer();
        case "4":
            conjuntoDvoCantidad = conjuntoDvoCantidad + 1;
            mostrarConjDep = `Conjunto Deportivo $14.000 | Cantidad: ${conjuntoDvoCantidad}\n`;
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `Conjunto Deportivo $14.000\n` +
                `\n` +
                `Cantidad en carrito: ${conjuntoDvoCantidad}`
            );
            indumentariaMujer();
        case "5":
            productos();
        default:
            indumentariaMujer();
        case "6":
            genero = "hombre";
            mainMenu();
    }
}
//Productos categorias
function productos(){
    const productosCategoria = prompt(
        `Productos para ${genero}:\n` +
        `\n` +
        `1 | Calzado\n` +
        `2 | Indumentaria\n` +
        `\n` +
        `3 | ↩\n`
    );
    switch(productosCategoria){
        case "1":
            calzado();
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
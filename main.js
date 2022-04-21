//Menu principal
const menuShop = "Tienda de indumentaria Online.\n" +
                 "\n" +
                 "seleccione una categia:\n" +
                 "\n" +
                 "1 | Hombre\n" +
                 "2 | Mujer\n" +
                 "\n" +
                 "3 | salir\n" +
                 "4 | Carrito\n";

//variables principales
let salirDelShop = true;
let seleccionCategoria;
let seleccionProducto;
let volverMenuShop;
let volverMenuCategorias;
let seccionCalzado;
let seccionIndumentaria;

//Productos en venta / precio fuera del carrito de compras
//Hombre
let zapDeportivas = 0;
let zapFormales = 0;
let remera = 0;
let vaquero = 0;
let buzo = 0;
//Mujer
let zapDeportivasMujer = 0;
let borcegos = 0;
let blusa = 0;
let vaqueroMujer = 0;
let gabardina = 0;

//Productos Comprados:
let zapDeportivasCompra =``;
let zapFormalesCompra =``;
let remeraCompra =``;
let vaqueroCompra =``;
let buzoCompra =``;
let zapDeportivasMujerCompra =``;
let borcegosCompra =``;
let blusaCompra =``;
let vaqueroMujerCompra =``;
let gabardinaCompra =``;

let carritoOpc;

while(salirDelShop){
    
    seleccionCategoria = prompt(menuShop);

    if(seleccionCategoria == "1"){

        volverMenuShop = true;
    // Productos para Hombre
        while(volverMenuShop){
        
            const productosHombre = "Productos para Hombre\n" +
                                "\n" +
                                "1 | Calzado\n" +
                                "2 | Indumentaria\n" +
                                "\n" +
                                "3 | ↩";
            seleccionProducto = prompt(productosHombre);

            if(seleccionProducto == "1"){
            
                volverMenuCategorias = true;
                while(volverMenuCategorias){

                    const calzadoHombre = "Calzado para Hombren\n" +
                                    "\n" +
                                    "1 |        Zapatillas deportivas       $10.000\n" +
                                    "2 |        Zapatos formales            $15.000\n" +
                                    "\n" +
                                    "3 | ↩";
                    seccionCalzado = prompt(calzadoHombre);

                    switch(seccionCalzado){

                        case "1":
                            alert("Se ha agregado 'Zapatillas deportivas' al carrito.");
                            zapDeportivas = 10000;
                            zapDeportivasCompra = `Zapatillas deportivas       $10.000\n`;
                            break;
                        case "2":
                            alert("Se ha agregado 'Zapatos formales' al carrito.");
                            zapFormales = 15000;
                            zapFormalesCompra = `Zapatos formales            $15.000\n`;
                            break;
                        case "3":
                            volverMenuCategorias = false;
                            break;
                        default:
                            break;
                    }
                }

            }else if(seleccionProducto == "2"){

                salirDeHombre = true;
                while(salirDeHombre){

                    const indumentariaHombre = "Indumentaria para Hombre\n" +
                                               "\n" +
                                               "1 |     Remera basica       $3.000\n" +
                                               "2 |     Vaquero azul        $6.000\n" +
                                               "3 |     Buzo hoodie         $6.500\n" +
                                               "\n" +
                                               "4 | ↩";
                    seccionIndumentaria = prompt(indumentariaHombre);

                    switch(seccionIndumentaria){

                        case "1":
                            alert("Se ha agregado 'Remera basica' al carrito.");
                            remera = 3000;
                            remeraCompra = `Remera basica               $3.000\n`;
                            break;
                        case "2":
                            alert("Se ha agregado 'Vaquero Azul' al carrito.");
                            vaquero = 6000;
                            vaqueroCompra = `Vaquero azul                $6.000\n`;
                            break;
                        case "3":
                            alert("Se ha agregado 'Buzo hoodie' al carrito.");
                            buzo = 6500;
                            buzoCompra = `Buzo hoodie                 $6.500\n`;
                            break;
                        case "4":
                            salirDeHombre = false;
                            break;
                        default:
                            break;

                    }
                }


            }else if(seleccionProducto == "3"){
                volverMenuShop = false;
            }

        }
    }else if(seleccionCategoria == "2"){

        volverMenuShop = true;
    // Productos para Mujer
        while(volverMenuShop){

            const productosMujer = "Productos para Mujer\n" +
                                   "\n" +
                                   "1 | Calzado\n" +
                                   "2 | Indumentaria\n" +
                                   "\n" +
                                   "3 | ↩";
            seleccionProducto = prompt(productosMujer);

            if(seleccionProducto == "1"){

                salirDeMujer = true;
                while(salirDeMujer){

                    const calzadoMujer = "Calzado para Mujer\n" +
                                         "\n" +
                                         "1 |       Zapatillas deportivas (mujer)       $10.000\n" +
                                         "2 |       Borcegos                            $14.000\n" +
                                         "\n"+ 
                                         "3 | ↩";
                    seccionCalzado = prompt(calzadoMujer);

                    switch(seccionCalzado){

                        case "1":
                            alert("Se ha agregado 'Zapatillas deportivas' al carrito.");
                            zapDeportivasMujer = 10000;
                            zapDeportivasMujerCompra = `Zapatillas deportivas M     $10.000\n`;
                            break;
                        case "2":
                            alert("Se ha agregado 'Borcegos' al carrito.");
                            borcegos = 14000;
                            borcegosCompra = `Borcegos                    $14.000\n`;
                            break;
                        case "3":
                            salirDeMujer = false;
                            break;
                        default:
                            break;

                    }

                }
            }else if(seleccionProducto == "2"){

                volverMenuCategorias = true;
                while(volverMenuCategorias){

                    const indumentariaMujer = "Indumentaria para Mujer\n" +
                                              "\n" +
                                              "1 |      Blusa                   $2.000\n" +
                                              "2 |      Vaquero azul (mujer)    $5.500\n" +
                                              "3 |      Gabardina               $10.000\n" +
                                              "\n" +
                                              "4 | ↩";
                    seccionIndumentaria = prompt(indumentariaMujer);

                    switch(seccionIndumentaria){

                        case "1":
                            alert("Se ha agregado 'Blusa' al carrito.");
                            blusa = 2000;
                            blusaCompra = `Blusa                       $2.000\n`;
                            break;
                        case "2":
                            alert("Se ha agregado 'Vaquero Azul (mujer)' al carrito.");
                            vaqueroMujer = 5500;
                            vaqueroMujerCompra = `Vaquero azul M              $5.500\n`;
                            break;
                        case "3":
                            alert("Se ha agregado 'Gabardina' al carrito.");
                            gabardina = 10000;
                            gabardinaCompra = `Gabardina                   $10.000\n`;
                            break;
                        case "4":
                            volverMenuCategorias = false;
                            break;
                        default:
                            break;

                    }

                }

            }else if(seleccionProducto == "3"){
                volverMenuShop = false;
            }
        }

    }else if(seleccionCategoria == "4"){

        sumatoria = zapDeportivas +
                    zapFormales +
                    remera +
                    vaquero +
                    buzo +
                    zapDeportivasMujer +
                    borcegos +
                    blusa +
                    vaqueroMujer +
                    gabardina;
        
        productos = zapDeportivasCompra +
                    zapFormalesCompra +
                    remeraCompra +
                    vaqueroCompra +
                    buzoCompra +
                    zapDeportivasMujerCompra +
                    borcegosCompra +
                    blusaCompra +
                    vaqueroMujerCompra +
                    gabardinaCompra;
        
        if(sumatoria > 0){

            const carritoInfo = 
            `Mi carrito de Compras:\n` +
            `\n` +
            `${productos}` +
            `\n` +
            `Monto TOTAL:                $${sumatoria}.\n` +
            `\n` +
            `1 | Pagar\n` +
            `2 | Salir\n`;

            carritoOpc = prompt(carritoInfo);
            
            switch(carritoOpc){
                
                case "1":
                    alert(
                            `Gracias por su compra!\n` +
                            `\n` +
                            `Su factura y/o comprobante de pago fue enviada a su mail: \nabc****@mail.com`
                    );
                    salirDelShop = false;
                    break;
                case "2":
                    volverMenuCategorias = false;
                    break;
                default:
                    break;
            }
            
        }else{
            alert(`No hay productos en el carrito.`);
        }

    }else{
        salirDelShop = false;
        alert("Usted ha salido del Shop.")
    }
    
}
const VENTAS_BASE=5;

function calcularComision(numeroVentas, PrecioProducto){
    let comision =0;
    if (numeroVentas>VENTAS_BASE){
        let ventasExtras = numeroVentas -VENTAS_BASE;
        comision= ventasExtras*(PrecioProducto*0.1);
    }
    return comision;

}

function calcular (){
    //Recuperamos propiedades de las cajas de texto
    
    //let componenteSueloBase= document.getElementById("txtSueldoBase");
    //let componenteVentas= document.getElementById("txtVentas");
    //let componentePrecio= document.getElementById("txtPrecio");

    //Mejorado con util.js
    //Recuperamos el valor de la caja de texto
    //let sueldoBaseStr= recuperarTexto("txtSueldoBase");
    //let numeroVentasStr= recuperarTexto(txtVentas);
    //let PrecioProductoStr= recuperarTexto(txtPrecio);

    //Convierte el texto en numero
    //let sueldoBase= parseFloat(sueldoBaseStr);
    //let numeroVentas= parseFloat(numeroVentasStr);
    //let precioProducto= parseFloat(PrecioProductoStr);

    let sueldoBase= recuperarFloat("txtSueldoBase");
    let numeroVentas= recuperarFloat("txtVentas");
    let precioProducto= recuperarFloat("txtPrecio");

    //Guardando el retorno en una variable
    let comision= calcularComision(numeroVentas, precioProducto);
    let total= sueldoBase + comision;

    //Paso previo para mostrar la respuesta
    let spSueldoBase= document.getElementById("spSueldoBase");
    let spComision= document.getElementById("spComision");
    let spTotal= document.getElementById("spTotal");

    //Mostrar texto en pantalla
    spSueldoBase.textContent= sueldoBase;
    spComision.textContent= comision;
    spTotal.textContent= total;
}
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
    let componenteSueloBase= document.getElementById("txtSueldoBase");
    let componenteVentas= document.getElementById("txtVentas");
    let componentePrecio= document.getElementById("txtPrecio");

    //Recuperamos el valor de la caja de texto
    let sueldoBaseStr= componenteSueloBase.value;
    let numeroVentasStr= componenteVentas.value;
    let PrecioProductoStr= componentePrecio.value;

    //Convierte el texto en numero
    let sueldoBase= parseFloat(sueldoBaseStr);
    let numeroVentas= parseFloat(numeroVentasStr);
    let PrecioProducto= parseFloat(PrecioProductoStr);

    //Guardando el retorno en una variable
    let comision= calcularComision(numeroVentas, PrecioProducto);
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
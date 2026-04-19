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
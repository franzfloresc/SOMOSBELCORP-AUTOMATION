const I = actor();
let wait = { retries: 2, minTimeout: 2000 };
const config= require('./Palancas.locator')
let locator=config.locator; 
var intCantAgregar=3;

module.exports = {

    Constructor(){
        this.locator=config.locator; 
    },
   
    async IrLandingGanaMas(){
        //I.retry(wait).say("Validación inicial del botón GanaMas");
        I.wait(1);
        await I.retry(wait).seeElement(locator.btnGanaMas);
        await I.retry(wait).click(locator.btnGanaMas);
    },


    ValidacionLandingGanaMas(){
        I.retry(wait).say("Validación inicial del landing GanaMas");
        I.retry(wait).seeElement(locator.btnGanaMasInicio);
    },

    async AgregarVariosProductos(){
        for(i=1; i<=intCantAgregar; i++){
            I.wait(1);
            await this.AgregarUnProducto();
            await this.ValidacionMsjProdAdd();
            I.wait(1);
            console.log("Agregada nro: ".concat(i));
            //pause();
            //Agregar wait???
        }
    },

    async AgregarUnProducto(){
        I.retry(wait).say("Se agregará el primer producto de la palanca ShowRoom");
        //pause();
        await I.retry(wait).click(locator.btnAgregarPrimerProd);
    },

    async ValidacionMsjProdAdd(){
        I.retry(wait).say("Se validará que haya aparecido el popup de Producto Agregado");
        await I.retry(wait).seeElement(locator.popupAgregado);
    },

    ValidacionCantCarrito(){
        I.retry(wait).say("Se validará que la cantidad mostrada en el carrito corresponde a la cantidad de productos agregados.")
        var lblCantProd=I.grabTextFrom(locator.lblCantProd);
        if(intCantAgregar==parseInt(lblCantProd)){
            I.retry(wait).say("Flujo correcto: cantidades coinciden.");
        }else{
            I.retry(wait).say("Flujo incorrecto: cantidades no coinciden.")
        }
    }
}
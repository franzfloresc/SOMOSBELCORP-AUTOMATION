const I = actor();
let wait = { retries: 2, minTimeout: 2000 };
const config= require('./Palancas.locator')
let locator=config.locator; 
var intCantAgregar=3;

module.exports = {

    Constructor(){
        this.locator=config.locator; 
    },
   
    IrLandingGanaMas(){
        I.say("Validación inicial del botón GanaMas");
        I.seeElement(locator.btnGanaMas);
        I.retry(wait).click(locator.btnGanaMas);
    },

    async ValidacionLandingGanaMas(){
        I.say("Validación inicial del landing GanaMas");
        await I.seeElement(locator.btnGanaMasInicio);
    },

    AgregarVariosProductos(){
        for(i=1; i<intCantAgregar; i++){
            this.AgregarUnProducto();
            this.ValidacionMsjProdAdd();
            //Agregar wait???
        }
    },

    async AgregarUnProducto(){
        I.say("Se agregará el primer producto de la palanca ShowRoom");
        await I.click(locator.palancaShowRoom.listBtnAgregalo[0]);
    },

    async ValidacionMsjProdAdd(){
        I.say("Se validará que haya aparecido el popup de Producto Agregado");
        await I.seeElement(locator.popupAgregado);
    },

    ValidacionCantCarrito(){
        I.say("Se validará que la cantidad mostrada en el carrito corresponde a la cantidad de productos agregados.")
        var lblCantProd=I.grabTextFrom(locator.lblCantProd);
        if(intCantAgregar==parseInt(lblCantProd)){
            I.say("Flujo correcto: cantidades coinciden.");
        }else{
            I.say("Flujo incorrecto: cantidades no coinciden.")
        }
    }
}
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
        //I.retry(wait).say("Validación inicial del botón GanaMas");
        
        pause();
        (async()=>{
            //await I.seeElement(locator.btnGanaMas);
            await I.retry(wait).click(locator.btnGanaMas);
        })();
        //pause();
    },

    ValidacionLandingGanaMas(){
        I.retry(wait).say("Validación inicial del landing GanaMas");
        I.retry(wait).seeElement(locator.btnGanaMasInicio);
        
    },

    AgregarVariosProductos(){
        for(i=1; i<intCantAgregar; i++){
            this.AgregarUnProducto();
            this.ValidacionMsjProdAdd();
            //Agregar wait???
        }
    },

    async AgregarUnProducto(){
        I.retry(wait).say("Se agregará el primer producto de la palanca ShowRoom");
        await I.retry(wait).click(locator.palancaShowRoom.listBtnAgregalo[0]);
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
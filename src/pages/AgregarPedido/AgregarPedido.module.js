const I = actor();
let wait = { retries: 5, minTimeout: 2000 };
const config= require('./AgregarPedido.locator')
let locator=config.locator; 
const assert = require('assert');


module.exports={

    

    SeleccionarOpcionGanamas(){
        I.retry(wait).click(locator.btn_ganamas);
    },
    SeleccionarBotonAgregar(){
 
        I.retry(wait).click(locator.btn_agregar);
    },

  async ValidarItemCarrito(cantidad){

    let cantidadGet = await I.grabTextFrom(locator.label_cantidad_pedido);
    console.log("CantidadObtenida-->",+cantidadGet);
    //console.log(cantidad)
  
    assert.equal(cantidadGet,cantidad);
  }

    

}

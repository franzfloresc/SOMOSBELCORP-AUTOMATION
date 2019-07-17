config = {
   locator: {      
       //btn_ganamas:{xpath:"//*[@id=\"lnk-pri-ofertas\"]/img"},
       //btn_agregar:{xpath :"//*[@id=\"carrusel-simple-opt\"]/div/div/div/div[1]/div/div[4]/div[1]/a"},
       //label_cantidad_pedido:{id:"pCantidadProductosPedido"}
       btnGanaMas:{xpath:"//a[@id='lnk-pri-ofertas']/img"},// está ok
       btnGanaMasInicio:{xpath:"//a[@title='Inicio']"},
       popupAgregado:{xpath:"//div[text()='¡Listo! Agregaste con éxito a tu pedido.']"},
       lblCantProd:{xpath:"//a/p[@id='pCantidadProductosPedido']"},
       btnAgregarPrimerProd:{xpath:"(//a[contains(text(),'AGRÉGALO')])[1]"},
       lblCarritoCompras:{xpath:"//div[@class='campana cart_compras visibilidadEnlaceMenu']"},
       lblContenedorItems:{xpath:"//div[@id='carrito_items']"}

    }
}
module.exports.config=config;
module.exports.locator=config.locator
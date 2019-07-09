config = {
   locator: {      
       btn_ganamas:{xpath:"//*[@id=\"lnk-pri-ofertas\"]/img"},
       
       btn_agregar:{xpath :"//*[@id=\"carrusel-simple-opt\"]/div/div/div/div[1]/div/div[4]/div[1]/a"},
       
       label_cantidad_pedido:{id:"pCantidadProductosPedido"}
   }
}
module.exports.config=config;
module.exports.locator=config.locator

config = {
    locator: {

        //Page Palancas

        btnGanaMas:{xpath:"//a[@id='lnk-pri-ofertas']/img"},// está ok
        btnGanaMasInicio:{xpath:"//a[@title='Inicio']"},
        popupAgregado:{xpath:"//div[text()='¡Listo! Agregaste con éxito a tu pedido.']"},
        lblCantProd:{xpath:"//a/p[@id='pCantidadProductosPedido']"},
        btnAgregarPrimerProd:{xpath:"(//a[contains(text(),'AGRÉGALO')])[1]"},

        seccionPalanca:{
            showRoom:{xpath:"//div[@data-seccion='SR']"},
            masGanadoras:{xpath:"//div[@data-seccion='MG']"},
            loNuevo:{xpath:"//div[@data-seccion='LAN']"},
            ofertaDia:{xpath:"//div[@data-seccion='ODD']"},
            ofertaParaTi:{xpath:"//div[@data-seccion='RD']"},
            herramientaVenta:{xpath:"//div[@data-seccion='HV']"}
        },
        palancaShowRoom:{
            seccion:{xpath:"//div[@data-seccion='SR']"},
            btnVerMas:{xpath:"//div[@data-seccion-vermas='SR']"},
            listProductos:{xpath:"//div[@data-seccion='SR']//div[@data-item]"},
            listBtnAgregalo:{xpath:"//div[@data-seccion='SR']//div[@data-item]//a[contains(text(),'AGRÉGALO')]"}
        },
        palancaMasGana:{
            seccion:{xpath:"//div[@data-seccion='MG']"},
            btnVerMas:{xpath:"//div[@data-seccion-vermas='MG']"},
            listProductos:{xpath:"//div[@data-seccion='MG']//div[@data-item]"},
            listBtnAgregalo:{xpath:"//div[@data-seccion='MG']//div[@data-item]//a[contains(text(),'AGRÉGALO')]"}
        },
        palancaLoNuevo:{
            seccion:{xpath:"//div[@data-seccion='LAN']"},
            listProductos:{xpath:"//div[@data-seccion='LAN']//div[@role='listbox']/div[@data-item]"},
            listBtnVerProducto:{xpath:"//div[@data-seccion='LAN']//div[@role='listbox']/div[@data-item]//a[text()='VER PRODUCTO']"}
        }
    }
  }
  
  module.exports.config=config;
  module.exports.locator=config.locator;
  
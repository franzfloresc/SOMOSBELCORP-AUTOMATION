
config = {
    locator: {

        //Page Login
        listPais:{xpath:"//select[@id='ddlPais']"},
        fieldUsuario:{xpath:"//input[@id='txtUsuario']"},
        fieldContrasenia:{xpath:"//input[@id='txtContrasenia']"},
        btnLogin:{xpath:"//input[@id='btnLogin']"},
        btnLoginFB:{xpath:"//select[@id='ddlPais']"},
        popupShowRoom:{xpath:"//div[@class='saludo_consultora_showroom']"},
        btnCerrarPopupSR:{xpath:'//*[@id="PopShowroomVenta"]/div/a'}
    }
  }
  
  module.exports.config=config;
  module.exports.locator=config.locator;
  
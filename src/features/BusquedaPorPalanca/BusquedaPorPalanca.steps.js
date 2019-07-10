const Login = require('../../pages/Login/Login.module')
const Palancas=require('../../pages/Palancas/Palancas.module')

Given('Ingreso el {string} mi {string} y mi {string}', function (Pais, Usuario, Password) {
    Login.Constructor();
    Login.LoginPage(Pais, Usuario, Password);
    //pause();
    Login.SiPopUp_Cerrar();
});

When('Ingreso al landingPage de la palanca {string}', function(Palanca){
    Palancas.Constructor();
    Palancas.IrLandingGanaMas();
    //pause();
    Palancas.ValidacionLandingGanaMas();
    //Palancas.AgregarVariosProductos();
    //Palancas.ValidacionCantCarrito();
});

When('Elijo un producto según su {string} e ingreso a su detalle', function(CUV){

});

When('Verifico que me encuentro en la hoja detalle del {string}', function(CUV){

});

Then('Doy click en agregar producto', function(){
    //modulo.ValidarBotonAgregalo();
    //login.CerrarSesion();
});

Then('Voy al carrito de compras', function(){
  
});

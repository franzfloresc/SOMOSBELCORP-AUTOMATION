const BusquedaPorPalanca = require('../../pages/Login/Login.module')

Given('Ingreso el {string} mi {string} y mi {string}', function (Pais, Usuario, Password) {
    BusquedaPorPalanca.Constructor();
    BusquedaPorPalanca.LoginPage(Pais, Usuario, Password);
    BusquedaPorPalanca.SiPopUp_Cerrar();
});

When('Ingreso al landingPage de la palanca {string}', function(Palanca){
    //modulo.BuscarProducto(Producto);
    
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

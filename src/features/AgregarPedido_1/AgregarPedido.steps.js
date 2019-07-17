const login=require('../../pages/Login/Login.module')
//const Palancas=require('../../pages/Palancas/Palancas.module')
const AgregarPedido=require('../../pages/AgregarPedido/AgregarPedido.module')

Given('Ingreso el {string} mi usuario {string} y mi {string}', function (Pais, Usuario, Password) {
    
    login.Constructor();
    this.Pais=Pais;
    this.Usuario=Usuario;
    this.Password=Password;
    login.LoginPage(this.Pais,this.Usuario,this.Password)
  });

Given('Si se muestra el popup deberia cerrarse',async function(){
    await login.SiPopUp_Cerrar();
});

Given('Selecciona la seccion dorada de gana mas',async function(){
    AgregarPedido.Constructor();
    await AgregarPedido.IrLandingGanaMas();
    AgregarPedido.ValidacionLandingGanaMas();
});

When('Selecciona uno o varios productos' ,function(){
    //await AgregarPedido.AgregarVariosProductos(cantidad);
});

Then('Agregara {int} producto',async function(cantidad){
    await AgregarPedido.AgregarVariosProductos(cantidad);
});

Then('Visualizar el popup de confirmacion de agregado',function(){});
Then('Visualizar el check de agregado en la oferta',function(){});
When('Ingresa al carrito',function(){});

Then('Verificara que se haya agregado el producto al carrito la {int}',async function(cantidad){
    await AgregarPedido.ValidacionCantCarrito(cantidad);
});

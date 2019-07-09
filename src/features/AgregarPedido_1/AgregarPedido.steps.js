const login=require('../../pages/Login/Login.module')
const AgregarGANAMAS=require('../../pages/AgregarPedido/AgregarPedido.module')

Given('Ingreso el {string} mi usuario {string} y mi {string}', async function (Pais, Usuario, Password) {
    
    login.Constructor();
    this.Pais=Pais;
    this.Usuario=Usuario;
    this.Password=Password;
    login.LoginPage(this.Pais,this.Usuario,this.Password)
  });

Given('Si se muestra el popup deberia cerrarse',async function(){
    await login.SiPopUp_Cerrar();
});

Given('Selecciona la seccion dorada de gana mas',function(){
    AgregarGANAMAS.SeleccionarOpcionGanamas();

});

When('Selecciona un producto' ,function(){
    AgregarGANAMAS.SeleccionarBotonAgregar();
});
Then('Agregara un producto',function(){});
Then('Visualizar el popup de confirmacion de agregado',function(){});
Then('Visualizar el check de agregado en la oferta',function(){});
When('Ingresa al carrito',function(){});
Then('Verificara que se haya agregado el producto al carrito la {int}',async function(cantidad){
    await AgregarGANAMAS.ValidarItemCarrito(cantidad);
});

const I = actor();
let wait = { retries: 2, minTimeout: 2000 };
const config= require('./Login.locator')
let locator=config.locator; 

module.exports = {

    Constructor(){
        I.retry(wait).amOnPage('/');
        this.locator=config.locator; 
    },
   
    LoginPage(Pais, Usuario, Password){
        this.ValidacionInicialLogin();
        this.IngresarCredenciales(Pais, Usuario, Password);
        this.ClickBotonLogin();
        this.ValidacionFinalLogin();
    },

    ValidacionInicialLogin(){
        I.say('Validación inicial antes del Login');
        I.see('¡Bienvenida');
        I.seeElement(locator.listPais);
        I.seeElement(locator.fieldUsuario);
        I.seeElement(locator.fieldContrasenia);
        I.seeElement(locator.btnLogin);
        I.seeElement(locator.btnLoginFB);
    },

    /**
     * Método que setea el país y las credenciales de la consultora
     * @param {*} Pais 
     * @param {*} Usuario 
     * @param {*} Password 
     */
    IngresarCredenciales(Pais, Usuario, Password){
        I.say('Ingresando las credenciales para el Login');
        I.selectOption(locator.listPais, Pais);
        I.fillField(locator.fieldUsuario, Usuario);
        I.fillField(locator.fieldContrasenia, Password);
    },

    ClickBotonLogin(){
        I.say('Dando click al botón Login');
        I.click(locator.btnLogin);
    },

    ValidacionFinalLogin(){
        I.say('Validando que nos encontramos en la ventana de bienvenida')
        I.seeInCurrentUrl('/Bienvenida');
    },

    SiPopUp_Cerrar(){
        I.seeElement(locator.btnCerrarPopupSR);

        (async()=>{
            await I.click(locator.btnCerrarPopupSR);
        })();

        /*
        const popup=await within('#PopShowroomVenta', ()=>{
            return I.grabTextFrom({css:'div.saludo_consultora_showroom'});
        });

        if(I.see(popup)){
            I.click(locator.btnCerrarPopupSR);
        }

        I.seeElement('#PopShowroomVenta')*/
       
    }
}
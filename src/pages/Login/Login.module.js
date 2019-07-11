const I = actor();
let wait = { retries: 5, minTimeout: 2000 };
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
        I.retry(wait).say('Validación inicial antes del Login');
        I.retry(wait).see('¡Bienvenida');
        I.retry(wait).seeElement(locator.listPais);
        I.retry(wait).seeElement(locator.fieldUsuario);
        I.retry(wait).seeElement(locator.fieldContrasenia);
        I.retry(wait).seeElement(locator.btnLogin);
        I.retry(wait).seeElement(locator.btnLoginFB);
    },

    /**
     * Método que setea el país y las credenciales de la consultora
     * @param {*} Pais 
     * @param {*} Usuario 
     * @param {*} Password 
     */
    IngresarCredenciales(Pais, Usuario, Password){
        I.retry(wait).say('Ingresando las credenciales para el Login');
        I.retry(wait).selectOption(locator.listPais, Pais);
        I.retry(wait).fillField(locator.fieldUsuario, Usuario);
        I.retry(wait).fillField(locator.fieldContrasenia, Password);
    },

    ClickBotonLogin(){
        I.retry(wait).say('Dando click al botón Login');
        I.retry(wait).click(locator.btnLogin);
    },

    ValidacionFinalLogin(){
        I.retry(wait).say('Validando que nos encontramos en la ventana de bienvenida')
        I.retry(wait).seeInCurrentUrl('/Bienvenida');
    },

    async SiPopUp_Cerrar(){
        I.retry(wait).waitForElement(locator.btnCerrarPopupSR);
        const popup=await within('#PopShowroomVenta', ()=>{
            return I.grabTextFrom({css:'div.saludo_consultora_showroom'});
        });

        if(I.see(popup)){
            I.retry(wait).click(locator.btnCerrarPopupSR);
        }
    }
}
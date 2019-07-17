Feature:  Agregar pedido desde gana mas
Como Consultora Suscrita Activa quiero agregar pedidos desde la seccion dorada de gana mas 
para agregar mas ofertas.

@AgregarPedido_gana+
Scenario Outline: Agregar pedido desde gana mas
Given Ingreso el "<Pais>" mi usuario "<Usuario>" y mi "<Password>"
And Si se muestra el popup deberia cerrarse
When Selecciona la seccion dorada de gana mas
When Selecciona uno o varios productos
Then Agregara <Cantidad> producto
And Visualizar el popup de confirmacion de agregado
And Visualizar el check de agregado en la oferta
When Ingresa al carrito
Then Verificara que se haya agregado el producto al carrito la <Cantidad>

Examples:
| Pais | Usuario   | Password | Cantidad |
| PE   | 008424152 | 07635789 | 4        |
#| PE |038978802| 1 | 7 |

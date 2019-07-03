Feature: Reservar un pedido
  Como consultora quiero añadir productos a mi carrito de commpra desde diferentes palancas y reservar mi pedido.
   
@BusquedaPorPalanca
Scenario Outline:  Añadir productos de la palanca Ofertas Para Ti al carrito
    Given Ingreso el "<Pais>" mi "<Usuario>" y mi "<Password>"
    When Ingreso al landingPage de la palanca "<Palanca>"
    When Elijo un producto según su "<CUV>" e ingreso a su detalle
    When Verifico que me encuentro en la hoja detalle del "<CUV>"
    Then Doy click en agregar producto
    Then Voy al carrito de compras


Examples:
    |Pais   | Usuario       | Password      |Palanca        |  CUV |
    |PE     | 000771570     | 1             | OPT           |      |
    #|PE     | 008424152     | 07635789      | OPT           |      |
    #|PE     | 008424152     | 07635789      | SR            |      |


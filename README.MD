Desafío - Roommates

Descripción
Es bien sabido que entre las mejores recomendaciones que un programador amateur puede
recibir para mejorar sus habilidades es “crear aplicaciones”, sin darle tanta importancia a la
temática a elaborar, sino que solo basta con un problema para desarrollar una solución digital.
En esta prueba deberás crear un servidor con Node que sirva una interfaz HTML que tendrás
a disposición en el Apoyo Desafío - Roommates y cuya temática está basada en el registro
de gastos entre roommates.
Además deberás servir una API REST que permita hacer lo siguiente:

_ 1
www.desafiolatam.com
Desafío - Roommates
● Para realizar esta prueba debes haber estudiado previamente todo el material
disponible en el LMS correspondiente al módulo.
● Una vez terminada la prueba, comprime la carpeta que contiene el desarrollo de los
requerimientos solicitados y sube el .zip en el LMS.
● Puntaje total: 10 puntos
● Desarrollo prueba:
○ La prueba se debe resolver de manera Individual
○ Para la realización de la prueba necesitarás el archivo disponible en el LMS
llamado Apoyo Desafío - Roommates.
Descripción
Es bien sabido que entre las mejores recomendaciones que un programador amateur puede
recibir para mejorar sus habilidades es “crear aplicaciones”, sin darle tanta importancia a la
temática a elaborar, sino que solo basta con un problema para desarrollar una solución digital.
En esta prueba deberás crear un servidor con Node que sirva una interfaz HTML que tendrás
a disposición en el Apoyo Desafío - Roommates y cuya temática está basada en el registro
de gastos entre roommates.
Además deberás servir una API REST que permita hacer lo siguiente:
● Almacenar roommates nuevos ocupando random user.
● Devolver todos los roommates almacenados.
● Registrar nuevos gastos.
● Devolver el historial de gastos registrados.
● Modificar la información correspondiente a un gasto.
● Eliminar gastos del historial.

Rutas que debes crear en tu servidor:
● / GET: Debe devolver el documento HTML disponible en el apoyo.
● /roommate POST: Almacena un nuevo roommate ocupando random user.
● /roommate GET: Devuelve todos los roommates almacenados.
● /gastos GET: Devuelve el historial con todos los gastos registrados.
● /gasto PUT: Edita los datos de un gasto.
● /gasto DELETE: Elimina un gasto del historial.
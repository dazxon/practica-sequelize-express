# Repaso Express / Sequelize

+++ con thunder client o postman testear +++

antes que nada, parados sobre nuestra carpeta vamos a:

- Crear una base de datos con el nombre que desee
- Npm install (dependencias correspondientes)
- Npm start

recorramos brevemente el proyecto

- Tenemos nuestro archivo server.js donde vamos a estar creando la configuracion inicial del servidor
- Tenemos nuestro carpeta db donde vamos a estar creando la configuracion de nuestra base de datos con sequelize y PSQL
- Una carpeta utils con un archivo seed que tiene objetos con propiedades para agregarlas a nuestra DB
- Una carpeta routes que tiene dos archivos, un index que va a llamar al archivo libros, y en este archivo libros vamos a crear nuestras rutas
- la carpeta models con el archivo libros.js donde tenemos que crear nuestro modelo con los campos:
  titulo: string,
  autor: string,
  ventas: biginit

Ahora si! empecemos!

# GET, POST y DELETE

No olvides que deben regresar algo, en el caso del metodo post y delete regresar el libro creado o eliminado correspondientemente.

# UPDATEAR UN LIBRO

ruta de update (deberia updatear cualquier campo pasado por req.body)

# ENCONTRAR TODOS LOS LIBROS QUE EMPICEN CON LA LETRA...

para esta parte del ejecercicio nos vamos a parar en la carpeta models y vamos a crear un metodo de clase donde nosotros podamos pasarle una letra y nos devuelva todos los libros que el titulo empiece con esa letra (pista: hay operadores de sequelize que podrian ayudarte ;)

una vez hecho el metodo de clase vamos a volver a nuestras rutas y crear una ruta para que ejecutemos el metodo de clase que acabamos de hacer y veamos el resultado!

# ENCONTRAR OTROS LIBROS DEL MISMO AUTOR

para esto vamos a hacer un metodo de instancia que se fije de buscar todos los libros que tengan el mismo autor que el que tiene esa instancia

# HOOK EXTRA CREDIT

añade al modelo un hook que si la cantidad de ventas es mayor a 30000 al campo titulo se le añada el string best seller


# PH Man 

## Requerimientos
+ Docker
+ Docker-Compose

## Instalacion y Configuracion
+ Correr los container
```sh
docker-compose up -d
```
- *localhost:3000*  Server Node,
- *localhost: 5630*  Postgres,
- *localhost: 5050*  PgAdmin4

+ Configurar PgAdmin4
    Añadir un nuevo servidor
![Añadir un nuevo servidor](https://res.cloudinary.com/wevycep/image/upload/v1550502321/ph-man/pgadmin-config-container/postgres.png)
+ Configurar los parametros del server
    parametros servidor name
    ![parametros servidor name](https://res.cloudinary.com/wevycep/image/upload/v1550503989/ph-man/pgadmin-config-container/postgres2.png)
    parametros servidor
    ![parametros servidor](https://res.cloudinary.com/wevycep/image/upload/v1550503989/ph-man/pgadmin-config-container/postgres3.png)

## Descripción

  

## Contenido
Los modelos y controladores se agruparan por subproyecto ( Ejemplo: los modelos que estan en la carpeta **core** les perteneceran al grupo de Pedro y el Cacha,  que tambien pueden ser utilizados por otros subproyectos, asi que deben ser exportables; la carpeta **controlacceso** contendra los modelos del grupo de Ariel y Nilson. Asi con los demas)
  

## Sequelize

**NOTA:** testeando el orm me doy cuenta que tambien puede crear el SQL a partir de los modelos que se tengas ejecutando un "CREATE TABLE IF NOT EXISTS", otra cosa convierte los nombres de las tablas en plural.
![enter image description here](http://i38.photobucket.com/albums/e131/ArielJose55/Untitled_zpsdhkjfrbx.jpg)
Y si el nombre de la tabla está en singular, el orm no reconocera la tabla y creara otra en plural:
![enter image description here](http://i38.photobucket.com/albums/e131/ArielJose55/Untitled_zpsmvpew6t1.jpg)
La solucion es agregar una tag llamado tableName con valor del nombre de la tabla en singular, debajo de la deficion de los atributos del modelo:
![enter image description here](http://i38.photobucket.com/albums/e131/ArielJose55/Untitled_zpsiqtw1ahn.jpg)

**RECOMENDACION:** git-flow: Rama en la que estoy trabajando: feature/s-login



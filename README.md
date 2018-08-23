
# PH Man

  

## Descripcion

  

## Contenido
Los modelos y controladores se agruparan por subproyecto ( Ejemplo: los modelos que estan en la carpeta **core** les perteneceran al grupo de Pedro y el Cacha,  que tambien pueden ser utilizados por otros subproyectos, asi que deben ser exportables; la carpeta **controlacceso** contendra los modelos del grupo de Ariel y Nilson. Asi con los demas)
  

## Sequelize

Nota: testeando el orm me doy cuenta que tambien puede crear el SQL a partir de los modelos que se tengas ejecutando un "CREATE TABLE IF NOT EXISTS", otra cosa convierte los nombres de las tablas en plural.
![enter image description here](http://i38.photobucket.com/albums/e131/ArielJose55/Untitled_zpsdhkjfrbx.jpg)
Y si el nombre de la tabla está en singular, el orm no reconocera la tabla y creara otra en plural:
![enter image description here](http://i38.photobucket.com/albums/e131/ArielJose55/Untitled_zpsmvpew6t1.jpg)
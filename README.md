
# PH Man 

  

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

**RECOMENDACION:** Colocar el nombre de la tablas en singular y sin la notacion CamelCase, sino separar las palabras con guiones de piso, los mismo para los nombres de las columnas y para las llaves foreneas colocarle el mismo nombre de la lleve primaria de la tabla que hace referencia y al final colocar '_fk'. ejemplo: *id_persona_natural_fk*
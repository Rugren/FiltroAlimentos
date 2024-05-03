# FiltroAlimentos
 Creación de un filtro que ordena de menor a mayor (y viceversa) números y palabras. En este caso por nombre de Alimentos y por número de Calorías, Glúcidos (Carbohidratos) y Proteínas.

Además de por orden alfabético las letras o palabras (de A-Z y Z-A) del nombre de los productos que contienen estas calorías, grasas, etc.

Solo se podrá probar un filtro a la vez, no varios filtros de filtros realizados.

Proyecto **FiltroAlimentos**, realizado en Angular

- 1º Para abrir este proyecto debemos tener instalado Angular en nuestro programa editor de código (Ya sea VisualStudioCode o el que utilicemos para correr el programa).
Para instalar Angular poner comando (en la consola de Windows; Windws + R): npm install -g @angular/cli

- 2º Luego ejecutar en la consola de comandos la cd + La ruta de la carpeta dónde descarguemos el proyecto. 
[ Anteriormente ya creamos el proyecto de esta manera: 
2.1º Comando: ng new FiltroAlimentos --standalone=false
2.2º Después elegimos "CSS".
2.3º Y en "SSG/Prerendering" elegimos: "No". (Normalmente elegimos "Yes")
]

- 3º Ejecutar comando en la consola para abrirlo en nuestro servidor local: ng serve -o

[ Cosas creadas necesarias para el funcionamiento: 
- Ya creamos un componente llamado "filtros"
- Instalamos material de Angular (Con comando: npm install @angular/material @angular/cdk) para que funcione (el LiveAnnouncer, MatSort, MatTableDataSource, Sort).
]

<hr>
Documentación de ejemplo:
https://material.angular.io/components/sort/overview
/*
AUTH
post
localhost:8080/auth/login
post
localhost:8080/auth/signin
*/

/*
CROPS
get   post   put   delete
localhost:8080/crops
*/

/*
MACHINES
get   post   put   delete
localhost:8080/machines

put
localhost:8080/machines/assign
    "serial_number": "ZAzZZAZZZZ",//numero de serie de la maquina
    "status": "inactive",//status de la maquina
    "model": "H86179",//modelo de la maquina
    "id_user":"5bea3ba9c9f6ad0b03d8d34c"//id del usuario al que se le asignara

put
localhost:8080/machines/unassign
*/

/*
PLANTS
get   post   put   delete
localhost:8080/plants
*/

/*
USUARIOS
get   post   put   delete
localhost:8080/users
*/


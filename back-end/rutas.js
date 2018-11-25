/* *************************************************************
AUTH
post---------------------------------------------------------
localhost:8080/auth/login
{
    "email":"vamonos@hotmail.com",
    "password":"vamos123"
}

post---------------------------------------------------------
localhost:8080/auth/signin
{
				"name": "test",
                "lastName": "test",
                "email": "test@outlook.com11",
                "userName": "test11",
                "password":"datoextra",
                "serial_number":"AAzZZAZZZZ", //of the machine 
                "model":"H86173" //of the machine
}
************************************************************* */



/* *************************************************************
CROPS
get   
post ---------------------------------------------------------
{
                "plantAmount": 8,
                "cropTime": "summer",
                "wheader": "hot",
                "date": "2012-11-12T06:00:00.000Z",
                "cropStatus": "a vientos",
                "id_user": "5be8f31ce6ab151b50fae983",
                "id_plant":"5be8f31ce6ab151b50fae983",
                "id_machine": "5be8f31ce6ab151b50fae983"
}

post -------------localhost:8080/crops/find---------------------
{
                "_id":"5bfa43fd4b125405d9f29d0f",
				"userName":"EdwinDev"
}

put  ---------------------------------------------------------
{
                "_id": "5bfa3c78b66e17035dc0ac9e",
				"plantAmount": 6,
                "cropTime": "summer",
                "wheader": "hot",
                "date": "2012-11-12T06:00:00.000Z",
                "cropStatus": "a vientos",
                "id_user": "5be8f31ce6ab151b50fae983",
                "id_plant":"5be8f31ce6ab151b50fae983",
                "id_machine": "5be8f31ce6ab151b50fae983"
}

delete  ---------------------------------------------------------
{
    "_id": "5bfa3c78b66e17035dc0ac9e"
}
localhost:8080/crops
************************************************************* */



/* *************************************************************
MACHINES
get   post   put   delete
localhost:8080/machines



put  ---------------------------------------------------------
localhost:8080/machines/assign
    "serial_number": "ZAzZZAZZZZ",          //numero de serie de la maquina
    "status": "inactive",                   //status de la maquina
    "model": "H86179",                      //modelo de la maquina
    "id_user":"5bea3ba9c9f6ad0b03d8d34c"    //id del usuario al que se le asignara

put  ---------------------------------------------------------
localhost:8080/machines/unassign
************************************************************* */



/* *************************************************************
PLANTS
get
{

}

post  ---------------------------------------------------------
{

}

put  ---------------------------------------------------------
{

}

delete  ---------------------------------------------------------
{
    
}
localhost:8080/plants
************************************************************* */



/* *************************************************************
USUARIOS
get
{

}

post  ---------------------------------------------------------
{

}   

put  ---------------------------------------------------------
{

}

delete  ---------------------------------------------------------
{

}
localhost:8080/users
************************************************************* */


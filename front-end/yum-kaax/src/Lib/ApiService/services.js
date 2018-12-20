import apiFetch from './apiFetch'

export function signup(data){
    return apiFetch('/auth/signup',{
        method: 'POST',
        headers: {
        'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    });
}

export function login(data){
    return apiFetch('/auth/login',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    });
}

export function getCrops(token){
    return apiFetch('/crops',{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'authorization':token
        }
    });
}

export function findUserCrops(token,data){
    return apiFetch('/crops/find',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'authorization':token
        },
        body: JSON.stringify(data)
    });
}

export function CreateCrops(token,data){
    return apiFetch('/crops',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'authorization':token
        },
        body: JSON.stringify(data)
    });
}

export function CreateAssignCrop(token,data){
    return apiFetch('/crops/create',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'authorization':token
        },
        body: JSON.stringify(data)
    });
}

export function machinesAssign(token,data){
    return apiFetch('/machines/assign',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'authorization':token
        },
        body: JSON.stringify(data)
    });
}

export function updateCrop(token,data){
    return apiFetch('/crops',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'authorization':token
        },
        body: JSON.stringify(data)
    });
}

export function getMachines(token){
    return apiFetch('/machines',{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'authorization':token
        }
    });
}

export function unassignMachine(token,data){
    return apiFetch('/machines/unassign',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'authorization':token
        },
        body: JSON.stringify(data)
    });
}

export function createMachine(token,data){
    return apiFetch('/machines',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'authorization':token
        },
        body: JSON.stringify(data)
    });
}

export function updateMachine(token,data){
    return apiFetch('/machines',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'authorization':token
        },
        body: JSON.stringify(data)
    });
}

export function getPlants(token){
    return apiFetch('/plants',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'authorization':token
        }
    });
}

export function createPlant(token,data){
    return apiFetch('/plants',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'authorization':token
        },
        body: JSON.stringify(data)
    });
}

export function updatePlant(token,data){
    return apiFetch('/plants',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'authorization':token
        },
        body: JSON.stringify(data)
    });
}

export function getUsers(token) {
    return apiFetch('/users', {
         method: 'GET',
         headers: {
         'Content-Type':'application/json',
         'authorization':token
         }
     });
 }

 export function createUser(token,data){
     return apiFetch('/users',{
        method: 'POST',
        headers: {
        'Content-Type':'application/json',
        'authorization':token
        },
        body: JSON.stringify(data)
     });
 }

 export function updateUser(token,data){
    return apiFetch('/users',{
        method: 'PUT',
        headers: {
        'Content-Type':'application/json',
        'authorization':token
        },
        body: JSON.stringify(data)
    });
 }

 export function DashBoardInformationUser(token,data){
     return apiFetch('/users/userInfo',{
        method: 'PUT',
        headers: {
        'Content-Type':'application/json',
        'authorization':token
        },
        body: JSON.stringify(data)
     });
 }


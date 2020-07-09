
const credentials = [
    { user: 'Pedritobata', password: '123456' },
    { user: 'admin', password: '123456' },
]

export function authenticate(user, pass){
    for(let cred of credentials){
        if(cred.user === user && cred.password === pass){
            return true;
        }
    }

    return false;
}
//Sintaxe
function primeiraFuncao() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Esperou isso aqui!')
            resolve()
        }, 1000)
    })
}

async function segundaFuncao() {
    console.log('Iniciou')

    await primeiraFuncao()

    console.log('Terminou')
}

segundaFuncao()

//Pratico
function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err))
}

async function showUserName(id) {
    try{
        const user = await getUser(id) 

        console.log(`O nome do usúario é ${user.data.first_name}`)
    } catch (err){
        console.log(`err: ${err}`)
    }
}

showUserName(1)
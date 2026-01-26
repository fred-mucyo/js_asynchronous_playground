// // https://jsonplaceholder.typicode.com/todos/1


// fetch(' https://jsonplaceholder.typicode.com/todos/1')
// .then(
//     response => response.json()
// )

// .then(data => console.log(data))
// .catch(error => console.log(error))



//let use async and await 

async function letFet(){

    let res = await fetch('https://jsonplaceholder.typicode.com/')
    let data = await res.json()

    console.log(data)
}


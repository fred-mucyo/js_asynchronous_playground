// https://jsonplaceholder.typicode.com/todos/1





// fetch('https://jsonplaceholder.typicode.com/comments')

// .then(response => response.json())
// .then( data => console.log(data))
// .catch(err => console.log(err))


async function letfii() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users')

    let data = await res.json()
let v = data.filter( x => x.postId === 2)



    console.log(v)
}

letfii()
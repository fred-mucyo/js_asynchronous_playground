// https://jsonplaceholder.typicode.com/

async function getUsers(id){
    try{

 
    let first = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    let second = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)


    let users = await first.json()
    let posts = await second.json()

    let count = posts.length

let post = posts.map(data => {
    return {
        id : data.id,
        title : data.title
    }
})
    console.log({
    username :users.name,
    postCounts : count,
    post
    })


    }
    catch(err){
console.log(err)
    }
}

getUsers(1)
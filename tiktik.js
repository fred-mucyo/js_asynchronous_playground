// async function fetchIt(){
//   let url = 'https://jsonplaceholder.typicode.com/posts'
// const response = await fetch(url)
// const data = await response.json()
// console.log(data)

// }

// fetchIt()



async function postIt(){
  let url = 'https://jsonplaceholder.typicode.com/posts'
  let dataTo = {
    name : 'Mucyo fred',
    email: 'Mucyofred@gmail.com'
  }
  
  try {
  const toPost = await fetch(url,{
    method : 'POST',
  headers: {'Content-Type' : 'application/json'},
    body : JSON.stringify(dataTo)}) 
  
  if(!toPost.ok){
    throw new Error(`this is error,${toPost.status}`)  }
  
  let response = await toPost.json()
  console.log('success',response)
  }
  catch(error){
    console.log(error)
  }
    
  
}

postIt()


async function postingData(){
  const dataTo =  {
    "userId": 11,
    "id": 12,
    "title": "hello fred",
    "body": "mucyo fred"
  }
try{
  let url = 'https://jsonplaceholder.typicode.com/posts'

    let dataTosend = await fetch(url,{
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body : JSON.stringify(dataTo)})

    if(!dataTosend.ok){
        throw new Error(dataTosend.status)
    }

  
     let data = await dataTosend.json()   
     console.log('success',data)
    } catch (error) {
        console.log('hey we got error',error)
    }



}


postingData()





let c = {
  red : 'freed',
friend: 'king'
} 

console.log(c.red)
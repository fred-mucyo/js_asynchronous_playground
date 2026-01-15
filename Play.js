let text = ''

for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>"
;

}

  console.log(text)

// 1. function that takes the call back and then log it after 2 seconds

function hey(n1,n2,callback)
{let sum =  n1 * n2
callback(sum)
}

hey(2,4,mySum)

function mySum(fromHey){

    setTimeout(()=> console.log(fromHey*2),2000)
}

// write a program that changes the callback based function to promise based function




function functionBasedCallbacks(a, b, callbacko) {
  if (a * b > 9) {
    callbacko("it has 2 digits");
  } else {
    callbacko(new Error("it has single digit"));
  }
}

function promisifiedFunction(a, b) {
  return new Promise((resolve, reject) =>
    functionBasedCallbacks(a, b, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    }),
  );
}

promisifiedFunction(9, 4)
  .then((result) => console.log(result))

  .catch((error) => console.log(error));



  // function that make HTTP GET request
  
  
  function funcHttpreq(url){

    return new Promise((resolve,reject)=>{

fetch(url)
.then(response => {
    if(!response.ok){
        throw new Error('this is bad')
    }

    return response.json()

})

.then(data => resolve(data))
.catch(error => reject(error))

})



  }


  funcHttpreq('https://jsonplaceholder.typicode.com/todos/1')

  .then(data => console.log(data))
  .catch( error => console.log(error))



 

//  fetching data using async and await 



 async function fetchIt(){
    try{
        
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await response.json()
    console.log(data.title)

    } catch(error){

        console.log(error)

    }

   
 }

 fetchIt()


// sending HTTP POST using fetch


async function sendinPost(){

    const userdata =  {
    "userId": 11,
    "id": 12,
    "title": "hello fred",
    "body": "mucyo fred"
  }



    try {

       let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body:JSON.stringify(userdata) })

            if(!response.ok){ throw new Error(`error happened,${response.status}`)}

      let result = await response.json()

      console.log('success',result)
        
    } catch (error) {
        console.log(error)
    }
}

sendinPost()
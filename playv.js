

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














const legacyAPI = {
    login: (username, callback) => {
        console.log("🔑 Logging in...");
        setTimeout(() => callback(null, { userId: 42, user: username }), 1000);
    },
    getMovies: (userId, callback) => {
        console.log(`📂 Fetching movies for User ID: ${userId}...`);
        setTimeout(() => callback(null, ["Inception", "The Matrix", "Interstellar"]), 1000);
    },
    getShowtimes: (movieName, callback) => {
        console.log(`🕒 Getting showtimes for: ${movieName}...`);
        setTimeout(() => callback(null, ["7:00 PM", "9:30 PM", "11:00 PM"]), 1000);
    },
    bookTicket: (time, callback) => {
        console.log(`🎟️ Booking ticket for ${time}...`);
        setTimeout(() => callback(null, { success: true, seat: "F-14" }), 1000);
    }
};

legacyAPI.login("username", (error, loginData) => {
    if(error){
        console.error("Error:", error);
        return;
    }


    legacyAPI.getMovies(loginData.userId, (error, movies)=> {
        if(error){
            console.error("failed to fetch movie:", error);
        }

        const firstMovie = movies[0];
        legacyAPI.getShowtimes(firstMovie, (error, showtimes)=>{
            if(error){
                console.error("no showtimes found:", error);
            }
          

             const firstShowtime = showtimes[0];

             legacyAPI.bookTicket(firstShowtime, (error, bookingResult)=>{
                if(error){
                    console.error("failed to book:", error);
                }
                console.log(`🎉 Success! Booked seat ${bookingResult.seat} at ${firstShowtime}.`);
             })
        })
    })

})


// Step 2: The Instructions
// Write the implementation code below the API setup.

// You must call legacyAPI.login("YourName", ...) first.
// Inside that callback, call getMovies.
// Inside the movies callback, take the first movie from the array and call getShowtimes.
// Inside the showtimes callback, take the first time and call bookTicket.
// Final Output: Use console.log to print the final result: "Success! Booked seat [SEAT] at [TIME]."

// Step 3: Discussion Questions (The Mental Model)
// Once your code runs successfully and finishes after ~4 seconds, look at your screen and answer:

// The Shape: Does your code look like a staircase or a pyramid? This is the "Pyramid of Doom."
// The Brackets: Count how many }); you have stacked at the bottom of your code. How easy would it be to delete one by accident?
// Error Handling: If the login failed, where would you handle that error? What if you had to handle errors for every step?
// Implementation Tips
// Every function in legacyAPI takes a callback function as its second argument.
// The callback functions follow the "Error-First" pattern: (error, data) => { ... }.


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

legacyAPI.login('fred',(err,userData)=>{

legacyAPI.getMovies(userData.userId,(err,movie)=>

legacyAPI.getShowtimes(movie[0],(err,time)=> 
legacyAPI.bookTicket(time[0],(err,seat) =>
    console.log(`Success! Booked seat ${seat.seat} at ${time[0]}.`)
)))
}


)



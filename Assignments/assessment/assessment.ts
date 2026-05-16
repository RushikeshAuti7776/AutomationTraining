// Assessment Q1 Temperature of a city in degrees Celsius: 25.5
let degree: number = 25.5;
console.log(`Assessment Q1 Temperature of a city in degrees Celsius: ${degree}`)

// Assessment Q2 Whether a customer has placed an order: true or false
const i = 1 ;
const j = 5 ;
let result : string =(i >j) ? "true" : "false";

let order : boolean = true || false ;
console.log(`Assessment Q2 Whether a customer has placed an order:${order} or ${result}`);

// Assessment Q3 Person's phone number: "123-456-7890"
let number: string = "123-456-7890";
console.log(`Person's phone number: "${number}"`)

// Assessment Q4 Amount of money in a customer's bank account: 1000.50
console.log(`--------------------------------------------------`)
let money: number = 1000.50
console.log(`Amount of money in a customer's bank account: ${number}`)

// Assessment Q5 Person's email address: "john.doe@example.com"
console.log(`--------------------------------------------------`)

let email : string = "john.doe@example.com"
console.log(`Person's email address: "${email}"`)

// Assessment Q6 Coordinates of a location (latitude, longitude): 37.7749, -122.4194
console.log(`--------------------------------------------------`)
let latitude : number = 37.7749
let longitude : number = -122.4194
console.log(`Coordinates of a location (latitude, longitude): ${latitude}, ${longitude}`)

// Assessment Q7 Person's marital status: true or false
console.log(`--------------------------------------------------`)
let marital : boolean=true
let no_marital : boolean =false
console.log(`Person's marital status: ${marital},${no_marital}`)

// Assessment Q8 Person's occupation: "Software Engineer"
console.log(`--------------------------------------------------`)
let occupation : string="Software Engineer"
console.log(`Person's occupation:"${occupation}"`)

// Assessment Q9  Person's favourite colour: "Blue"
console.log(`--------------------------------------------------`)
let colour : string = "Blue"
console.log(`Person's favourite colour: "${colour}"`)

// Assessment Q10 Current year: 2023
console.log(`--------------------------------------------------`)
let today = new Date();
console.log(`today`)

// get time in IST
let options = { timeZone: 'Asia/Kolkata'};
//const date = today.toLocaleTimeString(options);
//console.log(date);

let year: number = 2023;
console.log(`Current year: ${number}`);

console.log(`---------------------------------------------------------------`);
// 11.Number of followers on a social media platform: 1,000,000

interface obj {
    followers : string 
}

let Number3 : obj = {
      followers : "1,000,000"
}

console.log(`Number of followers on a social media platform: "${Number3.followers}"`)

console.log(`---------------------------------------------------------------`);


// 12.Rating of a movie: 7.5
let Rating : [number] = [7.5]
console.log(`Rating of a movie: ${Rating}`);

console.log(`---------------------------------------------------------------`);


// 13.Person's blood type: 'A'
//let Assessment : Map<string,string> = new Map();
//Assessment.set("blood","A")

let bloodgroup : string = "A"

console.log(`Person's blood type: ${bloodgroup}`)

interface Assessment {
    Title : string 
    country : string
    color : string
    birthplace : string
    Numberemp : number
    Distance : number
    
}

let assv_alue : Assessment = {
     Title : "To Kill a Mockingbird",
     country : "United States",
     color : "Brown",
     birthplace : "New York City",
     Numberemp : 500,
     Distance : 200.5,
   
    
}

// 14.Title of a book: "To Kill a Mockingbird"
console.log(`Title of a book: "${assv_alue.Title}"`)
// 15.Number of employees in a company: 500
console.log(`Number of employees in a company:${assv_alue.Numberemp}`)
// 16.Time of an event: 2:30 PM
let time : string = "2:30"
console.log(`Time of an event:${time} PM`)
// 17.Name of a country: "United States"
console.log(`Name of a country:${assv_alue.country}`)
// 18.Person's eye color: "Brown"
console.log(`Person's eye color:${assv_alue.color}`)
// 19.Person's birthplace: "New York City"
console.log(`Person's birthplace: ${assv_alue.country}`)
// 20. Distance between two cities: 200.5
console.log(`Person's birthplace: ${assv_alue.Distance}`)

let raceNumber = Math.floor(Math.random() * 1000);
let earlyOrNot = false;
let age = 18;
if (earlyOrNot && age > 18 ){
  raceNumber += 1000
};
if (earlyOrNot && age > 18 ){
 console.log("You will race at 9:30 am and your race number is : " + raceNumber)
} else if(!earlyOrNot && age > 18 ){
  console.log("You will race at 11:00 am and your race number is : " + raceNumber)
} else if(earlyOrNot && age < 18 ) {
  console.log("You will race at 12:30 am and your race number is : "+ raceNumber)
}else {
  console.log("You must see the registration desk")
};



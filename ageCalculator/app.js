
function ageCalculator() {

  const userInput = document.getElementById("date").value;
  let chosenDate = new Date(userInput);
  console.log(chosenDate);
  let month_diff = Math.abs(Date.now() - chosenDate.getTime());

  // let age = new Date(month_diff);
  // let year = age.getUTCFullYear();
  let userAge = Math.floor(month_diff / (1000 * 60 * 60 * 24 * 365));

  return document.querySelector(".answer").innerHTML = "Your age is " + userAge + " years old."; 

}

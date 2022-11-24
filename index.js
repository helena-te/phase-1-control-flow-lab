function scuberGreetingForFeet(number){
  // Write your code here!
  if (number <= 400) {
   return('This one is on me!');
  }
  else if (number > 400 && number <=2000) {
   return('That will be twenty bucks.');
  }
  else if (number > 2000 && number <=2500) {
    return('I will gladly take your thirty bucks.');
  }
  else {
    return('No can do.');
  }
}
function ternaryCheckCity(city){
  // Write your code here!
  const msg = city === "NYC" ? "Ok, sounds good." : "No go.";
  return msg
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let charm;
  switch (tip) {
    case "generous":
      charm= "Thank you so much.";
      break;
    case 'not as generous':
      charm = "Thank you."
      break;
    default: 
      charm = "Bye."
      break;
      } 
    return charm;
}
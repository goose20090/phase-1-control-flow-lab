function scuberGreetingForFeet(requestIdleCallback){
  let greeting;
  if (requestIdleCallback<400){
    greeting = "This one is on me!";
  }
  else if (requestIdleCallback>=400, requestIdleCallback<2000){
    greeting = 'That will be twenty bucks.';
  }
  else if (requestIdleCallback>= 2000, requestIdleCallback<2500){
    greeting = 'I will gladly take your thirty bucks.'
  }
  else if (requestIdleCallback>= 2500){
    greeting = 'No can do.'
  }
  return greeting;
}

function ternaryCheckCity(city){
  return city === 'NYC'? "Ok, sounds good.": "No go.";
}

function switchOnCharmFromTip(tip){
    switch(tip){
      case 'generous':
        return 'Thank you so much.'
          break
      case 'not as generous':
        return 'Thank you.'
          break
      default:
        return 'Bye.'
    }
  
}
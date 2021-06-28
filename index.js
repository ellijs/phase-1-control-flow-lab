function scuberGreetingForFeet(distance) {
  // Write your code here!
  if (distance <= 400) {
    return "This one is on me!";
  } else if (2000 < distance && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  let result;
  city === "NYC" ? (result = "Ok, sounds good.") : (result = "No go.");
  return result;
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;

    case "not as generous":
      return "Thank you.";
      break;

    default:
      return "Bye.";
  }
}
scuberGreetingForFeet(199);
ternaryCheckCity("NYC");
switchOnCharmFromTip();

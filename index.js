// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let ride;
  if (distance <= 400) {
    ride = 'This one is on me!';
  } else if (distance > 2500) {
    ride = 'No can do.';
  } else {
  ride = 'I will gladly take your thirty bucks.';}
  return ride
}

function ternaryCheckCity(destination) {
  let response;
  if (!!destination = 'NYC') {
    response = 'Ok, sounds good.';
  } else {
    response = 'No go.';
}

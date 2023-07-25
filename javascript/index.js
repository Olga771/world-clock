function updateTime() {
  // Los Angeles
  //setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  /*losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
  "h:mm:ss"
)} <small>${losAngelesTime.format("A")}</small>`;*/
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Paris

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  /*losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
  "h:mm:ss"
)} <small>${losAngelesTime.format("A")}</small>`;*/
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);

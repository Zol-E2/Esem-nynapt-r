let eventName = document.getElementById("eventName");
let eventDate = document.getElementById("eventDate");
let eventTime = document.getElementById("eventTime");
let eventDesc = document.getElementById("eventDesc");
let events = document.getElementById("events");
let eventCounter = 1;
let button = document.getElementById("btnAdd");
button.addEventListener("click", addEvent);
let searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", search);

let eventsList = [];

function addEvent() {
  let newEvent = {
    name: eventName.value,
    date: eventName.value,
    time: eventTime.value,
    desc: eventDesc.value,
    id: eventCounter,
  };

  eventsList.push(newEvent);
  console.log(newEvent);
  eventCounter++;
  console.log(eventsList);
  displayEvents();
}

function displayEvents() {
  events.innerHTML = "";
  eventsList.forEach((element) => {
    let event = document.createElement("div");
    event.innerHTML = `<strong>${element.name}</strong><p>${element.date}</p><p>${element.time}</p><p>${element.desc}</p>`;
    events.appendChild(event);
  });
}

function search() {
  if (searchBar.value == "") {
    displayEvents();
  } else {
    events.innerHTML = "";
    eventsList.forEach((element) => {
      if (
        element.name.includes(searchBar.value) ||
        element.date.includes(searchBar.value)
      ) {
        let event = document.createElement("div");
        event.innerHTML = `<strong>${element.name}</strong><p>${element.date}</p><p>${element.time}</p><p>${element.desc}</p>`;
        events.appendChild(event);
      }
    });
  }
}

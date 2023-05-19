// Methods

function triggerEvent1() {
  var eventData = {
    eventName: "Click",
    eventTrigger: "Event 1",
  };
  window.parent.postMessage(eventData, "*");
  console.log("Event 1");
}

function triggerEvent2() {
  var eventData = {
    eventName: "Click",
    eventTrigger: "Event 2",
  };
  window.parent.postMessage(eventData, "*");
  console.log("Event 2");
}

// Tagging
var ClickEvent1 = document.getElementById("event1");
var ClickEvent2 = document.getElementById("event2");

//Listening
ClickEvent1.addEventListener("click", function () {
  triggerEvent1;
});

ClickEvent2.addEventListener("click", function () {
  triggerEvent2;
});

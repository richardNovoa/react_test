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

//Start
mixpanel.time_event("Time on Page");
let x = 1;
//End
document.addEventListener(`visibilitychange`, function () {
  if (document.visibilityState === "hidden") {
    mixpanel.set_config({ api_transport: "sendBeacon" });
    mixpanel.track("Time on Page", {
      counter: x,
    });
    mixpanel.people.set({ foo: "bar" });
    x++;
  } else if (document.visibilityState === "pagehide") {
    mixpanel.set_config({ api_transport: "sendBeacon" });
    mixpanel.track("Time on Page");
    mixpanel.people.set({ foo: "bar" });
  } else if (document.visibilityState === "visible") {
    mixpanel.time_event("Time on Page");
  }
});

//Start
mixpanel.time_event("Time on Page");
//End
document.addEventListener(`visibilitychange`, function () {
  if (document.visibilityState === "hidden") {
    mixpanel.set_config({ api_transport: "sendBeacon" });
    mixpanel.track("Time on Page", {
      source: iframeURL,
    });
  } else if (document.visibilityState === "pagehide") {
    mixpanel.set_config({ api_transport: "sendBeacon" });
    mixpanel.track("Time on Page");
    mixpanel.people.set({ foo: "bar" });
  } else if (document.visibilityState === "visible") {
    mixpanel.time_event("Time on Page");
  }
});

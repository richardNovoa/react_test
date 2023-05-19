window.addEventListener("message", function (event) {
  if (event.origin === "http://localhost:3000/") {
    var eventData = event.data;
    var iframeURL = eventData.iframeURL;

    //EVENTS

    //Start
    mixpanel.time_event("Time on Page");
    //End
    document.addEventListener(`visibilitychange`, function () {
      if (document.visibilityState === "hidden") {
        mixpanel.set_config({ api_transport: "sendBeacon" });
        mixpanel.track("Time on Page", {
          source: iframeURL,
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
  }
});

// Listen for the message sent by the child page
window.addEventListener("message", function (event) {
  if (event.origin === "https://www.novoa.design") {
    var eventData = event.data;
    //properties
    var eventName = eventData.eventName;
    var eventTrigger1 = eventData.eventTrigger;

    //build mixpanel tracking
    mixpanel.track(eventName, {
      enterprise: "",
      facility: "",
      isLGTV: true,
      pageName: "Lucid - Hearing Test - 5. Congratulations",
      pagePath: "Lucid - Hearing Test - 4. Assessment in progress",
      userAgent:
        "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 WebAppManager",
      userLang: "en",
      userSlug: "INDEPENDA-ID",
      eventTrigger: eventTrigger1,
    });

    console.log(eventTrigger1);
  }
});

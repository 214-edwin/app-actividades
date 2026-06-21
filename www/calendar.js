document.addEventListener("DOMContentLoaded", function () {

  const el = document.getElementById("calendar");

  const calendar = new FullCalendar.Calendar(el, {
    initialView: "dayGridMonth",
    locale: "es",
    height: 650,
    events: [
      {
        title: "Vacaciones Juan",
        start: "2026-05-05",
        end: "2026-05-10"
      }
    ]
  });

  calendar.render();

});
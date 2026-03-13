document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: "pt-br",
    timeFormat: "HH:mm",
    themeSystem: "bootstrap5",
    initialView: "timeGridWeek",
    validRange: {
      // Trocar a data do calendário aqui, é utilizado intervalo aberto
      start: "2025-09-28",
      end: "2025-10-04",
    },
    slotMinTime: "09:00:00",
    slotMaxTime: "20:00:00",
    googleCalendarApiKey: "AIzaSyAo0eHM7AxQS0v4HZ01CwXdvbq4h-_ZCS4",
    events: {
      googleCalendarId:
        "28516cb404c13f958c1b24a3e914b13efa359c71f39400b5ae457b0978b45838@group.calendar.google.com",
    },
    headerToolbar: {
      left: "prev,next",
      center: "title",
      right: "timeGridWeek,timeGridDay", // user can switch between the two
    },
    hiddenDays: [0, 6],
    buttonText: {
      today: "Hoje",
      month: "Mês",
      week: "Semana",
      day: "Dia",
      list: "Lista",
    },
    allDayText: "Dia inteiro",
    allDaySlot: false,
    eventClick: function (info) {
      // Prevent the default action (redirect to Google Calendar)
      info.jsEvent.preventDefault();

      // Populate the event details in the widget
      document.getElementById("section-title").innerHTML = info.event.title;
      document.getElementById("section-description").innerHTML =
        info.event.extendedProps.description || "No description";
      document.getElementById("section-location").innerHTML =
        info.event.extendedProps.location || "No location";
      document.getElementById("section-start").innerText =
        info.event.start.toLocaleString("pt-BR");
      document.getElementById("section-end").innerText = info.event.end
        ? info.event.end.toLocaleString("pt-BR")
        : "N/A";

      // Show the event details widget
      document.getElementById("eventModal").style.display = "block";

      // Create the Google Calendar event link
      var addToCalendarLink =
        "https://calendar.google.com/calendar/render?action=TEMPLATE" +
        "&text=" +
        encodeURIComponent(info.event.title) +
        "&dates=" +
        encodeURIComponent(formatDate(info.event.start)) +
        "/" +
        encodeURIComponent(formatDate(info.event.end)) +
        "&details=" +
        encodeURIComponent(info.event.extendedProps.description || "") +
        "&location=" +
        encodeURIComponent(info.event.extendedProps.location || "") +
        "&trp=false";

      // var addToCalendarLink = info.event.url;

      document.getElementById("add-to-calendar").href = addToCalendarLink;

      // Show the modal
      var eventModal = new bootstrap.Modal(
        document.getElementById("eventModal"),
      );
      eventModal.show();
    },
    slotLabelFormat: [
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      },
    ],
    displayEventTime: false,
  });

  calendar.render();

  // Helper function to format dates for Google Calendar link
  function formatDate(date) {
    return date.toISOString().replace(/-|:|\.\d\d\d/g, "");
  }
});

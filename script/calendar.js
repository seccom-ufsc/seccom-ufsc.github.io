// Layouts do cabeçalho centralizados
const desktopHeader = {
  left: "prev,next today",
  center: "title",
  right: "timeGridWeek,timeGridDay",
};

const mobileHeader = {
  left: "prev,next",
  center: "title",
  right: "today",
};

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: "pt-br",
    timeFormat: "HH:mm",
    themeSystem: "bootstrap5",
    initialView: isMobile() ? "listDay" : "timeGridWeek",
    headerToolbar: isMobile() ? mobileHeader : desktopHeader,
    validRange: {
      // Trocar a data do calendário aqui, é utilizado intervalo aberto
      start: "2026-10-18",
      end: "2026-10-24",
    },
    slotMinTime: "09:00:00",
    slotMaxTime: "20:00:00",
    googleCalendarApiKey: "AIzaSyCvrYo5iz10VIQQ0LP75GFcI-v9LbhC6D0",
    events: {
      googleCalendarId:
        "8eb5e628c7d3dce5aafd4347ac09c91e8321e92177622d67469fc9b4b1e2e276@group.calendar.google.com",
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

    windowResize: function () {
      const mobile = isMobile();

      if (mobile && calendar.view.type !== "listDay") {
        calendar.changeView("listDay");
        calendar.setOption("headerToolbar", mobileHeader); // Atualiza o cabeçalho para mobile
      } else if (!mobile && calendar.view.type === "listDay") {
        calendar.changeView("timeGridWeek");
        calendar.setOption("headerToolbar", desktopHeader); // Atualiza o cabeçalho para desktop
      }
    },
  });

  calendar.render();

  // Helper function to format dates for Google Calendar link
  function formatDate(date) {
    return date.toISOString().replace(/-|:|\.\d\d\d/g, "");
  }

  // Função para verificar se a tela é mobile
  function isMobile() {
    return window.innerWidth < 768; // Breakpoint de 768px
  }
});

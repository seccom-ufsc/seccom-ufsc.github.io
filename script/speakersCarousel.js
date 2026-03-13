import { speakers } from "./speakers.js";

/**
 * This event is called when the page is loaded.
 * It will populate the carousel with the speakers, initialize the slick
 * carousel and set up the modal to show the speaker information.
 */
document.addEventListener("DOMContentLoaded", function () {
  const carosel = document.getElementById("carrossel");
  Object.entries(speakers).forEach(([name, info]) => {
    addSpeakerToCarousel(carosel, name, info);
  });

  initSlick();
  setUpSpeakerModal();
});

/**
 * Sets up the modal to show the speaker information.
 * 
 * When the user clicks on the Saiba + button in a speaker card, this function
 * will populate the modal with the speaker information.
 */
function setUpSpeakerModal() {
  const modal = document.getElementById("speakerModal");

  modal.addEventListener("show.bs.modal", function (event) {
    const name = event.relatedTarget.getAttribute("data-person");
    const info = speakers[name];

    if (info) {
      /* Header */
      modal.querySelector(".modal-title").textContent = name;
      modal.querySelector("#modal-speaker-photo").src = info.photo;
      modal.querySelector("#speaker-abstract").textContent = info.abstract;

      /* Events */
      const eventsElement = modal.querySelector("#speaker-events");
      eventsElement.innerHTML = ""; // Clear previous content

      info.events.forEach((event) => {
        const li = document.createElement("li");
        li.innerHTML = `<b>${event.title}</b>`;
        eventsElement.appendChild(li);
      });

      /* Contact list */
      const contactList = document.getElementById("contact-list");
      contactList.innerHTML = ""; // Clear previous content

      Object.entries(info.contact).forEach(([mediaName, link]) => {
        const contact = document.createElement("a");
        contact.target = "_blank";

        const contactCard = document.createElement("div");
        contactCard.classList.add("speaker-contact-card");
        contact.appendChild(contactCard);

        switch (mediaName) {
          case "email":
            contact.href = `mailto:${link}`;
            contactCard.innerHTML = `<i class="bi bi-envelope-fill"></i>`;
            break;
          default:
            contact.href = link;
            contactCard.innerHTML = `<i class="bi bi-${mediaName}"></i>`;
        }

        if (!link) {
          contact.classList.add("disabled");
        }

        contactList.appendChild(contact);
      });
    }
  });
}

/**
 * Adds a speaker to the carousel.
 */
function addSpeakerToCarousel(carousel, speakerName, speakerInfo) {
  const carouselItem = document.createElement("div");
  const card = document.createElement("div");
  card.classList.add("card", "carrossel-item");
  card.innerHTML = `
    <img src="${speakerInfo.photo}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${speakerName}</h5>
      <p class="card-text">${speakerInfo.title}</p>
      <button type="button" class="btn btn-primary"
      data-bs-toggle="modal" data-bs-target="#speakerModal" 
      data-person="${speakerName}">
        Saiba +
      </button>
    </div>
  `;
  carouselItem.appendChild(card);
  carousel.appendChild(carouselItem);
}

/**
 * Initializes the slick carousel.
 */
function initSlick() {
  $(".carrossel").slick({
    centerMode: true,
    slidesToShow: 3,
    dots: false,
    // mobileFirst: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  });
}
'use strict';


// element toggle function
const elementToggleFunc = function (elem) {
  if (elem) elem.classList.toggle("active");
};


// sidebar
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}


// testimonials
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  if (modalContainer) modalContainer.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
};

for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    const avatar = this.querySelector("[data-testimonials-avatar]");
    const title = this.querySelector("[data-testimonials-title]");
    const text = this.querySelector("[data-testimonials-text]");

    if (modalImg && avatar) {
      modalImg.src = avatar.src;
      modalImg.alt = avatar.alt;
    }

    if (modalTitle && title) modalTitle.innerHTML = title.innerHTML;
    if (modalText && text) modalText.innerHTML = text.innerHTML;

    testimonialsModalFunc();
  });
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
}

if (overlay) {
  overlay.addEventListener("click", testimonialsModalFunc);
}


// portfolio filter
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (
      selectedValue === "all" ||
      selectedValue === "all projects" ||
      selectedValue === filterItems[i].dataset.category
    ) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();

    if (selectValue) selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

let lastClickedBtn = filterBtn.length ? filterBtn[0] : null;

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();

    if (selectValue) selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    if (lastClickedBtn) lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}


// project MP4 video modal
const videoOpenButtons = document.querySelectorAll("[data-video-open]");
const videoModal = document.querySelector("[data-video-modal]");
const videoOverlay = document.querySelector("[data-video-overlay]");
const videoCloseBtn = document.querySelector("[data-video-close]");
const videoPlayer = document.querySelector("[data-video-player]");
const videoTitle = document.querySelector("[data-video-title]");

const closeVideoModal = function () {
  if (!videoModal || !videoPlayer) return;

  videoModal.classList.remove("active");
  document.body.classList.remove("video-modal-open");

  videoPlayer.pause();
  videoPlayer.removeAttribute("src");
  videoPlayer.load();
};

const openVideoModal = function (button) {
  if (!videoModal || !videoPlayer) return;

  const source = button.dataset.videoSrc;
  const title = button.dataset.videoName || "Project Demo";

  if (!source) return;

  videoPlayer.src = source;

  if (videoTitle) {
    videoTitle.textContent = title;
  }

  videoModal.classList.add("active");
  document.body.classList.add("video-modal-open");
  videoPlayer.load();
};

for (let i = 0; i < videoOpenButtons.length; i++) {
  videoOpenButtons[i].addEventListener("click", function () {
    openVideoModal(this);
  });
}

if (videoCloseBtn) {
  videoCloseBtn.addEventListener("click", closeVideoModal);
}

if (videoOverlay) {
  videoOverlay.addEventListener("click", closeVideoModal);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && videoModal?.classList.contains("active")) {
    closeVideoModal();
  }
});




// design-work image preview modal
const imageOpenButtons = document.querySelectorAll("[data-image-open]");
const imageModal = document.querySelector("[data-image-modal]");
const imageOverlay = document.querySelector("[data-image-overlay]");
const imageCloseBtn = document.querySelector("[data-image-close]");
const imagePreview = document.querySelector("[data-image-preview]");

const closeImageModal = function () {
  if (!imageModal || !imagePreview) return;

  imageModal.classList.remove("active");
  document.body.classList.remove("image-modal-open");
  imagePreview.removeAttribute("src");
  imagePreview.alt = "";
};

const openImageModal = function (button) {
  if (!imageModal || !imagePreview) return;

  const source = button.dataset.imageSrc;
  const alt = button.dataset.imageAlt || "Design preview";

  if (!source) return;

  imagePreview.src = source;
  imagePreview.alt = alt;
  imageModal.classList.add("active");
  document.body.classList.add("image-modal-open");
};

for (let i = 0; i < imageOpenButtons.length; i++) {
  imageOpenButtons[i].addEventListener("click", function () {
    openImageModal(this);
  });
}

if (imageCloseBtn) {
  imageCloseBtn.addEventListener("click", closeImageModal);
}

if (imageOverlay) {
  imageOverlay.addEventListener("click", closeImageModal);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && imageModal?.classList.contains("active")) {
    closeImageModal();
  }
});


// contact form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (!form || !formBtn) return;

    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}


// page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        this.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j]?.classList.remove("active");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     TRANSLATIONS
     ========================= */

  const translations = {
    lt: {
      browseParts: "Peržiūrėti dalis",
      partsCatalog: "DALIŲ KATALOGAS",
      heroTitle: "Raskite jums reikalingą detalę.",
      heroDescription:
        "Pasirinkite kategoriją ir peržiūrėkite turimas automobilių dalis. Kataloge rasite automobilio modelį, detalės pavadinimą, brūkšninį kodą ir nuotrauką.",

      categories: "KATEGORIJOS",
      choosePart: "Pasirinkite detalę",
      categoryCount: "5 kategorijos",

      bumpers: "Bamperiai",
      bumpersDescription: "Priekiniai ir galiniai bamperiai",

      headlights: "Žibintai",
      headlightsDescription: "Priekiniai, galiniai ir dienos žibintai",

      fenders: "Sparnai",
      fendersDescription: "Priekinių ir galinių sparnų dalys",

      grilles: "Grotelės",
      grillesDescription: "Viršutinės, apatinės ir šoninės grotelės",

      viewCatalog: "Peržiūrėti katalogą",

      footerText: "Automobilių dalių katalogas ",

      model: "MODELIS",
      item: "DETALĖ",
      barcode: "DETALĖS KODAS",
      available: "TURIME",
      photo: "NUOTRAUKA",

      searchPlaceholder: "Ieškoti modelio, detalės arba kodo"
    },

    en: {
      browseParts: "Browse parts",
      partsCatalog: "PARTS CATALOG",
      heroTitle: "Find the part you need.",
      heroDescription:
        "Choose a category to browse available car parts. Each catalog shows the vehicle model, item name, barcode and photo.",

      categories: "CATEGORIES",
      choosePart: "Choose a part",
      categoryCount: "5 categories",

      bumpers: "Bumpers",
      bumpersDescription: "Front and rear bumpers",

      headlights: "Headlights",
      headlightsDescription: "Headlights, taillights and daylights",

      fenders: "Fenders",
      fendersDescription: "Front and rear fender parts",

      grilles: "Grilles",
      grillesDescription: "Upper, lower and side grilles",

      viewCatalog: "View catalog",

      footerText: "Car Parts Catalog ",

      model: "MODEL",
      item: "ITEM",
      barcode: "BARCODE",
      available: "AVAILABLE",
      photo: "PHOTO",

      searchPlaceholder: "Search model, item or barcode"
    }
  };


  /* =========================
     LANGUAGE SWITCHER
     ========================= */

  const languageSelect = document.getElementById("languageSelect");

  function setLanguage(language) {

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {

      const key = element.getAttribute("data-i18n");

      if (translations[language] && translations[language][key]) {
        element.textContent = translations[language][key];
      }

    });


    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {

      const key = element.getAttribute("data-i18n-placeholder");

      if (translations[language] && translations[language][key]) {
        element.placeholder = translations[language][key];
      }

    });


    localStorage.setItem("catalogLanguage", language);
  }


  if (languageSelect) {

    const savedLanguage =
      localStorage.getItem("catalogLanguage") || "lt";

    languageSelect.value = savedLanguage;

    setLanguage(savedLanguage);


    languageSelect.addEventListener("change", (event) => {
      setLanguage(event.target.value);
    });

  }


  /* =========================
     IMAGE MODAL
     ========================= */

  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeButton = document.getElementById("modalClose");

  if (modal && modalImage) {

    document.querySelectorAll(".thumb-button").forEach((button) => {

      button.addEventListener("click", () => {

        const image = button.querySelector("img");

        if (!image) return;

        modalImage.src = image.src;
        modalImage.alt = image.alt;

        modal.classList.add("open");

        document.body.style.overflow = "hidden";
      });

    });


    const closeModal = () => {

      modal.classList.remove("open");

      modalImage.src = "";

      document.body.style.overflow = "";
    };


    if (closeButton) {
      closeButton.addEventListener("click", closeModal);
    }


    modal.addEventListener("click", (event) => {

      if (event.target === modal) {
        closeModal();
      }

    });


    document.addEventListener("keydown", (event) => {

      if (
        event.key === "Escape" &&
        modal.classList.contains("open")
      ) {
        closeModal();
      }

    });

  }


  /* =========================
     CATALOG SEARCH
     ========================= */

  const search = document.getElementById("catalogSearch");
  const count = document.getElementById("resultCount");

  if (search) {

    const rows = [
      ...document.querySelectorAll(".catalog-table tbody tr")
    ];


    const applySearch = () => {

      const term = search.value.trim().toLowerCase();

      let visible = 0;


      rows.forEach((row) => {

        const matches =
          row.innerText.toLowerCase().includes(term);

        row.style.display = matches ? "" : "none";

        if (matches) {
          visible++;
        }

      });


      if (count) {

        const language =
          localStorage.getItem("catalogLanguage") || "lt";

        if (language === "lt") {
          count.textContent = `${visible} vnt.`;
        } else {
          count.textContent =
            `${visible} item${visible === 1 ? "" : "s"}`;
        }

      }

    };


    search.addEventListener("input", applySearch);

    applySearch();

  }

});

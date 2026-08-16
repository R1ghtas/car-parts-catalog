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
        "Pasirinkite kategoriją ir peržiūrėkite turimas automobilių dalis. Kataloge rasite automobilio modelį, detalės pavadinimą, detalės kodą, informaciją apie likutį ir nuotrauką.",

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

      footerText: "Automobilių dalių katalogas",

      allCategories: "Visos kategorijos",
      catalog: "Katalogas",
      availableParts: "TURIMOS DALYS",

      categoryDescription:
        "Spustelėkite bet kurią nuotrauką, kad atidarytumėte didesnę peržiūrą.",

      model: "MODELIS",
      item: "DETALĖ",
      barcode: "DETALĖS KODAS",
      stock: "LIKUTIS",
      available: "TURIME",
      photo: "NUOTRAUKA",

      inStock: "Yra sandėlyje",
      outStock: "Nėra sandėlyje",

      searchPlaceholder:
        "Ieškoti modelio, detalės arba detalės kodo",

      cart: "Krepšelis",
      addToCart: "Pridėti į krepšelį",
      yourOrder: "Jūsų užklausa",
      sendOrder: "Siųsti užklausą",
      clearCart: "Išvalyti",
      remove: "Pašalinti",
      emptyCart: "Krepšelis tuščias",

      /* BUMPERS */

      frontBumper: "Priekinis bamperis",
      rearBumper: "Galinis bamperis",

      reinforcementFrontBumper:
        "Priekinio bamperio sutvirtinimas",

      reinforcementBracketRight:
        "Sutvirtinimo laikiklis dešinėje pusėje",

      reinforcementBracketLeft:
        "Sutvirtinimo laikiklis kairėje pusėje",

      lowerReinforcement:
        "Apatinis sutvirtinimas",

      lowerReinforcementBracket:
        "Apatinio sutvirtinimo laikiklis kairėje ir dešinėje pusėje",

      lowerLipFrontBumper:
        "Priekinio bamperio apatinė lūpa",

      lowerPartFrontBumper:
        "Priekinio bamperio apatinė dalis",

      bumperSideRight:
        "Bamperio šoninė dalis dešinėje",

      bumperSideLeft:
        "Bamperio šoninė dalis kairėje",

      bumperHolderRight:
        "Bamperio laikiklis dešinėje pusėje",

      bumperHolderLeft:
        "Bamperio laikiklis kairėje pusėje"

    },


    en: {

      browseParts: "Browse parts",
      partsCatalog: "PARTS CATALOG",
      heroTitle: "Find the part you need.",

      heroDescription:
        "Choose a category to browse available car parts. Each catalog shows the vehicle model, item name, part code, availability and photo.",

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

      footerText: "Car Parts Catalog",

      allCategories: "All categories",
      catalog: "Catalog",
      availableParts: "AVAILABLE PARTS",

      categoryDescription:
        "Click any photo to open a larger preview.",

      model: "MODEL",
      item: "ITEM",
      barcode: "PART CODE",
      stock: "AVAILABILITY",
      available: "AVAILABLE",
      photo: "PHOTO",

      inStock: "Available",
      outStock: "Out of stock",

      searchPlaceholder:
        "Search model, item or part code",

      cart: "Cart",
      addToCart: "Add to basket",
      yourOrder: "Your order",
      sendOrder: "Send order",
      clearCart: "Clear cart",
      remove: "Remove",
      emptyCart: "Cart is empty",

      /* BUMPERS */

      frontBumper: "Front Bumper",
      rearBumper: "Rear Bumper",

      reinforcementFrontBumper:
        "Reinforcement front bumper",

      reinforcementBracketRight:
        "Bracket for reinforcement right side",

      reinforcementBracketLeft:
        "Bracket for reinforcement left side",

      lowerReinforcement:
        "Lower reinforcement",

      lowerReinforcementBracket:
        "Bracket for lower reinforcement left and right side",

      lowerLipFrontBumper:
        "Lower lip front bumper",

      lowerPartFrontBumper:
        "Lower part front bumper",

      bumperSideRight:
        "Bumper side part right",

      bumperSideLeft:
        "Bumper side part left",

      bumperHolderRight:
        "Bumper holder right side",

      bumperHolderLeft:
        "Bumper holder left side"

    }

  };


  /* =========================
     LANGUAGE SWITCHER
     ========================= */

  const languageSelect =
    document.getElementById("languageSelect");


  function getLanguage() {

    return localStorage.getItem(
      "catalogLanguage"
    ) || "lt";

  }


  function setLanguage(language) {

    document.documentElement.lang =
      language;


    document
      .querySelectorAll("[data-i18n]")
      .forEach((element) => {

        const key =
          element.getAttribute("data-i18n");


        if (
          translations[language] &&
          translations[language][key]
        ) {

          element.textContent =
            translations[language][key];

        }

      });


    document
      .querySelectorAll("[data-i18n-placeholder]")
      .forEach((element) => {

        const key =
          element.getAttribute(
            "data-i18n-placeholder"
          );


        if (
          translations[language] &&
          translations[language][key]
        ) {

          element.placeholder =
            translations[language][key];

        }

      });


    /* STOCK TRANSLATION */

    document
      .querySelectorAll("[data-stock]")
      .forEach((element) => {

        if (element.dataset.stock === "in") {

          element.textContent =
            translations[language].inStock;

        }


        if (element.dataset.stock === "out") {

          element.textContent =
            translations[language].outStock;

        }

      });


    localStorage.setItem(
      "catalogLanguage",
      language
    );


    updateCart();


    const search =
      document.getElementById(
        "catalogSearch"
      );


    if (search) {

      search.dispatchEvent(
        new Event("input")
      );

    }

  }


  if (languageSelect) {

    const savedLanguage =
      getLanguage();


    languageSelect.value =
      savedLanguage;


    setLanguage(
      savedLanguage
    );


    languageSelect.addEventListener(
      "change",
      (event) => {

        setLanguage(
          event.target.value
        );

      }
    );

  }


  /* =========================
     IMAGE MODAL
     ========================= */

  const modal =
    document.getElementById("imageModal");

  const modalImage =
    document.getElementById("modalImage");

  const closeButton =
    document.getElementById("modalClose");


  if (modal && modalImage) {

    document
      .querySelectorAll(".thumb-button")
      .forEach((button) => {

        button.addEventListener(
          "click",
          () => {

            const image =
              button.querySelector("img");


            if (!image) return;


            modalImage.src =
              image.src;

            modalImage.alt =
              image.alt;


            modal.classList.add(
              "open"
            );


            document.body.style.overflow =
              "hidden";

          }
        );

      });


    const closeModal = () => {

      modal.classList.remove(
        "open"
      );

      modalImage.src = "";

      document.body.style.overflow =
        "";

    };


    if (closeButton) {

      closeButton.addEventListener(
        "click",
        closeModal
      );

    }


    modal.addEventListener(
      "click",
      (event) => {

        if (event.target === modal) {

          closeModal();

        }

      }
    );


    document.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key === "Escape" &&
          modal.classList.contains("open")
        ) {

          closeModal();

        }

      }
    );

  }


  /* =========================
     CATALOG SEARCH
     ========================= */

  const search =
    document.getElementById(
      "catalogSearch"
    );

  const count =
    document.getElementById(
      "resultCount"
    );


  if (search) {

    const rows = [
      ...document.querySelectorAll(
        ".catalog-table tbody tr"
      )
    ];


    const applySearch = () => {

      const term =
        search.value
          .trim()
          .toLowerCase();


      let visible = 0;


      rows.forEach((row) => {

        const matches =
          row.innerText
            .toLowerCase()
            .includes(term);


        row.style.display =
          matches ? "" : "none";


        if (matches) {
          visible++;
        }

      });


      if (count) {

        const language =
          getLanguage();


        if (language === "lt") {

          count.textContent =
            `${visible} vnt.`;

        } else {

          count.textContent =
            `${visible} item${visible === 1 ? "" : "s"}`;

        }

      }

    };


    search.addEventListener(
      "input",
      applySearch
    );


    applySearch();

  }


  /* =========================
     SHOPPING CART
     ========================= */

  let cart =
    JSON.parse(
      localStorage.getItem(
        "partsCart"
      ) || "[]"
    );


  const cartButton =
    document.getElementById(
      "cartButton"
    );

  const cartPanel =
    document.getElementById(
      "cartPanel"
    );

  const cartItems =
    document.getElementById(
      "cartItems"
    );

  const cartCount =
    document.getElementById(
      "cartCount"
    );

  const closeCart =
    document.getElementById(
      "closeCart"
    );

  const clearCart =
    document.getElementById(
      "clearCart"
    );

  const sendOrder =
    document.getElementById(
      "sendOrder"
    );


  function saveCart() {

    localStorage.setItem(
      "partsCart",
      JSON.stringify(cart)
    );

  }


  function updateCart() {

    if (!cartItems) return;


    const language =
      getLanguage();


    const t =
      translations[language];


    cartItems.innerHTML = "";


    let totalQuantity = 0;


    cart.forEach(
      (product, index) => {

        totalQuantity +=
          product.quantity;


        const item =
          document.createElement("div");


        item.className =
          "cart-item";


        item.innerHTML = `

          <div class="cart-item-info">

            <strong>
              ${product.item}
            </strong>

            <span>
              ${product.model}
            </span>

            <span>
              ${product.barcode}
            </span>

          </div>


          <div class="cart-quantity">

            <button
              class="quantity-minus"
              data-index="${index}">
              −
            </button>

            <span>
              ${product.quantity}
            </span>

            <button
              class="quantity-plus"
              data-index="${index}">
              +
            </button>

          </div>


          <button
            class="remove-cart-item"
            data-index="${index}">
            ${t.remove}
          </button>

        `;


        cartItems.appendChild(
          item
        );

      }
    );


    if (cart.length === 0) {

      cartItems.innerHTML =
        `<p class="empty-cart">
          ${t.emptyCart}
        </p>`;

    }


    if (cartCount) {

      cartCount.textContent =
        totalQuantity;

    }


    document
      .querySelectorAll(
        ".quantity-plus"
      )
      .forEach((button) => {

        button.addEventListener(
          "click",
          () => {

            const index =
              Number(
                button.dataset.index
              );


            cart[index].quantity++;


            saveCart();
            updateCart();

          }
        );

      });


    document
      .querySelectorAll(
        ".quantity-minus"
      )
      .forEach((button) => {

        button.addEventListener(
          "click",
          () => {

            const index =
              Number(
                button.dataset.index
              );


            cart[index].quantity--;


            if (
              cart[index].quantity <= 0
            ) {

              cart.splice(
                index,
                1
              );

            }


            saveCart();
            updateCart();

          }
        );

      });


    document
      .querySelectorAll(
        ".remove-cart-item"
      )
      .forEach((button) => {

        button.addEventListener(
          "click",
          () => {

            const index =
              Number(
                button.dataset.index
              );


            cart.splice(
              index,
              1
            );


            saveCart();
            updateCart();

          }
        );

      });

  }


  document
    .querySelectorAll(
      ".add-cart"
    )
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          const product = {

            model:
              button.dataset.model,

            item:
              button.dataset.item,

            barcode:
              button.dataset.barcode,

            quantity: 1

          };


          const existing =
            cart.find(
              (item) =>
                item.barcode ===
                product.barcode
            );


          if (existing) {

            existing.quantity++;

          } else {

            cart.push(
              product
            );

          }


          saveCart();
          updateCart();


          if (cartPanel) {

            cartPanel.classList.add(
              "open"
            );

          }

        }
      );

    });


  if (cartButton) {

    cartButton.addEventListener(
      "click",
      () => {

        cartPanel.classList.add(
          "open"
        );

      }
    );

  }


  if (closeCart) {

    closeCart.addEventListener(
      "click",
      () => {

        cartPanel.classList.remove(
          "open"
        );

      }
    );

  }


  if (clearCart) {

    clearCart.addEventListener(
      "click",
      () => {

        cart = [];

        saveCart();
        updateCart();

      }
    );

  }


  /* =========================
     SEND ORDER BY EMAIL
     ========================= */

  if (sendOrder) {

    sendOrder.addEventListener(
      "click",
      () => {

        if (cart.length === 0) {

          alert(
            getLanguage() === "lt"
              ? "Krepšelis tuščias."
              : "Your cart is empty."
          );

          return;

        }


        /* CHANGE THIS */

        const bossEmail =
          "strungysmangirdas@gmail.com";


        const language =
          getLanguage();


        let subject;
        let body;


        if (language === "lt") {

          subject =
            "Automobilių dalių užklausa";


          body =
            "Sveiki,\n\n" +
            "Norėčiau užsakyti šias dalis:\n\n";

        } else {

          subject =
            "Car parts order request";


          body =
            "Hello,\n\n" +
            "I would like to order the following parts:\n\n";

        }


        cart.forEach(
          (product, index) => {

            body +=
              `${index + 1}. ${product.item}\n` +

              `${
                language === "lt"
                  ? "Modelis"
                  : "Model"
              }: ${product.model}\n` +

              `${
                language === "lt"
                  ? "Detalės kodas"
                  : "Part code"
              }: ${product.barcode}\n` +

              `${
                language === "lt"
                  ? "Kiekis"
                  : "Quantity"
              }: ${product.quantity}\n\n`;

          }
        );


        if (language === "lt") {

          body +=
            "Prašau patvirtinti dalių prieinamumą ir kainą.\n\nAčiū.";

        } else {

          body +=
            "Please confirm availability and price.\n\nThank you.";

        }


        const mailto =
          `mailto:${bossEmail}` +
          `?subject=${encodeURIComponent(subject)}` +
          `&body=${encodeURIComponent(body)}`;


        window.location.href =
          mailto;

      }
    );

  }


  updateCart();

});

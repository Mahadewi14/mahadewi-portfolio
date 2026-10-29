
const languageButton = document.getElementById("languageButton");

let currentLanguage = "id";

languageButton.addEventListener("click", function () {
  currentLanguage = currentLanguage === "id" ? "en" : "id";

  // Ubah teks tombol
  languageButton.textContent = currentLanguage === "id" ? "EN" : "ID";

  // Ubah teks elemen yang memiliki data-id dan data-en
  const elements = document.querySelectorAll("[data-id][data-en]");

  elements.forEach(function (element) {
    element.textContent = element.getAttribute(
      "data-" + currentLanguage
    );
  });

  // Ubah bahasa dokumen
  document.documentElement.lang = currentLanguage;
});

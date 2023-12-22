// Düğme ve temayı değiştirmek için kullanılacak elementleri seçin.
const themeToggle = document.getElementById("theme-toggle");
const themeIcons = document.querySelectorAll(".theme-icon");

// Kullanıcının tercihini yerel depolamada saklamak için bir anahtar (key) tanımlayın.
const themePreferenceKey = "themePreference";

// Kullanıcının temayı tercih etmesini izlemek için bir fonksiyon tanımlayın.
function toggleTheme() {
  // Şu anki tema tercihini alın veya varsayılan olarak koyu tema seçin.
  let currentTheme = localStorage.getItem(themePreferenceKey) || "dark";

  // Temayı değiştirin ve tercihi güncelleyin.
  if (currentTheme === "dark") {
    document.body.classList.remove("dark-theme");
    localStorage.setItem(themePreferenceKey, "light");
  } else {
    document.body.classList.add("dark-theme");
    localStorage.setItem(themePreferenceKey, "dark");
  }
}

// Tema değiştirme düğmesine tıklama olayını dinleyin.
themeToggle.addEventListener("click", toggleTheme);

// Sayfa yüklendiğinde kullanıcının tercih ettiği temayı ayarlayın.
window.addEventListener("load", () => {
  let currentTheme = localStorage.getItem(themePreferenceKey) || "dark";
  if (currentTheme === "light") {
    document.body.classList.remove("dark-theme");
    themeIcons[0].style.display = "none"; // Açık tema simgesini gizle
    themeIcons[1].style.display = "inline"; // Koyu tema simgesini göster
  } else {
    document.body.classList.add("dark-theme");
    themeIcons[0].style.display = "inline"; // Açık tema simgesini göster
    themeIcons[1].style.display = "none"; // Koyu tema simgesini gizle
  }
});

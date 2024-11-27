function toogleColorScheme() {
  let element = document.documentElement;
  let currentScheme = element.style.colorScheme;
  let themeIcon = document.getElementById("theme-icon");

  // Toogle between light and dark mode
  element.style.colorScheme = currentScheme === "dark" ? "light" : "dark";

  if (currentScheme === "dark"){
    themeIcon.classList.remove("fa fa-sun-o");
    themeIcon.classList.add("fa fa-moon-o");
  }
  else {
    themeIcon.classList.remove("fa fa-moon-o");
    themeIcon.classList.add("fa fa-sun-o");
  }
}
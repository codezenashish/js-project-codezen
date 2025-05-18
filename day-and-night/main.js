let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#mode-toggle");

const enableDarkMode = ()=> {
    document.body.classList.add('dark-mode')
    localStorage.setItem('dark-mode' ,'active')
}

const disableDarkMode = ()=> {
    document.body.classList.remove('dark-mode')
    localStorage.setItem('dark-mode' ,null)
}

if(darkMode === 'active') enableDarkMode()


darkModeToggle.addEventListener("click", () => {
    darkMode =localStorage.getItem('dark-mode')
  if (darkMode !== "active") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

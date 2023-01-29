const bthDarkMode = document.querySelector('.dark-mode-btn')


// 1Проверка темной темы на уровне системных настроек

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    bthDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark")
}
// 2 Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    bthDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark")
} else if (localStorage.getItem('darkMode') === "light") {
    bthDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark")
}
//else if (localStorage.getItem('darkMode') === 'ligth') {
//  document.body.classList.add("dark")
//}



// Если меняются системные настройки, меняем тему

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "ligth";

    if (newColorScheme === 'dark') {
        bthDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        localStorage.setItem('darkMode', "dark");
        localStorage.setItem('darkMode', "light");

    } else {
        bthDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark")

    }


})


//Включение ночьного режима по кнопке

bthDarkMode.onclick = function () {
    bthDarkMode.classList.toggle("dark-mode-btn--active");

    const isDark = document.body.classList.toggle('dark')

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light');

    }
}
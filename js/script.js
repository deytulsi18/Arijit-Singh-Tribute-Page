
// getting the selected theme from the local storage
let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('light-mode');
}
else {
    setTheme(theme);
}


// switching themes
let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.id;
        // console.log(id);
        setTheme(mode);
    })
}

function setTheme(mode) {
    if (mode == 'light-mode') {
        document.getElementById('theme-style').href = "styles/style1.css";
    }
    if (mode == 'dark-mode') {
        document.getElementById('theme-style').href = "styles/dark.css";
    }
    localStorage.setItem('theme', mode);
}
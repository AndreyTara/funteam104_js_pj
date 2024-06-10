window.addEventListener('load', windowLoad);

function windowLoad() {
  const checkboxDom = document.querySelector('.header-nav-checkbox');
  const iconCheckboxDom = document.querySelector('.header-nav-container>img');
  const htmlDom = document.documentElement;

  const saveUserTheme = localStorage.getItem('user-theme');

  renderCheckbox(saveUserTheme);

  function renderCheckbox(theme) {
    if (theme === 'light') {
      iconCheckboxDom.src = `/img/b-${theme}.png`;
      iconCheckboxDom.alt = `theme-${theme}`;
    } else if (theme === 'dark') {
      iconCheckboxDom.src = `./img/b-${theme}.png`;
      iconCheckboxDom.alt = `theme-${theme}`;
    }
  }

  let userTheme;
  if (window.matchMedia) {
    userTheme = window.matchMedia('prefer-color-sheme: dark').matches
      ? 'dark'
      : 'light';
  }
  window
    .matchMedia('prefer-color-sheme: dark')
    .addEventListener('change', () => {
      !saveUserTheme ? changeThemeLocalStore() : null;
    });

  function setThemeClass() {
    if (saveUserTheme) {
      htmlDom.classList.add(saveUserTheme);
    } else {
      htmlDom.classList.add(userTheme);
    }
  }
  setThemeClass();

  checkboxDom.addEventListener('change', handleCheck);

  function handleCheck(event) {
    if (!event.target.checked) {
      changeThemeLocalStore(true);
    } else {
      changeThemeLocalStore(true);
    }

    function changeThemeLocalStore(saveTheme = false) {
      let curTheme = htmlDom.classList.contains('light') ? 'light' : 'dark';
      let newTheme;
      if (curTheme === 'light') {
        newTheme = 'dark';
      } else if (curTheme === 'dark') {
        newTheme = 'light';
      }
      htmlDom.classList.remove(curTheme);
      renderCheckbox(newTheme);
      htmlDom.classList.add(newTheme);
      saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
    }
  }
}

// const themeButton = document.querySelector('.page__theme');
// const resetButton = document.querySelector('.page__reset');

// if (themeButton) {
//   themeButton.addEventListener('click', function (event) {
//     counter++;
//     if (counter % 2) {
//       changeTheme(true);
//     } else {
//       changeTheme(true);
//     }
//     resetButton.classList.add('active');
//   });
// }

// if (resetButton) {
//   resetButton.addEventListener('click', function (event) {
//     resetButton.classList.remove('active');
//     localStorage.setItem('user-theme', '');
//   });
// }
// function changeTheme(saveTheme = false) {
//   let curTheme = htmlDom.classList.contains('light') ? 'light' : 'dark';

//   let newTheme;

//   if (curTheme === 'light') {
//     newTheme = 'dark';
//   } else if (curTheme === 'dark') {
//     newTheme = 'light';
//   }
//   htmlDom.classList.remove(curTheme);
//   htmlDom.classList.add(newTheme);
//   saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
// }
// function setThemeClass() {
//   if (saveUserTheme) {
//     htmlDom.classList.add(saveUserTheme);
//     resetButton.classList.add('active');
//   } else {
//     htmlDom.classList.add(userTheme);
//   }
// }
// setThemeClass();

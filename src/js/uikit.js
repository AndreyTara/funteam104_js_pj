window.addEventListener('load', windowLoad);

function windowLoad() {
  const htmlDom = document.documentElement;

  const saveUserTheme = localStorage.getItem('user-theme');

  let userTheme;
  let counter = 0;
  if (window.matchMedia) {
    userTheme = window.matchMedia('prefer-color-sheme: dark').matches
      ? 'dark'
      : 'light';
  }
  window
    .matchMedia('prefer-color-sheme: dark')
    .addEventListener('change', event => {
      !saveUserTheme ? changeTheme() : null;
    });

  const themeButton = document.querySelector('.page__theme');
  const resetButton = document.querySelector('.page__reset');

  if (themeButton) {
    themeButton.addEventListener('click', function (event) {
      counter++;
      if (counter % 2) {
        changeTheme(true);
      } else {
        changeTheme(true);
      }
      resetButton.classList.add('active');
    });
  }

  if (resetButton) {
    resetButton.addEventListener('click', function (event) {
      resetButton.classList.remove('active');
      localStorage.setItem('user-theme', '');
    });
  }

  function setThemeClass() {
    if (saveUserTheme) {
      htmlDom.classList.add(saveUserTheme);
      resetButton.classList.add('active');
    } else {
      htmlDom.classList.add(userTheme);
    }
  }

  setThemeClass();

  function changeTheme(saveTheme = false) {
    let curTheme = htmlDom.classList.contains('light') ? 'light' : 'dark';

    let newTheme;

    if (curTheme === 'light') {
      newTheme = 'dark';
    } else if (curTheme === 'dark') {
      newTheme = 'light';
    }
    htmlDom.classList.remove(curTheme);
    htmlDom.classList.add(newTheme);
    saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
  }
}

/**
 *  const headerCheckbox = document.querySelector('.header-checkbox');
 * const htmlDom = document.documentElement;
 * function fnCheked(event) {
//   const chk = event.target;
//   console.log(chk.checked);
//   const lightEls = document.querySelectorAll('.light');
//   const darkEls = document.querySelectorAll('.dark');
//   console.log(lightEls.length);
//   console.log(darkEls.length);
//   if (chk.checked) {
//     htmlDom.classList.add('light');
//     htmlDom.classList.remove('dark');
//   } else {
//     htmlDom.classList.add('dark');
//     htmlDom.classList.remove('light');
//   }
// }
 * 
 * 
 * 
 */

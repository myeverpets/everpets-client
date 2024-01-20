export default function darkMode() {
  setTimeout(() => {
    const themeToggleDarkIcon = document.querySelector(
      'svg#theme-toggle-dark-icon',
    );
    const themeToggleLightIcon = document.querySelector(
      'svg#theme-toggle-light-icon',
    );
    console.log(themeToggleDarkIcon);
    const isDarkMode =
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDarkMode) {
      themeToggleDarkIcon?.classList.add('hidden');
      themeToggleLightIcon?.classList.remove('hidden');
    } else {
      themeToggleLightIcon?.classList.add('hidden');
      themeToggleDarkIcon?.classList.remove('hidden');
    }
  }, 10);
}

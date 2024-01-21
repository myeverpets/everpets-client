export default function useDarkSide() {
  const themeToggleDarkIcon = document.querySelector(
    'svg#theme-toggle-dark-icon',
  );
  const themeToggleLightIcon = document.querySelector(
    'svg#theme-toggle-light-icon',
  );
  const isDarkMode =
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (isDarkMode) {
    localStorage.setItem('color-theme', 'light');
    document.documentElement.classList.remove('dark');
    themeToggleLightIcon?.classList.add('hidden');
    themeToggleDarkIcon?.classList.remove('hidden');
  } else {
    localStorage.setItem('color-theme', 'dark');
    document.documentElement.classList.add('dark');
    themeToggleDarkIcon?.classList.add('hidden');
    themeToggleLightIcon?.classList.remove('hidden');
  }
}

export default function darkMode() {
  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  const themeToggleLightIcon = document.getElementById(
    'theme-toggle-light-icon',
  );

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

  const themeToggleBtn = document.getElementById('theme-toggle');

  themeToggleBtn?.addEventListener('click', () => {
    const isCurrentlyDark = document.documentElement.classList.contains('dark');

    document.documentElement.classList.toggle('dark', !isCurrentlyDark);

    themeToggleDarkIcon?.classList.toggle('hidden');
    themeToggleLightIcon?.classList.toggle('hidden');

    localStorage.setItem('color-theme', isCurrentlyDark ? 'light' : 'dark');
  });
}

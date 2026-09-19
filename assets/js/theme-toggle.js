/* ==========================================================================
   Theme Toggle
   Manages dark / light mode with localStorage persistence
   and system-preference fallback.
   ========================================================================== */

(function () {
  'use strict';

  /** Storage key used for persisting the user's preference. */
  const STORAGE_KEY = 'theme';

  /** Convenience reference to the root element. */
  const root = document.documentElement;

  /* ------------------------------------------------------------------
     Helpers
     ------------------------------------------------------------------ */

  /**
   * Apply the given theme and update toggle-button icon visibility.
   * @param {'dark'|'light'} theme
   */
  function applyTheme(theme) {
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    updateIcons(theme);
  }

  /**
   * Show the correct icon inside every theme-toggle button.
   *   • .icon-sun  → visible in dark mode  (click to switch to light)
   *   • .icon-moon → visible in light mode (click to switch to dark)
   * @param {'dark'|'light'} theme
   */
  function updateIcons(theme) {
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      var sun  = btn.querySelector('.icon-sun');
      var moon = btn.querySelector('.icon-moon');
      if (sun)  sun.style.display  = theme === 'dark' ? 'inline' : 'none';
      if (moon) moon.style.display = theme === 'dark' ? 'none'   : 'inline';
    });
  }

  /**
   * Determine the theme that should be active on first load.
   * Priority: localStorage → system preference → light (default).
   * @returns {'dark'|'light'}
   */
  function getInitialTheme() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;

    // Follow the OS / browser preference when nothing is stored.
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  /* ------------------------------------------------------------------
     Initialisation (runs on DOMContentLoaded)
     ------------------------------------------------------------------ */

  document.addEventListener('DOMContentLoaded', function () {
    // 1. Set the initial theme
    var current = getInitialTheme();
    applyTheme(current);

    // 2. Bind every #theme-toggle button (supports multiple on the page)
    document.querySelectorAll('#theme-toggle, .theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var isDark = root.classList.contains('dark');
        var next = isDark ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem(STORAGE_KEY, next);
      });
    });

    // 3. React to system preference changes when the user has no stored pref.
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        // Only follow the system if the user hasn't made an explicit choice.
        if (!localStorage.getItem(STORAGE_KEY)) {
          applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  });
})();

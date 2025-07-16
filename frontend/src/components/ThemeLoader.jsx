import { useLayoutEffect } from 'react';

export function useThemeLoader(theme) {
  useLayoutEffect(() => {
    const styleId = 'app-theme-style';
    const prev = document.getElementById(styleId);
    if (prev) prev.remove();

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = styleId;
    link.href = `../styles/main${theme === 'dark' ? '.dark' : ''}.css`;

    document.head.appendChild(link);
  }, [theme]);
}

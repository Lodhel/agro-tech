import { useLayoutEffect } from 'react';

export function useThemeLoader(theme) {
  useLayoutEffect(() => {
    if (theme === 'dark') {
      import('./styles/main.dark.css');
    } else {
      import('./styles/main.css');
    }
  }, [theme]);
}

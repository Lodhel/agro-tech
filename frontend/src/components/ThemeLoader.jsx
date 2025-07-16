import { useLayoutEffect } from 'react';

export function useThemeLoader(theme) {
  useLayoutEffect(() => {
    if (theme === 'dark') {
      console.log(theme)
      import('../styles/main.dark.css');
    } else {
      console.log(theme)
      import('../styles/main.css');
    }
  }, [theme]);
}

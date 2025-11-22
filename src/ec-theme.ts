import githubLight from '@shikijs/themes/github-light';
import type { ThemeRegistration } from 'shiki';

const spectreLight: ThemeRegistration = {
  ...githubLight,
  name: 'Spectre Light',
  colors: {
    ...githubLight.colors,
    "activityBar.background": "#f8f9fa",
    "editor.background": "#ffffff",
    "statusBar.background": "#f8f9fa",
    "statusBarItem.remoteBackground": "#f8f9fa",
    "tab.activeBackground": "#ffffff",
    "titleBar.activeBackground": "#f8f9fa",
    "editorGroupHeader.tabsBackground": "#f8f9fa",
    "panel.background": "#ffffff",
  }
};

export { spectreLight };

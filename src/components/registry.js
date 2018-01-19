// Register Components in this file to enable bundle splitting!
/* eslint global-require: 0 */

export const MainContent = r =>
  require.ensure([], () => r(require('@/components/MainContent')), 'MainContent');

export const TopBar = r => require.ensure([], () => r(require('@/components/ui/TopBar')), 'TopBar');

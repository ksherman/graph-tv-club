// Register Components in this file to enable bundle splitting!
/* eslint global-require: 0 */

// UI components
export const TopBar = r => require.ensure([], () => r(require('@/components/ui/TopBar')), 'TopBar');

// Content components
export const WelcomePage = r => require.ensure([], () => r(require('@/components/WelcomePage')), 'WelcomePage');

export const ShowPage = r => require.ensure([], () => r(require('@/components/ShowPage')), 'ShowPage');
export const ShowScatterPlot = r =>
  require.ensure([], () => r(require('@/components/ShowScatterPlot')), 'ShowScatterPlot');
export const ShowDetailSidebar = r =>
  require.ensure([], () => r(require('@/components/ui/ShowDetailSidebar')), 'ShowDetailSidebar');

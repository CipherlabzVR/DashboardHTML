import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'dashboard', title: 'Dashboard', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'assets', title: 'Assets', href: paths.dashboard.customers, icon: 'users' },
  { key: 'presentaions', title: 'Presentaions', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'playlist', title: 'Play List', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'players', title: 'Players', href: paths.dashboard.account, icon: 'user' },
] satisfies NavItemConfig[];

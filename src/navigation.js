import { getPermalink, getBlogPermalink, getHomePermalink, getAsset } from './utils/permalinks';
import { DISCORD_INVITE, REDBUBBLE_LINK } from '~/constants';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getHomePermalink(),
    },
    {
      text: 'About us',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
  ],
  actions: [
    { text: 'Shop Merch', href: REDBUBBLE_LINK, target: '_blank' },
    { text: 'Join Now', href: DISCORD_INVITE, target: '_blank', primary: true },
  ],
};

export const footerData = {
  socialLinks: [{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/gurkult' }],
  footNote: '',
};

import { getPermalink, getBlogPermalink, getHomePermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [ 
    {
      text: "Home",
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
    { text: "Shop Merch", href: import.meta.env.PUBLIC_REDBUBBLE_LINK, target: '_blank' },
    { text: 'Join Now', href: import.meta.env.PUBLIC_DISCORD_INVITE, target: '_blank', primary: true },
  ],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/gurkult' },
  ],
  footNote: "",
};

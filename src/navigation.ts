import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Case Studies',
      href: getPermalink('/case-studies'),
    },
    {
      text: 'Templates',
      href: getPermalink('/templates'),
    },
    {
      text: 'Use Cases',
      href: getPermalink('/use-cases'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/faq'),
    },
  ],
  actions: [
    { 
      text: 'Get Started', 
      href: 'https://app.wordrocket.ai/register',
      target: '_blank',
      variant: 'primary'
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'Templates', href: getPermalink('/templates') },
        { text: 'Use Cases', href: getPermalink('/use-cases') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'API Documentation', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Case Studies', href: getPermalink('/case-studies') },
        { text: 'Careers', href: '#' },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Help Center', href: '#' },
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'Community', href: '#' },
        { text: 'Status', href: '#' },
        { text: 'Contact Support', href: 'mailto:support@wordrocket.ai' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
        { text: 'Cookie Policy', href: '#' },
        { text: 'GDPR', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: '#' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: '#' },
  ],
  footNote: `
    © 2025 <a class="text-blue-600 underline dark:text-muted" href="https://wordrocket.ai">WordRocket</a>. All rights reserved.
  `,
};
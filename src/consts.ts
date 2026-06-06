import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Wenbin Notes',
  description:
    '一个用于记录学习、阅读、技术、观察和生活片段的个人博客。',
  href: 'https://example.com',
  author: 'Wenbin',
  locale: 'zh-CN',
  featuredPostCount: 4,
  postsPerPage: 5,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: '文章',
  },
  {
    href: '/tags',
    label: '标签',
  },
  {
    href: '/about',
    label: '关于',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com',
    label: 'GitHub',
  },
  {
    href: 'mailto:hello@example.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const OPEN_SOURCE_URL = 'https://github.com/your-company/landing-page-boilerplate'

const baseSiteConfig = {
  name: "南昌宝瓶科技有限公司",
  description:
    "南昌宝瓶科技有限公司，专注于大语言模型/多模态大语言模型应用落地，致力于推动人工智能技术的发展和应用。",
  url: "https://yourcompanywebsite.com",
  ogImage: "https://yourcompanywebsite.com/og.png",
  metadataBase: '/',
  keywords: ["南昌宝瓶科技", "大语言模型", "多模态大语言模型", "人工智能"],
  authors: [
    {
      name: "南昌宝瓶科技",
      url: "https://yourcompanywebsite.com",
      twitter: 'https://twitter.com/yourcompany',
    }
  ],
  creator: '@yourcompany',
  openSourceURL: 'https://github.com/your-company/landing-page-boilerplate',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    // { name: 'repo', href: OPEN_SOURCE_URL, icon: BsGithub },
    // { name: 'twitter', href: "https://twitter.com/yourcompany", icon: BsTwitterX },
    // { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/yourcompany", icon: SiBuymeacoffee }
  ],
  footerLinks: [
    { name: 'email', href: "mailto:info@yourcompany.com", icon: MdEmail },
    // { name: 'twitter', href: "https://twitter.com/yourcompany", icon: BsTwitterX },
    // { name: 'github', href: "https://github.com/your-company/", icon: BsGithub },
    { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/yourcompany", icon: SiBuymeacoffee },
    // { name: 'juejin', href: "https://juejin.cn/user/yourcompany", icon: SiJuejin },
    { name: 'weChat', href: "https://yourcompanywebsite.com/make-a-friend", icon: BsWechat }
  ],
  footerProducts: [
    { url: 'https://yourcompanywebsite.com/', name: '大模型平台' },
    { url: 'https://anotherproduct.yourcompany.com/', name: '多模态大模型应用' },
    // { url: 'https://landingpage.yourcompany.com/', name: '落地页模版' },
    // { url: 'https://nextjs.yourcompany.com/', name: 'Next.js 实践' },
    // { url: 'https://starter.yourcompany.com/', name: 'Next.js 启动模板' },
    // { url: 'https://githubbio.yourcompany.com', name: 'Github Bio Generator' },
    { url: 'https://github.com/your-company/indie-hacker-tools', name: '独立开发者工具' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}

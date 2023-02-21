import { defaultTheme } from 'vuepress'

export default {
  lang: 'zh-CN',
  title: 'FlowerUI',
  description: '欢迎来到FlowerUI组件库文档站',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }] // 需要被注入到当前页面的 HTML <head> 中的标签
  ],
  theme: defaultTheme({ 
    logo: '/logo.png',  
    navbar: [
      { text: 'Home', link: '/' },
      // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
      { text: '百度', link: 'https://www.baidu.com' },
      { text: 'CSDN', link: 'https://blog.csdn.net', target: '_blank' },
      { text: '豆瓣', link: 'https://movie.douban.com', target: '_self', rel: '' },
      {
        text: 'Group',
        children: [
          {
            text: 'SubGroup',
            children: ['/group/sub/foo.md', '/group/sub/bar.md'],
          },
        ],
      },
    ],
  }),
}
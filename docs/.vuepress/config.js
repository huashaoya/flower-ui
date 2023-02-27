import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
export default {
  lang: 'zh-CN',
  title: 'FlowersUI',
  description: '欢迎来到FlowersUI组件库文档站',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }] // 需要被注入到当前页面的 HTML <head> 中的标签
  ],
  base:'/flower-ui/',
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索组件',
        },
      },
    }),
  ],
  theme: defaultTheme({ 
    logo: '/logo.png',  
    navbar: [
      { text: '首页', link: '/' },
      { text: 'github', link: 'https://github.com/huashaoya/flower-ui' },
      // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
      { text: '介绍文档', link: '/guide/' },
      // {
      //   text: 'Group',
      //   children: [
      //     {
      //       text: 'SubGroup',
      //       children: ['/group/sub/foo.md', '/group/sub/bar.md'],
      //     },
      //   ],
      // },
    ],
    sidebar: {
      //对象的默认路径
      '/guide/': [
        {
          text: '组件文档',
          children: [
            '/guide/README.md',
            '/guide/组件总览.md',
            '/guide/通用型组件.md',
            '/guide/布局型组件.md',
            '/guide/导航型组件.md',
            '/guide/数据录入型组件.md',
            '/guide/数据展示型组件.md',
            '/guide/反馈型组件.md'],
        },
      ]
    },
    sidebarDepth:1,
    search: true, // 设置是否使用导航栏上的搜索框
    searchMaxSuggestions: 10  // 搜索框显示的搜索结果数量
  }),
}
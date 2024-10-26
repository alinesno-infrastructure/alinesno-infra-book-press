module.exports = {
  lang: 'zh-CN',
  title: '超级个体:多Agent协作与自动化产品实践',
  description: '能够灵活满足企业数字化建设中各种场景的需要，更高效、专注的沉淀业务和数据能力，进而形成企业的业务和数据中台。通过能力的灵活组合，快速的应对当前快节奏的市场需求，助力企业数字化转型的成功。',
  base: '/',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'stylesheet', href: '/font-awesome-5.11.2/css/all.min.css' }]
  ],
  plugins: [
    ['@vuepress/active-header-links'],
    ['vuepress-plugin-code-copy', true],
    ['@vuepress/nprogress'],
    ['@vuepress/back-to-top'],
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }],
    ['@vuepress/medium-zoom']
  ],
  themeConfig: {
    logo: '/logo.png', // 注意图片放在 public 文件夹下
    lastUpdated: 'Last Updated',
    sidebarDepth: 2,
    repo: 'https://gitee.com/alinesno-infrastructure/alinesno-infra-book-press',
    docsDir: 'docs',
    repoLabel: 'Gitee',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '帮助我们改善此页面',
    smoothScroll: true,
    nav: [
      {
        text: '封面',
        link: '/'
      },
      {
        text: '书籍目录',
        link: '/book/'
      },
      {
        text: '产品设计',
        link: 'http://portal.infra.linesno.com'
      },
    ],
    sidebar: {
      '/book/': [
        {
          title: '行业发展需求',
          collapsible: true,
          children: genFirestLearnSidebar(1)
        },
        {
          title: '产品架构设计',
          collapsible: true,
          children: genFirestLearnSidebar(2)
        },
        {
          title: 'LLM交互设计',
          collapsible: true,
          children: genFirestLearnSidebar(3)
        },
        {
          title: 'Agent角色实践',
          collapsible: true,
          children: genFirestLearnSidebar(4)
        },
        {
          title: '产品研发总结',
          collapsible: true,
          children: genFirestLearnSidebar(5)
        },
        {
          title: '致谢',
          collapsible: true,
          children: genFirestLearnSidebar(8)
        }
      ],
    }
  },
}


/**
*
* @param {概述} type
* @returns
*/
function genFirestLearnSidebar(type) {
  var mapArr = []

  if (type == 0) {
  } else if (type == 1) {
    mapArr = [
        '/book/',
        '/book/00_写在前面的话.md',
        '/book/01_在AIGC和数字中台的架构升级问题.md',
        '/book/10_智能体产品整体设计方案.md'
    ]
  } else if (type == 2) {
    mapArr = [
        '/book/03_超化研究上的全日志采集架构设计.md',
        '/book/04_使用AIGC提升平台能力架构设计经验.md',
    ]
  } else if (type == 3) {
    mapArr = [
        '/book/05_平台与AIGC交互的组件设计方案.md',
        '/book/06_平台与AIGC交互的多Agent交互方案.md',
        '/book/07_平台结合LLM自动驾驶设计方案.md',
        '/book/08_运维服务结合LLM产品升级设计.md',
        '/book/09_多角色Agent执行过程中的演化系统设计.md',
        '/book/19_智能体开发流程规范及示例.md'
    ]
  } else if (type == 4) {
    mapArr = [
        '/book/18_智能体与业务场景深度结合设计方案.md',
        '/book/10_运维自动化Agent角色_仿k8sGPT设计.md',
        '/book/11_闭环Agent角色_产品文案多Agent设计.md',
        '/book/12_超级工程师个体执行的落地方案设计.md',
        '/book/12_1_多Agent交互_仿MetaGPT.md',
        '/book/13_超级工程师个体实践过程中一些经验.md'
    ]
  } else if (type == 5) {
    mapArr = [
        '/book/14_服务批量生产自动化的设计思路.md',
        '/book/15_团队超自动化集成的一些思路与经验.md',
        '/book/16_阶段总结.md'
    ]
  } else if (type == 8) {
    mapArr = [
        '/book/17_致谢.md'
    ]
  }

  return mapArr.map(i => {
    return i
  })
}

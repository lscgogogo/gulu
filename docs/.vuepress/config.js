module.exports = {
    title: '轱辘UI',
    description: '一个好用的UI框架',
    themeConfig: {
    sidebar: [
        {
            title:'入门',
            children:[
                {
                    title: '安装',
                    path:'/install/'
                },
                {
                    title: '快速上手',
                    path:'/get-started/'
                },
            ]
        },
        {
            title: '组件',
            sidebarDepth: 2,
            children: [
                {
                    title: 'button',
                    path:'/components/button.md'
                },
              ]
        },
        
      ]
    }
  }
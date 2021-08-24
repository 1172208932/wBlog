module.exports = {
    title: 'Hello 晓旭',
    description: 'Just Text',
    base:'/wBlog/',
    head: [
        ['link', {
            rel: 'icon',
            href: 'https://img0.baidu.com/it/u=3041595518,152570800&fm=26&fmt=auto&gp=0.jpg'
        }]
    ],
    themeConfig: {
        logo: 'https://img0.baidu.com/it/u=3041595518,152570800&fm=26&fmt=auto&gp=0.jpg',
        nav: [{
                text: 'HOME',
                link: '/'
            },
            {
                text: 'WEB',
                link: '/web/', 
            },
            {
                text: 'GAME',
                link: '/game/', 
            },
            {
                text: 'GitHub',
                link: 'https://google.com'
            },
        ],
        sidebar: {
            '/web/': [
                '',
                '1e'
            ]
        }

    },

}
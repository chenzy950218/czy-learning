module.exports = {
	title: 'TypeScript4 文档',
	description: 'TypeScript4 最新官方文档翻译',
	base: '/czy-learning/',
	theme: 'reco',
	locales: {
		'/': {
			lang: 'zh-CN',
		},
	},
	themeConfig: {
		// lastUpdated: '上次更新',
		subSidebar: 'auto',
		nav: [
			{ text: '首页', link: '/' },
			{
				text: '冴羽的 JavaScript 博客',
				items: [
					{ text: 'Github', link: 'https://github.com/chenzy950218' },
					{
						text: '掘金',
						link: 'https://juejin.cn/user/712139234359182/posts',
					},
				],
			},
		],
		sidebar: [
			{
				title: '欢迎学习',
				path: '/',
				collapsable: false,
				children: [{ title: '学前必读', path: '/' }],
			},
			{
				title: '基础学习',
				path: '/handbook/ConditionalTypes',
				collapsable: false,
				children: [
					{ title: '条件类型', path: '/handbook/ConditionalTypes' },
					{ title: '泛型', path: '/handbook/Generics' },
				],
			},
		],
	},
};

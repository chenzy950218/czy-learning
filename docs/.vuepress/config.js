module.exports = {
	title: '文档',
	description: '翻译',
	base: '/czy-learning/',
	dest: 'public',
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
				text: 'czy的 JavaScript 博客',
				items: [
					{ text: 'Github', link: 'https://github.com/chenzy950218' },
					{
						text: '掘金',
						// link: 'https://juejin.cn/user/',
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
					{ title: '抽奖', path: '/handbook/test' },
					{ title: '抽奖2', path: '/handbook/test2' },
				],
			},
		],
	},
};

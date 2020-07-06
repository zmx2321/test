module.exports = [
  // 以docs为根目录
  { text: 'Home', link: '/' },
  
  // 下拉列表显示分组
  {
    text: 'test1',
    items: [
      { text: 'reademe', link: '/pages/test1/' },
      { 
        text: 'test1', 
        items: [
          { text: 'test1-1', link: '/pages/test1/test1-1/' },
          { text: 'test1-2', link: '/pages/test1/test1-2/' },
        ] 
      },
    ]
  },

  { text: 'test2', link: '/pages/test2/' },

  { text: 'test3', link: '/pages/test3/' },
];
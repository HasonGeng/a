wx.request({
  url: 'https://cnodejs.org/api/v1/topics', // 仅为示例，并非真实的接口地址
  data: {
    x: '',
    y: ''
  },
  header: {
    'content-type': 'application/json' // 默认值
  },
  success(res) {
    console.log(res.data)
  }
})
function downloadFile(url, typ, success) {
  wx.downloadFile({
    url: 'https://cnodejs.org/api/v1/topics',
    type: typ,
    success: function (res) {
      if (success) {
        success(res.tempFilePath)
      }
    },
    fail: function (err) {
      console.log(err)
    }
  })
}
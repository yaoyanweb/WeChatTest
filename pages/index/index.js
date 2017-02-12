//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  login: function() {
    wx.navigateTo({
      url: '../login/login'
    })
  },
  gprs: function() {
    wx.navigateTo({
      url: '../gprs/gprs'
    })
  },
  info: function() {
    wx.navigateTo({
      url: '../info/info'
    })
  },
  io: function() {
    wx.navigateTo({
      url: '../io/io'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})

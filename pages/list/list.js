
var util = require('../../utils/util.js')
Page({
  data: {
    list:[]
  },
  onLoad: function () {
    var vm = this;
    wx.request({
      url: 'https://admin.bestfood517.com:8080/api-admin/base/product/list',
      data: {
         sessionId:'6ae6c20a-300b-4aed-911b-718fc78e1a81',
          device:"pc",
          version:'2.0',
          skip:0,
          limit:10
      },
      success: function(res) {
        vm.data.list = res.data.result.data;
        console.log(vm.data.list);
      }
    })
  }
})

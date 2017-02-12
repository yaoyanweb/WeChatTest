Page({
  data: {
    user: '',
    pass: '',
    list: [],
    seid: '',
    modalHidden:true
  },
  onLoad: function() {
    var vm = this;
    wx.request({
      method: 'POST',
      url: 'https://admin.bestfood517.com:8080/api-admin/session/create',
      success: function(res) {
        console.log(res.data)
        vm.data.seid = res.data.result;
      }
    })
  },
  login: function() {
    var vm = this;
    wx.request({
      method: 'POST',
      url: 'https://admin.bestfood517.com:8080/api-admin/session/login-with-password',
      data: {
        phoneNumber: vm.data.user,
        password: vm.data.pass,
        sessionId: vm.data.seid,
        device: "pc",
        version: '2.0'
      },
      success: function(res) {
        console.log(res.data)
        if (res.data.status == 'ERROR') {
            vm.data.modalHidden=false;
            vm.data.modalText=res.data.message;
        }
      }
    })
  },
  user: function(e) {
    this.data.user = e.detail.value;
  },
  pass: function(e) {
    this.data.pass = e.detail.value;
  }
})
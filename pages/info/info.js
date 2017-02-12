var util = require('../../utils/util.js')
Page({
	data: {
		list: []
	},
	onLoad: function() {
		var vm = this;
		wx.getSystemInfo({
			success: function(res) {
				vm.data.list = res;
				console.log(vm.data.list);
			}
		})
	}
})
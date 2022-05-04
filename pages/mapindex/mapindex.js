// pages/mapindex/mapindex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  goPureMap () {
    wx.navigateTo({
      url: '/pages/mappure/mappure',
    })
  },
  goMaplearn () {
    wx.navigateTo({
      url: '/pages/maplearn/index',
    })
  },

  goMapMultiple () {
    wx.navigateTo({
      url: '/pages/mapmultiple/mapmultiple',
    })
  },
  testtoast () {
    wx.request({
      url: 'https://www.baidu.com',
      success() {
        wx.showToast({
          title: 'title',
        })
        wx.hideLoading();
      }
    })
  },
  goNewMap (e) {
    const page = e.currentTarget.dataset.maptype
    console.log(page)
    wx.navigateTo({
      url: `/pages/${page}/${page}`,
    })
  }
}) 
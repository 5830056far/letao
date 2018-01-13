/**
 * Created by Administrator on 2018/1/11.
 */
$(function(){

// 点击显示隐藏二级菜单
  $('.selecmenu').on('click',function(){
     $(this).next().slideToggle(500);
  });

  //左边菜单栏的显示与隐藏  同时main的padding也要切换
  $('.icon-menu').on('click',function(){
    $('.aside').toggleClass('now');
    $('.main').toggleClass('now');
  })
})


//进度条功能
$(function(){
  $(document).ajaxStart(function(){
    NProgress.start();
  });
  $(document).ajaxStop(function(){
    setTimeout(function () {
      NProgress.done();
    }, 1000);


  });
  //在非登录页面 查看用户是否登录  如果登录 就可以进入  如果没有登录就回到登录页面
  if(location.href.indexOf('login.html')==-1){
    $.ajax({
      type:"get",
      url:"/employee/checkRootLogin",
      success:function(info){
        if(info.error == 400){
          location.href= "login.html";
        }
      }
    })
  }






})
//退出登录

$(function(){

  //模态框初始化  模态框的初始化

  $('.icon-out').on('click',function(){
    $("#logoutModal").modal("show");
  })
  //然后点击退出按钮  完成退出功能
  $('.out-btn').on('click',function(){
    //发送ajax请求
    $.ajax({
      type:'get',
      url:"/employee/employeeLogout",
      success:function(info){
        if(info.success===true){
          location.href = "./login.html";
        }
      }
    }
    )
  })
})
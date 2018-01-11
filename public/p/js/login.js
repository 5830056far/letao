/**
 * Created by Administrator on 2018/1/11.
 */
$(function(){

  $form = $('form');
  $form.bootstrapValidator({

    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },

    fields:{
      username:{
        validators:{
          notEmpty:{
            message: '用户名不能为空'
          },
          callback:{
            message: '用户名不存在'
          }
        }
      },
      password:{
        validators:{
          notEmpty:{
            message: '密码不能为空'
          },
          stringLength:{
            min:6,
            max:8,
            message:'密码长度为6~8'
          },
          callback:{
            message: '密码错误'
          }
        }
      }
    }
  })
//  表单校验成功会提交ajax请求
  $form.on('success.form.bv', function (e) {
    e.preventDefault();

    //使用ajax提交逻辑
    $.ajax({
      type:"post",
      url:"/employee/employeeLogin",
      data:$form.serialize(),
      success:function(info){
         if(info.success){
           location.href = "index.html";
         }
         if(info.error==1000){

          $form.data('bootstrapValidator').updateStatus('username','INVALID','callback');
         }
        if(info.error==1001){
          $form.data('bootstrapValidator').updateStatus('password','INVALID','callback');
        }
      }
    })
  });

  //  给reset 注册点击事件  重置
  $('[type="reset"]').on('click',function(){
   $form.data('bootstrapValidator').resetForm(true);
  })

})
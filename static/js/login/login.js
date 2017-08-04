
/*
 *登录JS 
 */
$(function(){
     //--end  获取文本框焦点加样式--美工登陆样式
	/*var loginCookie = $.cookie('account');
	if(loginCookie == null || loginCookie == ""){
		$.cookie('account',"0");
	}*/
	//登录
	$("#login").click(function(){
	
		$.ajax({
			url		:path+"syslogin_loginCheck",
			type	:"POST",
			dataType:"json",
			data:$("#loginForm").serialize(),
			success :function(data){
				if(data=="0"){
					 alert('用户名或密码不正确!');
					 $("#loginPass").val("");
					 $("#password").val("");
					 var timenow = new Date().getTime();
				     var hrefStr="syslogin_Random?d="+timenow;
				  	$("#imageCode").attr("src",hrefStr);
				}else if(data=="3"){
					 alert('验证码不正确');
					 $("#loginPass").val("");
					 $("#password").val("");
					 var timenow = new Date().getTime();
				     var hrefStr="syslogin_Random?d="+timenow;
				  	$("#imageCode").attr("src",hrefStr);
				}else if(data=="4"){
					 alert('帐号密码错误5次帐号被锁定');
					 var timenow = new Date().getTime();
				     var hrefStr="syslogin_Random?d="+timenow;
				  	$("#imageCode").attr("src",hrefStr);
				}else{
					window.location.href=path+"syslogin_querythPower";
				}
			},
			error   :function(){
			}
		});
	});
	//验证码
	/**
	$("#imageCode").click(function(){
		  //获取当前的时间作为参数，无具体意义
     var timenow = new Date().getTime();
        //每次请求需要一个不同的参数，否则可能会返回同样的验证码
     //这和浏览器的缓存机制有关系，也可以把页面设置为不缓存，这样就不用这个参数了。
     	var hrefStr="login_Random?d="+timenow;
     	$("#imageCode").attr("src",hrefStr);
	});*/
		//验证码
	$("#imageCode,#flush,#imageCode2,#flush2").click(function(){
		  //获取当前的时间作为参数，无具体意义
     var timenow = new Date().getTime();
        //每次请求需要一个不同的参数，否则可能会返回同样的验证码
     //这和浏览器的缓存机制有关系，也可以把页面设置为不缓存，这样就不用这个参数了。
     	var hrefStr="syslogin_Random?d="+timenow;
     	$("#imageCode").attr("src",hrefStr);
     	$("#imageCode2").attr("src",hrefStr);
	});
	
});
$(document).keydown(function(event){ 
   
if(event.keyCode == 13){        
	$.ajax({
			url		:path+"syslogin_loginCheck",
			type	:"POST",
			dataType:"json",
			data:$("#loginForm").serialize(),
			success :function(data){
				if(data=="0"){
					 alert('用户名或密码不正确!');
					 $("#loginPass").val("");
					 $("#password").val("");
					 var timenow = new Date().getTime();
				     var hrefStr="syslogin_Random?d="+timenow;
				  	$("#imageCode").attr("src",hrefStr);
				}else if(data=="3"){
					 alert('验证码不正确');
					 $("#loginPass").val("");
					 $("#password").val("");
					 var timenow = new Date().getTime();
				     var hrefStr="syslogin_Random?d="+timenow;
				  	$("#imageCode").attr("src",hrefStr);
				}else {
					//window.location.href=path+"thPower_querythPower";querythPower
					window.location.href=path+"syslogin_querythPower";
				}
			},
			error   :function(){
			}
		}); 
  
}  
}); 
/**记住登陆帐号加密处理*/
/**$(document).ready(function(){
	var cookies = new Array();
	cookies = $.cookie('account').split("@");
	if(cookies != null && cookies!="0"){
		var b = new Base64();
		$("#loginAccount").focus();
		$("#loginAccount").val(b.decode(cookies[0]));
		$("#loginPass").focus();
		$("#loginPass").val(b.decode(cookies[1]));
		$("#rem").attr("checked",true);
	}
});*/
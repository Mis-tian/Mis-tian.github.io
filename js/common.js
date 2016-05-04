/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-15 10:33:21
 * @version $Id$
 */

$(function() {

	$("#signupForm").validate({
		debug: true,
		onsubmit:true,
		//ignore:'.one',//表单控件的class 用来排除不需要验证的控件  实际是用not 来排除。 类型为submit和reset的表单总是被忽略的
		rules: {
			user: {
				required: true,
				depends: function(a) {
					//alert(a.name);
				},
				min:[2],
				rangelength:[2,6],
				max:100
			},
			password1: {
				required: true
			},
			password2: {
				required: true,
				equalTo: '#inputPassword1',
				depends: function(a) {
					//alert(a.name);
				}
			},
			url1: {
				required: true,
				url: true
			},
			email1: {
				required: true,
				email: true
			},
			textarea: {
				required: true,
				rangelength:[2,100]
			},
			select: {
				required: true
			},
			optionsRadios: {
				required: true
			},
			checkbox: {
				required: true
			}
		},
		messages: {
			user: {
				required: '必填',
				rangelength: jQuery.validator.format("请输入 一个长度介于 {0} 和 {1} 之间的字符串"),
				max:$.validator.format('输入最大值为{0}'),
				min:$.validator.format('值最小不得小于{0}')
			},
			password1: {
				required: '必填'
			},
			password2: {
				required: '必填',
				equalTo: '密码不一致'
			},
			url1: {
				required: '必填',
				url: '必须是格式正确的网址'
			},
			email1: {
				required: '必填',
				email: '邮箱地址格式错误，请重新填写！'
			},
			textarea: {
				required: '必填',
				rangelength: jQuery.validator.format("请输入 一个长度介于 {0} 和 {1} 之间的字符串")
			},
			select: {
				required: '必填'
			},
			checkbox: {
				required: '必填'
			}
		},
		//success:'valid222',//成功之后加上一个类名 该类名添加在提示信息的标签上 默认是label
		//说明：如果指定它，当验证通过时显示一个消息。如果是String类型的，则添加该样式到标签中，如果是一个回调函数，则将标签作为其唯一的参数。
		success:function(label){//该参数是错误信息的容器  默认是label 每个表单控件通过验证之后 就会触发一次
			//$(label).parents('.form-group').slideDown();
		},
		groups: { // 如果 name属性的名字是写在一起的 提示信息就会出现在一个容器内 否则如果是分开写  那么错误提示消息也是分开的  如：  username：'url1 email1';
		/*自定义名字：后面是属性name*/	url1: 'url1',
		/*自定义名字：后面是属性name*/	email1: 'email1'
		},
		//errorLabelContainer: '.error_box', //在HTML文件内设置一个容器 这个容器将会集合所有提示信息 （错误消息标签的容器）。
		errorElement:'span',//错误标签的标签名字 替代默认的label
	 	errorContainer:'.error_box',//显示或者隐藏验证信息，可以自动实现有错误信息出现时把容器属性变为显示，无错误时隐藏，用处不大 (可和errorLabelContainer配合)。
   		wrapper: "li" ,//用一个指定的元素将错误消息包围。与errorLabelContainer一起创建一个错误消息列表非常有用。 
   		errorClass:'invalid',//指定错误消息的样式的类名 默认是 <label class="invalid"><label> 此样式作用于 表单控件的错误提示信息和表单控件中的内容
   		validClass:'success',//设定当验证通过时样式的类名 默认是 <label class="invalid"><label>此样式作用于 表单控件的错误提示信息和表单控件中的内容
   		highlight:function( element,errorClass ){
   			//类型：Callback    默认：添加errorClass到表单元素 
   			//说明：将未通过验证的表单元素设置高亮。 
   			$(element).fadeOut(function(){
   				$(element).fadeIn();
   			});//.parents('.form-group').slideUp();
   		},
		errorPlacement: function(error, ement) { //groups内的空间组成的错误提示，都放在errorPlacement内 如定义了errorContainer 则失效
			//用户自定义错误标签的显示位置。第一个参数：一个作为jQuery对象的错误标签，第二个参数为：一个作为jQuery对象的未通过验证的表单元素。 
			if (ement.attr('name') == 'url1' || ement.attr('name') == 'email1') {
				error.insertAfter(ement);
				// error.insertAfter($("#signupForm .form-group:last-child").closest('form'));   
				//这里可以把在groups 规定的提示信息 放到指定的地方
			} else {
				error.insertAfter(ement);
				//如果不是在groups 内规定的 就走else 会出现在默认的自身后面
			}
		},
		submitHandler: function(form, event) {
			// do other stuff for a valid form   
			//alert(form);
			$(form).ajaxSubmit({
				callback:function(status,elm){
					return ' name = '+status;
				},
				stus:function(){
					return '成功';
				}
			},event);
		},
		invalidHandler: function(e, validator) {
			console.log(e.target);
		}

	});

	$.fn.extend({
		ajaxSubmit: function(sitting,event) {
			var fm = $(event.target);
			var text_lab = $('<p class="text_p help-block"></p>');
				$('.text_p').detach();
				text_lab.appendTo($(fm).find('.form-group>.col-sm-10'));
			var ajaxHandler = function(e) {
				$.ajax({
					type: fm.attr('method'),
					url: fm.attr('action'),
					async: false,
					dataType: 'json',
					data: fm.serialize(),
					beforeSend: function(xhr) {
						alert('之前');
					},
					complete: function(xhr, status) {
						alert('请求之后'+status);
					},
					success: function(data, status, xhr) {
						$(fm).find('.form-group input,.form-group textarea,.form-group select').each(function(i,elm){
							$(this).closest('.form-group').find('.text_p').text(data[$(this).attr('name')]+sitting.callback.call(this,this.name)+' 状态值 = '+status);
						});
					}
				}).done(function( msg ) {
				  	alert(JSON.stringify( msg ));
				});
			};
			return this.each(function(i, elm) {
				var elem_name = elm.nodeName.toLowerCase();
				if (event != undefined) {
					ajaxHandler(event);
				} else if (elem_name == 'form') {
					$(elm).on('submit',ajaxHandler);
				}
			});
		}
	});

})
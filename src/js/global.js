import mui from '../plugins/mui/mui.js';

let lx={
	
	/*底部消息提示框
	 
	 * text:弹出内容
	 * time:弹出持续时间，可省略，默认1500毫秒
	 * fun:消息弹出后的回调，可省略
	 * */
	alertBottomTip(text,time=1500,fun){
		mui.toast(text,{ duration:time, type:'div' });
		if(fun==undefined)return;
		setTimeout(function(){
			fun()
		},time+300);
	},
	
	/*手机号码正则*/
	phoneReg:/^[1][3,4,5,7,8][0-9]{9}$/,
	
	/*全为数字验证*/
	numberReg:/^[\d\s]+$/,
	
};

export {lx};





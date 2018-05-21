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
	
	/*min<=随机数<=max*/
	RandomNumBoth(Min,Max){
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range); //四舍五入
        return num;
	},
	/*股海名言*/
	stockSaying:[
		'任何投资都需具备智慧性的忍耐力。——木子易',
		'只有当潮水退去的时候才会发现谁是裸体的。——巴菲特',
		'从事股票投资，会获得许多无形地收入。',
		'永远不要孤注一掷。——索罗斯',
		'任何直接投资都是专业投资，而专业投资需要专业知识作基础。——股学堂',
		'不做研究就投资，和玩扑克不看牌面一样盲目。——彼得·林奇',
		'股市猛于虎，房市猛于股。',
		'人生总是拉拉扯扯^^',
		'淡定人生——',
		'拥有一只股票，期待它下个早晨就上涨是十分愚蠢的。——巴菲特',
		''
	]
};

export {lx};





'use strict';

var qiaoPluginRegedit = require('../lib/qiao.plugin.regedit.js');

var test = async function(){
	try{
		// var key = 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
		var key = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
		var obj = {
			key : key,
			name: 'test',
			data: 'haha'
		};
		
		var res = await qiaoPluginRegedit.addValueSync(obj);
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();
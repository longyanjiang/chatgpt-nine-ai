'use strict';const _0x2d5f6f=_0x4928;(function(_0x1a7baa,_0x1bcad2){const _0x1dc576=_0x4928,_0x3dd591=_0x1a7baa();while(!![]){try{const _0x52f807=parseInt(_0x1dc576(0xfe))/0x1*(-parseInt(_0x1dc576(0x107))/0x2)+-parseInt(_0x1dc576(0xfb))/0x3*(parseInt(_0x1dc576(0x115))/0x4)+-parseInt(_0x1dc576(0x10b))/0x5*(-parseInt(_0x1dc576(0x101))/0x6)+-parseInt(_0x1dc576(0x10a))/0x7+-parseInt(_0x1dc576(0x100))/0x8*(parseInt(_0x1dc576(0x117))/0x9)+parseInt(_0x1dc576(0xfa))/0xa*(parseInt(_0x1dc576(0x120))/0xb)+parseInt(_0x1dc576(0x105))/0xc;if(_0x52f807===_0x1bcad2)break;else _0x3dd591['push'](_0x3dd591['shift']());}catch(_0x5b6311){_0x3dd591['push'](_0x3dd591['shift']());}}}(_0x1d0b,0x87167));function _0x4928(_0x431ae2,_0x1525fe){const _0x1d0b40=_0x1d0b();return _0x4928=function(_0x4928b7,_0x2141d5){_0x4928b7=_0x4928b7-0xf7;let _0x3ae780=_0x1d0b40[_0x4928b7];return _0x3ae780;},_0x4928(_0x431ae2,_0x1525fe);}Object[_0x2d5f6f(0x10c)](exports,'__esModule',{'value':!![]}),exports[_0x2d5f6f(0x113)]=exports['initDatabase']=void 0x0;function _0x1d0b(){const _0x430fbd=['IPv4','InitDatabase','responseData.data:\x20','115445WanGRs','application/json','NINE_AI_HOST','NineAi\x20授权认证','授权验证失败，请联系\x20vx:\x20J_longyan\x20或\x20qq：\x20927898639\x20处理！','请在env文件配置你的授权码、配置项为:\x20NINE_AI_KEY','DB_PASS','SHOW\x20DATABASES\x20LIKE\x20\x27','DB_HOST','end','570FxwOEM','11283BQPsek','Logger','address','352qeZGxM','internal','184JwbftG','42YNiXPv','CREATE\x20DATABASE\x20','env','family','17591052OqWyxn','127.0.0.1','586QZbkkb','log','initDatabase','7541534uCSFSH','124675wBmJUQ','defineProperty','createConnection','networkInterfaces','isArray','获取失败了...','https://api.jiangly.com/api/permission/auth','POST','nineAiInit','json','388LDIbrE','data','54801sNdKMu','execute','length','DB_DATABASE','DB_USER','then'];_0x1d0b=function(){return _0x430fbd;};return _0x1d0b();}const mysql=require('mysql2/promise'),common_1=require('@nestjs/common'),os=require('os'),fetch=require('isomorphic-fetch');function initDatabase(){const _0x16a036=_0x2d5f6f;mysql[_0x16a036(0x10d)]({'host':process['env'][_0x16a036(0xf8)],'user':process[_0x16a036(0x103)][_0x16a036(0x11b)],'password':process[_0x16a036(0x103)][_0x16a036(0x126)],'port':parseInt(process[_0x16a036(0x103)]['DB_PORT'])})[_0x16a036(0x11c)](async _0x2d564f=>{const _0x1b4705=_0x16a036,[_0x37aeeb]=await _0x2d564f[_0x1b4705(0x118)](_0x1b4705(0xf7)+process['env'][_0x1b4705(0x11a)]+'\x27');Array[_0x1b4705(0x10f)](_0x37aeeb)&&_0x37aeeb[_0x1b4705(0x119)]===0x0&&(await _0x2d564f[_0x1b4705(0x118)](_0x1b4705(0x102)+process[_0x1b4705(0x103)]['DB_DATABASE']),common_1[_0x1b4705(0xfc)][_0x1b4705(0x108)]('初始化创建数据库成功、数据库名为['+process[_0x1b4705(0x103)][_0x1b4705(0x11a)]+']',_0x1b4705(0x11e))),await _0x2d564f[_0x1b4705(0xf9)]();});}exports[_0x2d5f6f(0x109)]=initDatabase;async function nineAiInit(){const _0x3cc7c8=_0x2d5f6f;let _0x5c629a;const _0xca3fd6=os[_0x3cc7c8(0x10e)]();Object['keys'](_0xca3fd6)['forEach'](_0x29fa67=>{const _0x417995=_0x3cc7c8,_0x19a30b=_0xca3fd6[_0x29fa67];for(let _0x27f355=0x0;_0x27f355<_0x19a30b[_0x417995(0x119)];_0x27f355++){const _0x15f616=_0x19a30b[_0x27f355];if(_0x15f616[_0x417995(0x104)]===_0x417995(0x11d)&&_0x15f616[_0x417995(0xfd)]!==_0x417995(0x106)&&!_0x15f616[_0x417995(0xff)]){_0x5c629a=_0x15f616[_0x417995(0xfd)];break;}}});const _0x5c4cc2=process['env'][_0x3cc7c8(0x122)];common_1[_0x3cc7c8(0xfc)][_0x3cc7c8(0x108)]('您的服务器授权IP地址为：\x20['+(_0x5c4cc2||_0x3cc7c8(0x110))+']',_0x3cc7c8(0x123));if(!_0x5c4cc2)return{'success':![],'message':'未绑定您的服务器Ip、授权失败!!！'};const _0x15c705={'ip':_0x5c4cc2,'key':process[_0x3cc7c8(0x103)]['NINE_AI_KEY']};if(!process[_0x3cc7c8(0x103)]['NINE_AI_KEY'])return{'success':![],'message':_0x3cc7c8(0x125)};const _0x2c5fdd={'method':_0x3cc7c8(0x112),'headers':{'Content-Type':_0x3cc7c8(0x121)},'body':JSON['stringify'](_0x15c705)};try{const _0x42412b=await fetch(_0x3cc7c8(0x111),_0x2c5fdd),_0x5c43e2=await _0x42412b[_0x3cc7c8(0x114)]();console['log'](_0x3cc7c8(0x11f),_0x5c43e2[_0x3cc7c8(0x116)]);const {success:_0x29e12a,message:_0x3b9458}=_0x5c43e2[_0x3cc7c8(0x116)];return{'success':_0x29e12a,'message':_0x3b9458};return _0x5c43e2;}catch(_0x311c4d){return{'success':![],'message':_0x3cc7c8(0x124)};}}exports[_0x2d5f6f(0x113)]=nineAiInit;
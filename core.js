/* 绘图提示词与作品对照台: deterministic business rules. MIT License. */
(function(){
'use strict';
const H=typeof module==='object'&&module.exports?require('./common.js'):globalThis.OPC;
const {clone,esc,num,money,lines,choices,required,tableRows,metric,note,safeName,csv,parseCSV,day,today,unique,replaceTokens,documentHTML,crc32,zipBytes}=H;
const process=function process(d){
 const images=d._files?.images||[],rows=tableRows(d).map(r=>{const score=num(r.score,'评分');if(score>5)throw Error('评分最高5分');return [required(r.version,'版本'),r.prompt,r.params,r.file,score,images.some(f=>f.name===r.file)?'已关联':'未关联图片'];});
 return {metrics:[metric('创作版本',rows.length),metric('关联图片',images.length)],columns:['版本','提示词','参数','图片','评分','关联情况'],rows,view:{kind:'gallery',images},sections:[note('复用提示词',tableRows(d).map(r=>'【'+r.version+'】\n'+r.prompt+'\n参数：'+r.params).join('\n\n'))]};
};
const api={process};
if(typeof module==='object'&&module.exports)module.exports=api;else globalThis.Core=api;
})();

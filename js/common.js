function postvalid(form){
	$('#qr').disabled = true;
	return true;
}

function dropmenu(obj){
//$(obj.id + 'list').style.display = $(obj.id + 'list').style.display == 'none' ? '' : 'none';
$('#' + obj.id + 'list').slideToggle();
}

function confirm_delete(id, note, addon)
{
   if(confirm(note))
   {
	 self.location.href='?action=del'+(addon ? '&'+addon : '')+'&id='+id;
   }
}
function copy_code(txt) 
{
	if(window.clipboardData) {
		window.clipboardData.clearData();
		window.clipboardData.setData("Text", txt);
		alert("已复制,成功与否取决于浏览器设置！");
	} else if(navigator.userAgent.indexOf("Opera") != -1) {
		window.location = txt;
		alert("已复制,成功与否取决于浏览器设置！");
	} else if (window.netscape) {
		try {
			netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
		} catch (e) {
			alert("被浏览器拒绝！\n请在浏览器地址栏输入'about:config'并回车\n然后将'signed.applets.codebase_principal_support'设置为'true'");
		}
		var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
		if (!clip)
			return;
		var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
		if (!trans)
			return;
		trans.addDataFlavor('text/unicode');
		var str = new Object();
		var len = new Object();
		var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
		var copytext = txt;
		str.data = copytext;
		trans.setTransferData("text/unicode",str,copytext.length*2);
		var clipid = Components.interfaces.nsIClipboard;
		if (!clip)
			return false;
		clip.setData(trans,null,clipid.kGlobalClipboard);
		alert("复制成功！")
	}
}

//viewfilelist.js

function viewfilelist(torrentid)
{
var result=ajax.gets('viewfilelist.php?id='+torrentid);
document.getElementById("showfl").style.display = 'none';
document.getElementById("hidefl").style.display = 'block';
showlist(result);
}

function showlist(filelist)
{
document.getElementById("filelist").innerHTML=filelist;
}

function hidefilelist()
{
document.getElementById("hidefl").style.display = 'none';
document.getElementById("showfl").style.display = 'block';
document.getElementById("filelist").innerHTML="";
}

//viewpeerlist.js

function viewpeerlist(torrentid)
{
var list=ajax.gets('viewpeerlist.php?id='+torrentid);
document.getElementById("showpeer").style.display = 'none';
document.getElementById("hidepeer").style.display = 'block';
document.getElementById("peercount").style.display = 'none';
document.getElementById("peerlist").innerHTML=list;
}
function hidepeerlist()
{
document.getElementById("hidepeer").style.display = 'none';
document.getElementById("peerlist").innerHTML="";
document.getElementById("showpeer").style.display = 'block';
document.getElementById("peercount").style.display = 'block';
}

// smileit.js

function SmileIT(smile,form,text){
   document.forms[form].elements[text].value = document.forms[form].elements[text].value+" "+smile+" ";
   document.forms[form].elements[text].focus();
}

// saythanks.js

function saythanks(torrentid)
{
var list=ajax.post('thanks.php','','id='+torrentid);
document.getElementById("thanksbutton").innerHTML = document.getElementById("thanksadded").innerHTML;
document.getElementById("nothanks").innerHTML = "";
document.getElementById("addcuruser").innerHTML = document.getElementById("curuser").innerHTML;
}

// preview.js

function preview(obj) {
	var poststr = encodeURIComponent( document.getElementById("body").value );
	var result=ajax.posts('preview.php','body='+poststr);
	document.getElementById("previewouter").innerHTML=result;
	document.getElementById("previewouter").style.display = 'block';
	document.getElementById("editorouter").style.display = 'none';
	document.getElementById("unpreviewbutton").style.display = 'block';
	document.getElementById("previewbutton").style.display = 'none';
}

function unpreview(obj){
	document.getElementById("previewouter").style.display = 'none';
	document.getElementById("editorouter").style.display = 'block';
	document.getElementById("unpreviewbutton").style.display = 'none';
	document.getElementById("previewbutton").style.display = 'block';
}

// java_klappe.js

function klappe(id)
{
var klappText = document.getElementById('k' + id);
var klappBild = document.getElementById('pic' + id);

if (klappText.style.display == 'none') {
 klappText.style.display = 'block';
 // klappBild.src = 'pic/blank.gif';
}
else {
 klappText.style.display = 'none';
 // klappBild.src = 'pic/blank.gif';
}
}

function klappe_news(id)
{
var klappText = document.getElementById('k' + id);
var klappBild = document.getElementById('pic' + id);

if (klappText.style.display == 'none') {
 klappText.style.display = '';
 klappBild.className = 'minus';
}
else {
 klappText.style.display = 'none';
 klappBild.className = 'plus';
}
if(id=='needseeding'||id=='searchboxmain')
	{
	var hideframe = document.getElementById('hiddenframe');
	if(hideframe.src=='hide.php?'+id+'=1') hideframe.location.reload();
	else hideframe.src='hide.php?'+id+'=1';
	}
}
function klappe_ext(id)
{
var klappText = document.getElementById('k' + id);
var klappBild = document.getElementById('pic' + id);
var klappPoster = document.getElementById('poster' + id);
if (klappText.style.display == 'none') {
 klappText.style.display = 'block';
 klappPoster.style.display = 'block';
 klappBild.className = 'minus';
}
else {
 klappText.style.display = 'none';
 klappPoster.style.display = 'none';
 klappBild.className = 'plus';
}
}

// disableother.js

function disableother(select,target)
{
	if (document.getElementById(select).value == 0)
		document.getElementById(target).disabled = false;
	else {
	document.getElementById(target).disabled = true;
	document.getElementById(select).disabled = false;
	}
}

function disableother2(oricat,newcat)
{
	if (document.getElementById("movecheck").checked == true){
		document.getElementById(oricat).disabled = true;
		document.getElementById(newcat).disabled = false;
	}
	else {
		document.getElementById(oricat).disabled = false;
		document.getElementById(newcat).disabled = true;
	}
}

// ctrlenter.js
var submitted = false;
function ctrlenter(event,formname,submitname){
	if (submitted == false){
	var keynum;
	if (event.keyCode){
		keynum = event.keyCode;
	}
	else if (event.which){
		keynum = event.which;
	}
	if (event.ctrlKey && keynum == 13){
		submitted = true;
		document.getElementById(formname).submit();
		}
	}
}
function gotothepage(page){
var url=window.location.href;
var end=url.lastIndexOf("page");
url = url.replace(/#[0-9]+/g,"");
if (end == -1){
if (url.lastIndexOf("?") == -1)
window.location.href=url+"?page="+page;
else
window.location.href=url+"&page="+page;
}
else{
url = url.replace(/page=.+/g,"");
window.location.href=url+"page="+page;
}
}
function changepage(event){
var gotopage;
var keynum;
var altkey;
if (navigator.userAgent.toLowerCase().indexOf('presto') != -1)
altkey = event.shiftKey;
else altkey = event.altKey;
if (event.keyCode){
	keynum = event.keyCode;
}
else if (event.which){
	keynum = event.which;
}
if(altkey && keynum==33){
if(currentpage<=0) return;
gotopage=currentpage-1;
gotothepage(gotopage);
}
else if (altkey && keynum == 34){
if(currentpage>=maxpage) return;
gotopage=currentpage+1;
gotothepage(gotopage);
}
}
if(window.document.addEventListener){
window.addEventListener("keydown",changepage,false);
}
else{
window.attachEvent("onkeydown",changepage,false);
}

// bookmark.js
function bookmark(torrentid,counter)
{
var result=ajax.gets('bookmark.php?torrentid='+torrentid);
bmicon(result,counter);
}
function bmicon(status,counter)
{
	if (status=="added")
		document.getElementById("bookmark"+counter).innerHTML="<img class=\"bookmark\" src=\"pic/trans.gif\" alt=\"Bookmarked\" />";
	else if (status=="deleted")
		document.getElementById("bookmark"+counter).innerHTML="<img class=\"delbookmark\" src=\"pic/trans.gif\" src=\"pic/trans.gif\" alt=\"Unbookmarked\" />";
}

// check.js
var checkflag = "false";
function check(field,checkall_name,uncheckall_name) {
	if (checkflag == "false") {
		for (i = 0; i < field.length; i++) {
			field[i].checked = true;}
			checkflag = "true";
			return uncheckall_name; }
			else {
				for (i = 0; i < field.length; i++) {
					field[i].checked = false; }
					checkflag = "false";
					return checkall_name; }
}

// in torrents.php
var form='searchbox';
function SetChecked(chkName,ctrlName,checkall_name,uncheckall_name,start,count) {
	dml=document.forms[form];
	len = dml.elements.length;
	var begin;
	var end;
	if (start == -1){
	begin = 0;
	end = len;
	}
	else{
	begin = start;
	end = start + count;
	}
	var check_state;
	for( i=0 ; i<len ; i++) {
		if(dml.elements[i].name==ctrlName)
		{
			if(dml.elements[i].value == checkall_name)
			{
				dml.elements[i].value = uncheckall_name;
				check_state=1;
			}
			else
			{
				dml.elements[i].value = checkall_name;
				check_state=0;
			}
		}

	}
	for( i=begin ; i<end ; i++) {
		if (dml.elements[i].name.indexOf(chkName) != -1) {
			dml.elements[i].checked=check_state;
		}
	}
}

// funvote.js
function funvote(funid,yourvote)
{
var result=ajax.gets('fun.php?action=vote&id='+funid+"&yourvote="+yourvote);
voteaccept(yourvote);
}
function voteaccept(yourvote)
{
	if (yourvote=="fun" || yourvote=="dull"){
		document.getElementById("funvote").style.display = 'none';
		document.getElementById("voteaccept").style.display = 'block';
	}
}

// in upload.php
function getname()
{
var filename = document.getElementById("torrent").value;
var filename = filename.toString();
var lowcase = filename.toLowerCase();
var start = lowcase.lastIndexOf("\\"); //for Google Chrome on windows
if (start == -1){
start = lowcase.lastIndexOf("\/"); // for Google Chrome on linux
if (start == -1)
start == 0;
else start = start + 1;
}
else start = start + 1;
var end = lowcase.lastIndexOf("torrent");
var noext = filename.substring(start,end-1);
noext = noext.replace(/H\.264/ig,"H_264");
noext = noext.replace(/5\.1/g,"5_1");
noext = noext.replace(/2\.1/g,"2_1");
noext = noext.replace(/\./g," ");
noext = noext.replace(/H_264/g,"H.264");
noext = noext.replace(/5_1/g,"5.1");
noext = noext.replace(/2_1/g,"2.1");
document.getElementById("name").value=noext;
}

// in userdetails.php
function getusertorrentlistajax(userid, type, blockid)
{
if (document.getElementById(blockid).innerHTML==""){
var infoblock=ajax.gets('getusertorrentlistajax.php?userid='+userid+'&type='+type);
document.getElementById(blockid).innerHTML=infoblock;
}
return true;
}

// in functions.php
function get_ext_info_ajax(blockid,url,cache,type)
{
if (document.getElementById(blockid).innerHTML==""){
var infoblock=ajax.gets('getextinfoajax.php?url='+url+'&cache='+cache+'&type='+type);
document.getElementById(blockid).innerHTML=infoblock;
}
return true;
}

// in userdetails.php
function enabledel(msg){
document.deluser.submit.disabled=document.deluser.submit.checked;
alert (msg);
}

function disabledel(){
document.deluser.submit.disabled=!document.deluser.submit.checked;
}

// in mybonus.php
function customgift()
{
if (document.getElementById("giftselect").value == '0'){
document.getElementById("giftselect").disabled = true;
document.getElementById("giftcustom").disabled = false;
}
}

// in mybonus.php
function customgift()
{
if (document.getElementById("giftselect").value == '0'){
document.getElementById("giftselect").disabled = true;
document.getElementById("giftcustom").disabled = false;
}
}

// givebonus.js
function confirmgive(bonus)
{
	if   (confirm("Present "   +   bonus   +   " bonus as a gift?"))   return   true;  
		return false;
}

function givebonus(torrentid,bonus,bonus0)
{

  //  alert("aa");
if(confirmgive(bonus))
			{

if(bonus<bonus0)
{
	
	document.getElementById("nothanksbonus").innerHTML = "";
document.getElementById("addcuruserbonus").innerHTML = document.getElementById("curuserbonus").innerHTML+"("+bonus+".0)";
	var list=ajax.posts('givebonus.php','torrentid='+torrentid+'&bonus='+bonus);
	var aa="successful and thanks for "+bonus+" bonus!";
	alert(aa);
	}
	
else
{
	var aa="failure:your bonus less than "+bonus;
	alert(aa);
	}

			}
}

function givebonus0(torrentid,useridgift,bonus,bonus0)
{

if(confirmgive(bonus))
				{

if(bonus<bonus0)
{
	var nothanksbonus="nothanksbonus"+torrentid;
	var addcuruserbonus="addcuruserbonus"+torrentid;
	
	document.getElementById(nothanksbonus).innerHTML = "";
document.getElementById(addcuruserbonus).innerHTML = document.getElementById("curuserbonus").innerHTML+"("+bonus+".0)";



	var forumname=document.getElementById("spanforumname").innerHTML;
	var subject=document.getElementById("spansubject").innerHTML;
	var topicid=document.getElementById("spantopicid").innerHTML;
	var forumid=document.getElementById("spanforumid").innerHTML;

	var list=ajax.posts('givebon.php','torrentid='+torrentid+'&bonus='+bonus+'&useridgift='+useridgift+'&forumname='+forumname+'&subject='+subject+'&topicid='+topicid+'&forumid='+forumid);
	
	var aa="successful and thanks for "+bonus+" bonus!";
	alert(aa);
	}
	
else
{
	var aa="failure:your bonus less than "+bonus;
	alert(aa);
	}

				}
}

function bindcarsi(ptid, username, institution){
	var list=ajax.posts('bindcarsi.php','tjuptid=' + ptid + '&username=' + username + '&institution=' + institution );
	document.getElementById("bindspan").innerHTML = document.getElementById("alreadybinded").innerHTML;
}

function unbindcarsi(ptid, username, institution){
	var list=ajax.posts('unbindcarsi.php','tjuptid=' + ptid + '&username=' + username + '&institution=' + institution );
	document.getElementById("bindspan").innerHTML = document.getElementById("alreadyunbinded").innerHTML;
}

function auto_seeding(id)
{
	alert("autoseeding:"+id);
	document.getElementById("seedingbase").innerHTML = document.getElementById("seeding").innerHTML;
	ajax.gets('seeding.php?id=' + id );
}

function auto_removeseeding(id)
{
	alert("removeautoseeding:"+id);
	document.getElementById("seedingbase").innerHTML = document.getElementById("removeseeding").innerHTML;
	ajax.gets('seeding.php?id=' + id );
}

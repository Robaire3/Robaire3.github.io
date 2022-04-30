
/***********************************************
* AnyLink Drop Down Menu- ? Dynamic Drive (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

//Contents for menu 1
		
var menuwidth='165px' //default menu width
var menubgcolor='lightyellow'  //menu bgcolor
var disappeardelay=250  //menu disappear speed onMouseout (in miliseconds)
var hidemenu_onclick="yes" //hide menu when user clicks within menu?

/////No further editting needed

var ie4=document.all
var ns6=document.getElementById&&!document.all

if (ie4||ns6)
document.write('<div id="dropmenudiv" style="visibility:hidden;width:'+menuwidth+';background-color:'+menubgcolor+'" onMouseover="clearhidemenu()" onMouseout="dynamichide(event)"></div>')

function getposOffset(what, offsettype){
var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
var parentEl=what.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}


function showhide(obj, e, visible, hidden, menuwidth){
if (ie4||ns6)
dropmenuobj.style.left=dropmenuobj.style.top="-500px"
if (menuwidth!=""){
dropmenuobj.widthobj=dropmenuobj.style
dropmenuobj.widthobj.width=menuwidth
}
if (e.type=="click" && obj.visibility==hidden || e.type=="mouseover")
obj.visibility=visible
else if (e.type=="click")
obj.visibility=hidden
}

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function clearbrowseredge(obj, whichedge){
var edgeoffset=0
if (whichedge=="rightedge"){
var windowedge=ie4 && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
if (windowedge-dropmenuobj.x < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure-obj.offsetWidth
}
else{
var topedge=ie4 && !window.opera? iecompattest().scrollTop : window.pageYOffset
var windowedge=ie4 && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18
dropmenuobj.contentmeasure=dropmenuobj.offsetHeight
if (windowedge-dropmenuobj.y < dropmenuobj.contentmeasure){ //move up?
edgeoffset=dropmenuobj.contentmeasure+obj.offsetHeight
if ((dropmenuobj.y-topedge)<dropmenuobj.contentmeasure) //up no good either?
edgeoffset=dropmenuobj.y+obj.offsetHeight-topedge
}
}
return edgeoffset
}

function populatemenu(what){
if (ie4||ns6)
dropmenuobj.innerHTML=what.join("")
}


function dropdownmenu(obj, e, menucontents, menuwidth){
if (window.event) event.cancelBubble=true
else if (e.stopPropagation) e.stopPropagation()
clearhidemenu()
dropmenuobj=document.getElementById? document.getElementById("dropmenudiv") : dropmenudiv
populatemenu(menucontents)

if (ie4||ns6){
showhide(dropmenuobj.style, e, "visible", "hidden", menuwidth)
dropmenuobj.x=getposOffset(obj, "left")
dropmenuobj.y=getposOffset(obj, "top")
dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+"px"
dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+"px"
}

return clickreturnvalue();
}

function clickreturnvalue(){
if (ie4||ns6) return false
else return true
}

function contains_ns6(a, b) {
while (b.parentNode)
if ((b = b.parentNode) == a)
return true;
return false;
}

function dynamichide(e){
if (ie4&&!dropmenuobj.contains(e.toElement))
delayhidemenu()
else if (ns6&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
delayhidemenu()
}

function hidemenu(e){
if (typeof dropmenuobj!="undefined"){
if (ie4||ns6)
dropmenuobj.style.visibility="hidden"
}
}

function delayhidemenu(){
if (ie4||ns6)
delayhide=setTimeout("hidemenu()",disappeardelay)
}

function clearhidemenu(){
if (typeof delayhide!="undefined")
clearTimeout(delayhide)
}

if (hidemenu_onclick=="yes")
document.onclick=hidemenu

// Title: Tigra Tree Menu PRO
// URL: http://www.softcomplex.com/products/tigra_menu_tree_pro/
// Version: 1.3 (customized, compact version)
// Date: 01/10/2007
// Notes: Registration needed to use this script legally.
// Visit official site for details.

function tree(a_items,a_template,s_name){var i;this.a_tpl=a_template;this.a_config=a_items;this.o_root=this;this.a_index=[];this.a_nodes=[];this.o_selected=0;this.n_depth=-1;this.b_multiselection=Boolean(a_template['multiselections']);this.s_cookie_extension=a_template['cookie_ext']?a_template['cookie_ext']:'';this.b_buildsolid=a_template['b_solid'];this.b_collapseroot=!a_template['b_rootcollapse'];this.b_forse_states=!a_template['keep_states'];this.b_cookie=!a_template['disable_states'];var o_icone=new Image(),o_iconl=new Image();o_icone.src=a_template['icon_e'];o_iconl.src=a_template['icon_l'];a_template['im_e']=o_icone;a_template['im_l']=o_iconl;for(i=0;i<128;i++)if(a_template['icon_'+i]){var o_icon=new Image();o_icon.src=a_template['icon_'+i];a_template['im_'+i]=o_icon;}this.toggle=function(n_id){var o_item=this.a_index[n_id];o_item.open(o_item.n_state&8);};this.select=function(n_id){if(this.b_multiselection){var o_item=this.a_index[n_id];return o_item.select(o_item.n_state&4);}return this.a_index[n_id].select();};this.mover=function(n_id){var o_item=this.a_index[n_id];o_item.upstatus();o_item.mover(true);};this.mout=function(n_id){var o_item=this.a_index[n_id];o_item.upstatus(true);o_item.mout(true);};this.find_item=function(s_value,b_link){var a_items=[];b_link=b_link?1:0;for(var i=0;i<this.a_index.length;i++)if(this.a_index[i].a_config[b_link]==s_value){a_items[a_items.length]=this.a_index[i];}return a_items;};this.find_item_by_key=function(s_key,s_value){var a_items=[];for(var i=0;i<this.a_index.length;i++)if(this.a_index[i].a_config[2][s_key]==s_value){a_items[a_items.length]=this.a_index[i];}return a_items;};this.find_item_by_state=function(n_mask){var a_items=[];for(var i=0;i<this.a_index.length;i++)if(this.a_index[i].n_state&n_mask){a_items[a_items.length]=this.a_index[i];}return a_items;};this.b_needreload=false;this.ndom_refresh=function(){if(!B_DOM&&this.b_needreload)window.location=window.location;};this.reset_state=function(){var exp=new Date();exp.setTime(exp.getTime()-1000);document.cookie='tree_'+this.n_id+'_state=;'+this.s_cookie_extension+';expires='+exp.toGMTString();document.cookie='tree_'+this.n_id+'_selected=;'+this.s_cookie_extension+';expires='+exp.toGMTString();this.a_states=[];this.a_select=[];};while(!this.a_config[this.a_config.length-1])this.a_config.length=this.a_config.length-1;B_DOM=Boolean(document.body&&document.body.innerHTML);this.n_id=s_name?s_name:TREES.length;TREES[this.n_id]=this;if(a_template['onConstruct']){eval('var b_result='+a_template['onConstruct']+'(this);');if(!b_result)return false;}this.parse_cookies=function(a_cookies,s_key){var re_cookie=new RegExp('^\\s*(\\S+)\\s*=\\s*([\\d_]*)\\s*$'),s_value;for(var i=0;this.b_cookie&&i<a_cookies.length;i++){if(!re_cookie.exec(a_cookies[i])||RegExp.$1!=s_key)continue;s_value=RegExp.$2;return s_value.split('_');}return[];};var a_cookies=document.cookie.split(';'),s_key1='tree_'+this.n_id+'_state',s_key2='tree_'+this.n_id+'_selected';this.a_states=this.parse_cookies(a_cookies,s_key1);this.a_select=this.parse_cookies(a_cookies,s_key2);if(!this.a_states.length)this.b_loadfix=1;this.b_forse_states=this.b_loadfix||this.b_forse_states;this.a_children=[];for(i=0;i<a_items.length;i++)this.a_children[this.a_children.length]=new tree_item(this,i);if(a_template['beforeInit']){eval('var b_result='+a_template['beforeInit']+'(this);');if(!b_result)return false;}for(i=0;i<this.a_children.length;i++){this.a_children[i].init=item_init;document.write(this.a_children[i].init());}if(a_template['afterInit'])eval(a_template['afterInit']+'(this);');}function tree_item(o_parent,n_order){this.o_root=o_parent.o_root;this.n_depth=o_parent.n_depth+1;this.a_config=o_parent.a_config[n_order+(this.n_depth?3:0)];this.o_parent=o_parent;this.n_order=n_order;while(!this.a_config[this.a_config.length-1])this.a_config.length=this.a_config.length-1;if(!this.a_config[2])this.a_config[2]={};this.n_id=this.o_root.a_index.length;this.o_root.a_index[this.n_id]=this;if(this.o_root.b_forse_states&&typeof(this.a_config[2]['sl'])=='number')if(Boolean(this.a_config[2]['sl']))if(!this.o_root.b_multiselection)this.o_root.o_selected=this;this.state=item_state;this.b_fnode=this.a_config[2]['fn'];if(this.a_config.length<4&&!this.b_fnode)return;this.n_node_id=this.o_root.a_nodes.length;this.o_root.a_nodes[this.n_node_id]=this;for(var i=3;i<this.a_config.length;i++)new tree_item(this,i-3);}function item_open(b_close,b_noreload){if(Boolean(this.n_state&8)!=Boolean(b_close))return;var s_hdlr=this.a_config[2][b_close?'hc':'ho'];s_hdlr=(s_hdlr?s_hdlr:this.o_root.a_tpl[b_close?'onItemClose':'onItemOpen']);if(s_hdlr){eval('var b_result='+s_hdlr+'(this);');if(!b_result)return false;}this.n_state^=8;this.o_root.b_needreload=true;this.state_lookup();this.upstatus();if(this.o_root.b_cookie)this.save();if(B_DOM){if(this.a_config.length>3){var o_idiv=get_element('c'+this.o_root.n_id+'_'+this.n_id);if(!o_idiv.innerHTML)o_idiv.innerHTML=this.subhtml();o_idiv.style.display=(b_close?'none':'block');}}else if(!b_noreload&&this.a_config.length>3)window.location=window.location;}function item_select(b_deselect){var s_hdlr=this.a_config[2][b_deselect?'hd':'hs'];s_hdlr=(s_hdlr?s_hdlr:this.o_root.a_tpl[b_deselect?'onItemDeselect':'onItemSelect']);if(s_hdlr){eval('var b_result='+s_hdlr+'(this);');if(!b_result)return false;}if(b_deselect){this.n_state&=~4;}else{if(!this.o_root.b_multiselection){var o_olditem=this.o_root.o_selected;if(o_olditem&&o_olditem!=this&&o_olditem.upstatus){o_olditem.select(true);this.o_root.o_selected=this;}this.o_root.o_selected=this;}this.n_state|=4;}if(this.o_root.b_cookie)this.selsave();this.state_lookup();this.upstatus();return Boolean(this.a_config[1]);}function item_mover(){var s_hdlr=this.a_config[2]['hv'];s_hdlr=(s_hdlr?s_hdlr:this.o_root.a_tpl['onItemMover']);if(s_hdlr){eval('var b_result='+s_hdlr+'(this);');if(!b_result)return false;}this.n_state|=64;this.state_lookup();}function item_mout(){var s_hdlr=this.a_config[2]['hu'];s_hdlr=(s_hdlr?s_hdlr:this.o_root.a_tpl['onItemMout']);if(s_hdlr){eval('var b_result='+s_hdlr+'(this);');if(!b_result)return false;}this.n_state&=~64;this.state_lookup();}function item_state(){var o_states={'inited':false};if(this.upstatus){o_states['inited']=true;o_states['root']=this.n_state&32?true:false;o_states['node']=this.n_state&16?true:false;o_states['opened']=this.n_state&8?true:false;o_states['selected']=this.n_state&4?true:false;o_states['hovered']=this.n_state&64?true:false;o_states['last']=this.n_state&1?true:false;}return o_states;}function item_upstatus(b_clear){window.setTimeout("window.status=unescape('"+(b_clear?'':(this.a_config[2]['sb']?escape(this.a_config[2]['sb']):escape(this.a_config[0])+(this.a_config[1]?' ('+escape(this.a_config[1])+')':'')))+"')",10);}function item_init(){var a_index=this.o_root.a_index,n_id=this.n_id,i;this.state_lookup=item_state_lookup;this.mover=item_mover;this.mout=item_mout;this.select=item_select;this.selsave=item_selsave;this.load=item_load;this.upstatus=item_upstatus;var a_prop=[],re_pattern=new RegExp("o_tree_item","g");a_prop[1]=this.a_config[2]['hie']||this.o_root.a_tpl['userIconEvent'];a_prop[2]=this.a_config[2]['hte']||this.o_root.a_tpl['userTextEvent'];if(this.a_config.length>3||this.b_fnode){a_prop[0]=this.a_config[2]['hje']||this.o_root.a_tpl['userJoinEvent'];this.a_children=[];while(true){n_id++;if(n_id==a_index.length)break;if(a_index[n_id].n_depth<=this.n_depth)break;if(a_index[n_id].n_depth==this.n_depth+1){a_index[n_id].init=item_init;this.a_children[this.a_children.length]=a_index[n_id];}}this.open=item_open;this.save=item_save;this.subhtml=item_subhtml;}else{this.open=function(){};}this.n_state=(this.n_depth?0:32)+(this.a_children||this.b_fnode?16:0)+(this.n_order==this.o_parent.a_children.length-1?1:0);var s_iconstyle=(this.o_root.a_tpl['style_icons']?' class="'+this.o_root.a_tpl['style_icons']+'"':''),a_offset=[],o_current_item=this.o_parent,a_opt=this.a_config[2];var s_ealt=this.o_root.a_tpl['alt_e']?this.o_root.a_tpl['alt_e']:"";var s_lalt=this.o_root.a_tpl['alt_l']?this.o_root.a_tpl['alt_l']:"";for(i=this.n_depth;i>this.o_root.b_collapseroot;i--){a_offset[i]='<img src="'+this.o_root.a_tpl[o_current_item.n_state&33?'icon_e':'icon_l']+'" alt="'+(o_current_item.n_state&33?s_ealt:s_lalt)+'" title="'+(o_current_item.n_state&33?s_ealt:s_lalt)+'" border="0"'+s_iconstyle+'>';o_current_item=o_current_item.o_parent;}this.load();for(i in a_prop){if(a_prop[i]){a_prop[i]=item_getattrs(a_prop[i]);a_prop[i]=a_prop[i].replace(re_pattern,'TREES[\''+this.o_root.n_id+'\'].a_index['+this.n_id+']')}else a_prop[i]=''}var a_params=this.state_lookup(true);var do_wrap='',do_span='nowrap';var s_rollover=' onmouseover="TREES[\''+this.o_root.n_id+'\'].mover('+this.n_id+')" onmouseout="TREES[\''+this.o_root.n_id+'\'].mout('+this.n_id+')"';if(a_opt['wr']){this.n_wrap=a_opt['wr'];do_span=' valign=top rowspan='+a_opt['wr'];i=a_opt['wr'];while(--i){do_wrap+='<tr><td nowrap>'+a_offset.join('')+'<img src="'+this.o_root.a_tpl[this.n_state&1?'icon_e':'icon_l']+'" border="0"'+s_iconstyle+'>';if(this.a_children)do_wrap+='<img src="'+this.o_root.a_tpl[this.n_state&8?'icon_l':'icon_e']+'"  name="_i'+this.o_root.n_id+'_'+this.n_id+'_'+i+'" border="0"'+s_iconstyle+'>';do_wrap+='</tr>';}}return'<table cellpadding="0" cellspacing="0" border="0"><tr><td nowrap>'+a_offset.join('')+(a_params[1]?(this.a_children?'<a href="javascript: TREES[\''+this.o_root.n_id+'\'].toggle('+this.n_id+')" onclick = "TREES[\''+this.o_root.n_id+'\'].toggle('+this.n_id+');return false;" '+a_prop[0]+s_rollover+'><img src="'+a_params[1]+'" border="0" name="j'+this.o_root.n_id+'_'+this.n_id+'" alt="'+a_params[3]+'" title="'+a_params[3]+'"'+s_iconstyle+'></a>':'<img src="'+a_params[1]+'" border="0" alt="'+a_params[3]+'" title="'+a_params[3]+'"'+s_iconstyle+'>'):'')+'</td><td><a href="'+this.a_config[1]+'" target="'+(a_opt['tw']?a_opt['tw']:this.o_root.a_tpl['target'])+'" title="'+(a_opt['tt']?a_opt['tt']:'')+'" onclick="return TREES[\''+this.o_root.n_id+'\'].select('+this.n_id+')" ondblclick="TREES[\''+this.o_root.n_id+'\'].'+(this.a_children?'toggle(':'select(')+this.n_id+')" '+do_span+(a_params[2]?' class="'+a_params[2]+'"':'')+' id="t'+this.o_root.n_id+'_'+this.n_id+'" '+a_prop[2]+s_rollover+'>'+this.a_config[0]+'</a></td></tr>'+do_wrap+'</table>'+(this.a_children?'<div id="c'+this.o_root.n_id+'_'+this.n_id+'" style="display:'+(this.n_state&8?'block">'+this.subhtml():'none">'+(this.o_root.b_buildsolid?this.subhtml():''))+'</div>':'');}function item_subhtml(){var a_subhtml=[];for(var i=0;i<this.a_children.length;i++)a_subhtml[i]=this.a_children[i].init();return a_subhtml.join('');}function item_save(){var n_wordindex=Math.floor(this.n_node_id/31);this.o_root.a_states[n_wordindex]=(this.n_state&8?this.o_root.a_states[n_wordindex]|(1<<(this.n_node_id%31)):this.o_root.a_states[n_wordindex]&~(1<<(this.n_node_id%31)));document.cookie='tree_'+this.o_root.n_id+'_state='+this.o_root.a_states.join('_')+';'+this.o_root.s_cookie_extension;}function item_selsave(){var n_wordindex=Math.floor(this.n_id/31);this.o_root.a_select[n_wordindex]=(this.n_state&4?this.o_root.a_select[n_wordindex]|(1<<(this.n_id%31)):this.o_root.a_select[n_wordindex]&~(1<<(this.n_id%31)));document.cookie='tree_'+this.o_root.n_id+'_selected='+this.o_root.a_select.join('_')+';'+this.o_root.s_cookie_extension;}function item_load(){var s_hdlr=(s_hdlr?s_hdlr:this.o_root.a_tpl['onItemLoad']);if(s_hdlr){eval('var b_result='+s_hdlr+'(this);');if(!b_result)return false;}if(this.o_root.o_selected&&!this.o_root.b_cookie_select){if(this.o_root.o_selected==this&&this.o_root.b_forse_states){this.n_state|=4;if(this.o_root.b_cookie)this.selsave();}}else{if(this.o_root.b_forse_states&&typeof(this.a_config[2]['sl'])=='number'){if(Boolean(this.a_config[2]['sl']))this.n_state|=4;else this.n_state&=~4;if(this.o_root.b_cookie)this.selsave();}else{var n_wordindex=Math.floor(this.n_id/31);if(Boolean(this.o_root.a_select[n_wordindex]&(1<<(this.n_id%31)))){this.n_state|=4;if(!this.o_root.b_multiselection){this.o_root.b_cookie_select=1;this.o_root.o_selected=this;}}else this.n_state&=~4;}}if(!this.a_children)return;if(this.o_root.b_loadfix&&!this.n_depth&&typeof(this.a_config[2]['st'])!='number')this.a_config[2]['st']=1;if(this.o_root.b_forse_states&&typeof(this.a_config[2]['st'])=='number'){if(Boolean(this.a_config[2]['st']))this.n_state|=8;else this.n_state&=~8;if(this.o_root.b_cookie)this.save();return;}var n_wordindex=Math.floor(this.n_node_id/31);if(Boolean(this.o_root.a_states[n_wordindex]&(1<<(this.n_node_id%31))))this.n_state|=8;else this.n_state&=~8;}function item_state_lookup(b_return){var n_iindex=this.n_state&~3;var n_jindex=this.n_state&~68|2;var s_image=this.a_config[2]['i'+(n_iindex&~48)];if(!s_image)s_image=this.o_root.a_tpl['icon_'+n_iindex];if(!s_image)s_image=this.o_root.a_tpl['icon_'+(n_iindex&~64)];var s_junct=this.o_root.a_tpl['icon_'+n_jindex];var s_style=this.a_config[2]['s'+(n_iindex&~48)];if(!s_style)s_style=this.o_root.a_tpl['style_'+n_iindex];if(!s_style)s_style=this.o_root.a_tpl['style_'+(n_iindex&~64)];var s_jalt=this.o_root.a_tpl['alt_'+n_jindex];s_jalt=s_jalt?s_jalt:"";var s_ialt=this.a_config[2]['a'+(n_iindex&~48)]||this.o_root.a_tpl['alt_'+n_iindex];if(!s_ialt)s_ialt=this.o_root.a_tpl['alt_'+n_iindex];s_ialt=s_ialt?s_ialt:"";if(b_return)return[s_image,s_junct,s_style,s_jalt,s_ialt];var o_obj=document.images['j'+this.o_root.n_id+'_'+this.n_id];if(o_obj){o_obj.src=s_junct;o_obj.alt=o_obj.title=s_jalt}o_obj=document.images['i'+this.o_root.n_id+'_'+this.n_id];if(o_obj){o_obj.src=s_image;o_obj.alt=o_obj.title=s_ialt}if(this.n_wrap){var s_wimage=this.o_root.a_tpl[this.n_state&8?'icon_l':'icon_e'];var i=this.n_wrap;while(--i){o_obj=document.images['_i'+this.o_root.n_id+'_'+this.n_id+'_'+i];if(o_obj)o_obj.src=s_wimage;}}o_obj=get_element('t'+this.o_root.n_id+'_'+this.n_id);if(o_obj)o_obj.className=s_style;}function item_getattrs(a_prop){var s_result=[];for(var s_key in a_prop)s_result[s_result.length]=s_key+'="'+a_prop[s_key]+'"';return s_result.join(' ');}var TREES=[],B_DOM;get_element=document.all?function(s_id){return document.all[s_id]}:(document.getElementById?function(s_id){return document.getElementById(s_id)}:function(s_id){return null});

/*
	Feel free to use your custom icons for the tree. Make sure they are all of the same size.
	If you don't use some keys you can just remove them from this config
*/

var tree_tpl = {

	// general
	'target':'_blank',	// name of the frame links will be opened in
							// other possible values are:
							// _blank, _parent, _search, _self and _top
	// icons - junctions	
	'icon_2':'ico/joinbottom.gif', // junction for leaf
	'icon_3':'ico/join.gif',       // junction for last leaf
	'icon_18':'ico/plusbottom.gif', // junction for closed node
	'icon_19':'ico/plus.gif',       // junctioin for last closed node
	'icon_26':'ico/minusbottom.gif',// junction for opened node
	'icon_27':'ico/minus.gif',      // junctioin for last opended node

	// icons - misc
	'icon_e':'ico/empty.gif', // empty image
	'icon_l':'ico/line.gif',  // vertical line
	
	// styles - root
	'style_48':'mout', // normal root caption style
	'style_52':'mout', // selected root caption style
	'style_56':'mout', // opened root caption style
	'style_60':'mout', // selected opened root caption style
	'style_112':'mover', // mouseovered normal root caption style
	'style_116':'mover', // mouseovered selected root caption style
	'style_120':'mover', // mouseovered opened root caption style
	'style_124':'mover', // mouseovered selected opened root caption style
	
	// styles - node
	'style_16':'mout', // normal node caption style
	'style_20':'mout', // selected node caption style
	'style_24':'mout', // opened node caption style
	'style_28':'mout', // selected opened node caption style
	'style_80':'mover', // mouseovered normal node caption style
	'style_84':'mover', // mouseovered selected node caption style
	'style_88':'mover', // mouseovered opened node caption style
	'style_92':'mover', // mouseovered selected opened node caption style

	// styles - leaf
	'style_0':'mout', // normal leaf caption style
	'style_4':'mout', // selected leaf caption style
	'style_64':'mover', // mouseovered normal leaf caption style
	'style_68':'mover', // mouseovered selected leaf caption style
	
	// make sure there is no comma after the last key-value pair
	'onItemMover':'onItemMoverHandler',
	'onItemSelect':'onItemSelectHandler'
};

function onItemMoverHandler (o_item) {
	// skip duplicate events
	if (window.e_timer)
		clearTimeout(window.e_timer);
	window.e_timer = setTimeout('TREES[' + o_item.o_root.n_id + '].toggle(' + o_item.n_id + ')', 200);
	
	if (window.e_timer2)
		clearTimeout(window.e_timer2);

	var s_link = o_item.a_config[2]['pu'];
	if (s_link && s_link != window.window.s_lastPreview)
			window.e_timer2 = setTimeout('f_showPreview("' + o_item.a_config[2]['pu'] + '", ' + o_item.a_config[2]['pw'] + ', ' + o_item.a_config[2]['ph'] + ')', 200);
	else if (!s_link);

	return true;
}

function onItemSelectHandler (o_item) {
	if (o_item.a_config[2] && o_item.a_config[1] && o_item.a_config[2]['tw'] == 'previewFrame') {
		f_showPreview(o_item.a_config[1], o_item.a_config[2]['pw'], o_item.a_config[2]['ph']);
		return false;
	}
	return true;
}

function TTMS_search(obj,tree) {
	if (obj.value == '') {
		res_cont = getElement('tree_live_search_result');
		res_cont.innerHTML = '';
		res_cont.style.display = 'none';
		return;
	}

	var style = tree.a_tpl.style_16;
	var icon_page = tree.a_tpl.icon_0;
	var icon_node = tree.a_tpl.icon_16;
	var res = [],i;
	var patt = obj.value == '*' ? '' : obj.value;
	document.title = patt;
	var len = tree.a_index.length;
	for(i=0;i<len;i++){
		if(tree.a_index[i].a_config[0].search(eval('/'+patt+'/i'))!=-1){
			res[res.length] = tree.a_index[i];
		}
	}
	
	var str='<div style="font-weight:bold;font-size:12px;" class="paneText">Live Search Results:</div>';
	var a_iss;
	for(i = 0; i < res.length; i++) {
		a_iss = res[i].a_config[2];
		if (!a_iss) a_iss = [];
		str += '<div><a href="' + res[i].a_config[1] + '" class="' + style + '"'
			+ (a_iss['tt'] ? ' title="' + a_iss['tt'] + '"' : '')
			+ (a_iss['tw'] ? ' target="' + a_iss['tw'] + '"' : '')
			+ (a_iss['pu'] ? ' onmouseover="onItemMoverHandler(TREES[' + res[i].o_root.n_id + '].a_index[' + res[i].n_id + '])"' : '')
			+ '>' + res[i].a_config[0] + ' (' + (res[i].a_children ? res[i].a_children.length : 0) + ')</a></div>';
	}
	res_cont = getElement('tree_live_search_result');
	res_cont.innerHTML = str;
	res_cont.style.display = (res.length ? 'block' : 'none');
}

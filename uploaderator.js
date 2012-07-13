// JavaScript Document
//http://www.webmaster-source.com/2010/01/08/using-the-wordpress-uploader-in-your-plugin-or-theme/

jQuery(document).ready(function() {
	var mediaupload = false;
	var storeSendToEditor = '';
    var newSendToEditor   = '';
	storeSendToEditor = window.send_to_editor;


 newSendToEditor = function(html) {
	 imgurl = jQuery('img',html).attr('src');
	 imgtitle = jQuery('img',html).attr('title');
	 linkurl = jQuery(html)[0];
	 linktitle = jQuery(html).html();
	 obj = jQuery(html);
	 //jQuery('#upload_image').val(imgurl);
	 //jQuery('#upload_image').change();
	  
	 /*if (imgurl) { 
	 imglink = '<li><a href="' + imgurl + '">' + imgtitle + '</a></li>';
	 }
	 else {*/
	 imglink = '<li><a href="' + linkurl + '">' + linktitle + '</a></li>';
	 //}
	 //for(var key in obj) {
    //alert('key: ' + key + '\n' + 'value: ' + obj[key]);
//}
	 
	 //jQuery("#customEditor-1_ifr").contents().find("body").append(imglink);
	 //editorbox.contents().find("body").append(imglink);
	 window.field.val(linkurl);
	 window.test.html('upload pending - complete by clicking Publish/Update');

	 tb_remove();
	 window.send_to_editor = storeSendToEditor;
}

jQuery('.upload_image_button').click(function() {
 formfield = jQuery('#upload_image').attr('name');
 editorbox = jQuery(this).closest('div');
 editorbox = editorbox.find('iframe');
 tb_show('', 'media-upload.php?TB_iframe=true');
 window.send_to_editor = newSendToEditor;
 
 window.field = jQuery(this).siblings('.link');
 window.test = jQuery(this).siblings('#status');
 
 //window.test.html('something in here');
 
 //jQuery(this).val('its this one');
 //jQuery(this).siblings('#status').html("dfsfdf");
 
 return false;
});


 /*jQuery('#upload_image').change(function() {
  //alert('Handler for .change() called.');
  imglink = '<li><a href="' + imgurl + '">test</a></li>';
  //jQuery('#customEditor-1_ifr > body').val('asdfasdfasdfasdf');
  jQuery('#testbox').val('asdfasdfsdfasdfasdf');
  jQuery('#tinymce').val('asdfasdfsdfasdfasdf');
  jQuery("#customEditor-1_ifr").contents().find("body").append(imglink);

});*/

});

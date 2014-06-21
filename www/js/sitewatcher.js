var modalControl = "";
function renderModal(divId, height, width) {
	
 	$('#'+divId).modal({
 		onShow: function() {
 			modalControl = this ;
 		},
 	    onClose : function() {
 	    	modalControl.close();
 		}
 	});
 	$("#simplemodal-container").css({'height':height,'width':width,'padding':'0','border':'0'}); 
 	$(window).trigger('resize.simplemodal'); 
 	return modalControl;
 }
 
 function closeModal() {
	modalControl.close();
}
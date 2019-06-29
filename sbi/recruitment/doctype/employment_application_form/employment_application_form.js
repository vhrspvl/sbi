// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Employment Application Form', {
	refresh: function(frm) {
		console.log(frm.doc.yes)
		frm.toggle_display("position", frm.doc.yes);
		// $(cur_frm.fields_dict.yes.input).addClass('chb');
		// $(cur_frm.fields_dict.no.input).addClass('chb');
		// $(".chb").change(function() {
		//   $(".chb").prop('checked', false);
		//   $(this).prop('checked', true);
		// });

	},
	// 'onload_post_render': function(frm) {
	// 	$(cur_frm.fields_dict.yes.input).addClass('chb');
	// 	$(cur_frm.fields_dict.no.input).addClass('chb');
	// 	$(".chb").change(function() {
	// 	  $(".chb").prop('checked', false);
	// 	  $(this).prop('checked', true);
	// 	});
	
	//   },
});

// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.provide('erpnext');

// add toolbar icon
$(document).bind('toolbar_setup', function() {
	frappe.app.name = "ERPNext";

	frappe.help_feedback_link = '<p><a class="text-muted" \
		href="https://discuss.erpnext.com">Feedback</a></p>'


	$('.navbar-home').html('<img class="erpnext-icon" width="75" src="'+
			frappe.urllib.get_base_url()+'/files/sbi.png" />');

	$('[data-link="docs"]').attr("href", "https://frappe.github.io/erpnext/")
	$('[data-link="issues"]').attr("href", "https://github.com/frappe/erpnext/issues")


	// default documentation goes to erpnext
	// $('[data-link-type="documentation"]').attr('data-path', '/erpnext/manual/index');

	// additional help links for erpnext
	// var $help_menu = $('.dropdown-help ul .documentation-links');


});
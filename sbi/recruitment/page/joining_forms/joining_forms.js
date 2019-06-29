frappe.pages['joining-forms'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Joining Forms',
		single_column: true
	});
	page.main.html(frappe.render_template("joining_forms", {}));
}


import frappe
def get_context(context):
    context.users = frappe.db.sql("select first_name, last_name from `tabUser`")
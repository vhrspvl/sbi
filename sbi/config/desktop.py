# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"module_name": "Recruitment",
			"category": "Modules",
			"description": "Manage Employee Onboarding",
			"color": "grey",
			"icon": "octicon octicon-organization",
			"type": "module",
			"label": _("Employee Onboarding")
		}
	]

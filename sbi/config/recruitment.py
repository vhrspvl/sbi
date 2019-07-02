from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Employee Onboarding"),
			"items": [
				{
					"type": "doctype",
					"name": "Employment Application Form",
				}
			]
		}
	]
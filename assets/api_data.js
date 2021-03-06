define({ "api": [
  {
    "type": "post",
    "url": "/registrations",
    "title": "Register a New Domain & Launch Machine",
    "name": "CreateRegistration",
    "group": "Registration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>Mandatory Domain Name to register</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ec2_image_id",
            "description": "<p>Optional EC2 Image Id to Launch</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chef-json",
            "description": "<p>Optional Chef json to provision machine</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>unique id of the registration</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/RegistrationsController.js",
    "groupTitle": "Registration"
  },
  {
    "type": "get",
    "url": "/registrations",
    "title": "List all registrations",
    "name": "ListRegistrations",
    "group": "Registration",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registrations",
            "description": "<p>List of registrations by created date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/RegistrationsController.js",
    "groupTitle": "Registration"
  },
  {
    "type": "get",
    "url": "/registrations/:id",
    "title": "Check the status of a Registration",
    "name": "ShowRegistration",
    "group": "Registration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory Unique ID of the registration</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>unique id of the registration</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>Domain name of the registration in question</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "events",
            "description": "<p>List of events with name, data, timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "failed",
            "description": "<p>Defaults to false</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "complete",
            "description": "<p>Defaults to false</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/RegistrationsController.js",
    "groupTitle": "Registration"
  }
] });

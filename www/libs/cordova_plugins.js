cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "com.salesforce/com.salesforce.plugin.oauth.js",
        "id": "com.salesforce.plugin.oauth"
    },
    {
        "file": "com.salesforce/com.salesforce.plugin.sfaccountmanager.js",
        "id": "com.salesforce.plugin.sfacccountmanager"
    },
    {
        "file": "com.salesforce/com.salesforce.plugin.sdkinfo.js",
        "id": "com.salesforce.plugin.sdkinfo"
    },
    {
        "file": "com.salesforce/com.salesforce.plugin.smartstore.js",
        "id": "com.salesforce.plugin.smartstore",
        "clobbers": [
            "navigator.smartstore"
        ]
    },
    {
        "file": "com.salesforce/com.salesforce.util.bootstrap.js",
        "id": "com.salesforce.util.bootstrap"
    },
    {
        "file": "com.salesforce/com.salesforce.util.event.js",
        "id": "com.salesforce.util.event"
    },
    {
        "file": "com.salesforce/com.salesforce.util.exec.js",
        "id": "com.salesforce.util.exec"
    },
    {
        "file": "com.salesforce/com.salesforce.util.logger.js",
        "id": "com.salesforce.util.logger"
    },
    {
        "file": "org.apache.cordova.contacts/contacts.js",
        "id": "org.apache.cordova.contacts.contacts",
        "clobbers": [
            "navigator.contacts"
        ]
    },
    {
        "file": "org.apache.cordova.contacts/Contact.js",
        "id": "org.apache.cordova.contacts.Contact",
        "clobbers": [
            "Contact"
        ]
    },
    {
        "file": "org.apache.cordova.contacts/ContactAddress.js",
        "id": "org.apache.cordova.contacts.ContactAddress",
        "clobbers": [
            "ContactAddress"
        ]
    },
    {
        "file": "org.apache.cordova.contacts/ContactError.js",
        "id": "org.apache.cordova.contacts.ContactError",
        "clobbers": [
            "ContactError"
        ]
    },
    {
        "file": "org.apache.cordova.contacts/ContactField.js",
        "id": "org.apache.cordova.contacts.ContactField",
        "clobbers": [
            "ContactField"
        ]
    },
    {
        "file": "org.apache.cordova.contacts/ContactFindOptions.js",
        "id": "org.apache.cordova.contacts.ContactFindOptions",
        "clobbers": [
            "ContactFindOptions"
        ]
    },
    {
        "file": "org.apache.cordova.contacts/ContactName.js",
        "id": "org.apache.cordova.contacts.ContactName",
        "clobbers": [
            "ContactName"
        ]
    },
    {
        "file": "org.apache.cordova.contacts/ContactOrganization.js",
        "id": "org.apache.cordova.contacts.ContactOrganization",
        "clobbers": [
            "ContactOrganization"
        ]
    }   
];
module.exports.metadata = 
// TOP OF METADATA
{
	"com.salesforce": "2.3.0",
    "org.apache.cordova.contacts": "0.2.9",
    "cordova-plugin-whitelist": "1.0.0"
}
// BOTTOM OF METADATA
});
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
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
	"com.salesforce": "2.3.0",
    "cordova-plugin-whitelist": "1.0.0"
}
// BOTTOM OF METADATA
});
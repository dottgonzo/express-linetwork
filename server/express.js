"use strict";
var express = require("express");
var index_1 = require("../index");
var options = {
    wpasupplicant_path: "/etc/wpa_supplicant/wpa_supplicant.conf",
    hostapd: {
        driver: 'rtl871xdrv',
        ssid: 'testttap',
        wpa_passphrase: 'testpass'
    },
    mobile: {
        provider: {
            label: "Tre Ricaricabile",
            apn: "tre.it",
            phone: "*99#",
            username: "tre",
            password: "tre"
        },
        device: 1 - 1.4
    }
};
var NetManager = new index_1.default(options);
var app = express();
app.use('/networking', NetManager.Router());
app.listen(3000, function () {
    console.log('3000!');
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9leHByZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUNuQyxzQkFBb0IsVUFBVSxDQUFDLENBQUE7QUFFL0IsSUFBSSxPQUFPLEdBQUM7SUFDVixrQkFBa0IsRUFBQyx5Q0FBeUM7SUFDNUQsT0FBTyxFQUFDO1FBQ04sTUFBTSxFQUFDLFlBQVk7UUFDbkIsSUFBSSxFQUFDLFVBQVU7UUFDZixjQUFjLEVBQUMsVUFBVTtLQUMxQjtJQUNELE1BQU0sRUFBQztRQUNMLFFBQVEsRUFBQztZQUNQLEtBQUssRUFBQyxrQkFBa0I7WUFDeEIsR0FBRyxFQUFDLFFBQVE7WUFDWixLQUFLLEVBQUMsTUFBTTtZQUNaLFFBQVEsRUFBQyxLQUFLO1lBQ2QsUUFBUSxFQUFDLEtBQUs7U0FDZjtRQUNELE1BQU0sRUFBQyxDQUFDLEdBQUMsR0FBRztLQUNiO0NBQ0YsQ0FBQztBQUVELElBQUksVUFBVSxHQUFDLElBQUksZUFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JDLElBQUksR0FBRyxHQUFDLE9BQU8sRUFBRSxDQUFDO0FBRWxCLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBSTVDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJzZXJ2ZXIvZXhwcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9pbmRleFwiO1xuXG5sZXQgb3B0aW9ucz17XG4gIHdwYXN1cHBsaWNhbnRfcGF0aDpcIi9ldGMvd3BhX3N1cHBsaWNhbnQvd3BhX3N1cHBsaWNhbnQuY29uZlwiLFxuICBob3N0YXBkOntcbiAgICBkcml2ZXI6J3J0bDg3MXhkcnYnLFxuICAgIHNzaWQ6J3Rlc3R0dGFwJyxcbiAgICB3cGFfcGFzc3BocmFzZTondGVzdHBhc3MnXG4gIH0sXG4gIG1vYmlsZTp7XG4gICAgcHJvdmlkZXI6e1xuICAgICAgbGFiZWw6XCJUcmUgUmljYXJpY2FiaWxlXCIsXG4gICAgICBhcG46XCJ0cmUuaXRcIixcbiAgICAgIHBob25lOlwiKjk5I1wiLFxuICAgICAgdXNlcm5hbWU6XCJ0cmVcIixcbiAgICAgIHBhc3N3b3JkOlwidHJlXCJcbiAgICB9LFxuICAgIGRldmljZToxLTEuNFxuICB9XG59O1xuXG4gbGV0IE5ldE1hbmFnZXI9bmV3IE1hbmFnZXIob3B0aW9ucyk7XG5sZXQgYXBwPWV4cHJlc3MoKTtcblxuYXBwLnVzZSgnL25ldHdvcmtpbmcnLCBOZXRNYW5hZ2VyLlJvdXRlcigpKTtcblxuXG5cbmFwcC5saXN0ZW4oMzAwMCwgZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZygnMzAwMCEnKTtcbn0pOyJdfQ==

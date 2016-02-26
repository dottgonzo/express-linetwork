"use strict";
var express = require("express");
var Manager = require("../index");
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
var NetManager = new Manager(options);
var app = express();
app.use('/networking', NetManager.Router());
app.listen(3000, function () {
    console.log('3000!');
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9leHByZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUNuQyxJQUFPLE9BQU8sV0FBUyxVQUFVLENBQUMsQ0FBQztBQUVuQyxJQUFJLE9BQU8sR0FBQztJQUNWLGtCQUFrQixFQUFDLHlDQUF5QztJQUM1RCxPQUFPLEVBQUM7UUFDTixNQUFNLEVBQUMsWUFBWTtRQUNuQixJQUFJLEVBQUMsVUFBVTtRQUNmLGNBQWMsRUFBQyxVQUFVO0tBQzFCO0lBQ0QsTUFBTSxFQUFDO1FBQ0wsUUFBUSxFQUFDO1lBQ1AsS0FBSyxFQUFDLGtCQUFrQjtZQUN4QixHQUFHLEVBQUMsUUFBUTtZQUNaLEtBQUssRUFBQyxNQUFNO1lBQ1osUUFBUSxFQUFDLEtBQUs7WUFDZCxRQUFRLEVBQUMsS0FBSztTQUNmO1FBQ0QsTUFBTSxFQUFDLENBQUMsR0FBQyxHQUFHO0tBQ2I7Q0FDRixDQUFDO0FBRUQsSUFBSSxVQUFVLEdBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckMsSUFBSSxHQUFHLEdBQUMsT0FBTyxFQUFFLENBQUM7QUFFbEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFJNUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InNlcnZlci9leHByZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IE1hbmFnZXI9cmVxdWlyZShcIi4uL2luZGV4XCIpO1xuXG5sZXQgb3B0aW9ucz17XG4gIHdwYXN1cHBsaWNhbnRfcGF0aDpcIi9ldGMvd3BhX3N1cHBsaWNhbnQvd3BhX3N1cHBsaWNhbnQuY29uZlwiLFxuICBob3N0YXBkOntcbiAgICBkcml2ZXI6J3J0bDg3MXhkcnYnLFxuICAgIHNzaWQ6J3Rlc3R0dGFwJyxcbiAgICB3cGFfcGFzc3BocmFzZTondGVzdHBhc3MnXG4gIH0sXG4gIG1vYmlsZTp7XG4gICAgcHJvdmlkZXI6e1xuICAgICAgbGFiZWw6XCJUcmUgUmljYXJpY2FiaWxlXCIsXG4gICAgICBhcG46XCJ0cmUuaXRcIixcbiAgICAgIHBob25lOlwiKjk5I1wiLFxuICAgICAgdXNlcm5hbWU6XCJ0cmVcIixcbiAgICAgIHBhc3N3b3JkOlwidHJlXCJcbiAgICB9LFxuICAgIGRldmljZToxLTEuNFxuICB9XG59O1xuXG4gbGV0IE5ldE1hbmFnZXI9bmV3IE1hbmFnZXIob3B0aW9ucyk7XG5sZXQgYXBwPWV4cHJlc3MoKTtcblxuYXBwLnVzZSgnL25ldHdvcmtpbmcnLCBOZXRNYW5hZ2VyLlJvdXRlcigpKTtcblxuXG5cbmFwcC5saXN0ZW4oMzAwMCwgZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZygnMzAwMCEnKTtcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

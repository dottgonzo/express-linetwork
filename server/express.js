"use strict";
var express = require("express");
var Manager = require("../index");
var options = {
    wpasupplicant_path: "dd",
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
        options: {
            retry: false
        }
    }
};
var NetManager = new Manager(options);
var app = express();
app.use('/networking', NetManager.Router());
app.listen(3000, function () {
    console.log('3000!');
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9leHByZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUNuQyxJQUFPLE9BQU8sV0FBUyxVQUFVLENBQUMsQ0FBQztBQUVuQyxJQUFJLE9BQU8sR0FBQztJQUNWLGtCQUFrQixFQUFDLElBQUk7SUFDdkIsT0FBTyxFQUFDO1FBQ04sTUFBTSxFQUFDLFlBQVk7UUFDbkIsSUFBSSxFQUFDLFVBQVU7UUFDZixjQUFjLEVBQUMsVUFBVTtLQUMxQjtJQUNELE1BQU0sRUFBQztRQUNMLFFBQVEsRUFBQztZQUNQLEtBQUssRUFBQyxrQkFBa0I7WUFDeEIsR0FBRyxFQUFDLFFBQVE7WUFDWixLQUFLLEVBQUMsTUFBTTtZQUNaLFFBQVEsRUFBQyxLQUFLO1lBQ2QsUUFBUSxFQUFDLEtBQUs7U0FDZjtRQUNELE9BQU8sRUFBQztZQUNOLEtBQUssRUFBQyxLQUFLO1NBQ1o7S0FDRjtDQUNGLENBQUM7QUFFRCxJQUFJLFVBQVUsR0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQyxJQUFJLEdBQUcsR0FBQyxPQUFPLEVBQUUsQ0FBQztBQUVsQixHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUk1QyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoic2VydmVyL2V4cHJlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgTWFuYWdlcj1yZXF1aXJlKFwiLi4vaW5kZXhcIik7XG5cbmxldCBvcHRpb25zPXtcbiAgd3Bhc3VwcGxpY2FudF9wYXRoOlwiZGRcIixcbiAgaG9zdGFwZDp7XG4gICAgZHJpdmVyOidydGw4NzF4ZHJ2JyxcbiAgICBzc2lkOid0ZXN0dHRhcCcsXG4gICAgd3BhX3Bhc3NwaHJhc2U6J3Rlc3RwYXNzJ1xuICB9LFxuICBtb2JpbGU6e1xuICAgIHByb3ZpZGVyOntcbiAgICAgIGxhYmVsOlwiVHJlIFJpY2FyaWNhYmlsZVwiLFxuICAgICAgYXBuOlwidHJlLml0XCIsXG4gICAgICBwaG9uZTpcIio5OSNcIixcbiAgICAgIHVzZXJuYW1lOlwidHJlXCIsXG4gICAgICBwYXNzd29yZDpcInRyZVwiXG4gICAgfSxcbiAgICBvcHRpb25zOntcbiAgICAgIHJldHJ5OmZhbHNlXG4gICAgfVxuICB9XG59O1xuXG4gbGV0IE5ldE1hbmFnZXI9bmV3IE1hbmFnZXIob3B0aW9ucyk7XG5sZXQgYXBwPWV4cHJlc3MoKTtcblxuYXBwLnVzZSgnL25ldHdvcmtpbmcnLCBOZXRNYW5hZ2VyLlJvdXRlcigpKTtcblxuXG5cbmFwcC5saXN0ZW4oMzAwMCwgZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZygnMzAwMCEnKTtcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

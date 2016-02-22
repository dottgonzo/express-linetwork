import * as express from "express";
import Manager=require("../index");

let options={
  port:4000,
  wpasupplicant_path:"dd",
  hostapd:{
    driver:'rtl871xdrv',
    ssid:'testttap',
    wpa_passphrase:'testpass'
  },
  mobile:{
    provider:{
      label:"Tre Ricaricabile",
      apn:"tre.it",
      phone:"*99#",
      username:"tre",
      password:"tre"
    },
    options:{
      retry:false
    }
  }
};

let NetManager=new Manager(options);
let app=express();
app.use('/birds', NetManager.Router());
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
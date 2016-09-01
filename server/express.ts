import * as express from "express";
import Manager from "../index";

let options={
  wpasupplicant_path:"/etc/wpa_supplicant/wpa_supplicant.conf",
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
    device:1-1.4
  }
};

 let NetManager=new Manager(options);
let app=express();

app.use('/networking', NetManager.Router());



app.listen(3000, function () {
  console.log('3000!');
});
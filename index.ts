import * as express from "express";
import linetwork from "linetwork";

interface IProvider {

    label?: string;
    apn: string;
    phone?: string
    username?: string;
    password?: string;

}

interface IMobile {
    provider: IProvider;
    device?: any;
    configFilePath?: string;
}
interface IHostapdcf {
    driver: string;
    ssid: string;
    wpa_passphrase: any;
};
interface ClassOpt {
    wifi_interface?: string;
    mobile?: IMobile;
    hostapd?: IHostapdcf;
    wpasupplicant_path?: string;
}

export default class NetManager extends linetwork {
    NetManager;
    constructor(conf: ClassOpt) {
        super(conf);

    }


    Router() {
        let NetManager = this;
        let Router = express.Router();
        
        
        // define the home page route

        
        Router.get('/connect/:recovery', function(req, res) {
            NetManager.connection().then(function() {
                res.send({ ok: true });
            }).catch(function() {
                res.send({ ok: false });

            });
        });
        Router.get('/list', function(req, res) {
            NetManager.networks().then(function(n) {
                res.send(n);
            }).then(function(err) {
                res.send(err);
            })

        });




        Router.get('/mobile/providers', function(req, res) {
            res.send(NetManager.mobileproviders());

        });
        Router.get('/mobile/providers/country/:country', function(req, res) {
            let providers = NetManager.mobileproviders();
            res.send(providers.country(req.params.country));

        });
        Router.get('/recovery', function(req, res) {
            NetManager.recovery().then(function() {
                res.send({ ok: true });
            }).catch(function() {
                res.send({ ok: false });
            });

        });
        Router.post('/configuration', function(req, res) {
            console.log('Manager home page');

        });

        Router.get('/wifi/wpa', function(req, res) {
            let wpamanager = NetManager.wpamanager();
            res.send(wpamanager.listwpa);


        });
        Router.post('/wifi/wpa/add', function(req, res) {
            let wpamanager = NetManager.wpamanager();
            wpamanager.addwpa(req.params.ssid, req.params.password, req.params.priority).then(function() {
                res.send({ ok: true });
            }).catch(function() {
                res.send({ ok: false });
            })

        });
        Router.post('/wifi/wpa/remove/:ssid', function(req, res) {
            let wpamanager = NetManager.wpamanager();
            wpamanager.removewpa(req.params.ssid).then(function() {
                res.send({ ok: true });
            }).catch(function() {
                res.send({ ok: false });
            })

        });

        return Router;
    }

}
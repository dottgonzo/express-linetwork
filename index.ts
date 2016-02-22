import * as express from "express";
import linetwork = require("linetwork");

interface IProvider {

    label?: string;
    apn: string;
    phone?: string
    username?: string;
    password?: string;

}

interface IMobile {
    provider?: IProvider;
    options?: {
        verbose?: boolean;
        wvdialFile?: string;
        dev?: any;
        ifOffline?: boolean;
        retry?: boolean;
    };
}
interface IHostapdcf {
    driver?: string;
    ssid: string;
    wpa_passphrase: any;
};
interface ClassOpt {
    port: number;
    recovery_interface?: string;
    mobile?: IMobile;
    hostapd?: IHostapdcf;
    wpasupplicant_path?: string;
}

export = class NetRouter {
    NetManager;
    constructor(conf: ClassOpt) {
        this.NetManager = new linetwork(conf);

    }

    connect(recovery) {
        this.NetManager.connection(recovery)
    }

    Router() {
        let NetManager = this.NetManager;
        let Router = express.Router();
        
        
        // define the home page route
        Router.get('/', function(req, res) {
            res.send('Manager home page');
        });
        Router.get('/connect', function(req, res) {
            this.NetManager.connection(req.body.recovery).then(function() {
                res.send({ ok: true });
            }).catch(function() {
                res.send({ ok: false });

            });
        });
        Router.get('/list', function(req, res) {
            res.send(this.NetManager.networks());
        });



        Router.get('/mobile', function(req, res) {
            res.send('Manager mobile page');

        });
        Router.get('/mobile/providers', function(req, res) {
            res.send(this.NetManager.mobileproviders());

        });
        Router.get('/mobile/providers/country', function(req, res) {
            let providers = this.NetManager.mobileproviders();
            res.send(providers.country(req.body.country));

        });
        Router.get('/recovery', function(req, res) {
            this.NetManager.recovery().then(function() {
                res.send({ ok: true });
            }).catch(function() {
                res.send({ ok: false });
            });

        });
        Router.post('/configuration', function(req, res) {
            console.log('Manager home page');

        });
        Router.get('/wifi', function(req, res) {
            res.send('Manager wifi page');
        });

        Router.get('/wifi/wpa', function(req, res) {
            let wpamanager = this.NetManager.wpamanager();
            res.send(wpamanager.list);


        });
        Router.post('/wifi/wpa/add', function(req, res) {
            let wpamanager = this.NetManager.wpamanager();
            wpamanager.add(req.body.ssid, req.body.password, req.body.priority).then(function() {
                res.send({ ok: true });
            }).catch(function() {
                res.send({ ok: false });
            })

        });
        Router.post('/wifi/wpa/remove', function(req, res) {
            let wpamanager = this.NetManager.wpamanager();
            wpamanager.remove(req.body.ssid).then(function() {
                res.send({ ok: true });
            }).catch(function() {
                res.send({ ok: false });
            })


        });

        return Router;
    }

}
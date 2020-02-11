/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_create-iot-workbench-project.html",
    "revision": "fbc9e3b57855ee779b9c09212dc5c8b5"
  },
  {
    "url": "01-prepare-environment.html",
    "revision": "22f118725be103a500ff33795d9385a7"
  },
  {
    "url": "02-azure-function-detect-activity.html",
    "revision": "5ff36dcd1cf33b5870da5c5541a0c7cb"
  },
  {
    "url": "03-connect-iot-devices-hub.html",
    "revision": "948472329d4d02bb60b70374ef0d1924"
  },
  {
    "url": "04-simulate-devices.html",
    "revision": "aa7c4d8ee339b9a3ba125c6a79fbac56"
  },
  {
    "url": "404.html",
    "revision": "3509b084575e68664a721ee28dbae637"
  },
  {
    "url": "assets/css/0.styles.694f9356.css",
    "revision": "c766a116168ec87022f371020c7075dc"
  },
  {
    "url": "assets/img/check-01.7c3dd063.png",
    "revision": "7c3dd063bb7a2e02ba1e832ba2ee134e"
  },
  {
    "url": "assets/img/check-02.7fe86f38.png",
    "revision": "7fe86f38f742ba7efd977e47827c6f99"
  },
  {
    "url": "assets/img/compresseur-1.29a6eb78.jpg",
    "revision": "29a6eb788168b1e9c9390f18767f6eb2"
  },
  {
    "url": "assets/img/compresseur-3.d9f0d2b0.jpg",
    "revision": "d9f0d2b0ea28a93449273bb7f0cd68f5"
  },
  {
    "url": "assets/img/connect-ssid.578d50c6.png",
    "revision": "578d50c625be7ab38a63b664ebf2565f"
  },
  {
    "url": "assets/img/connector.0c62b5fd.png",
    "revision": "0c62b5fd8b3101bebf550fdaed4f9020"
  },
  {
    "url": "assets/img/creation-iotdevice.5d8f4ca0.gif",
    "revision": "5d8f4ca05174cf455227d3794de2acf8"
  },
  {
    "url": "assets/img/function-connect-01.57fdc14c.png",
    "revision": "57fdc14cb71c05943628789adc93f054"
  },
  {
    "url": "assets/img/function-connect-02.a7cddfa1.png",
    "revision": "a7cddfa18db2400134460b02783e9c6d"
  },
  {
    "url": "assets/img/function-create-01.ef0edcec.png",
    "revision": "ef0edcec9bef62f1e30ab747f90a3be8"
  },
  {
    "url": "assets/img/function-create-02.1fa705d2.png",
    "revision": "1fa705d286370c6b90d7259028f086e9"
  },
  {
    "url": "assets/img/function-create-03.d325bfec.png",
    "revision": "d325bfec67e0b8f0fe18f137c99e5e9c"
  },
  {
    "url": "assets/img/function-create-09.86ecec6b.png",
    "revision": "86ecec6bafc60babbc22a89c8bfcf94f"
  },
  {
    "url": "assets/img/function-create-10.01777615.png",
    "revision": "017776157e7359a366312ca166c1424e"
  },
  {
    "url": "assets/img/function-deploy-01.bac3abee.png",
    "revision": "bac3abee4a85890f30d6864bf1e684a6"
  },
  {
    "url": "assets/img/function-deploy-02.d6f674dd.png",
    "revision": "d6f674dd9e435240e2a2626862bda7f3"
  },
  {
    "url": "assets/img/function-deploy-03.faf55eaf.png",
    "revision": "faf55eaf51e6cae2b8bd4477bb60d43f"
  },
  {
    "url": "assets/img/function-deploy-04.ed96de2a.png",
    "revision": "ed96de2ac934c370090981971b6022eb"
  },
  {
    "url": "assets/img/function-deploy-05.cec81f19.png",
    "revision": "cec81f19fcdc9e4117eec30ed90b93a4"
  },
  {
    "url": "assets/img/function-deploy-06.2c96e786.png",
    "revision": "2c96e786e61426bb3acdddc89b3253ab"
  },
  {
    "url": "assets/img/function-deploy-07.9be335bc.png",
    "revision": "9be335bc512391f476023c8893a0ccab"
  },
  {
    "url": "assets/img/function-deploy-12.0f41e4cc.png",
    "revision": "0f41e4cc2994248ad41c49179b8c8a46"
  },
  {
    "url": "assets/img/function-deploy-14.c1e6996c.png",
    "revision": "c1e6996c0848aa950d27bd3ad81a068e"
  },
  {
    "url": "assets/img/function-vscode-01.422e06ad.png",
    "revision": "422e06ad67b891de836e3a3af0c32f26"
  },
  {
    "url": "assets/img/function-vscode-02.01cbd64f.png",
    "revision": "01cbd64fb557c239d15332bea2f4a4b5"
  },
  {
    "url": "assets/img/function-vscode-03.cc6807ef.png",
    "revision": "cc6807ef25dcf9802896e0c635c718a5"
  },
  {
    "url": "assets/img/function-vscode-04.57192b07.png",
    "revision": "57192b07c562b81892b8b04d5be8fd2b"
  },
  {
    "url": "assets/img/function-vscode-05.c322458e.png",
    "revision": "c322458e2cfada8968d704f633a13b65"
  },
  {
    "url": "assets/img/function-vscode-08.c41eff11.png",
    "revision": "c41eff113d739754744c43de7707f44c"
  },
  {
    "url": "assets/img/function-vscode-09.ecb7c21c.png",
    "revision": "ecb7c21c2f747659e5567061c08da661"
  },
  {
    "url": "assets/img/hub-connect-01.c7c5694b.png",
    "revision": "c7c5694b18b6a591323a604a7ccfae55"
  },
  {
    "url": "assets/img/hub-connect-02.e5728a98.png",
    "revision": "e5728a98189d80e3241f5186d6a11602"
  },
  {
    "url": "assets/img/hub-connect-03.517484a3.png",
    "revision": "517484a32a4602599543112385225ead"
  },
  {
    "url": "assets/img/hub-connect-04.4a1c2268.png",
    "revision": "4a1c2268aa15c37ea643f22bbf275304"
  },
  {
    "url": "assets/img/hub-connect-05.9a476959.png",
    "revision": "9a476959f2488fed09f226d9c22240e2"
  },
  {
    "url": "assets/img/hub-connect-06.68ee67c6.png",
    "revision": "68ee67c6e88f395901dd341ac4253a77"
  },
  {
    "url": "assets/img/hub-connect-07.dea355a9.png",
    "revision": "dea355a9a23f142e80008e7acde8b414"
  },
  {
    "url": "assets/img/hub-connect-08.2ef3b62d.png",
    "revision": "2ef3b62dcf82bc01c4ecfedb4bd824ee"
  },
  {
    "url": "assets/img/hub-connect-09.f53d4a25.png",
    "revision": "f53d4a25d8b65ea260986f890aa6f366"
  },
  {
    "url": "assets/img/hub-connect-10.4a6fc17c.png",
    "revision": "4a6fc17cbd72a4cefade346bcc14b071"
  },
  {
    "url": "assets/img/hub-connect-11.337e2a89.png",
    "revision": "337e2a89442f647711591ba16bd57fdc"
  },
  {
    "url": "assets/img/hub-connect-12.c52b0d89.png",
    "revision": "c52b0d89c681c5f82e7d69dfe8ad6404"
  },
  {
    "url": "assets/img/hub-connect-13.057bfdc0.png",
    "revision": "057bfdc0af96f7b6242af748cb616b4f"
  },
  {
    "url": "assets/img/install-sdk.a97cdafe.png",
    "revision": "a97cdafe6f32684ae15aada09bc4af6c"
  },
  {
    "url": "assets/img/new-settings.44359358.png",
    "revision": "44359358b54df352e8d07af936d9feb1"
  },
  {
    "url": "assets/img/notpublish-friends-sticker.a0d3288f.png",
    "revision": "a0d3288fa81050234c56c4d9fbb9ff5b"
  },
  {
    "url": "assets/img/redeempass-1.08d8a714.jpg",
    "revision": "08d8a7148cf270b54deb654067f6209e"
  },
  {
    "url": "assets/img/redeempass-2.ad38d81b.jpg",
    "revision": "ad38d81b298be11a50d04301a76f54a3"
  },
  {
    "url": "assets/img/redeempass-3.4ae8d836.jpg",
    "revision": "4ae8d8369a68df721f4e4e62233ca165"
  },
  {
    "url": "assets/img/redeempass-4.0a30ad97.jpg",
    "revision": "0a30ad9715bad06c7f92bdc9cce02ca6"
  },
  {
    "url": "assets/img/redeempass-5.e3145692.jpg",
    "revision": "e3145692187c55e9aee6ee59dbdda8bd"
  },
  {
    "url": "assets/img/redeempass-6.7d2fd9e7.jpg",
    "revision": "7d2fd9e7e3d1f30b8f8d8396fcdfc08f"
  },
  {
    "url": "assets/img/redeempass-7.41b8a669.jpg",
    "revision": "41b8a669ea6ea339efe054f2112be016"
  },
  {
    "url": "assets/img/schema-arch.95a0412e.png",
    "revision": "95a0412e8bdf00e93b4cb4833f7af3f6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/simulation-vscode.8ee56125.png",
    "revision": "8ee56125c50cc25da7a7f12bac10d1d2"
  },
  {
    "url": "assets/img/student-1.7d094c54.png",
    "revision": "7d094c54d2272e96c60358243e885356"
  },
  {
    "url": "assets/img/vscode-com.2fd3c707.jpg",
    "revision": "2fd3c707480c113ffaa8170e13f5adb9"
  },
  {
    "url": "assets/img/vscode-selectcom-list.4d25aec3.png",
    "revision": "4d25aec356156ee4cc3cde7dfe4198f2"
  },
  {
    "url": "assets/img/vscode-selectcom.92b0f364.png",
    "revision": "92b0f36441e5c26c9ea3b1b9f7f66a6b"
  },
  {
    "url": "assets/img/wifi-ap.6dc372c3.jpg",
    "revision": "6dc372c3fdadbfcef5a0d1553de519f9"
  },
  {
    "url": "assets/img/wifi-ip.36d0b622.jpg",
    "revision": "36d0b622e6a0e10c6fb6edc99257fe51"
  },
  {
    "url": "assets/img/wifi-portal.223c0299.png",
    "revision": "223c02994ddb61cb7f5cc89e236577f5"
  },
  {
    "url": "assets/js/10.c111af0d.js",
    "revision": "5e92d8c7634de49f1c4b890bf34411ca"
  },
  {
    "url": "assets/js/11.395a8fe9.js",
    "revision": "4eb3b618b92e41b0d162b060c7fe3ac6"
  },
  {
    "url": "assets/js/12.3f0b14c3.js",
    "revision": "6ff63129612574f09cbabc79aae5b631"
  },
  {
    "url": "assets/js/13.acee39a3.js",
    "revision": "bf4822fb3f7cd288174766954d6788ea"
  },
  {
    "url": "assets/js/14.d2eaaf57.js",
    "revision": "5361ee73d1458a0c59faa0ccae657a1f"
  },
  {
    "url": "assets/js/15.1b268ab3.js",
    "revision": "f25e9c25ba0e8e47b2f31e24f8484a1a"
  },
  {
    "url": "assets/js/2.7913e008.js",
    "revision": "b47aee652a1c9715310ac2cc15045754"
  },
  {
    "url": "assets/js/3.87fbb148.js",
    "revision": "42f55e1123a73fde93075e8ef2174f68"
  },
  {
    "url": "assets/js/4.aeddfb89.js",
    "revision": "1c91695396e59ac7b6dfaa074060290a"
  },
  {
    "url": "assets/js/5.5ebc1b95.js",
    "revision": "ee80b09ef3b4326c236fd0cc0bea85d3"
  },
  {
    "url": "assets/js/6.4bee7dc0.js",
    "revision": "b3d5c8a222d5dd7cd8f8681d9c473964"
  },
  {
    "url": "assets/js/7.1d9e935a.js",
    "revision": "789c3709a0df786d0a6d280edb125214"
  },
  {
    "url": "assets/js/8.41f10b62.js",
    "revision": "2a1ce88a1a0c0f8803a68e48b139bcdb"
  },
  {
    "url": "assets/js/9.16f58e21.js",
    "revision": "863ffe963967ba0a92270a7a206f5dd9"
  },
  {
    "url": "assets/js/app.8afe2c33.js",
    "revision": "4899b3d27b040967952a6b236be3e8e4"
  },
  {
    "url": "bit-iot.png",
    "revision": "dde1a4c011d1437ddf623dabc86bc6f6"
  },
  {
    "url": "configure-wifi.html",
    "revision": "f9cb1fcf0f2fe8ab693aaed0b226bdb0"
  },
  {
    "url": "index.html",
    "revision": "3380d4bdb2883c5e6b104ae9d04df5d6"
  },
  {
    "url": "proctor/faq.html",
    "revision": "33f3307bb8c492f9554304c49a7d2c29"
  },
  {
    "url": "whats-next.html",
    "revision": "a67da2f91f80d7c33260ab0e2bd272ac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

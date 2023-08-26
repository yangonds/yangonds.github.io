'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7d99cccb5764005917bb6c763fed261f",
"index.html": "858c3061469f4ffb5397b6bfe8346bb7",
"/": "858c3061469f4ffb5397b6bfe8346bb7",
"firebase-messaging-sw.js": "6d69bd61c03431ab44250a8eb0498fa7",
"main.dart.js": "136270a4cdaab9f0d1e49fcaaf8c0d45",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "1fdc0a8758434abf71658073c6432faf",
"icons/Icon-192.png": "08686341cdc89b67c7e5e37274f7a1a5",
"icons/Icon-maskable-192.png": "08686341cdc89b67c7e5e37274f7a1a5",
"icons/Icon-maskable-512.png": "002b860d7c0e649ab135ef931ac0f454",
"icons/Icon-512.png": "002b860d7c0e649ab135ef931ac0f454",
"manifest.json": "063938ca79a876cad8fa466245b3c54c",
".git/config": "a969bbbb4922cde74dbc9b2482e2b19c",
".git/objects/0d/63787f817eb181661c281387b31b7b1322cf13": "4a11fc8d6474289135515184456f3ade",
".git/objects/59/6c5c902c0a9025e47850c3cc0d6f43996e35c6": "963fe7842b050b22910d822741130ed4",
".git/objects/66/7e85f3bed4aa2961a6301399bac67ebf9ff35d": "57e2b88c398ee40ab6ad080c8b38678d",
".git/objects/3e/59a8e6119aaae45950762a218e6d2aace72002": "b750961b58cc6491afa2d4a44566661e",
".git/objects/50/d9b8963ba0ac5bfd26abae8754e5547af4aea4": "4b4ebad2563778657b72b078501fc4d1",
".git/objects/6f/c531de357aa147a036fba47bdc09ac03603630": "62ed07977c5fa8726ebedbd469d81051",
".git/objects/9b/ba4c64a0d59d6c8405e91ce3ccad6403edcca3": "63756c2455d3747ed5acc450a47e5827",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/35/41412f1302b7a6403c7d12f1ac33d7006ef906": "516611542cfcdaa87fde49f157908944",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/94/4958ed422965baf24340b26f9d7846b5896eb9": "57efa4166c88a88261ec3b884ce06049",
".git/objects/0e/1cbbc95ca431fc3e3daee8d781c809c6791063": "b5e3965050317c059b2869b3c0dee366",
".git/objects/34/4aebf7d0ac22b30b21811dd470291b5b21eb9c": "47721287a96761504a4b670c7c3d2338",
".git/objects/02/7a4e103a1045353d9df5f55aac8ce6c4bb921b": "d21cf4b1a71fa04bc245a346e5f6ec22",
".git/objects/b5/8b0d16285c9c01dcb3ec460b9b9b57414ea531": "fa078fb9900f67be1f8fbb2e906a888e",
".git/objects/b2/0aafebe4a47068f0538427c7725eefe880e158": "3a805cce1be5e9436908380c37027d05",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/b4/3133b3ca71e3c31f2424965423355e868d0264": "0e9dba086bba0f87e75338c0aedc396c",
".git/objects/d6/6e95d35b39d53b2ff32dd172eb4079023c0065": "c6523cbd8f9540d9ba98a7098f07ef14",
".git/objects/e5/b5191e054c5f2e12f4152ca5081f5c21eab613": "777c0df29d429c52829a1c6fd546892d",
".git/objects/f4/592bf28b89c7e8be5daacc91ef80b9c97bc606": "51d4b6f12cbb538b5ea3efce4ed4c974",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/f5/70c283ad3406654b63130db927357576ed07c8": "e51e99c82ab055b0901b3cf80304db17",
".git/objects/c6/be3062fe278d23240f84713202fc1786fdf7d1": "214f61a5fdb7e05c6733d3152e921058",
".git/objects/4e/d9b2376cb25bf762837351c4afa17cffb6e610": "88d982b918c862631f9a973b07140ffe",
".git/objects/27/deaacea584408fcc378fdf6934cf1afacb40f7": "c9a7f6415d0b3f803a46a1eae67c0288",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/42/a432be22d06af6a40996287b7c8890976d05a6": "3d20166fce0bc5cffc686a0656a8c69f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/10/72541fcf480891e067f4c16c5c2ec6b9dd068a": "1a20a3286a86f85d6f3aa277d28d83fc",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/2f/fb342308abf37dbaf6bf9aafa99b1e4af15e1f": "2fba9f91dbfb050ef1af5aa2e95fe3e2",
".git/objects/9f/c2a622c29a3e77c7e4e48f621ea4796b158b12": "efe7712751ea10e0d4211fd20f9f7c65",
".git/objects/00/a33e576570d2eaa637b440ba5f4272d786498b": "5f92cca451a124cf221c31c556d31c85",
".git/objects/6e/7f8d7a7b649687b802a29c9e90ceeb43fc1929": "95ac96046aa34f1dcfdf61de8a40f955",
".git/objects/6e/268d3ed1c08194869f39706fcd10bf4268127d": "bc2119031136da9f3cb19b9a05db52c0",
".git/objects/5c/3eacdaa0658b0bc9a1b6b12b61f99605eeb6cd": "f575f0131ec39cebf8b3af7625075c22",
".git/objects/31/11c59be0df64d251dc7077ae7476debc2a009f": "9d3930023264fe70bfdb6d84a4ae69d3",
".git/objects/91/d8e5e15704d2d4128086fa574bf16536c7277a": "1b794ddf9ee1fb18dd47cd1b43a1f63b",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/65/02badefd42c9a2bacebbe1ee430cc653a79d00": "1d4ad0f73d31f5592720c49b0e171647",
".git/objects/5b/71128e13033b9e6c30c21735793c258809b93b": "d82a056c5df1b545529162450ad69c85",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/01/6021565af41c65ec8818b0beb55f2e5e105e30": "d45edf247ee09c62dc873a5068503f44",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/39/46e7d1846a9dfdbe4cab3c346921c428974c70": "70a0c2bb346e2171d8e3f42b08c62dad",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/63/51a581f688804c9f0a6c0fbf3cc3bf5b46db20": "4bb773845b6f5809be7ce52197a404a1",
".git/objects/0f/23e953db9df0ce84939315b76796661e37273a": "7e8ce338414861df71c913013045c7d4",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/2deb3e0e8ff017a4beadd53db35bb273b533ec": "5dfdd72daa90982b2ab3aa29f0cbf6cd",
".git/objects/90/01137ed4f820b8ff1d6a3de110d011ecb7ae3f": "ffc83274a64a759e78fdbe4b233b6b21",
".git/objects/90/3cb194658709d30f07abbee56b9c941c8764e3": "5fba15cc9951a8b30b8ed9a89ec5f162",
".git/objects/d4/98ab445f06bbaad182efbcff2f8eaa006d9795": "461428d335887d93efeb266eb9114b17",
".git/objects/a0/4f6f071b62b73a25bb536da865abab45fbf3b5": "51762312037915d675a415b975112adb",
".git/objects/dd/0883d806b7c88983a324529094c25dfb52bcbc": "b18737b6e93f995739ff1a63051babe6",
".git/objects/b6/41df594bd55f0cdca11f5e5f512f26d3382355": "376f6c9d63245238717f084db063ab77",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b7/d551afa86a3ff818b2788c53df5b519aea9e19": "4b89ae3b576c5f080ec9f68eba0b5ce6",
".git/objects/b0/b8262cda4603c4d44b4e681d8d31d42655b856": "eec535bdf010260e4f72a97b7a806dc0",
".git/objects/b0/d5e0d1692d03dcfed9bd908d5f800fcced1f9a": "686b8201e3e350fe9193e195d5150050",
".git/objects/ef/5e84acf97e6595d59db7581631a18775c06ca3": "71f4d5ec6fbcd622171f6afb6f7d422b",
".git/objects/f0/d8dee440df6805d4de7e6f8f548aad1dd6bc6e": "10ac68730828551e4fc11ac945d349ec",
".git/objects/fa/2f26a4f458f6c9fec4d71354e82675e8c4a9c3": "c9021f3221575c871cd4bdaa3ec3301f",
".git/objects/ff/0b28b2d53081707d148826251d64d2535bcaf0": "9e3707e8f4c08c7761a73c4cd742f190",
".git/objects/c2/62d236d38d6affc69405f7ef890b27bba9e003": "9563f8a95f592bc982f59f9620a644d8",
".git/objects/f1/8c50f68db072b8e644b91b7177fd13f9df479b": "8d0878639c9b6c9d2914618d88a66710",
".git/objects/e7/df4f44889826b9135f345d380dacdbff953081": "27e7e0ce0aec9cff89954d93c480abf6",
".git/objects/46/88eb3a6907331a3fab332a5d3c106dcf29d921": "57f134545814d7d6818776d8b606bfbb",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/48/d7cb0fb7e512362cff30cf3cf5e4897136c629": "8a39d8ae19e2cf391dd018987e7278cf",
".git/objects/48/11a7facb7ed18bb53d6db489dae33b3fb48984": "56d5cf4f9b0deb4c5408631ce70621b9",
".git/objects/70/a1c4fe5131490fb4a4b525c5700d0582d719ce": "9314eb827280329403e7245c35cde730",
".git/objects/70/30437c884674177fed0f2c58977a169584e15b": "862c55224702ca269e3bd149f4ef1dfe",
".git/objects/1e/b3aa065d9f252cd2f9b46724ec8cd27176894c": "21336c607ffc2d104d5cd9550d31954f",
".git/objects/84/67b2a021ec3e445e436a9714d252a8d4cfd50a": "f73f8927b12801ccbce3ad4261b40272",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/12/0268ece9ff882c9a6821163c485bc86fa6f935": "91659bbf6b63293d3a4efd9e6dbf486f",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/b9668b972d0e24141ad1447a9e9b3ed09f95e8": "22dcdea396ace5dc7e191c2268b2c450",
".git/objects/1c/aff4f043e1a6f5735d85fb4e25e21c66248eca": "b42b17d9921661404ef6bcb3a4d575f7",
".git/objects/49/df164c5369d6aa2ea8ca59e8180fca7f3f4956": "bc8ae43048958ceaa88c851a7b4f9d66",
".git/objects/2e/3f65da72dba31222f24683bef516d4f5df2416": "bc7b95a48fa32d378c9ca25bd9df04a0",
".git/objects/7f/58e74d06891d30fb2735556819c894f9b46537": "72bbc99f470b8298a72d0b34cb14163b",
".git/objects/7a/85842c6224e40aa0f4967c31054fda5ab4bf93": "0dbe5347baac0ead5fbf708b001b526c",
".git/objects/22/79c6ebdb0fd3c96621556b0eb98a64405edd51": "260e3e60a26a097f9b472ad970c70f27",
".git/objects/22/745861e5a7bb4175c220b91d8d53cdc9eaccad": "8b96953bd3620314bae4f6f49887bffd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "10e7d32e7faa481a9d0e424c8c171b73",
".git/logs/refs/heads/main": "10e7d32e7faa481a9d0e424c8c171b73",
".git/logs/refs/remotes/origin/main": "b65ac55b2e982974f56e7a1000c08a28",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7ac091970620c6c27a208033c36fae96",
".git/refs/remotes/origin/main": "7ac091970620c6c27a208033c36fae96",
".git/index": "79d4f443e06fc6e3d293c9868c580d62",
".git/COMMIT_EDITMSG": "b5a3bfe6c41cb991353c601b02cc114b",
"assets/AssetManifest.json": "7aaed1cac359e6d8126bb89cedeeb77b",
"assets/NOTICES": "e8e6ed9d7f79f184e4c557269677fa8f",
"assets/FontManifest.json": "9ca5dcfcd70a3310e33da7169e2df95e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/ok.png": "726d157008ae1586d2a31ceeaaae2bde",
"assets/assets/gallery.png": "ad8ff367610a60977c36c1eda00936bb",
"assets/assets/add-image.png": "ab09528a724d08e2f781845efd60b4c1",
"assets/assets/product.png": "b775ac515aa58483650cc2936ba9e9be",
"assets/assets/purchase.png": "4615e8438fe24f9647040b57ca4a26f2",
"assets/assets/question.png": "a4c895b62aef88af224555f360137174",
"assets/assets/signpost.png": "2ca3b9952141e417624bdf58ff95d3fb",
"assets/assets/bars/signpost.svg": "88e8a537f606ef94c897192c0447153d",
"assets/assets/bars/purchase.svg": "2812c56dda8d5bc76bbb5cd83a344f1b",
"assets/assets/bars/question.svg": "e237024a3d1c651e40b79608b809389e",
"assets/assets/bars/product.svg": "5b0bd84ff7a59ba788050c23d41871da",
"assets/assets/bars/ok.svg": "3d30d44801b5e1a8c1d05bdb620fed7a",
"assets/assets/bars/analytics.svg": "34f3bc267239ec80133bc367afabeadc",
"assets/assets/bars/license.svg": "a18d887d341ec201dd73bf02caf42622",
"assets/assets/bars/course.svg": "5b55928a8707b71fdbc41f5fc7c8d76f",
"assets/assets/bars/users.svg": "7b38f286650bc9bb4395ef7d2bfff844",
"assets/assets/users.png": "f77d8b1232acd1f54d9678393a01ea9b",
"assets/assets/course.png": "90c1981aab03b13bb368df395276dca2",
"assets/assets/license.png": "6d02757ed0cd230566fe5aae1e41222a",
"assets/assets/driving_seat.png": "de3b7b13838d5c050ec5ec14ba48c69b",
"assets/assets/money.png": "871cdc1e423095118f27181e4de77091",
"assets/assets/analytics.png": "9b9f3c3278ae95c716471ba247bba951",
"assets/assets/logo.jpeg": "3379b49e4a5e01a6d6fbc309efc56165",
"assets/assets/accept.png": "403a3d7c942afd509bffcb112b38b2e4",
"assets/assets/driving.png": "13e470575cd63a887168d45c3de6099f",
"assets/assets/send.png": "99bd9d294e0fbb8f57fffd41ccc94673",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

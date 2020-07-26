var push = require("web-push");

let vapid = {
  publicKey:
    "BJj2I6FsV7YIY2PyesBuOSri1G7NybqP1i5SxFjnMuGJM1__WNOXYjlfR_bBFgZyNTnByNg3Dq7bc6shZVSDk38",
  privateKey: "87SWSYt_wwpr2hkEmHSK8QE4XWYK_Qj9UFcgucTphlE",
};

push.setVapidDetails("mailto:test@abc.com", vapid.publicKey, vapid.privateKey);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/c95tUZ2Rfn8:APA91bHDgRk7V47dCYK_CrOMkKf_MwEGmsp_ADaFQ6WWLhOqkIjPZvOHCulAs9I3Tvyu84QnITEUsR2l20DC52FcIwnrouNe_Ant93KUbul9W6k6hMvNijCM3DcrQk1GaoS886htj64x",
  expirationTime: null,
  keys: {
    p256dh:
      "BITA7GWBat0Fi4l2EW0XEFHWAShwHlphleybGmksMwhH8mG9U8QE4PVQ9RYRS3GbbSlPVfGY0X9sUE11Cwr3NPs",
    auth: "AY0PUB6Na73Ue-0yPpJWhQ",
  },
};
push.sendNotification(sub, "test message");

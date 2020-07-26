var push = require("web-push");

let vapid = {
  publicKey:
    "BJj2I6FsV7YIY2PyesBuOSri1G7NybqP1i5SxFjnMuGJM1__WNOXYjlfR_bBFgZyNTnByNg3Dq7bc6shZVSDk38",
  privateKey: "87SWSYt_wwpr2hkEmHSK8QE4XWYK_Qj9UFcgucTphlE",
};

push.setVapidDetails("mailto:test@abc.com", vapid.publicKey, vapid.privateKey);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dj3TjZ11Cik:APA91bHhL633rWYlPjzQBfm_dEHD3S3BNzLB5AhT641o_y0XL8TcgRJB7Ot0k9UhD9vMEDrYCMUDib72ZKdcIsaStK7M0EYURo-xrbzus7_kDgFzUI6YiBX8XmY9SubCSlrsD9U6vsdZ",
  expirationTime: null,
  keys: {
    p256dh:
      "BK7WFQwqemi1TD0jtaD-VFYxyuMNUxgV4IHeiXsCmHsvXWdLM8VRDUiOEE6W4zTCKB0vDV61sZstnCO6BbDW8xY",
    auth: "eh_a0LuX32W_6hKNjmTTyg",
  },
};
push.sendNotification(sub, "test message");

var push = require('web-push')

let vapid = {
    publicKey: 'BJj2I6FsV7YIY2PyesBuOSri1G7NybqP1i5SxFjnMuGJM1__WNOXYjlfR_bBFgZyNTnByNg3Dq7bc6shZVSDk38',
    privateKey: '87SWSYt_wwpr2hkEmHSK8QE4XWYK_Qj9UFcgucTphlE'
}
  
push.setVapidDetails('mailto:test@abc.com',vapid.publicKey,vapid.privateKey)

let sub = {};
push.sendNotification(sub, 'test message')
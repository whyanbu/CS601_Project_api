const admin = require('firebase-admin');
const serviceAccount = require('./personaldb-fd87e-firebase-adminsdk-fbsvc-124441678a.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { db };

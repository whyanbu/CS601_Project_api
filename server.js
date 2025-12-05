const express = require('express');
const cors = require('cors');
const { db } = require('./firebaseConfig');
const app = express();

app.use(
    cors(
        {
            origin: '*'
        }
    )
);

app.get('/education', async (req, res) => {
    try {
        const snapshot = await db.collection('educations').get();
        const docs = snapshot.docs.map(
            doc => (
                {
                    id: doc.id,
                    ...doc.data()
                }
            )
        );
        res.status(200).json(docs);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/experience', async (req, res) => {
    try {
        const snapshot = await db.collection('experience').get();
        const docs = snapshot.docs.map(
            doc => (
                {
                    id: doc.id,
                    ...doc.data()
                }
            )
        );
        res.status(200).json(docs);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/skill', async (req, res) => {
    try {
        const snapshot = await db.collection('skill').get();
        const docs = snapshot.docs.map(
            doc => (
                {
                    id: doc.id,
                    ...doc.data()
                }
            )
        );
        res.status(200).json(docs);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = app;

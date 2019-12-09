const fetch = require('node-fetch');


test('get all facilities', async () => {

    return fetch('http://localhost:3002/facility/')
        .then(res => {
            return res.json()
        })
        .then(res => {
            //console.log(res);
            expect(res.length).toBe(5);
        })
});


test('check if specific facility exists with its capacity', async () => {

    return fetch('http://localhost:3002/facility/100')
        .then(res => {
            return res.json()
        })
        .then(res => {
            return expect(res[0].capacity).toBe(6000);
        })
    })
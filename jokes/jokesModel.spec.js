 const Jokes = require('./jokesModel');
 const db = require('../database/dbConfig');
// make jokes model
 
describe('Jokes model ', ()=> {
    describe('insert', () => {
 
    it('should return 200 for jokes', async () => {
        const res = await request(server).get('/');
        expect(res.status).toBe(200);
    });
});
});
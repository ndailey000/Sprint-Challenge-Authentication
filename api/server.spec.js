const server = require('./server.js');
const request = require('supertest');



// write test below req 4 test (2) for ./auth (2) ./jokes! 
describe('server.js', ()=> {
    Test('tests the enviro.', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });
    describe('GET /', ()=> {
        it('should return 200 for jokes', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        });
        describe('app json ', ()=> {
            it('should return 200 for jokes', async () => {
                const res = await request(server).get('/');
                expect(res.status).toBe('application/json');
            });

    })
})
});

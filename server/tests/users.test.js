const app = require("../app");
const request = require("supertest");

let idPost = null;

describe("/users API", () => {

    it("GET /user - Invalid router path should return 404", async () => {
        const res = await request(app).get('/user');
        expect(res.status).toBe(404);
    });

    it("GET /users - Should return an array of objects", async () => {
        const res = await request(app).get('/users');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it("GET /users/:id - Should return the object marked with the specified index", async () => {
        const res = await request(app).get('/users/1');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBe(1);
    });

    it("POST /users - Should store the provided object", async () => {
        const user = {
            username: "testUsername",
            password: "testPassword"
        }

        const res = await request(app).post('/users').send(user);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBe(1);
        idPost = res.body[0].id;
    });

    it("DELETE /users/:id - Should delete the object marked with the specified index", async () => {
        const res = await request(app).delete(`/users/${idPost}`);
        expect(res.status).toBe(200);
    });


});






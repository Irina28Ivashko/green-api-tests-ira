import { greenApi } from "../greenApi";

describe("Send negative tests (400 Validation Failed)", () => {
    // проверка chaId, где отсутвует @c.us
    test("should return 400 for invalide chatId format", async () => {
        try {
            await greenApi.sendMessage("12345", "hello");
            trow new Error ("Expected 400 but got succes");

        } catch (err: any) {
            expect(err.response.status).toBe(400);
            expect(err.response.data).toHaveProperty("message");
        }
    });

    // проверка chaId, где поле не может быть пустым
    test("should return 400 when chatId is emty", async () => {
        try {
            await greenApi.sendMessage("", "hello");
            trow new Error ("Expected 400 but got succes");

        } catch (err: any) {
            expect(err.response.status).toBe(400);
            expect(err.response.data).toHaveProperty("message");
        }
    });

    // проверка поля message, где поле не может быть пустым
    test("should return 400 when chatId is emty", async () => {
        try {
            await greenApi.sendMessage("", "hello");
            trow new Error ("Expected 400 but got succes");

        } catch (err: any) {
            expect(err.response.status).toBe(400);
            expect(err.response.data).toHaveProperty("message");
        }
    });

})
import { greenApi } from "../greenApi";

describe("Send negative tests (400 Validation Failed)", () => {
    // проверка chaId, где отсутвует @c.us
    test("should return 400 for invalide chatId format", async () => {
        try {
            await greenApi.sendMessage("12345", "hello");
            trow new Error("Expected 400 but got succes");

        } catch (err: any) {
            expect(err.response.status).toBe(400);
            expect(err.response.data).toHaveProperty("message");
        }
    });

    // проверка chaId, где поле не может быть пустым
    test("should return 400 when chatId is emty", async () => {
        try {
            await greenApi.sendMessage("", "hello");
            trow new Error("Validation failed. Details: 'chatId' is not allowed to be empty");

        } catch (err: any) {
            expect(err.response.status).toBe(400);
            expect(err.response.data).toHaveProperty("message");
        }
    });

    // проверка поля message, где поле не может быть пустым
    test("should return 400 when message is emty", async () => {
        try {
            await greenApi.sendMessage("77712973203@c.us", "");
            trow new Error("Validation failed. Details: 'message' is not allowed to be empty");

        } catch (err: any) {
            expect(err.response.status).toBe(400);
            expect(err.response.data).toHaveProperty("message");
        }
    });

    // проверка поля message, что оно является строкой
    test("should return 400 when message is not a string", async () => {
        try {
            await greenApi.sendMessage("77712973203@c.us", 12345);
            trow new Error("Expected 400 but got succes");

        } catch (err: any) {
            expect(err.response.status).toBe(400);
            expect(err.response.data).toHaveProperty("message");
        }
    });

    // проверка поля chatId, что оно является строкой
    test("should return 400 when message is not a string", async () => {
        try {
            await greenApi.sendMessage(12345655, "hello");
            trow new Error("Expected 400 but got succes");

        } catch (err: any) {
            expect(err.response.status).toBe(400);
            expect(err.response.data).toHaveProperty("message");
        }
    });

    // проверка отсутвия обязательного поля message
    test("should return 400 when message filed is missing", async () => {
        try {
            const axios = require("axios");
            await axios.post(
                `https://api.green-api.com/waInstance${process.env.INSTANCE_ID}/sendMessage/${process.env.API_TOKEN}`,
            {
                chatId: "77712973203@c.us"
            }
            );
            throw new Error("Expected 400 but got succes");    
        } catch (err: any) {
            expect(err.response.status).toBe(400);
            expect(err.response.data).toHaveProperty("message");
        }
    });

});
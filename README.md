# Автотесты для Green API

Проект содержит автотесты для проверки методов API сервиса Green API:

- `sendMessage`
- `getChatHistory`
- `getStateInstance`

Тесты написаны на TypeScript с использованием Jest и Axios.

## Требования

- Node.js версии 18+
- Аккаунт Green API и активный Instance
- Установленные зависимости npm

## Установка и запуск

Клонировать репозиторий:

```bash
git clone https://github.com/Irina28Ivashko/green-api-tests-ira.git
cd green-api-tests-ira
```

## Установить зависимости:

npm install

## Настройка окружения

Создать файл .env в корне проекта и указать параметры своего инстанса:

INSTANCE_ID=значение
API_TOKEN=значение

## Запуск тестов по команде:

npm test

## Структура проекта:

tests/
├── getChatHistory.test.ts
├── getChatHistoryError.test.ts
├── getStateInstanceError.test.ts
├── sendMessage.test.ts
└── sendMessageError.test.ts

greenApi.ts
config.ts
jest.config.js

## Результаты:

Позитивные тесты должны проходить успешно (200).
В негативных кейсах возможен ответ 429 Too Many Requests, это обработано в тестах.

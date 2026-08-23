# 🚀 Node Express Starter Kit

A production-ready starter template for building scalable REST APIs with **Node.js** and **Express.js**.

Designed with a clean architecture, built-in security, environment validation, and code quality tools—so you can focus on building features instead of configuring your backend.

---

## ✨ What's Included

* Express.js 5
* MongoDB & Mongoose
* Environment validation with Zod
* CORS configuration
* Helmet security headers
* API rate limiting
* Response compression
* Health check endpoint
* ESLint & Prettier
* ES Modules
* Nodemon for development
* Scalable project structure

---

## 📂 Project Structure

```text
.
├── src/
│   ├── config/
│   ├── middleware/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── services/
│   ├── utils/
│   
│
├── .env.example
├── server.js
├── package.json
└── README.md
```

> The structure is intentionally modular, making it easy to scale as your project grows.

---

## ⚡ Quick Start

### Clone the repository

```bash
git clone https://github.com/ShankarDutta/node-express-starter-kit.git
cd node-express-starter-kit
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file from `.env.example`.

```env
PORT=4000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
MONGODB_URI=your_mongodb_connection_string
```

### Start the development server

```bash
npm run dev
```

The server will be available at:

```text
http://localhost:4000
```

---

## 📜 Available Scripts

| Command          | Description                               |
| ---------------- | ----------------------------------------- |
| `npm run dev`    | Start the development server with Nodemon |
| `npm start`      | Start the production server               |
| `npm run lint`   | Check code quality with ESLint            |
| `npm run check`  | Run ESLint and verify Prettier formatting |
| `npm run format` | Format the project with Prettier          |

---

## 🛡️ Built for Production

This starter includes a solid production baseline out of the box.

* Secure HTTP headers with **Helmet**
* Protection against excessive requests using **Express Rate Limit**
* Faster responses through **Compression**
* Configurable **CORS**
* Environment validation using **Zod**
* MongoDB connection management with **Mongoose**

---

## ❤️ Health Check

```http
GET /api/v1/health
```

Example response:

```json
{
  "success": true,
  "message": "Server is healthy"
}
```

---

## 📋 Requirements

* Node.js **20+**
* MongoDB

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

If you have ideas for improving this starter kit, feel free to open an issue or submit a pull request.

---

## 📄 License

Released under the **MIT License**.

---

<div align="center">

Built with ❤️ by **Shankar Dutta**

If this project helps you, consider giving it a ⭐ on GitHub.

</div>


# 🛠️ Node.js + MySQL CRUD API (XAMPP + Postman Friendly)

This is a step-by-step guide to build a basic CRUD API using Node.js, Express, and MySQL (XAMPP), structured in a clean, maintainable way with controllers and routes. This setup supports `form-data` in Postman or frontend forms.

---

## ✅ Step 1: Project Setup in VS Code

1. Open VS Code and create a project folder:
   - Example: `node_crud_api`

2. Initialize a Node.js project:
   - Run: `npm init -y`

3. Install required packages:
   - `express`, `mysql`, `body-parser`, and `cors`

---

## ✅ Step 2: Setup MySQL Database in XAMPP

1. Start Apache and MySQL from the XAMPP control panel.

2. Open `http://localhost/phpmyadmin`.

3. Create a database named: `test_api`.

4. Create a table `users` with at least two columns (e.g., id, name, email) and insert sample data.

5. Create another table `products`:
   - Fields: `id` (INT, auto-increment), `name` (VARCHAR), `price` (FLOAT)

---

## ✅ Step 3: Create `app.js` (Main Entry Point)

- This will initialize Express, connect middleware, and register routes.
- Run the app using: `node app.js`

---

## ✅ Step 4: Recommended Folder Structure

node_crud_api/
├── app.js <-- Entry point
├── db.js <-- MySQL DB connection
├── routes/
│ ├── userRoutes.js <-- API endpoints for users
│ └── productRoutes.js <-- API endpoints for products
├── controllers/
│ ├── userController.js <-- Logic for users
│ └── productController.js
├── models/ (optional) <-- Use for larger apps
│ └── userModel.js
├── package.json



---

## ✅ Step 5: Setup & Test with Postman

1. Start your server: `node app.js`

2. Open Postman and test APIs:

   - **POST Form Data**: Use `form-data` tab, add key-value pairs for body.
   - Example URL: `http://localhost:3000/users/update/1`
   - Key fields like `name`, `email`, etc.

3. Use proper HTTP methods:
   - GET → Retrieve data
   - POST → Add data
   - PUT/PATCH → Update data
   - DELETE → Remove data

---

## 📌 Notes

- Use **body-parser** to parse form data.
- Always verify `req.body` and SQL queries.
- Recommended to use **controllers** for cleaner logic separation.
- You can also use `models/` folder for database abstraction in larger projects.

---

## 🚀 Run Your Project

```bash
node app.js

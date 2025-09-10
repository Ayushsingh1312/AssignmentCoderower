# 📝 Configurations App

A full-stack MERN project for fetching and updating configuration data from **MongoDB Atlas**.

---

## 🚀 Features
- Fetch configuration data using a `configId` and display it in a 2D grid format.
- Update the `remark` field of any configuration with a new value.
- Reusable form component for consistency.
- Proper backend structure with controllers, routes, and models.
- Secure MongoDB connection using environment variables.

---

## 🛠️ Tech Stack
- **Frontend**: React.js, Axios, CSS  
- **Backend**: Node.js, Express.js, MongoDB, Mongoose  
- **Database**: MongoDB Atlas  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/Assignment_Coderower.git
cd Assignment_Coderower
```
### Setup Backend
```bash
cd backend
npm install
```
## Create a .env file inside backend/ and add:
```
MONGO_URL=your_mongodb_connection_string
```
## Run backend server:
```
npm run dev
```
### 3️⃣ Setup Frontend
```
cd frontend
npm install
npm start
```

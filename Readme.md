# Blog Platform Backend Documentation

## Project Overview

The Blog Platform Backend is a robust API designed for managing users and blogs. It features secure authentication, role-based access control, and a public API for viewing blogs with search, sort, and filter capabilities. The system supports two roles:

- **Admin**: Manages users and their blogs.
- **User**: Manages their own blogs.

## Features

### Authentication & Authorization

- Secure registration and login using JWT.
- Role-based access control to differentiate between Admin and User permissions.

### Blog Management

- Create, update, and delete blogs.
- Public API to view blogs with search, sort, and filter functionalities.

### Admin Controls

- Block/unblock users.
- Delete any blog.

## Technologies Used

- **TypeScript**
- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose)

---

## Installation and Setup

### Prerequisites

- Node.js (>=16.x)
- MongoDB
- Git

### Steps to Run the Application

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```env
   PORT=5000
   MONGO_URI=<your-mongo-database-url>
   JWT_SECRET=<your-jwt-secret>
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Access the API at `http://localhost:5000`.

---

## API Endpoints

### 1. Authentication

#### 1.1 Register User

**POST** `/api/auth/register`

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response:**

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "_id": "string",
    "name": "string",
    "email": "string"
  }
}
```

---

#### 1.2 Login User

**POST** `/api/auth/login`

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "string"
  }
}
```

---

### 2. Blog Management

#### 2.1 Create Blog

**POST** `/api/blogs`

**Headers:**

```plaintext
Authorization: Bearer <token>
```

**Request Body:**

```json
{
  "title": "My First Blog",
  "content": "This is the content of my blog."
}
```

**Response:**

```json
{
  "success": true,
  "message": "Blog created successfully",
  "data": {
    "_id": "string",
    "title": "string",
    "content": "string",
    "author": { "details" }
  }
}
```

---

#### 2.2 Update Blog

**PATCH** `/api/blogs/:id`

**Headers:**

```plaintext
Authorization: Bearer <token>
```

**Request Body:**

```json
{
  "title": "Updated Blog Title",
  "content": "Updated content."
}
```

**Response:**

```json
{
  "success": true,
  "message": "Blog updated successfully",
  "data": {
    "_id": "string",
    "title": "string",
    "content": "string",
    "author": { "details" }
  }
}
```

---

#### 2.3 Delete Blog

**DELETE** `/api/blogs/:id`

**Headers:**

```plaintext
Authorization: Bearer <token>
```

**Response:**

```json
{
  "success": true,
  "message": "Blog deleted successfully"
}
```

---

#### 2.4 Get All Blogs (Public)

**GET** `/api/blogs`

**Query Parameters:**

- `search`: Search blogs by title or content.
- `sortBy`: Sort blogs by fields like `createdAt` or `title`.
- `sortOrder`: Sorting order: `asc` or `desc`.
- `filter`: Filter blogs by author ID.

**Example:**

```plaintext
/api/blogs?search=technology&sortBy=createdAt&sortOrder=desc
```

**Response:**

```json
{
  "success": true,
  "message": "Blogs fetched successfully",
  "data": [
    {
      "_id": "string",
      "title": "string",
      "content": "string",
      "author": { "details" }
    }
  ]
}
```

---

### 3. Admin Actions

#### 3.1 Block User

**PATCH** `/api/admin/users/:userId/block`

**Headers:**

```plaintext
Authorization: Bearer <token>
```

**Response:**

```json
{
  "success": true,
  "message": "User blocked successfully"
}
```

---

#### 3.2 Delete Blog

**DELETE** `/api/admin/blogs/:id`

**Headers:**

```plaintext
Authorization: Bearer <token>
```

**Response:**

```json
{
  "success": true,
  "message": "Blog deleted successfully"
}
```

---

## Models

### User Model

```typescript
{
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  isBlocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

### Blog Model

```typescript
{
  title: string;
  content: string;
  author: ObjectId;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

---

## Error Handling

- **Validation Errors:** Handled using Zod for schema validation.
- **Authentication/Authorization Errors:** Returns 401/403 with clear messages.
- **General Errors:** Returns structured responses with error details.

---

## Admin Credentials

- **Email:** [user1@example.com](mailto:user1@example.com)
- **Password:** pass1234

---

## Submission Checklist

1. **Live Deployment Link:** [Live Link](https://assignment-3-iota-red.vercel.app/)
2. **GitHub Repository Link:** [Repository](https://github.com/abir-islam-z/ph-l2-b4-a4)
3. **Admin Login Credentials:** Included above.
4. **Project Overview Video:** [Google Drive](https://drive.google.com/drive/folders/1eVMmHLWy6fcuMbUbLPhQDKOEFKDIcUhT?usp=sharing)

# Blog REST API with TypeORM and MySQL

This repository contains a RESTful API for managing blog posts, implemented using NestJS, TypeORM, and MySQL. The API allows users to perform CRUD operations on blog posts and supports sorting and filtering based on categories.

## API Endpoints

### Create a New Blog Post

Endpoint: `POST /blog/posts`

Request Body:
```json
{
  "title": "My Blog Post",
  "content": "This is the content of my blog post.",
  "author": "John Doe",
  "category": ["Technology", "Programming"]
}
```

Response (Success):
```json
{
  "message": "Post was created successfully"
}
```

### Get a Specific Blog Post

Endpoint: `GET /blog/posts/:id`

Response (Success):
```json
{
  "id": "1234567890",
  "title": "My Blog Post",
  "content": "This is the content of my blog post.",
  "author": "John Doe",
  "category": ["Technology", "Programming"],
  "created_at": "2023-08-02T12:34:56Z",
  "updated_at": "2023-08-02T12:34:56Z"
}
```

### Get All Blog Posts

Endpoint: `GET /blog/posts`

Query Parameters:
- `category`: Filter the blog posts by category (e.g., `Technology`, `Programming`)
- `sortOrder`: Sort the blog posts by created date in ascending (`asc`) or descending (`desc`) order

Response (Success):
```json
[
  {
    "id": "1234567890",
    "title": "Blog Post 1",
    "content": "This is the content of blog post 1.",
    "author": "Jane Doe",
    "category": ["Technology"],
    "created_at": "2023-08-01T10:30:00Z",
    "updated_at": "2023-08-01T10:30:00Z"
  },
  {
    "id": "0987654321",
    "title": "Blog Post 2",
    "content": "This is the content of blog post 2.",
    "author": "John Doe",
    "category": ["Programming"],
    "created_at": "2023-08-02T08:00:00Z",
    "updated_at": "2023-08-02T08:00:00Z"
  }
]
```

### Update an Existing Blog Post

Endpoint: `PUT /blog/posts/:id`

Request Body (Partial Update):
```json
{
  "title": "Updated Blog Post Title"
}
```

Response (Success):
```json
{
  "message": "Post was updated successfully"
}
```

### Delete a Blog Post

Endpoint: `DELETE /blog/posts/:id`

Response (Success):
```json
{
  "message": "Post was deleted successfully"
}
```

## How to Use the API

1. Clone the repository and install dependencies:

```bash
https://github.com/uthx/enverx-be-developer-assignment.git
cd enverx-be-developer-assignment
npm install

```

2. Set up MySQL database: Create a MySQL database and update the database configuration in `.env` with your database credentials.

3. Run database migrations

```bash
npm run db:migrate
```
4. Run the application in development mode:

```bash
npm run start:dev
```

5. The API will be accessible at `http://localhost:3000/blog`.

5. Use API endpoints described above to perform CRUD operations on blog posts.

## DTO (Data Transfer Objects)

The repository includes several DTOs (Data Transfer Objects) that define the structure and validation rules for request payloads:

- `CreateBlogDTO`: For creating a new blog post.
- `UpdateBlogDTO`: For updating an existing blog post (supports partial updates).
- `UpdateBlogIdDTO`: For validating the blog post ID in the request URL.
- `DeletePostDTO`: For validating the blog post ID in the request URL for deletion.
- `FilterDTO`: For validating and filtering blog posts based on category and sort order.
- `GetPostDTO`: For validating the blog post ID in the request URL for fetching a specific post.

## Future improvements

We can improve on the database side of things, maybe we can add 2 seperae table 1- Users and 2- Categories to make the system more robust.

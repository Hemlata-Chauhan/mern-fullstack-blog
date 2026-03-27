# 🧠 Prompts.md – Fullstack Blog (MERN)

## 📌 Project Overview

This project is a Fullstack Blog Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The goal was to connect frontend and backend and implement complete CRUD functionality.

---

## 🚀 Prompts & Solutions

### Prompt 1:

**How to connect React frontend with Node.js backend?**

Solution:

* Replaced dummy API URLs with:

  ```
  http://localhost:5000/api/posts
  ```
* Used `useEffect()` in React to fetch data from backend.

---

### Prompt 2:

**How to fix CORS error in Node.js?**

Solution:

* Installed CORS:

  ```
  npm install cors
  ```
* Added middleware:

  ```js
  app.use(cors());
  ```

---

### Prompt 3:

**How to fetch data from MongoDB in React?**

Solution:

* Created GET route:

  ```js
  app.get("/api/posts", async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
  });
  ```
* Displayed data in React UI using `fetch()`.

---

### Prompt 4:

**How to create a blog post using React form?**

Solution:

* Built form with title and content
* Sent POST request:

  ```js
  fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, content })
  });
  ```

---

### Prompt 5:

**How to delete a post from UI?**

Solution:

* Created DELETE route:

  ```js
  app.delete("/api/posts/:id", async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
  });
  ```
* Connected Delete button in React.

---

### Prompt 6:

**How to handle loading and error states in React?**

Solution:

* Used `loading` and `error` states
* Displayed:

  * "Loading..." while fetching
  * Error message if backend is unavailable

---

## 🎯 Final Features

* Fetch posts from MongoDB
* Create new posts
* Delete posts
* Display posts in UI
* Loading state handling
* Error handling

---

## 💡 Key Learnings

* Connecting frontend and backend using APIs
* Working with MongoDB in a real project
* Implementing CRUD operations
* Managing state in React
* Handling API errors gracefully

---

## 🏁 Conclusion

This project demonstrates how a fullstack application works by connecting React frontend with a Node.js and MongoDB backend and implementing real-time data operations.

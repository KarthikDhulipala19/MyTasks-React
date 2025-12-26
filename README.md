# 📝 Task Management Application (React)

A clean and user-friendly **Task Management Application** built using **React** that allows users to create, filter, delete, and persist tasks using browser **localStorage**. The application follows modern React best practices with proper state management and component separation.

---

## 🔗 Live Demo

   <br/>
                      <h1>Below is the app link to start your day with task manager</h1>
   <br/>
  👉 <a href='https://mytaskmanagers.ccbp.tech/' target="_blank">Create-Your-Own-Tasks</a>
  <br/>
  <br/>

---

## 🚀 Live Features

* ✅ Create tasks with category-based tags
* ✅ Filter tasks by tag (Health, Education, Sports, etc.)
* ✅ Toggle filters on/off intuitively
* ✅ Delete individual tasks
* ✅ Persist tasks using `localStorage` (data survives page refresh)
* ✅ Clean UI with reusable components
* ✅ Fully controlled inputs and predictable state flow

---

## 🧠 Key Concepts Implemented

* **Single Source of Truth** for application state
* **Lifting State Up** for shared data management
* **Derived State** instead of redundant boolean flags
* **Immutable State Updates**
* **React Lifecycle Methods** for persistence
* **Separation of Concerns** (logic vs UI)

---

## 🛠️ Tech Stack

* **React (Class Components)**
* **JavaScript (ES6+)**
* **CSS (Component-based styling)**
* **UUID** for unique task identifiers
* **Browser localStorage** for persistence

---

## 📂 Project Structure

```
src/
├── components/
│   ├── MyTasks/
│   │   ├── index.js
│   │   └── index.css
│   ├── CreateTask/
│   │   ├── index.js
│   │   └── index.css
│   └── TasksList/
│       ├── index.js
│       └── index.css
└── App.js
└── App.css

```

---

## ⚙️ How It Works

1. Tasks are added using a controlled form.
2. All tasks are stored in a central `tasksList` state.
3. Tag-based filtering is derived from the selected tag.
4. Tasks are automatically saved to `localStorage`.
5. On page reload, tasks are restored from storage.
6. Deleting a task updates both UI and storage.

---

## 💾 Data Persistence

* Tasks are saved to `localStorage` whenever the task list changes.
* Tasks are removed from storage only when deleted by the user.
* Ensures data consistency across page refreshes.

---

## 🧪 Edge Cases Handled

* Prevents empty task submission
* Handles filter toggling correctly
* Avoids redundant or derived state
* Clears storage when all tasks are deleted

---

## 🧑‍💻 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/task-manager-react.git
```

### Install dependencies

```bash
npm install
```

### Run the app

```bash
npm start
```


## 📄 License

This project is open-source and available for learning and demonstration purposes.

---

## 🙌 Author

**Karthik Dhulipala**
Frontend / React Developer

---

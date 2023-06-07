import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BookTable from "./components/BookTable";
import DisplayBoard from "./components/DisplayBoard";
import CreateBook from "./components/CreateBook";
import { getAllBooks, createBook } from "./services/BookService";
import Footer from "./components/Footer";
import { createTodo, getAllTodos } from "./services/TodoService";
import TodoTable from "./components/TodoTable";

function App() {
  const [newContent, setNewContent] = useState({});
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);
  const [numberOfTodos, setNumberTodos] = useState(0);
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState("book");

  const handleSubmit = () => {
    if (content === "book")
      createBook(newContent).then(() => {
        setNumberBooks(numberOfBooks + 1);
      });
    else if (content === "todo") {
      createTodo(newContent).then(() => {
        setNumberTodos(numberOfTodos + 1);
      });
    }
  };

  const getAllBook = () => {
    getAllBooks().then((data) => {
      setBooks(data);
      setNumberBooks(data.length);
    });
  };

  const getAllTodo = () => {
    getAllTodos().then((data) => {
      setTodos(data);
      setNumberTodos(data.length);
    });
  };

  const handleOnChangeForm = (e) => {
    let inputData = newContent;
    if (content === "book") {
      if (e.target.name === "book") {
        inputData.book = e.target.value;
      } else if (e.target.name === "category") {
        inputData.category = e.target.value;
      } else if (e.target.name === "author") {
        inputData.author = e.target.value;
      }
    } else if (content === "todo") {
      if (e.target.name === "todo") {
        inputData.todo = e.target.value;
      } else if (e.target.name === "category") {
        inputData.category = e.target.value;
      } else if (e.target.name === "isComplete") {
        inputData.isComplete = e.target.checked;
      }
    }
    setNewContent(inputData);
  };

  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <CreateBook onChangeForm={handleOnChangeForm} handleSubmit={handleSubmit} content={content} setContent={setContent} />
        <DisplayBoard numberOfContents={numberOfBooks} getAllContent={getAllBook}>
          Book
        </DisplayBoard>
        <DisplayBoard numberOfContents={numberOfTodos} getAllContent={getAllTodo}>
          Todo
        </DisplayBoard>
        <BookTable books={books} />
        <TodoTable todos={todos} />
        <Footer />
      </div>
    </div>
  );
}

export default App;

const CreateBook = ({ onChangeForm, handleSubmit, content, setContent }) => {
  return (
    <div className="form-wrapper">
      <div className="form">
        <form>
          <input type="radio" id="book" name="content" onClick={() => setContent("book")} />
          <label htmlFor="book">book</label>
          <input type="radio" id="todo" name="content" onClick={() => setContent("todo")} />
          <label htmlFor="todo">todo</label>
          <div className="input-group">
            <label>{content}</label>
            {content === "book" ? (
              <input type="text" onChange={(e) => onChangeForm(e)} name="book" placeholder="book" />
            ) : (
              <input type="text" onChange={(e) => onChangeForm(e)} name="todo" placeholder="todo" />
            )}
          </div>
          <div className="input-group">
            <label>category</label>
            <input type="text" onChange={(e) => onChangeForm(e)} name="category" placeholder="category" />
          </div>
          <div className="input-group">
            <label>{content === "book" ? "author" : "isComplete"}</label>
            {content === "book" ? (
              <input type="text" onChange={(e) => onChangeForm(e)} name="author" placeholder="author" />
            ) : (
              <input type="checkbox" onChange={(e) => onChangeForm(e)} name="isComplete" />
            )}
          </div>
          <button className="submit-button" onClick={() => handleSubmit()}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;

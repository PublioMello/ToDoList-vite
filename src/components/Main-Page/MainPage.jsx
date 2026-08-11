import TodoList from "../ToDoList";
import "./mainPage.css";
import { IoMdAddCircle } from "react-icons/io";
import { FaCheckSquare } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

const MainPage = () => {
  // const removeItem =
  return (
    <div className="full-page">
      <div className="left-part">
        <h2 className="left-part_title">
          Organize suas tarefas de forma simples e eficiente
        </h2>
        <div className="left-part_items">
          <IoMdAddCircle className="left-part_items-icon" />
          <div className="left-part_items-text">
            <h3>Adicionar Tarefas</h3>
            <p>Digite o que você precisa fazer e clique em adicionar</p>
          </div>
        </div>
        <div className="left-part_items">
          <FaCheckSquare className="left-part_items-icon" />
          <div className="left-part_items-text">
            <h3>Marcar como concluída</h3>
            <p>Marque tarefas concluídas para acompanhar seu progresso</p>
          </div>
        </div>
        <div className="left-part_items">
          <IoTrashBin className="left-part_items-icon" />
          <div className="left-part_items-text">
            <h3>Remover tarefas</h3>
            <p>Remova tarefas que não são mais necessárias</p>
          </div>
        </div>
      </div>
      <div className="right-part">
        <div className="todo-card">
          <h2>Todo List</h2>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default MainPage;

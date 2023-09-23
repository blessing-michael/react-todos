import Header from "../components/Header";
import TodosLogic from "../components/TodoLogics";

const Home = () => {
  return (

    <div className="todos">
      <Header />
      <TodosLogic />
    </div>

  );
}

export default Home;
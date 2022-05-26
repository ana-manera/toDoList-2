import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import List from "./Components/List";
import Hero from "./Components/Hero";
import { Flex } from "@chakra-ui/react";

const generateId = () => {
  let id = 0;
  return () => {
    id++;
    return id;
  };
};

const getId = generateId();

function App() {
  const [lista, setLista] = useState([]);

  console.log(lista);
  const addList = (nota) => {
    setLista([...lista, { nota, isCompleted: false, id: getId() }]);
  };

  const toggleCompleted = (tarea) => {
    setLista(
      lista.map((itemMp) => {
        if (itemMp.id == tarea.id) {
          const updateItemMp = {
            ...itemMp,
            isCompleted: !itemMp.isCompleted,
          };
          return updateItemMp;
        }
        return itemMp;
      })
    );
  };

  const deleteItem = (item) => {
    setLista(lista.filter((itemLista) => itemLista != item));
  };

  return (
    <>
      <Hero></Hero>
      <Form addList={addList}></Form>
      <Flex maxW="350px" m="100px auto" flexDirection="column">
        <List
          info={lista}
          toggleCompleted={toggleCompleted}
          deleteItem={deleteItem}
        ></List>
      </Flex>
    </>
  );
}

export default App;

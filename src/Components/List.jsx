import {
  Checkbox,
  Flex,
  Stack,
  useColorModeValue,
  Text,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useState, useSyncExternalStore } from "react";

const List = ({ info, toggleCompleted, deleteItem }) => {
  const [filtro, setFiltro] = useState("todos");

  const hadleClickCheck = (tarea) => {
    toggleCompleted(tarea);
  };

  const handleDeleteItem = (item) => {
    deleteItem(item);
  };

  const handleClickAll = (info) => {
    setFiltro("todos");
  };
  const handleClickComplete = (info) => {
    setFiltro("completos");
  };
  const handleClickIncomplete = (info) => {
    setFiltro("incompletos");
  };

  return (
    <Stack
      w={"100%"}
      maxW={"md"}
      bg={useColorModeValue("white", "gray.700")}
      rounded={"xl"}
      boxShadow={"lg"}
      p={1}
      my={5}
    >
      {info
        .filter((item) => {
          return (
            filtro === "todos" ||
            (filtro === "completos" && item.isCompleted) ||
            (filtro === "incompletos" && !item.isCompleted)
          );
        })
        .map((item) => {
          return (
            <Flex
              justifyContent={"space-between"}
              marginTop={5}
              flexDirection="row"
              key={`lista ${item.id}`}
            >
              <Checkbox
                defaultChecked={item.isCompleted}
                onChange={() => hadleClickCheck(item)}
              >
                {item.isCompleted ? (
                  <Text as="del">{item.nota}</Text>
                ) : (
                  <Text>{item.nota}</Text>
                )}
              </Checkbox>

              <DeleteIcon onClick={() => handleDeleteItem(item)} />
            </Flex>
          );
        })}
      <Stack
        direction="row"
        spacing={3}
        w={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={2}
        my={0}
        align="center"
      >
        <Button
          bgGradient="linear(to-bl, orange.400,yellow.400)"
          variant="outline"
          onClick={() => handleClickAll(info)}
        >
          Todos
        </Button>
        <Button
          bgGradient="linear(to-bl, orange.400,yellow.400)"
          variant="outline"
          onClick={() => handleClickComplete(info)}
        >
          Completos
        </Button>
        <Button
          bgGradient="linear(to-bl, orange.400,yellow.400)"
          variant="outline"
          onClick={() => handleClickIncomplete(info)}
        >
          Incompletos
        </Button>
      </Stack>
    </Stack>
  );
};

export default List;

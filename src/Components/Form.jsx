import { useState } from "react";
import { Button, Input, Container, Flex } from "@chakra-ui/react";

const Form = ({ addList }) => {
  const [nota, setNota] = useState("");

  const handleOnChange = (event) => {
    setNota(event.target.value);
  };

  const handleOnClick = () => {
    addList(nota);
  };
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      maxW="500px"
      m="100px auto"
    >
      <Input
        variant={"flushed"}
        placeholder={"Tu tarea aqui..."}
        type={"text"}
        value={nota}
        name={"task"}
        onChange={handleOnChange}
        // width="100%"
      />
      <Button
        type="button"
        onClick={handleOnClick}
        fontFamily={"heading"}
        mt={8}
        w="50%"
        // maxW="400px"
        bgGradient={"linear(to-r, red.400,pink.400)"}
        color={"white"}
        _hover={{
          bgGradient: "linear(to-r, red.400,pink.400)",
          boxShadow: "xl",
        }}
      >
        Guardar
      </Button>
    </Flex>
  );
};

export default Form;

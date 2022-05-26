import {
  Container,
  Stack,
  useColorMode,
  Box,
  Text,
  IconButton,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, AttachmentIcon } from "@chakra-ui/icons";

const Hero = () => {
  const { colorMode, toggleColorMode } = useColorMode("light");

  return (
    <Flex
      flexDirection="row"
      // alignItems="center"
      justifyContent="center"
      // maxW="500px"
      m="100px auto"
      gap="20px"
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
        colorGradient="linear(to-r, red.400,pink.400)"
      >
        <AttachmentIcon mr="15px" />
        <Text
          as={"span"}
          bgGradient="linear(to-r, red.400,pink.400)"
          bgClip="text"
        >
          Tu lista de Notas
        </Text>
      </Heading>
      <IconButton onClick={toggleColorMode} fontSize="5xl">
        {colorMode === "light" ? <MoonIcon p="5px" /> : <SunIcon p="5px" />}
      </IconButton>
    </Flex>
  );
};

export default Hero;

// export default function Hero() {
//   const { colorMode, toggleColorMode } = useColorMode("light");
//   return (
//     <>
//       <Container maxW={"3xl"}>
//         <Stack
//           as={Box}
//           textAlign={"center"}
//           spacing={{ base: 8, md: 14 }}
//           py={{ base: 20, md: 36 }}
//         >
//           <Heading
//             fontWeight={600}
//             fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
//             lineHeight={"110%"}
//           >
//             Tu lista de Notas <br />
//             <Text
//               as={"span"}
//               color={"green.400"}
//               fontSize={{ base: "1xl", sm: "2xl", md: "2xl" }}
//             >
//               Captura rápidamente lo que tienes en mente
//             </Text>
//             <IconButton onClick={toggleColorMode}>
//               {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
//             </IconButton>
//           </Heading>
//         </Stack>
//       </Container>
//     </>
//   );
// }

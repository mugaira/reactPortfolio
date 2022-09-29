import { Flex, Heading } from "@chakra-ui/react";
import { ProjectCard } from "../components/Card";
import Particle from "../components/Particle";

const ProjectsScreen = () => {
 return (
  <>
   <Particle />
   <Flex
    w="full"
    direction="column"
    justifyContent="center"
    alignItems="center"
    mt="80px"
    py="10"
    zIndex="100"
   >
    <Flex
     mt="40px"
     direction="column"
     justifyContent="center"
     alignItems="center"
    >
     <Heading
      as="h2"
      fontSize={{ lg: "5xl", base: "3xl" }}
      fontWeight="medium"
     >
      My Recent Projects
     </Heading>
    </Flex>
    <Flex direction="row" justifyContent="center" wrap="wrap">
     <ProjectCard
      source="https://hoodiehub.herokuapp.com/"
      git="https://github.com/mugaira/reactEcommerce"
      src="HoodieHub.png"
      desc="This is a Full Stack Javascript web App for ecommerce store "
     />
     <ProjectCard

      git="https://github.com/mugaira/Blackjack_game"
      src="blackjack.png"
      desc="The Game-App is Built in Vanilla Javascript."
     />{" "}

    </Flex>
   </Flex>
  </>
 );
};

export default ProjectsScreen;
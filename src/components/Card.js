import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
      <VStack  bg={'white'} borderRadius={"3xl"} alignItems={'flex-start'} >
        <Image borderRadius={"2xl"} src={imageSrc} />
        <Heading p={2} color={'black'} size={'md'}>
          {title}
        </Heading>
        <Text p={2} color={'gray'} >
          {description}
        </Text>
        <HStack p={2} pb={2} color={'black'} >
          <Text>See more  </Text>
          <FontAwesomeIcon size="1x" icon={faArrowRight} />
        </HStack>
      </VStack>
    </>
  )
};

export default Card;

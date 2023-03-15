import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Bappi!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
    <Avatar src="https://yt3.ggpht.com/yti/AHXOFjVZmpy5FzT3Q887b3NVsitWQtX9GeA0Zev5KlV0HQ=s88-c-k-c0x00ffffff-no-rj-mo" size={'xl'} />
      <Heading as={'h1'} size={'sm'} >
        {greeting}
      </Heading>
      <Heading as={'h3'} size={'xl'}>
        {bio1}
      </Heading>
      <Heading as={'h3'} size={'lg'}>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

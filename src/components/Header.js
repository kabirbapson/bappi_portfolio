import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, VStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: kabirbapson@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/kabirbapson",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/kabirbapson/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@kabirbapson",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/17542178/bappi-kabir",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8} >
            {socials.map((social, index) => (
                <a key={index} href={social.url} target={"_blank"} >
                <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
            ))}
            </HStack>

            {/* Add social media links based on the `socials` data */}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects-section">Projects</a>
              <a href="/#contactme-section">Contact Me</a>
              {/* Add links to Projects and Contact me section */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

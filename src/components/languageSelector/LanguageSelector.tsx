import React, { useState } from "react";
import { Box, Button, Heading, HStack } from "@chakra-ui/react";

const LanguageSelector = () => {
  const languageList = ["typescript", "javascript"];
  const [selectedLanguage, setSelectedLanguage] = useState(languageList[0]);

  const handleLanguageChange = (language: string) => {
    console.log(language);
    setSelectedLanguage(language);
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
      <HStack spacing={0}>
        {languageList.map((item, index) => (
          <Button
            key={item}
            flex="1"
            borderRadius="none"
            colorScheme={selectedLanguage === item ? "blue" : "gray"}
            onClick={() => handleLanguageChange(item)}
            isDisabled={selectedLanguage === item}
            _disabled={{ opacity: 1 }}
            name={item}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Button>
        ))}
      </HStack>
    </Box>
  );
};

export default LanguageSelector;

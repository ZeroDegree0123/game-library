import { Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <Input
      borderRadius={20}
      placeholder="Search Games..."
      variant="subtle"
      marginX={3}
    />
  );
};

export default SearchInput;

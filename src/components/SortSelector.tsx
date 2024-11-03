import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order by Relevance
        </Button>
      </MenuTrigger>
      <MenuContent position="absolute" marginTop="280px" marginLeft="94px">
        <MenuItem value="text">Relevance</MenuItem>
        <MenuItem value="picture">Date Added</MenuItem>
        <MenuItem value="symbol">ya</MenuItem>
        <MenuItem value="square">give</MenuItem>
        <MenuItem value="option">it</MenuItem>
        <MenuItem value="money">yo</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;

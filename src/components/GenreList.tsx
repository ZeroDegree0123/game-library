import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
  Text,
} from "@chakra-ui/react";

import useGenre, { Genre } from "@/hooks/useGenre";
import getCroppedImageUrl from "@/Services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenre();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root variant="plain">
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              {/* <Text fontSize="lg">{genre.name}</Text> */}
              <Button
                onClick={() => onSelectGenre(genre)}
                variant="ghost"
                size="lg"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                padding={0}
                width="5/6"
                whiteSpace="normal"
                textAlign="left"
                justifyContent="flex-start"
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;

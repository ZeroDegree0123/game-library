import { useState } from "react";
import { Box, Grid, GridItem, HStack, Stack } from "@chakra-ui/react";

import "./App.css";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import { Genre } from "./hooks/useGenre.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";
import { Platform } from "./hooks/useGames.ts";
import SortSelector from "./components/SortSelector.tsx";
import GameHeading from "./components/GameHeading.tsx";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  // Query Object Pattern
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Stack hideFrom={{ mdOnly: "md", smOnly: "sm" }}>
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Stack>
        <GridItem area="main">
          <Box paddingLeft={2.5}>
            <GameHeading gameQuery={gameQuery} />
            <HStack gap={5} marginBottom={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

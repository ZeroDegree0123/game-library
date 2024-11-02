import { defaultConfig, Grid, GridItem, Stack } from "@chakra-ui/react";
import * as Theme from "../theme.ts";

import "./App.css";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Stack hideFrom={{ mdOnly: "md", smOnly: "sm" }}>
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Stack>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

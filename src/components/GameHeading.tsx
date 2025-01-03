import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

export default function GameHeading({ gameQuery }: Props) {
  const { data: platformData } = usePlatforms();

  const selectedPlatform = platformData?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  const { data: genreData } = useGenres();

  const selectedGenre = genreData?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}

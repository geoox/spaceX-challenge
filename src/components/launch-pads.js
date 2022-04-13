import React, {useState, useEffect} from "react";
import { Badge, Box, SimpleGrid, Text, useToast, IconButton } from "@chakra-ui/core";
import { Link } from "react-router-dom";

import Error from "./error";
import Breadcrumbs from "./breadcrumbs";
import LoadMoreButton from "./load-more-button";
import { useSpaceXPaginated } from "../utils/use-space-x";
import { favLaunchpadsArrayKey, existsItem, deleteItem, saveItem } from "../utils/localstorage";

const PAGE_SIZE = 12;

export default function LaunchPads() {
  const { data, error, isValidating, size, setSize } = useSpaceXPaginated(
    "/launchpads",
    {
      limit: PAGE_SIZE,
    }
  );
  console.log(data);

  return (
    <div>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Launch Pads" }]}
      />
      <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
        {error && <Error />}
        {data &&
          data
            .flat()
            .map((launchPad) => (
              <LaunchPadItem key={launchPad.site_id} launchPad={launchPad} />
            ))}
      </SimpleGrid>
      <LoadMoreButton
        loadMore={() => setSize(size + 1)}
        data={data}
        pageSize={PAGE_SIZE}
        isLoadingMore={isValidating}
      />
    </div>
  );
}

function LaunchPadItem({ launchPad }) {
  const toast = useToast();

  const [isFav, updateFav] = useState(false);
  useEffect(() => {
    updateFav(existsItem(favLaunchpadsArrayKey, launchPad));
  }, [launchPad]);
  return (
    <Box
      as={Link}
      to={`/launch-pads/${launchPad.site_id}`}
      boxShadow="md"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      position="relative"
    >
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          {launchPad.status === "active" ? (
            <Badge px="2" variant="solid" variantColor="green">
              Active
            </Badge>
          ) : (
            <Badge px="2" variant="solid" variantColor="red">
              Retired
            </Badge>
          )}
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {launchPad.attempted_launches} attempted &bull;{" "}
            {launchPad.successful_launches} succeeded
          </Box>
          <Box ml="auto">
            <IconButton
              variantColor={isFav ? 'red' : 'yellow'}
              aria-label="favorite"
              size="sm"
              icon="star"
              onClick={(event) => {
                event.preventDefault();
                if (isFav) {
                  deleteItem(favLaunchpadsArrayKey, launchPad);
                  updateFav(false);
                  toast({
                    title: "Item removed from favorites.",
                    description: "Item is no longer available in the favorites list.",
                    status: "success",
                    duration: 2500,
                    isClosable: true,
                  });
                } else {
                  saveItem(favLaunchpadsArrayKey, launchPad);
                  updateFav(true);
                  toast({
                    title: "Item added to favorites.",
                    description: "Item is added to favorites list.",
                    status: "success",
                    duration: 2500,
                    isClosable: true,
                  });
                }
              }}
            />
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {launchPad.name}
        </Box>
        
        <Text color="gray.500" fontSize="sm">
          {launchPad.vehicles_launched.join(", ")}
        </Text>
      </Box>
    </Box>
  );
}

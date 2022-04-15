import React, { useState, useEffect } from "react";
import { saveItem, existsItem, deleteItem } from "../utils/localstorage";
import { useToast, Box, IconButton } from "@chakra-ui/react";
import { DeleteIcon, StarIcon } from "@chakra-ui/icons";

type FavoriteStarTypes = {
  launch: any,
  lsKey: string,
  icon?: string
}

export default function FavoriteStar({ launch, lsKey, icon='star'}:FavoriteStarTypes) {
    const toast = useToast();
  
    const [isFav, updateFav] = useState(false);
    useEffect(() => {
      updateFav(existsItem(lsKey, launch));
    }, [launch, lsKey]);
  
    return (
      <Box ml="auto">
        <IconButton
          colorScheme={isFav ? 'red' : 'yellow'}
          aria-label="favorite"
          size="sm"
          icon={icon ==='star'? <StarIcon></StarIcon>: <DeleteIcon></DeleteIcon>}
          onClick={(event) => {
            event.preventDefault();
            if (isFav) {
              deleteItem(lsKey, launch);
              updateFav(false);
              toast({
                title: "Item removed from favorites.",
                description: "Item is no longer available in the favorites list.",
                status: "success",
                duration: 2500,
                isClosable: true,
              });
              if(icon!=='star') window.location.reload();
            } else {
              saveItem(lsKey, launch);
              updateFav(true);
              toast({
                title: "Item added to favorites.",
                description: "Item is added to favorites list.",
                status: "success",
                duration: 2500,
                isClosable: true,
              });
              if(icon!=='star') window.location.reload();
            }
          }}
        />
      </Box>
    );
  }
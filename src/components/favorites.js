import React from "react";
import {
    Button,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/core'
import { getItems, favLaunchesArrayKey, favLaunchpadsArrayKey } from "../utils/localstorage";


export default function Favorites() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const favoriteLaunchesArr = getItems(favLaunchesArrayKey);
    const favLPadsArr = getItems(favLaunchpadsArrayKey);

    console.log({ favLPadsArr, favoriteLaunchesArr });

    return (
        <>
            <Button ref={btnRef} variant="ghost" variantColor="yellow" onClick={onOpen} leftIcon="star">
                Favorites
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Favorites</DrawerHeader>

                    <DrawerBody>

                    </DrawerBody>

                    <DrawerFooter>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}
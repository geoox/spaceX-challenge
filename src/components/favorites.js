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
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex,
    Avatar,
    Text,
    Badge,
    Divider,
} from '@chakra-ui/core'
import { getItems, favLaunchesArrayKey, favLaunchpadsArrayKey } from "../utils/localstorage";
import { Link } from "react-router-dom";
import FavoriteStar from "./fav-star";


export default function Favorites() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const launchesArr = getItems(favLaunchesArrayKey);
    const launchPadsArr = getItems(favLaunchpadsArrayKey);

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
                        <Accordion defaultIndex={[0, 1]} allowMultiple>
                            <AccordionItem>
                                <AccordionHeader>
                                    <Box flex="1" textAlign="left">
                                        Launches
                                    </Box>
                                    <AccordionIcon />
                                </AccordionHeader>
                                <AccordionPanel pb={4}>
                                    {
                                        launchesArr.map((launch, index) =>
                                            <Box
                                                key={launch.flight_number}
                                                as={Link}
                                                to={`/launches/${launch.flight_number.toString()}`}
                                            >
                                                <Flex>
                                                    <Avatar src={
                                                        launch.links.flickr_images[0]?.replace("_o.jpg", "_z.jpg") ??
                                                        launch.links.mission_patch_small
                                                    } />
                                                    <Box ml="3">
                                                        <Text fontWeight="bold">
                                                            {launch.mission_name}
                                                        </Text>
                                                        {launch.launch_success ?
                                                            <Badge variantColor="green">
                                                                Successful
                                                            </Badge> : <Badge ml="1" variantColor="red">
                                                                Failure
                                                            </Badge>}
                                                        <Text fontSize="sm">{launch.rocket.rocket_name}</Text>
                                                    </Box>
                                                    <Box ml="auto">
                                                    <FavoriteStar launch={launch} lsKey={favLaunchesArrayKey} icon="delete"></FavoriteStar>
                                                    </Box>
                                                </Flex>
                                                <Divider />
                                            </Box>)
                                    }
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionHeader>
                                    <Box flex="1" textAlign="left">
                                        Launch pads
                                    </Box>
                                    <AccordionIcon />
                                </AccordionHeader>
                                <AccordionPanel pb={4}>
                                    {
                                        launchPadsArr.map((launch, index) =>
                                            <Box
                                                key={launch.site_id}
                                                as={Link}
                                                to={`/launch-pads/${launch.site_id}`}
                                            >
                                                <Flex>
                                                    <Avatar src="https://cdn.mos.cms.futurecdn.net/UxLKZUsHmYviVWneMofwME.jpg" />
                                                    <Box ml="3">
                                                        <Text fontWeight="bold">
                                                            {launch.name}
                                                        </Text>
                                                        {launch.status === 'active' ?
                                                            <Badge variantColor="green">
                                                                Active
                                                            </Badge> : <Badge ml="1" variantColor="red">
                                                                Retired
                                                            </Badge>}
                                                        <Text fontSize="sm">{launch.vehicles_launched.toString()}</Text>
                                                    </Box>
                                                    <Box ml="auto">
                                                    <FavoriteStar launch={launch} lsKey={favLaunchpadsArrayKey} icon="delete"></FavoriteStar>
                                                    </Box>
                                                </Flex>
                                                <Divider />
                                            </Box>)
                                    }
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>

                    </DrawerBody>

                    <DrawerFooter>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}
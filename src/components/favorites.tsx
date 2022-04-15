import React, { useRef } from "react";
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
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex,
    Avatar,
    Text,
    Badge,
    Divider,
    AccordionButton,
} from '@chakra-ui/react'
import { getItems, favLaunchesArrayKey, favLaunchpadsArrayKey } from "../utils/localstorage";
import { Link } from "react-router-dom";
import FavoriteStar from "./fav-star";
import { Launch as LaunchModel } from "../models/launch";
import { Launchpad } from "../models/launchpad";
import { StarIcon } from "@chakra-ui/icons";


export default function Favorites() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null)
    const launchesArr = getItems(favLaunchesArrayKey);
    const launchPadsArr = getItems(favLaunchpadsArrayKey);

    return (
        <>
            <Button ref={btnRef} variant="ghost" colorScheme="yellow" onClick={onOpen} leftIcon={<StarIcon />}>
                Favorites
            </Button>
            <Drawer
                blockScrollOnMount={false}
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Favorites</DrawerHeader>
                    <DrawerBody>
                        <Accordion defaultIndex={[0, 1]} allowMultiple>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            Launches
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    {
                                        launchesArr.map((launch: LaunchModel) =>
                                            <Box
                                                key={launch.flight_number}
                                                as={Link}
                                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                // @ts-ignore
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
                                                            <Badge colorScheme="green">
                                                                Successful
                                                            </Badge> : <Badge ml="1" colorScheme="red">
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

                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            Launch pads
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>

                                <AccordionPanel pb={4}>
                                    {
                                        launchPadsArr.map((launch: Launchpad) =>
                                            <Box
                                                key={launch.site_id}
                                                as={Link}
                                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                // @ts-ignore
                                                to={`/launch-pads/${launch.site_id}`}
                                            >
                                                <Flex>
                                                    <Avatar src="https://cdn.mos.cms.futurecdn.net/UxLKZUsHmYviVWneMofwME.jpg" />
                                                    <Box ml="3">
                                                        <Text fontWeight="bold">
                                                            {launch.name}
                                                        </Text>
                                                        {launch.status === 'active' ?
                                                            <Badge colorScheme="green">
                                                                Active
                                                            </Badge> : <Badge ml="1" colorScheme="red">
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
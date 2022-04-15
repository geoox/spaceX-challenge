import React from "react";
import { Flex, Box, Text, Stack, Link, LinkProps } from "@chakra-ui/core";
import { ArrowRight } from "react-feather";
import { Link as BrowserLink } from "react-router-dom";

export default function Home() {
  return (
    <Stack m="6" spacing="6">
      <PageLink href="/launches">Browse SpaceX Launches</PageLink>
      <PageLink href="/launch-pads">Browse SpaceX Launch Pads</PageLink>
    </Stack>
  );
}

function PageLink({ href, children, ...rest } : LinkProps) {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Link as={BrowserLink} to={href} {...rest}>
      <Flex
        justifyContent="space-between"
        p="6"
        boxShadow="md"
        borderWidth="1px"
        rounded="lg"
      >
        <Text fontSize="lg">{children}</Text>
        <Box as={ArrowRight} />
      </Flex>
    </Link>
  );
}

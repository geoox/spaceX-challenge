import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { ChevronsRight } from "react-feather";

export type BreadcrumbItemsProps = {
  items: BreadcrumbItemProps[]
}

export type BreadcrumbItemProps = {
  to: string,
  label: string
}

export default function Breadcrumbs({ items }: BreadcrumbItemsProps) {
  return (
    <Breadcrumb
      m="6"
      spacing="1"
      separator={<Box size="1em" as={ChevronsRight} color="gray.300" />}
    >
      {items.map((item, index) => {
        const isCurrentPage = items.length === index + 1;
        return (
          <BreadcrumbItem isCurrentPage={isCurrentPage} key={item.label}>
            <BreadcrumbLink
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
              as={!isCurrentPage ? Link : undefined}
              to={!isCurrentPage ? item.to : undefined}
            >
              {item.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}

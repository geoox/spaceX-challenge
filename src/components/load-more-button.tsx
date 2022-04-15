import React from "react";
import { Spinner, Flex, Button } from "@chakra-ui/core";

type LoadMoreProps = {
  loadMore?: () => void,
  data?: Array<any>,
  pageSize: number,
  isLoadingMore: boolean,
}

export default function LoadMoreButton({
  loadMore,
  data,
  pageSize,
  isLoadingMore,
}:LoadMoreProps) {
  const isReachingEnd =
    data?.[0]?.length === 0 ||
    (data && data[data.length - 1]?.length < pageSize);

  return (
    <Flex justifyContent="center" my="100px">
      <Button onClick={loadMore} isDisabled={isReachingEnd || isLoadingMore}>
        {isLoadingMore ? (
          <Spinner />
        ) : isReachingEnd ? (
          "That's all!"
        ) : (
          "Show more..."
        )}
      </Button>
    </Flex>
  );
}

import { Card, CardBody, Skeleton } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card.Root width="300px">
      <Skeleton height="200px" />
      <CardBody>
        <Skeleton />
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeleton;

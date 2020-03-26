import React, { useContext } from "react";
import {
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col,
  Spinner
} from "reactstrap";

import { GlobalContext } from "../context/GlobalContext";
import { LoadingSpinner } from "./LoadingSpinner";

export const Display = () => {
  const { items, itemsLoading } = useContext(GlobalContext);
  return (
    <Container className="d-flex">
      <Row className="w-100 justify-content-center">
        {itemsLoading ? (
          <LoadingSpinner />
        ) : (
          items.hits &&
          items.hits.map(hit => (
            <Col md={3} key={hit.recipe.uri} className="my-2">
              <Card>
                <CardImg src={hit.recipe.image}></CardImg>
                <CardBody>
                  <a href={hit.recipe.url}>{hit.recipe.label}</a>
                </CardBody>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Display;

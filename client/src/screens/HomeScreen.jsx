import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PizzaCard from "../components/PizzaCard";
import { Container, Row, Col } from "react-bootstrap";
import { getAllPizzas } from "../actions/pizzaAction";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <>
      <Container className="my-2">
        {loading ? (
          <h1>Loading.....</h1>
        ) : error ? (
          <h1>Error while fetching pizzas</h1>
        ) : (
          <Row>
            {pizzas.map((pizza,i) => (
              <Col md={4} key={i}>
                <PizzaCard  pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;

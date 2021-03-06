import React, { useState } from "react";
import { Container, Table, Form, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "./stock.css";
import allStore from "../../store/actions";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Pokemon = useSelector(({ pokemon }) => pokemon);
  useEffect(() => {
    // console.log(Pokemon);
    dispatch(allStore.getPokemon());
  }, [dispatch, Pokemon]);

  const goToDetails = (name) => {
    navigate(`/${name}/details`);
  };

  return (
    <>
      <Container>
        <div>
          <h2 className="title-text mt-5">Stok Pokémon</h2>
        </div>
        <Row>
          <Col md={7} sm={12}>
            <Form className="mt-3  mb-2">
              <Form.Control
                size="sm"
                type="text"
                placeholder="Cari Pokémon"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
          </Col>
        </Row>

        <div>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Nama</th>
                <th className="right-text">Stok</th>
              </tr>
            </thead>
            <tbody>
              {Pokemon.filter((Pokemon) => Pokemon.name.includes(search))
                .length > 0 ? (
                Pokemon.filter((Pokemon) => Pokemon.name.includes(search)).map(
                  (el, idx) => (
                    <tr>
                      <td
                        key={idx}
                        className="name cursor-pointer"
                        onClick={() => goToDetails(el.name)}
                      >
                        {el.name}
                      </td>
                      <td className="right-text">10 pcs</td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td>data not found.</td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
};

export default List;

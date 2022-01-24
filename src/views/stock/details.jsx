import React from "react";
import { Container, Table, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./stock.css";
import allStore from "../../store/actions";
import FormUpdate from "./form_update";

const Details = () => {
  const [modalShow, setModalShow] = useState(false);

  const params = useParams();
  const dispatch = useDispatch();
  const Pokemon = useSelector(({ pokemon }) => pokemon);
  useEffect(() => {
    // console.log(Pokemon);
    dispatch(allStore.getPokemon());
  }, [dispatch, Pokemon]);

  return (
    <>
      <Container className="mt-5">
        <a href="/" className="name">
          <i class="bi bi-arrow-left"></i> Stok Pokémon
        </a>
        <Row>
          <Col md={10}>
            <h2 className="title-text mt-5">{params.name}</h2>
          </Col>
          <Col md={2}>
            <Button
              variant="outline-secondary"
              className="btn-update"
              onClick={() => setModalShow(true)}
            >
              Update Stok
            </Button>
          </Col>
        </Row>

        <div>
          <h7 className="mt-5">sisa stok</h7>
          <h4>10</h4>
          <h5 className="mt-3">Riwayat Stok</h5>
          <h7>satuan stok dalam pcs</h7>
        </div>

        <div>
          <Table responsive="sm" className="mt-3">
            <thead>
              <tr>
                <th>Waktu</th>
                <th>Kegiatan</th>
                <th>Catatan</th>
                <th className="left-text">Jmlh</th>
                <th className="left-text">Stok</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2 Apr 2021, 00:00</td>
                <td className="name">Update stok</td>
                <td>"stok awal"</td>
                <td className="left-text">+10 pcs</td>
                <td className="left-text">10 pcs</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>

      {/* modal */}
      <FormUpdate show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Details;

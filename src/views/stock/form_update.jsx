import React, { useState } from "react";
import {
  Table,
  Container,
  Button,
  Row,
  Col,
  Modal,
  Form,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./stock.css";
import allStore from "../../store/actions";

const FormUpdate = (props) => {
  const [pcs, setPcs] = useState(0);
  const [lusin, setLusin] = useState(0);
  const [total] = useState(pcs + lusin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Pokemon = useSelector(({ pokemon }) => pokemon);
  useEffect(() => {
    dispatch(allStore.getPokemon());
  }, [dispatch, Pokemon]);

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Container>
            <h2 className="title-text center-text mt-2">Update stok</h2>
            <p className="center-text">
              Masukkan jumlah stok yang tersedia di rak saat ini.
            </p>

            <div>
              <Table responsive="md" className="mt-3">
                <thead>
                  <tr>
                    <th>Kemasan</th>
                    <th className="right-text">Jumlah</th>
                    <th className="right-text">Stok</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Pcs</b>{" "}
                    </td>
                    <td className="right-text">
                      <Row>
                        <Col md={5} xs={5}></Col>
                        <Col md={3} xs={3} className="right-text">
                          1 x
                        </Col>
                        <Col md={3} xs={3} className="right-text">
                          <Form.Control
                            size="sm"
                            type="number"
                            onChange={(e) => setPcs(e.target.value)}
                          />
                        </Col>
                        <Col md={1} xs={1} className="right-text">
                          =
                        </Col>
                      </Row>
                    </td>
                    <td className="right-text">{pcs}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Lusin</b>
                    </td>
                    <td className="right-text">
                      <Row>
                        <Col md={5} xs={5}></Col>
                        <Col md={3} xs={3} className="right-text">
                          12 x
                        </Col>
                        <Col md={3} xs={3} className="right-text">
                          <Form.Control
                            size="sm"
                            type="number"
                            onChange={(e) => {
                              setLusin(e.target.value * 12);
                            }}
                          />
                        </Col>
                        <Col md={1} xs={1} className="right-text">
                          =
                        </Col>
                      </Row>
                    </td>
                    <td className="right-text">{lusin}</td>
                  </tr>

                  <tr>
                    <td colSpan="2">
                      <b>Total stok</b> <>(dalam pcs)</>
                    </td>
                    <td className="right-text">
                      <b>{total}</b>{" "}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="mt-5 right-text">
              <Button onClick={() => navigate(`/${props.name}/update/confirm`)}>
                Simpan
              </Button>
              <Button
                className="ms-2"
                onClick={props.onHide}
                // onClick={(e) => {
                //   setPcs(0);
                //   setLusin(0);
                // }}
              >
                Batal
              </Button>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormUpdate;

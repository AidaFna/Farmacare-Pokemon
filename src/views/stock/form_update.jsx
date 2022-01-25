import React from "react";
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
              <Table responsive="sm" className="mt-3">
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
                    <t className="right-text" d>
                      <Row>
                        <Col md={4}>1 x </Col>
                        <Col md={4}>
                          <Form.Control
                            size="sm"
                            type="number"
                            placeholder=""
                          />
                        </Col>
                        <Col md={4}>=</Col>
                      </Row>
                    </t>
                    <td className="right-text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Lusin</b>{" "}
                    </td>
                    <td>
                      <Row>
                        <Col md={4} className="right-text">
                          12 x
                        </Col>
                        <Col md={4} className="right-text">
                          <Form.Control
                            size="sm"
                            type="number"
                            placeholder=""
                          />
                        </Col>
                        <Col md={4} className="right-text">
                          =
                        </Col>
                      </Row>
                    </td>
                    <td className="right-text">0</td>
                  </tr>

                  <tr>
                    <td colspan="2">
                      <b>Total stok</b> <>(dalam pcs)</>
                    </td>
                    <td className="right-text">
                      <b>0</b>{" "}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="mt-5 right-text">
              <Button onClick={() => navigate(`/${props.name}/update/confirm`)}>
                Simpan
              </Button>
              <Button className="ms-2" onClick={props.onHide}>
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

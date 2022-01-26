import React from "react";
import {
  Container,
  Table,
  Button,
  Row,
  Col,
  Form,
  Navbar,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Confirm = () => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      <Navbar className="navbar-mobile" expand="lg" variant="light" bg="light">
        <Container className="navbar-mobile">
          <Navbar.Brand className="navbar-mobile">
            <h6
              className="name cursor-pointer text-center"
              onClick={() => navigate(`/${params.name}/details`)}
            >
              <i class="bi bi-x-lg"></i> {params.name}
            </h6>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <h2 className="mt-4 mb-4">
          <b>Konfirmasi update stok</b>
        </h2>
        <div>
          <h7 className="mt-5">Selisih</h7>
          <h1>+533 pcs</h1>
          <Row>
            <Col md={4} xs={4}>
              <h7 className="mt-5">Di sistem</h7>
              <h5>10 pcs</h5>
            </Col>
            <Col md={1} xs={1}>
              <h4 className="right-text mt-3">
                <i class="bi bi-arrow-right"></i>
              </h4>
            </Col>
            <Col md={4} xs={6}>
              <h7 className="mt-5">Hasil update stok</h7>
              <h5>543 pcs</h5>
            </Col>
          </Row>
          <h3 className="mt-5">
            <b>Detail stok opname</b>
          </h3>
        </div>
        <div>
          <Table responsive="md" className="mt-1">
            <thead>
              <tr>
                <th>Keterangan</th>
                <th className="cell-detail">Detail</th>
                <th colSpan={2}>Jumlah</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="name">
                  <b>Hasil update stok</b> <br />
                  <h7 className="text-detail">3 pcs, 45 lusin (12s) </h7>
                </td>
                <td className="cell-detail">3 pcs, 45 lusin (12s) </td>
                <td>543 pcs</td>
                <td>
                  <h6 className="name">
                    <i class="bi bi-pencil"></i>
                  </h6>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="name">
                  <b className="total-opname">Total hasil stok opname</b>
                </td>
                <td>
                  <b>543 pcs</b>
                </td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="mt-5">
          <h5>
            <b>Catatan</b>
          </h5>
          <Form.Control
            as="textarea"
            placeholder="Contoh: stok awal"
            rows={3}
          />
        </div>
        <div className="mt-3 mb-5 right-text ">
          <Button
            className="btn-simpan"
            variant="success"
            onClick={() => navigate(`/${params.name}/details`)}
          >
            Simpan
          </Button>
          <Button
            variant="success"
            className="ms-2 btn-batal"
            onClick={() => navigate(`/${params.name}/details`)}
          >
            Batal
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Confirm;

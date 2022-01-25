import React from "react";
import { Container, Table, Button, Row, Col, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Confirm = () => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <h2 className="title-text mt-5">Konfirmasi Update</h2>
        <div>
          <h7 className="mt-5">selisih</h7>
          <h4>+533 pcs</h4>
          <Row>
            <Col md={4}>
              <h7 className="mt-5">D sistem</h7>
              <h5>10 pcs</h5>
            </Col>
            <Col md={1}>
              <h4 className="right-text mt-3">
                <i class="bi bi-arrow-right"></i>
              </h4>
            </Col>
            <Col md={4}>
              <h7 className="mt-5">Hasil update stok</h7>
              <h5>543 pcs</h5>
            </Col>
          </Row>
        </div>
        <div>
          <Table responsive="sm" className="mt-3">
            <thead>
              <tr>
                <th>Keterangan</th>
                <th>Detail</th>
                <th>Jumlah</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="name">Hasil update stok</td>
                <td>3 pcs, 45 lusin (12s) </td>
                <td>543 pcs</td>
              </tr>
              <tr>
                <td colSpan={2} className="name">
                  Total hasil stok opname
                </td>
                <td>543 pcs</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="mt-5">
          <h5>Catatan</h5>
          <Form.Control as="textarea" rows={3} />
        </div>
        <div className="mt-3 mb-5 right-text">
          <Button onClick={() => navigate(`/${params.name}/details`)}>
            Simpan
          </Button>
          <Button
            className="ms-2"
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

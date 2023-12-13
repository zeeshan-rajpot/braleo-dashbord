import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ConfirmModal from '../components/Success.jsx';
export const PrivacyPolicyPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className='m-auto border mt-3 mt-md-3 mobilewidth'
        style={{ width: '95%', height: '80vh', overflowY: 'auto ' }}
      >
        <Row className='px-5 pt-5'>
          <p
            style={{ color: '#78828A', fontWeight: '800', fontSize: '21.08px' }}
          >
            1. YOUR AGREEMENT
          </p>
          <p className='mt-4' style={{ color: '#78828A', fontSize: '16.4px' }}>
            By using this Site, you agree to be bound by, and to comply with,
            these Terms and Conditions. If you do not agree to these Terms and
            Conditions, please do not use this site.
          </p>
          <p className='mt-5 ' style={{ color: '#78828A', fontSize: '16.4px' }}>
            PLEASE NOTE: We reserve the right, at our sole discretion, to
            change, modify or otherwise alter these Terms and Conditions at any
            time. Unless otherwise indicated, amendments will become effective
            immediately. Please review these Terms and Conditions periodically.
            Your continued use of the Site following the posting of changes
            and/or modifications will constitute your acceptance of the revised
            Terms and Conditions and the reasonableness of these standards for
            notice of changes. For your information, this page was last updated
            as of the date at the top of these terms and conditions.
          </p>
        </Row>
        <Row className='px-5 pt-5'>
          <p
            style={{ color: '#78828A', fontWeight: '800', fontSize: '21.08px' }}
          >
            2. PRIVACY
          </p>
          <p className='mt-4' style={{ color: '#78828A', fontSize: '16.4px' }}>
            Please review our Privacy Policy, which also governs your visit to
            this Site, to understand our practices.
          </p>
        </Row>
        <Row className='px-5 pt-4'>
          <p
            style={{ color: '#78828A', fontWeight: '800', fontSize: '21.08px' }}
          >
            3. LINKED SITES
          </p>
          <p className='mt-4' style={{ color: '#78828A', fontSize: '16.4px' }}>
            This Site may contain links to other independent third-party Web
            sites ("Linked Sites”). provided solely as a convenience to our
            visitors.
          </p>
        </Row>
        <Row className='px-5 pt-4'>
          <p
            style={{ color: '#78828A', fontWeight: '800', fontSize: '21.08px' }}
          >
            4. ANOTHER THERM
          </p>
          <p className='mt-4' style={{ color: '#78828A', fontSize: '16.4px' }}>
            This Site may contain links to other independent third-party Web
            sites ("Linked Sites”). provided solely as a convenience to our
            visitors.
          </p>
        </Row>
        <Row className='px-5 pt-4'>
          <p
            style={{ color: '#78828A', fontWeight: '800', fontSize: '21.08px' }}
          >
            3. LINKED SITES
          </p>
          <p className='mt-4' style={{ color: '#78828A', fontSize: '16.4px' }}>
            This Site may contain links to other independent third-party Web
            sites ("Linked Sites”). provided solely as a convenience to our
            visitors.
          </p>
        </Row>
        <Row className='px-5 pt-4'>
          <p
            style={{ color: '#78828A', fontWeight: '800', fontSize: '21.08px' }}
          >
            4. ANOTHER THERM
          </p>
          <p className='mt-4' style={{ color: '#78828A', fontSize: '16.4px' }}>
            This Site may contain links to other independent third-party Web
            sites ("Linked Sites”). provided solely as a convenience to our
            visitors.
          </p>
        </Row>
      </div>
      <Row className='mt-5'>
        <Col xl={8}></Col>
        <Col xl={4} className='d-flex'>
          <Col xl={6}>
            <button
              className='border w-100 p-3 rounded-3 text-white'
              style={{ backgroundColor: '#A9B4BF' }}
            >
              {' '}
              <img src='./btncopy.svg' alt='' className='me-4' />
              Paste text
            </button>
          </Col>

          <Col xl={6} className='ms-3'>
            <button
              variant='primary'
              onClick={handleShow}
              className='border w-100 p-3 rounded-3 text-white'
              style={{ backgroundColor: '#868E96' }}
            >
              Save
            </button>
          </Col>
        </Col>
      </Row>
      <Modal show={show}>
        <ConfirmModal onHide={handleClose} />
      </Modal>
    </>
  );
};
export default PrivacyPolicyPage;

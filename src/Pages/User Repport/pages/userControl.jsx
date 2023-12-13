import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalCard from '../Components/tableModal.jsx';
function ResponsiveExample() {
  const tableData = [
    {
      name: 'Criss Germano',
      Date: 'Set 29, 2023 At 08.00 PM',
      Time: 'At 08.00 PM',
      UserId: '@crissgermano',
      Local: 'MA',
      Actions: 'Enable',
    },
    {
      name: 'Criss Germano',
      Date: 'Set 29, 2023 At 08.00 PM',
      Time: 'At 08.00 PM',
      UserId: '@crissgermano',
      Local: 'MA',
      Actions: 'Enable',
    },
    {
      name: 'Criss Germano',
      Date: 'Set 29, 2023 At 08.00 PM',
      Time: 'At 08.00 PM',
      UserId: '@crissgermano',
      Local: 'MA',
      Actions: 'Enable',
    },
    {
      name: 'Criss Germano',
      Date: 'Set 29, 2023 At 08.00 PM',
      Time: 'At 08.00 PM',
      UserId: '@crissgermano',
      Local: 'MA',
      Actions: 'Enable',
    },
    {
      name: 'Criss Germano',
      Date: 'Set 29, 2023 At 08.00 PM',
      Time: 'At 08.00 PM',
      UserId: '@crissgermano',
      Local: 'MA',
      Actions: 'Enable',
    },
    {
      name: 'Criss Germano',
      Date: 'Set 29, 2023 At 08.00 PM',
      Time: 'At 08.00 PM',
      UserId: '@crissgermano',
      Local: 'MA',
      Actions: 'Enable',
    },
    {
      name: 'Criss Germano',
      Date: 'Set 29, 2023 At 08.00 PM',
      Time: 'At 08.00 PM',
      UserId: '@crissgermano',
      Local: 'MA',
      Actions: 'Enable',
    },
    {
      name: 'Criss Germano',
      Date: 'Set 29, 2023 At 08.00 PM',
      Time: 'At 08.00 PM',
      UserId: '@crissgermano',
      Local: 'MA',
      Actions: 'Enable',
    },
    {
      name: 'Criss Germano',
      Date: 'Set 29, 2023 At 08.00 PM',
      Time: 'At 08.00 PM',
      UserId: '@crissgermano',
      Local: 'MA',
      Actions: 'Enable',
    },
    {
      name: 'Criss Germano',
      Date: 'Set 29, 2023 At 08.00 PM',
      Time: 'At 08.00 PM',
      UserId: '@crissgermano',
      Local: 'MA',
      Actions: 'Enable',
    },
    {
      name: 'Criss Germano',
      Date: 'Set 29, 2023 At 08.00 PM',
      Time: 'At 08.00 PM',
      UserId: '@crissgermano',
      Local: 'MA',
      Actions: 'Enable',
    },
  ];
  const [selectedValues, setSelectedValues] = useState({});
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleDropdownChange = (e, index) => {
    const value = e.target.value;
    setSelectedValues(prevValues => ({
      ...prevValues,
      [index]: value,
    }));
    setSelectedRowIndex(index);
  };
  //------------------------- Modal---------------------------------------
  const [modalShow, setModalShow] = useState(false);
  const [nextModalShow, setNextModalShow] = useState(false);

  // Function to handle opening the "Next" modal
  const handleNextModalShow = () => {
    setModalShow(false); // Close the current modal
    setNextModalShow(true); // Open the "Next" modal
  };
  return (
    <div
      className='my-5 m-auto '
      style={{ maxHeight: '75vh', overflowY: 'auto', width: '90%' }}
    >
      <table className='table p-5  table-responsive' > 
        <thead
          style={{
            backgroundColor: ' #5498',
            borderRadius: '15px',
          }}
        >
          <tr>
            <th scope='col' className='thead p-3 '>
              Name/Business <img src='./arrowtble.svg' className='ms-2' />
            </th>
            <th scope='col' className='thead p-3 '>
              Date <img src='./arrowtble.svg' className='ms-2' />
            </th>
            <th scope='col' className='thead p-3 '>
              User Id <img src='./arrowtble.svg' className='ms-2' />
            </th>
            <th scope='col' className='thead p-3 '>
              Local <img src='./arrowtble.svg' className='ms-2' />
            </th>
            <th scope='col' className='thead p-3 '>
              Actions <img src='./arrowtble.svg' className='ms-2' />
            </th>
          </tr>
        </thead>

        <tbody style={{ paddingTop: '30px !important' }}>
          {tableData.map((data, index) => (
            <tr
              key={index}
              className={`py-3 ${
                index === selectedRowIndex ? 'selected-row' : ''
              }`}
            >
              <td
                className='d-flex text-secondary py-3'
                role='button'
                variant='secondary'
                onClick={handleNextModalShow}
              >
                <div className='d-flex '>
                  <img
                    src='./image/userKellyimage.png'
                    style={{ width: '40px' }}
                  />
                  <img
                    src='./table dull active.svg'
                    style={{ transform: 'translateY(-10px) translateX(-10px)' }}
                  />
                </div>

                <p className='m-0 pt-1 ms-3 '>{data.name}</p>
              </td>
              <td className='text-secondary py-3'>{data.Date}</td>
              <td className='text-secondary py-3'>{data.UserId}</td>
              <td className='text-secondary py-3'>{data.Local}</td>
              <td colSpan='2'>
                <div className='text-muted'>
                  <select
                    name='Selection'
                    id='Selection'
                    className='text-muted rounded-3 p-2 w-100'
                    value={selectedValues[index] || ''}
                    onChange={e => handleDropdownChange(e, index)}
                  >
                    <option>Action</option>
                    <option value='Enable'>Enable</option>
                    <option value='Pause'>Pause</option>
                    <option value='Delete'>Delete</option>
                    <option value='Suspended'>Suspended</option>
                  </select>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <div>
          <Modal
            show={nextModalShow}
            onHide={() => setNextModalShow(false)}
            centered
          >
            <ModalCard onHide={() => setNextModalShow(false)} />
          </Modal>
        </div>
      </table>
    </div>
  );
}

export default ResponsiveExample;

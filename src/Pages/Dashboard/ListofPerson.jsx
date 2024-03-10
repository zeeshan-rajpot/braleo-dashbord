import './ListOfperson.css';

const peopleData = [
  {
    name: 'John Doe',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    location: 'Florida',
    accountSet: 'Account Set 2023',
  },
  {
    name: 'John Doe',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    location: 'Florida',
    accountSet: 'Account Set 2023',
  },
  {
    name: 'John Doe',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    location: 'Florida',
    accountSet: 'Account Set 2023',
  },
  {
    name: 'John Doe',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    location: 'Florida',
    accountSet: 'Account Set 2023',
  },
  {
    name: 'John Doe',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    location: 'Florida',
    accountSet: 'Account Set 2023',
  },
  {
    name: 'John Doe',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    location: 'Florida',
    accountSet: 'Account Set 2023',
  },
  {
    name: 'John Doe',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    location: 'Florida',
    accountSet: 'Account Set 2023',
  },
  // Add more people as needed
];

const ListofPerson = () => {
  return (
    <>
      <div className=' mt-2 d-flex align-items-center justify-content-between '>
        <p className=' text-secondary '> New users</p>
        <p className=' text-secondary '>See all</p>
      </div>
      {peopleData.map((person, index) => (
        <div
          className='d-flex align-items-center justify-content-between mt-3'
          key={index}
        >
          <div className='d-flex'>
            <img
              src={person.imageUrl}
              width='40px'
              className='rounded-5'
              style={{ height: '40px' }}
              alt=''
            />
            <div className='ring-container'>
              <div className='circle mb-4'></div>
            </div>
            <div>
              <p className='mb-0 mpfontsize'>
                {person.name}
                <br />
                hello
              </p>
            </div>
          </div>
          <div>
            <p className='mb-0 mpfontsize'>
              {person.location}
              <br />
              {person.accountSet}
            </p>
          </div>
        </div>
      ))}
      <div className=' mt-3 d-flex align-items-center  justify-content-around  '>
        <p className=' text-secondary '> Total today</p>
        <p className=' text-secondary '>3,450 users</p>
      </div>
    </>
  );
};

export default ListofPerson;

const style = {
  padding: '10px 0',
  borderBottom: '3px solid transparent',
  display: 'inline-block',
  cursor: 'pointer',
  backgroundColor: '#fff',
  width: '33.33%',
  color: '#ACB6BE',
  textAlign: 'center',
  fontSize: '16px',
};

const activeStyle = {
  ...style,
  color: 'grey',
  borderBottom: '3px solid #868E96',
};

const Tabs = ({ children, isActive }) => (
  <span
    className='text-nowrap fontformedia'
    style={isActive ? activeStyle : style}
  >
    {children}
  </span>
);

export default Tabs;

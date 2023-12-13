const style = {
  padding: '10px 0',
  display: 'inline-block',
  cursor: 'pointer',
  borderRadius: '10px',
  width: '30%',
  marginLeft: '20px',
  backgroundColor: '#F7F8F9',
  color: '#868E96',
  textAlign: 'center',
  fontSize: '16px',
  opacity: 0.5,
};

const activeStyle = {
  ...style,
  opacity: 1,
  color: '#78828A',
};

const Solvedtabs = ({ children, isActive, imageSrc, onClick }) => (
  <span
    className='text-nowrap fontformedia'
    style={isActive ? activeStyle : style}
    onClick={onClick}
  >
    <img src={imageSrc} alt='Tab Icon' />
    {children}
  </span>
);

export default Solvedtabs;

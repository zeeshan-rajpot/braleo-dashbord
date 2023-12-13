

const style = {
  padding: "10px 0",
  borderBottom: "3px solid transparent",
  display: "inline-block",
  cursor: "pointer",
  backgroundColor: "#fff",
  width: "50%",
  color: "grey",
  textAlign: "center",
  fontSize :"16px"
}

const activeStyle = {
  ...style,
  color: "grey",
  borderBottom: "3px solid #78828A"
}

const Tabbar = ({ children, isActive }) => (
  <span style={isActive ? activeStyle : style}>{children}</span>
)

export default Tabbar
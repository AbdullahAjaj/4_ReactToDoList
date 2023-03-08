const NavButton = ({ onClick, isSelected, title, children }) => {
  return (
    <li
      onClick={onClick}
      style={{ background: isSelected ? "red" : undefined }}
    >
      {children || title}
    </li>
  );
};

export default NavButton;
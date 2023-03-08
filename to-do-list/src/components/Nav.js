import NavButton from "./NavButton"

const Nav = ({ appliedFilter, onDoneClick, onToDoClick }) =>{

  return(
    <nav>
      <NavButton
        onClick={onDoneClick}
        isSelected={appliedFilter === "done"}
        title="Done"
      />
      <NavButton
        onClick={onToDoClick}
        isSelected={appliedFilter === "todo"}
        // title="Todo"
      >
        ToDo
      </NavButton>
    </nav>
  )
}

export default Nav
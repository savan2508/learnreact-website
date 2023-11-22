export function TabButton(props) {
  const { children, onSelect, isSelected } = props;

  function handleClick() {
    onSelect();
  }

  return (
    <li>
      <button className={(isSelected && "active") || ""} onClick={handleClick}>
        {children}
      </button>
    </li>
  );
}

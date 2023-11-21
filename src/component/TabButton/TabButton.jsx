export function TabButton(props) {
  const { children, onSelect } = props;

  function handleClick() {
    onSelect();
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}

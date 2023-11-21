export function TabButton(props) {
  const { children, onSelect } = props;

  function handleClick() {
    console.log(children);
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}

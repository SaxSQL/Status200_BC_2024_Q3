// PascalCasing --> className (lowercase-uppercase mandatory)
interface Props {
  listitems: string[];
  active: number;
}

function ListGroup({ listitems, active }: Props) {
  return (
    <>
      <ul className="list-group">
        {listitems.map((item, index) =>
          index === active ? (
            <li className="list-group-item active">
              {index + 1}
              {item}
            </li>
          ) : (
            <li className="list-group-item">
              {index + 1}
              {item}
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default ListGroup;

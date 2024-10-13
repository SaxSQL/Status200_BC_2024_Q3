import { Fragment } from "react/jsx-runtime";

function Message() {
  let name = "Wessom";

  return (
    <Fragment>
      <h1>Hello World</h1>
      <b>My name is {name}</b>
    </Fragment>
  );
}

export default Message;

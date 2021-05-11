import Own from "../src";
import ListItem from "./ListItem";

const List = props => {
  const { alphabet } = props;

  return (
    <ul>
      {alphabet.map(symbol => (
        <ListItem>{symbol}</ListItem>
      ))}
    </ul>
  );
};

export default List;

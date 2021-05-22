import { useContext, useState } from "react";
import styled from "styled-components";

import { AppContext } from "app/context";

const StyledInput = styled.input`
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 235px;
  padding: 20px 10px;
  font-size: 15px;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const TodoInput = () => {
  const [value, setValue] = useState("");
  const { handleOnAddItem } = useContext(AppContext);

  const handleOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleOnAddItem(e.target.value);
      setValue("");
    }
  };

  return (
    <StyledInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Add some item"
      onKeyDown={handleOnKeyDown}
      className="todo-input"
    />
  );
};

export default TodoInput;

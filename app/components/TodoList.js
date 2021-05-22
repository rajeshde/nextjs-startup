import Link from "next/Link";
import { useContext } from "react";
import styled from "styled-components";

import { AppContext } from "app/context";
import TodoInput from "./TodoInput";

const StyledUl = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  min-height: 30px;
  width: 250px;
  margin-bottom: 5px;
  margin-bottom: 5px;
  padding: 5px 10px 5px 0px;
`;

const DeleteButton = styled.button`
  width: 50px;
  height: 30px;
  align-self: center;
  float: right;
  border-radius: 5px;
  padding: 5px;
  border: none;
  cursor: pointer;
`;

const TodoList = () => {
  const { items, handleOnDeleteItem } = useContext(AppContext);

  return (
    <div>
      <TodoInput />
      <StyledUl>
        {items.length
          ? items.map((item) => (
              <StyledLi key={item}>
                <Link href={`/details/${item}`}>{item}</Link>
                <DeleteButton
                  onClick={() => handleOnDeleteItem(item)}
                  type="button"
                >
                  Delete
                </DeleteButton>
              </StyledLi>
            ))
          : "No items yet :("}
      </StyledUl>
    </div>
  );
};

export default TodoList;

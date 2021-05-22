import styled from "styled-components";

const StyledButton = styled.button`
  width: 60px;
  height: 25px;
  padding: 5px 10px;
  border-radius: 15px;
  background-color: #136833;
  color: #fff;
  border: none;
  cursor: pointer;
  ${({ danger }) =>
    danger &&
    `
    background-color: #F05149;
    color: #fff;
  `}
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #eee;
    color: #222;
    cursor: not-allowed;
  `}
`;

const Button = (props) => {
  const { children, ...rest } = props;
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;

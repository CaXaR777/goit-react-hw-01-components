import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 6px;
    border-top: 1px solid #d3d3d3;
    width: 115px;
    :not(:last-child) {
      border-right: 1px solid #d3d3d3;
    }
    span:last-child {
      font-weight: bold;
    }
  }
`;
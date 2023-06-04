import styled from 'styled-components';

export const StyledFriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 250px;

  padding: 8px;

  border: 1px solid #d3d3d3;
  border-radius: 6px;
  background-color: #f3f1f1;
  p {
    font-size: 22px;
  }

  img {
    border: 1px solid #7c7575;
    border-radius: 50%;
    background-color: #ffffff;
  }
`;

export const StatusStyled = styled.span`
  width: 14px;
  height: 14px;

  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'greenyellow' : 'red';
  }};
`;
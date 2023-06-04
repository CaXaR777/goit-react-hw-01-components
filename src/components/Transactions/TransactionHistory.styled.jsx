import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 8px;
  box-sizing: border-box;
  border-bottom: 1px solid #d3d3d3;
`;

export const HeadCells = styled.th`
  text-transform: uppercase;
  color: #f1f1f1;
  background-color: #4381f5;
  font-size: 12px;
  font-weight: normal;
  width: 121px;
  padding: 8px;
  :not(:last-child) {
    border-right: 1px solid white;
  }
  :first-child {
    border-top-left-radius: 8px;
  }
  :last-child {
    border-top-right-radius: 8px;
  }
`;

export const BodyCells = styled.td`
  padding: 8px 7px;
  text-align: center;
  font-size: 12px;
  color: #7c7575;
  box-sizing: border-box;
  border-right: 1px solid #d3d3d3;
  :first-child {
    border-left: 1px solid #d3d3d3;
  }

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const RowLines = styled.tr`
  :nth-child(2n) {
    background-color: #ebebeb;
  }
`;
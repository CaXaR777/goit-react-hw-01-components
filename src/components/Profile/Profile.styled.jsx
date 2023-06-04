import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  background-color: #ebebeb;
  font-size: 22px;
  padding-top: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const Avatar = styled.img`
  width: 240px;
  border-radius: 50%;
  border: 1px solid #d3d3d3;
  background-color: #b1ccd3;
`;

export const Name = styled.p`
  font-size: 28px;
  font-weight: bold;
`;
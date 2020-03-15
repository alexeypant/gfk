import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledBase = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  background-color: orange;
`;

export const StyledBaseLabel = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

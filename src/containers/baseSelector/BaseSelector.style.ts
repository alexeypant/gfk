import styled from 'styled-components';
import { Button } from 'antd';

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledBase = styled.div`
  flex: 1;
  display: flex;
  align-items: center
`;

export const StyledButton = styled(Button)`
  flex: 1;
`;

import { keyframes } from 'styled-components';

export const bump = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const neonGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 8px #33cfff, 0 0 20px #33cfff, 0 0 30px #33cfff;
  }
  50% {
    box-shadow: 0 0 12px #33cfff, 0 0 28px #33cfff, 0 0 40px #33cfff;
  }
`;
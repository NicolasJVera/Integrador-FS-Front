import styled from 'styled-components';

export const ProfileContainer = styled.div`
  max-width: 900px;
  margin: 100px auto;
  padding: 32px 16px;
`;

export const Card = styled.div`
  background: #111;
  color: ${props => props.theme.colors.white};
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  overflow: hidden;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
`;

export const Heading = styled.h3`
  font-family: ${props => props.theme.fonts.title};
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 4px;
`;

export const Subheading = styled.p`
  margin: 0;
  font-family: ${props => props.theme.fonts.text};
  font-size: 14px;
  color: ${props => props.theme.colors.gray};
`;

export const LogoutButton = styled.button`
  font-family: ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.2s ease;
  &:hover { transform: translateY(-1px); background: ${props => props.theme.colors.light}; }
  &:active { transform: translateY(0); }
`;

export const CardBody = styled.div`
  padding: 8px 0;
`;

export const DetailRow = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 16px;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  &:last-child { border-bottom: none; }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Label = styled.dt`
  font-family: ${props => props.theme.fonts.text};
  font-size: 14px;
  color: ${props => props.theme.colors.gray};
`;

export const Value = styled.dd`
  font-family: ${props => props.theme.fonts.text};
  font-size: 15px;
  color: ${props => props.theme.colors.white};
  margin: 0;
`;

export const Button = styled.button`
  font-family: ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  padding: 10px 14px;
  margin-top: 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.2s ease;
  &:hover { transform: translateY(-1px); background: ${props => props.theme.colors.light}; }
  &:active { transform: translateY(0); }
`;
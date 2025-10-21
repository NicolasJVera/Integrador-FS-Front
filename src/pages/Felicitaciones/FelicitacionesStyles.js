import styled from 'styled-components';

export const FelicitacionesStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.background};
    min-height: calc(100vh - 400px);
`;

export const TittleStyles = styled.h1`
    font-size: 3rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 2rem;
    font-family: ${props => props.theme.fonts.title};
`;

export const ParagraphStyles = styled.p`
    font-size: 1.5rem;
    color: ${props => props.theme.colors.white};
    margin-bottom: 2rem;
    `;

export const ButtonStyles = styled.button`
    border-radius: 5px;
    font-size: 1.5rem;
    margin-top: 2rem;
    padding: 1rem 1rem;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${props => props.theme.colors.light};
        color: ${props => props.theme.colors.white};
    }
    `;


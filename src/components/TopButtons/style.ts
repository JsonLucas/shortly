import styled from 'styled-components';

interface IProps {
    buttonType?: String
}

export const RowButtons = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 132px;
    justify-content: space-between;
    position: absolute;
    right: 171px;
    top: 60px;
`;

export const TopButton = styled.p<IProps>`
    box-sizing: border-box;
    font-size: 14px;
    color: ${({buttonType}) => buttonType === 'sign-up' ? '#5D9040' : '#9C9C9C'};
    ${({hidden}) => hidden ? 'display: none;' : ''}
    font-family: 'Lexend Deca', sans-serif;
    cursor: pointer;
`;
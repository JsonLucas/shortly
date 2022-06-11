import styled from 'styled-components';

interface IProps{
    fieldType?: String
}

export const Container = styled.form`
    box-sizing: border-box;
    width: 769px;
    margin: 95px auto;
    
`;

export const RowField = styled.div<IProps>`
    box-sizing: border-box;
    ${({fieldType}) => fieldType !== 'submit' 
    ? 'width: 100%; margin-bottom: 25px;' 
    : 'width: 182px; height: 60px; margin: 61px auto; font-weight: 400;'
    }
`;

export const Field = styled.input`
    box-sizing: border-box;
    padding: 15px;
    border: none;
    width: 100%;
    ${({type}) => type !== 'submit' 
    ? `box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);
       border-radius: 5px;`
    : `color: white; 
       background-color: #5D9040;
       border-radius: 12px;`
    }
`;
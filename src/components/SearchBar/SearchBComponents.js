import styled from 'styled-components';

export const SearchBarContainer = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 95%;

`;

export const BotonSearch = styled.button`

    background-color: green;
    padding: 1em;
    border: 0px;
    border-radius: 0px 10px 10px 0px;
    font-weight: 300;
    &:hover{
        font-color: white;
        background-color: blue;
        box-shadow: 2px -2px #003400;
    }
    
`;

export const StyledInput = styled.input`

    border: 0px;
border-radius: 10px 0px 0px 10px;


`;
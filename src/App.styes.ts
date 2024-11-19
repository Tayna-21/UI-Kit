import styled from 'styled-components';
import * as variables from './variables';

export const Wrapper = styled.div`
    background-color: #313131;
    padding: 30px 10px;
    min-height: 100vh;

    & .container { 
        max-width: 1200px;
        margin: 0 auto;
    }

    .content {
        display: flex;
        flex-wrap: wrap;
        gap: 45px;
        background-color: ${variables.colors.white};
        border-radius: ${variables.borderValue.borderRadius};
        padding: 40px 20px;
    }
`
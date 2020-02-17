import styled from 'styled-components';
import cloudBg from '../../assets/images/bg/cloud.png';

export const ToastContainer = styled.div`
    background-image: url(${cloudBg});
    /* background-color: yellow; */
    position: absolute;
    top: 0;
    right: ${props => props.show};
    margin: 20px;
`
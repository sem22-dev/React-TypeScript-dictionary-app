import styled from "styled-components";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

interface Props{
    nightMode : boolean,
}

export const SwitchBox = styled.div`
    width: 40px;
    height: 20px;
    background-color: ${props => props.theme.switchBg};
    border-radius: 25px;
    padding: 2.5px;
    position: relative;
    cursor: pointer;
`
export const Circleswitch = styled.div<Props>`
    width: 15px;
    height: 15px;
    background-color: ${props => props.nightMode ? "#0E8388" : "#fff"};
    border-radius: 50%;
    transform: ${props => props.nightMode ? "translateX(19px)" : ""};
    transition: transform 0.2s linear;
`
export const DarkIcon = styled(DarkModeOutlinedIcon)`
    color: ${props => props.theme.switchBg};
`
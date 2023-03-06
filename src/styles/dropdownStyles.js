import styled from "styled-components";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const DropdownContainer = styled.div`
    position: relative;
    font-weight: bold;
`

const FontSelectedBox = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 35px;
    width: 150px;
    gap: 20px;
    align-items: center;
    border-right: 1px solid #E9E9E9;
    padding-right: 20px;
    cursor: pointer;
    .ArrowIcon {
    transition: transform 0.3s ease-in-out;
    transform: rotate(0deg);
  }
    &.showing .ArrowIcon {
        transform: rotate(180deg);
  }
  @media screen and (min-height: 768px) {
    gap: 10px;
  }
`

const StyledArrowIcon = styled(KeyboardArrowDownIcon)`
  color: ${props => props.theme.switchBg};
`
const FontListBox = styled.div`
    z-index: 1;
    position:absolute;
    left: 0px;
    top:40px;
    box-shadow: 0px 9px 25px 6px rgba(150, 150, 150, 0.24);
    border-radius: 10px;
    padding: 10px 0px 0px 10px ;
    width: 8rem;
    height: 8rem;
    background: ${props => props.theme.dropdownBg};
    cursor: pointer;
    &.showing{
        transition: all 0.3s ease-in-out;
    }
    &.closing{
        height: 0px;
        opacity: 0;
        transform: translateY(-200px);
    }
`

const FontText = styled.p`
    :hover {
      color: #FFC107;
    }
    &.FontList{padding: 7px;
    }

    &.error{
      color: red;
      position:absolute;
      top:65px;
      left:10px
    }
`

export { DropdownContainer, FontSelectedBox, StyledArrowIcon, FontListBox, FontText }
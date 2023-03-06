import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';

export const SearchContainer = styled.form`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  padding: 15px 20px;
  border-radius: 1rem;
  background-color: ${props => props.theme.searchBg};
  :focus-within {
    box-shadow: 0px 0px 0px 1px #D7C79E inset;
  }

  &.error {
    :focus-within {
      box-shadow: 0px 0px 0px 1px red inset;
    }
  }
`

export const SearchInput = styled.input`
    width: 100%;
    font-size: 17px;
    border: none;
    background: transparent;
    outline: none;
    font-weight: bold;
    font-family: inherit;
    color:  ${props => props.theme.textColor};
`

export const Searchicon = styled(SearchIcon)`
`
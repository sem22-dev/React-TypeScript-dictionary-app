import React from "react"
import { SearchContainer, SearchInput, Searchicon } from "../../styles/styleSearch"
import { ThemeContext } from "../../contexts/themeContext"
import { FontText } from "../../styles/dropdownStyles"

export const SearchSection = () => {

    const [inputText, setInputText] = React.useState("keyboard")
    const [error, setError] = React.useState(false)
    const { word, setWord } = React.useContext(ThemeContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputText) {
          await setWord(inputText);
          console.log(word)
        } else {
          setError(true);
        }
      };

    function handleInputChange(e){
        setInputText(e.target.value)
        setError(false)
    }

    function handliInputClick(){
        setInputText("")
    }

    React.useEffect(() => {
        function timeOut() {
          setError(false);
        }
        const timer = setTimeout(timeOut, 3000);
        return () => clearTimeout(timer);
      }, [error]);


    return(
        <SearchContainer onSubmit={handleSubmit} className={error ? "error" : ""}>
            <SearchInput
                placeholder="Search . . ."
                type="text"
                value={inputText}
                onChange={handleInputChange}
                onClick={handliInputClick}
            />
            <button>
                <Searchicon/>
            </button>
            {error && <FontText className="error">You cannot leave this field blank.</FontText>}
        </SearchContainer>
    )
}
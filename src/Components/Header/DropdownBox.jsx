import React from "react";
import { DropdownContainer, FontSelectedBox, StyledArrowIcon, FontListBox, FontText } from "../../styles/dropdownStyles"

export const DropdownBox= () => {

    const [activeFont, setActiveFont] = React.useState("Sans-serif")
    const [showDropdown, setShowDropdown] = React.useState(false)

    function toggleDropdown() {
        setShowDropdown(!showDropdown)
        console.log(showDropdown)
    }

    const fontFamilies = ["Sans-serif", "Serif", "Monospace"];

    React.useEffect(() => {
        document.body.style.fontFamily = activeFont
    }, [activeFont])

    return(
        <DropdownContainer>
            <FontSelectedBox
                className={showDropdown ? "showing" : "" }
                onClick={toggleDropdown}
            >
                <FontText>{activeFont}</FontText>
                <StyledArrowIcon className="ArrowIcon"/>
            </FontSelectedBox>

           <FontListBox className={showDropdown ? "showing" : "closing"}>
                {fontFamilies.map((item, index) => (
                    <FontText className="FontList"
                        key={index}
                        onClick={() => {
                            setActiveFont(item);
                            setShowDropdown(!showDropdown)
                            }
                        }
                        style={{fontFamily: item}}
                    >
                        {item}
                    </FontText>
                ))}
           </FontListBox>
        </DropdownContainer>
    )
}
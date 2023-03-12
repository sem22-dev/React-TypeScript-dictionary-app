import React from "react"
import { HeaderContainer, HeaderLogo, CustomizationWrapper } from "../../styles/headerStyles"
import logo from "../../icon/logo.svg"
import { DropdownBox } from "./DropdownBox"
import { DarkModeSwitch } from "./DarkModeSwitch"

export const Header = (props:{handleClick: () => void, nightMode: boolean}) => {
    return(
        <HeaderContainer>
            <HeaderLogo src={logo} />
            <CustomizationWrapper>
                <DropdownBox />
                <DarkModeSwitch
                    nightMode={props.nightMode}
                    handleClick={props.handleClick}
                />
            </CustomizationWrapper>

        </HeaderContainer>
    )
}
import React from "react"
import { SwitchBox, Circleswitch, DarkIcon } from "../../styles/DarkModeSwitch"

export const DarkModeSwitch = (props) => {

    return(
        <>
        <SwitchBox onClick={props.handleClick}>
          <Circleswitch nightMode={props.nightMode}></Circleswitch>
        </SwitchBox>
        <DarkIcon />
      </>
    )
}


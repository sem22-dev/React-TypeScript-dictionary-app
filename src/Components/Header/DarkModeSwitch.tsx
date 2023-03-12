import { SwitchBox, Circleswitch, DarkIcon } from "../../styles/darkModeSwitch"



export const DarkModeSwitch = (props:{handleClick: () => void, nightMode: boolean}) => {

    return(
        <>
        <SwitchBox onClick={props.handleClick}>
          <Circleswitch nightMode={props.nightMode}></Circleswitch>
        </SwitchBox>
        <DarkIcon />
      </>
    )
}


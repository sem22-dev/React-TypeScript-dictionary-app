import React from "react"

//styles
import {PlayButton, PhoneticContainer, PhoneticName, PhoneticNameBox, Play} from "../../styles/findingStyles"

interface PhoneticProps {
    output: {
      word: string;
      phonetic: string;
      phonetics: {
        audio: string;
      }[];
    };
  }

export function Phonetic(props: PhoneticProps) {

    function playAudio(){
        const audioFile = props.output.phonetics.find(item => item.audio.length > 0 )?.audio;
        if(audioFile) {
            const audio = new Audio(audioFile);
            audio.play()
        }
    }

    return(
        <PhoneticContainer>
            <PhoneticNameBox>
                <h1>{props.output.word}</h1>
                <PhoneticName>{props.output.phonetic}</PhoneticName>
            </PhoneticNameBox>
            <Play onClick={playAudio}><PlayButton/></Play>
        </PhoneticContainer>
    )
}
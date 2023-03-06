import React from "react"
import { MeaningSection, PartOfSpeech, MeaningText, SynonymContainer, DefinitionContainer, SynonymList } from "../../styles/findingStyles"

export function Meanings(props) {

    return(
       <>
            {props.output.meanings.map((item,i) => {
                return(
                    <MeaningSection key={i}>
                        <PartOfSpeech>{item.partOfSpeech}</PartOfSpeech>
                        <MeaningText>Meaning</MeaningText>
                        <DefinitionList definitions={item.definitions} />
                        <Synonyms synonyms={item.synonyms}/>
                    </MeaningSection>
                )
                })
            }
       </>
    );
};


//DefinitionList Component
function DefinitionList({ definitions }) {
    return(
        <DefinitionContainer>
            {definitions.map((item, index) => {
              return (
              <ul key={index}>
                <li className="defList"><p>{item.definition}</p></li>
                {item.example && <p className="defList example">"{item.example}"</p>}
              </ul>)
            })}
       </DefinitionContainer>
    )
}


//Synonyms Component
function Synonyms({ synonyms }){
    return(
        <>
           {synonyms.length ? (
                <SynonymContainer>
                     <MeaningText className="synonym">Synonyms</MeaningText>
                     <SynonymList>
                        {synonyms.map((synonym, i) => {
                            return (<p className="synonyms">{synonym}</p>)
                        })}
                     </SynonymList>

                </SynonymContainer>
           ) : ""}
        </>
    )
}

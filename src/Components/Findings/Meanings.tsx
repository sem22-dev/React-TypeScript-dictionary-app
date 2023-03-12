import React from "react"
import { MeaningSection, PartOfSpeech, MeaningText, SynonymContainer, DefinitionContainer, SynonymList } from "../../styles/findingStyles"

interface MeaningProps {
    output: {
      meanings: {
        partOfSpeech: string;
        definitions: {
          definition: string;
          example?: string;
        }[];
        synonyms: string[];
      }[];
    };
  }

  interface DefinitionListProps {
    definitions: {
      definition: string;
      example?: string;
    }[];
  }

export function Meanings(props: MeaningProps) {

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
function DefinitionList({ definitions}: DefinitionListProps ) {
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

interface SynonymsProps {
    synonyms: string[];
  }

function Synonyms({ synonyms }: SynonymsProps){
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

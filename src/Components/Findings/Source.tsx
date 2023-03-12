import React from "react"
import {SourceContainer, LinkImage} from "../../styles/findingStyles"


interface Props {
  output : {
    sourceUrls : string[]
  }
}

export function Source(props: Props) {
    return(
              <SourceContainer>
                <p className="muted">Source</p>
                    <a href={props.output.sourceUrls[0]} target="_blank">
                      {props.output.sourceUrls[0]}
                    </a>
                <LinkImage />
              </SourceContainer>
     );
};
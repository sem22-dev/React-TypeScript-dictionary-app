import React from "react"
import {SourceContainer, MeaningText, LinkImage} from "../../styles/findingStyles"

export function Source(props) {
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
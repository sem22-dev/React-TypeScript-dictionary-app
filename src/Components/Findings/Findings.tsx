  import React from "react"
  import {Phonetic} from "./Phonetic"
  import {Meanings} from "./Meanings"
  import {Source} from "./Source"
  import { ThemeContext } from "../../contexts/themeContext"
  import axios from "axios"

  //styles
  import { FindingsWrapper, LoadingDisplay } from "../../styles/findingStyles"


  export const Findings = () => {

      const { word } = React.useContext(ThemeContext)
      const [outputs, setOutputs] = React.useState()
      const [error, setError] = React.useState(false)
      const [dataLoading, setDataLoading] = React.useState(false)

      async function getDefinitions(word:string) {
        setError(false)
        setDataLoading(true)
          try {
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            console.log(response.data[0]);
            setOutputs(response.data[0]);
            setDataLoading(false)
            setError(false)
          } catch (error) {
            console.error(error);
              setError(true);
            setDataLoading(false)
          }
        }

        React.useEffect(() => {
              if(word.length) {
                  getDefinitions(word)
              }
        },[word])

        if(error){
          return (
            <LoadingDisplay>
                <h1>Whoopsie daisy!</h1>
                <h2>Looks like we can't find the word "{word}" in the dictionary. 😞</h2>
            </LoadingDisplay>)
        }
      return(
          <>
            {dataLoading ? (
            <LoadingDisplay>
              <h1>Loading...</h1>
              <h2>Please wait...</h2>
            </LoadingDisplay>
          ) : (
          <FindingsWrapper>
              {outputs && <Phonetic output={outputs}/>}
             {outputs && <Meanings output={outputs}/>}
             {outputs && <Source output={outputs}/>}
          </FindingsWrapper>
          )}
          </>
      )
  }
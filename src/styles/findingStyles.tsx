import styled from "styled-components";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export const FindingsWrapper = styled.main`

`

export const PlayButton = styled(PlayArrowIcon)`
    color:#0E8388;
    background-color: ${props => props.theme.playBg};
    border-radius: 50%;
    padding: 5px;
    transform: scale(2.8);
    &:hover{
        cursor: pointer;
    }
    @media (min-width: 360px) and (max-width: 812px)  {
        transform: scale(1.9);
        width: 100px;
    height: 100px;
    }
`

export const PhoneticContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
`

export const PhoneticNameBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (min-width: 360px) and (max-width: 812px)  {
       h1{
        font-size: 1.9em;
       }
    }
`

export const PhoneticName = styled.p`
    color : #0E8388;
    font-size: 2em;
     @media (min-width: 360px) and (max-width: 812px)  {
        font-size: 1.4em;
    }
`

export const Play = styled.button`
    width: 100px;
    height: 100px;
     @media (min-width: 360px) and (max-width: 812px)  {
        width: 50px;
        height: 50px;

    }
`
export const LoadingDisplay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 90px;
    h1{
        color: #0E8388;
    }
    h2{
        color: #838383;
    }

     @media (min-width: 360px) and (max-width: 812px)  {
        h1{
        color: #0E8388;
        font-size: 1.6rem;
        }
        h2{
        color: #838383;
        font-size: 1.3rem;
        }
    }
`

export const MeaningSection = styled.div`
    display:flex;
    flex-direction:column;
    margin-top: 30px;
`

export const PartOfSpeech = styled.p`
    display: flex;
    align-items: center;
    color:${props => props.theme.textColor};
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    &:after {
    content: "";
    flex: 1;
    margin-left: 1rem;
    height: 1px;
    background-color: #E9E9E9;
  }

   @media (min-width: 360px) and (max-width: 812px)  {
    font-size: 1.2rem;
    }
`

export const MeaningText = styled.p`
    color: gray;
    font-size:1.3rem;
    &.synonym{
        margin-bottom: none;
    }
     @media (min-width: 360px) and (max-width: 812px)  {
    font-size: 1.2rem;
    }
`

export const SynonymContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0px 0px 30px 0px;
`

export const DefinitionContainer = styled.div`
    margin: 10px 0px;
`

export const SynonymList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
    width: 80%;
    padding: 0px 10px;
`

export const LinkImage = styled(OpenInNewIcon)`
    color: #838383;
    scale: calc(0.8);
`

export const SourceContainer = styled.div`
    border-top: 1px solid #E9E9E9;
    padding-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
    & a{
        color: #838383;
    }
    & p{
        color: #838383;
    }
`


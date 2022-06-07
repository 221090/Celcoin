import styled from 'styled-components'

const Card = styled.img`
  width: 1920px;
  height: 1080px;
  margin: 0;

  mix-blend-mode: overlay;
`;

interface Props{
  pageImage: string, 
}

export function CardImagePage (props: Props) {
  const {pageImage} = props;
    return (
      <Card src={pageImage}/>
         
  )
}
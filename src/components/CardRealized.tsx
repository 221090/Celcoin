import styled from 'styled-components'

const Card = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 368px;
  height: 320px;
  border-radius: 6px;
`;

const CardImg = styled.div`
  width: 368px;
  height: 136px;
  left: 336px;
  top: 496px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(42.45deg, #FFFFFF 13.8%, rgba(255, 255, 255, 0) 93.21%);
  border-radius: 6px 6px 0 0 ;
`;

const ImgFront = styled.img`
  width: 93px;
  height: 93px;
`;

const CardText = styled.div`
  display: inline-block;
  width: 368px;
  height: 185px;
  left: 1472px;
  top: 500px;
  border-radius: 0 0 6px 6px;
  background: linear-gradient(42.45deg, #FFFFFF 13.8%, rgba(255, 255, 255, 0) 93.21%);
`;

const Title = styled.h2`
  width: 215px;
  height: 32px;
  left: 1488px;
  top: 664px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 35px;
  display: flex;
  align-items: center;
  margin: 40px 0 16px 16px;
  color: #303B5B;
`;

const License = styled.p`
  width: 215px;
  height: 16px;
  left: 1488px;
  top: 712px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  align-items: center;
  margin: 0 0 20px 16px;
  color: rgba(48, 59, 91, 0.3);
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 190px 36px 16px;
`;

const Quantity = styled.h2`
  width: 32px;
  height: 48px;
  left: 1488px;
  top: 736px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 35px;
  display: flex;
  align-items: center;
  color: #303B5B;
`;

const Buy = styled.div`
  width: 128px;
  height: 24px;
  background: linear-gradient(93.05deg, #00A3FF 0%, #0057FF 100%);
  border-radius: 20px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  display: inline-block;
  align-items: center;
  text-align: center;
  letter-spacing: 1px;
  margin-left: 16px;
  color: #FFFFFF;
  padding:5px
`;

interface Props{
  imagem: string,
  nome:string,
  licenças: string,
  realizado: string, 
  comprar: string,
}

export function CardRealized (props: Props) {
  const {imagem, nome, licenças, realizado, comprar} = props; 
    return (
        <Card>
            <CardImg>
              <ImgFront src={imagem}/> 
            </CardImg>
            <CardText>
              <Title>
                {nome}
              </Title>
              <License>
                {licenças}
              </License>
              <CardFooter>
                <Quantity>
                  {realizado}
                </Quantity>
                <Buy>
                  {comprar}
                </Buy>
              </CardFooter>
            </CardText>
        </Card>
  )
}
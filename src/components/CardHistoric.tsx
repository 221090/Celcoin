import styled from 'styled-components'
import rectangle from '../assets/images/Rectangle.jpg'

const Card = styled.div`
    display: inline-block;
    width: 264px;
    height: 288px;
    left: 320px;
    top: 200px;
    background: #FFFFFF;
    border-radius: 6px;
    box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
    margin: 16px 0 16px 16px;   
`;

const Img = styled.div`
  background-image: url(${rectangle});
  display: flex;
  align-items: center;
  justify-content: center;
  width: 264px;
  height: 136px;
  left: 336px;
  top: 496px;
`;

const Icon = styled.img`
  height: 60px;
  widht: 60px;
  left: 6px
  right: 6px;
  top: 6px
  bottom: 8.48%;
`;

const CardText = styled.div`
  width: 264px;
  height: 152px;
  left: 336px;
  top: 632px;
`;

const Title = styled.h2`
  width: 200px;
  height: 24px;
  left: 912px;
  top: 648px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #303B5B;
  margin-top: 16px;
  margin-left: 16px;
`;

const Test = styled.p`
  width: 158px;
  height: 16px;
  left: 632px;
  top: 680px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: rgba(48, 59, 91, 0.3);
  margin-top: 8px;
  margin-left: 16px;
`;

const Model = styled.h2`
  width: 200px;
  height: 16px;
  left: 352px;
  top: 704px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: #303B5B;
  margin-left: 16px;
`;

const Realized = styled.p`
  width: 158px;
  height: 16px;
  left: 352px;
  top: 728px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: rgba(48, 59, 91, 0.3);
  margin-left: 16px;
`;

const Date = styled.h3`
  width: 200px;
  height: 16px;
  left: 632px;
  top: 752px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #303B5B;
  margin-top: 8px;
  margin-left: 16px;
`;

interface Props{
  icone: string,
  nome:string,
  teste: string,
  modelo: string,
  realizado: string, 
  data: string,
}

export function CardHistoric (props: Props) {
  const {icone, nome, teste, modelo, realizado, data} = props; 
    return (
        <Card>
            <Img>
              <Icon src={icone}/>
            </Img>
            <CardText>
              <Title>{nome}</Title>
              <Test>{teste}</Test>
              <Model>{modelo}</Model>
              <Realized>{realizado}</Realized>
              <Date>{data}</Date>
            </CardText>
        </Card>
  )
}
 
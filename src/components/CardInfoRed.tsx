import styled from 'styled-components'
import { Icon } from '@iconify/react';

const Card = styled.div`
  display: inline-block;
  width: 368px;
  height: 176px;
  left: 320px;
  top: 200px;
  background: #FFFFFF;
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
  border-radius: 6px;
  margin-left: 16px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.97);
  }
`;

const DivCard = styled.div`
  max-width: 100%;
  max-height: 100%;
  .info{
    display: none;
  }
  :hover {
    .info{
      display: inline-block !important;
      color: red;
    }
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px;
`;

const IconDiv = styled.div`
  height: 26.67px;
  width: 26.67px;
  left: 6.67px;
  top: 6.67px;   
`;

const Percent = styled.div`
  width: 56px;
  height: 24px;
  left: 608px;
  top: 224px;
  background: #EF0C35;
  border-radius: 20px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  padding: 4px;
  display: inline-block;

`;

const Quantity = styled.h2`
  width: 64px;
  height: 32px;
  left: 336px;
  top: 280px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  color: #303B5B;
  margin: 30px 0 8px 16px;
`;

const Title = styled.h3`
  width: 192px;
  height: 24px;
  left: 336px;
  top: 320px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #303B5B;
  margin: 8px 0 32px 16px;
`;

interface Props{
  icone: string,
  cor: string,
  porcentagem: string, 
  quantidade: string, 
  nome:string,
}

export function CardInfoRed (props: Props) {
  const {icone, cor, porcentagem, quantidade, nome} = props;
    return (
      <Card>
        <DivCard>
          <div className={"info"}>teste</div>
        <CardHeader>
          <IconDiv> 
            <Icon icon={icone} style={{width:"100%", height:"100%", color: cor}}/>
          </IconDiv>
            <Percent>
              {porcentagem}
            </Percent>
        </CardHeader>
        <Quantity>
          {quantidade}
        </Quantity>
        <Title>
          {nome}
        </Title>
        </DivCard>
      </Card>
  )
}
 
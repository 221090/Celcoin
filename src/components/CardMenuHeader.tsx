import styled from 'styled-components'
import { Icon } from '@iconify/react';

const Card = styled.div`
  width: 152px;
  height: 144px;
  background: #FFFFFF;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-left: 20px;
  padding: 4px;
`;

const Account = styled.h2`
  width: 120px;
  height: 45px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  margin-left: 16px;
  color: #303B5A;
  cursor: pointer;
  &:hover {
    filter: brightness(3);
  }
`;

const Config = styled.h2`
  width: 120px;
  height: 45px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  margin-left: 16px;
  color: #303B5A;
  cursor: pointer;
  &:hover {
    filter: brightness(3);
  }
`;

const CardOut = styled.div`
  width: 120px;
  height: 45px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #303B5A;
  cursor: pointer;
  &:hover {
    filter: brightness(3);
  }
`;

const IconDiv = styled.div`
  width: 15px;
  height: 15px;
  margin-left: 16px;
  color: #EF0C35;
`;

const Out = styled.h2`
  width: 96px;
  height: 16px;
  left: 1672px;
  top: 224px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: #303B5A;
`;

interface Props{
  conta: string, 
  configuracao: string, 
  icone:string, 
  sair:string
}

export function CardMenuHeader (props: Props) {
  const {conta, configuracao, icone, sair} = props;
    return (
      <Card>
        <Account>
          {conta}
        </Account>
        <Config>
          {configuracao}
        </Config>
        <CardOut>
          <IconDiv> 
            <Icon icon={icone} style={{width:"100%", height:"100%"}}/>
          </IconDiv>
          <Out>
            {sair}
          </Out>
        </CardOut>
      </Card>
  )
}
 
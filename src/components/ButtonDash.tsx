//importando imagens
import styled from 'styled-components'
import { Icon } from '@iconify/react';

const Card = styled.div`
  width: 240px;
  height: 50px;
  display: flex;
  border-radius: 30px;
  justify-content: space-between;
  cursor: pointer;
  margin: 10px 0 0 25px;
  border-radius: 30px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  color: #FFFFFF;
  padding: 20px;
  &:hover {
    filter: brightness(0.8);
  }
`;

const IconDash = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 24px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
`;

const TextDash = styled.h2`
  width: 136px;
  height: 24px;
  left: 96px;
  top: 160px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  text-decoration: none !important;
`;

interface Props{
  iconeDashboard: string,  
  dashboard: string, 
  
}

export function ButtonDash (props: Props) {
  const {iconeDashboard, dashboard} = props;
    return (
      <Card>
        <IconDash> 
          <Icon icon={iconeDashboard} style={{width:"100%", height:"100%"}}/>
        </IconDash>
        <TextDash>
          {dashboard}
        </TextDash>
      </Card>        
  )
}

  










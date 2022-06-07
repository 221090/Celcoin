import styled from 'styled-components'
import { Icon } from '@iconify/react';

import { ButtonDashWhite } from '../components/ButtonDashWhite'
import { ButtonPat } from '../components/ButtonPat'
import { Link } from 'react-router-dom'

const Card = styled.div`
  width: 288px;
  height: 500px;
  margin: 53px 1632px 0 0;
  
`;

const CardLogo =styled.div`
  width: 240px;
  height: 40px;
  cursor: pointer;
  margin: 24px 0 45px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const IconLogo =styled.div`
  width: 27px;
  height: 27px;
  color: #FFFFFF;
`;

const TextIdent = styled.h1`
  width: 90px;
  height: 40px;
  color: #FFFFFF;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 900;
  font-size: 26px;
  line-height: 39px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 1px;
  margin-left: 3px;
`;

const TextLogo = styled.h1`
  width: 90px;
  height: 40px;
  color: #FFFFFF;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 39px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 1px;
`;

const CardTest = styled.div`
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
  color: #303B5B;
  padding: 20px;
  &:hover {
    filter: brightness(0.8);
  }
`;

const IconTest = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 24px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
`;

const TextTest = styled.h2`
  width: 136px;
  height: 24px;
  left: 96px;
  top: 304px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  color: #FFFFFF;
`;

const CardConfig = styled.div`
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
  color: #303B5B;
  padding: 20px;
  &:hover {
    filter: brightness(0.8);
  }
`;

const IconConfig = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 24px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
`;

const TextConfig = styled.h2`
  width: 136px;
  height: 24px;
  left: 96px;
  top: 304px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  color: #FFFFFF;
`;

interface Props{
  iconeLogo:string, 
  ident: string, 
  logo: string,
  iconTeste: string,
  teste: string,
  iconConfig: string,
  configuracao: string,
  
}


export function CardMenuOne (props: Props) {
  const {iconeLogo, ident, logo, iconTeste, teste, iconConfig, configuracao} = props;
    return (
      <Card>
        <CardLogo>
          <IconLogo> 
            <Icon icon={iconeLogo} style={{width:"100%", height:"100%",}}/>
          </IconLogo>
          <TextIdent>
            {ident}
          </TextIdent>
          <TextLogo>
            {logo}
          </TextLogo>
        </CardLogo>
        <Link to={"/"}>
          <ButtonDashWhite
            iconeDashboard={"ant-design:home-outlined"} 
            dashboard={"Dashboard"}
          />
        </Link>
        <Link to={"/pacientes"}>
          <ButtonPat
            iconePat={"gridicons:product-downloadable"} 
            pacientes={"Pacientes"}
          />
        </Link>
        <CardTest>
          <IconTest> 
            <Icon icon={iconTeste} style={{width:"100%", height:"100%",}}/>
          </IconTest>
          <TextTest>
            {teste}
          </TextTest>
        </CardTest>
        <CardConfig>  
          <IconConfig> 
            <Icon icon={iconConfig} style={{width:"100%", height:"100%",}}/>
          </IconConfig>
          <TextConfig>
            {configuracao}
          </TextConfig>
        </CardConfig>
      </Card>
  )
}
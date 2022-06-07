import styled from 'styled-components'
import { Icon } from '@iconify/react'

const Card = styled.div`
  width: 1488px;
  height: 96px;
  left: 336px;
  top: 696px;
  background: #FFFFFF;
  border: 1px solid #EFF2F9;
  border-radius: 6px;
  margin: 0 16px;
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const CardImg = styled.div`
  width: 64px;
  height: 64px;
  left: 352px;
  top: 712px;
  border-radius: 6px;
  margin: 16px;
`;

const ImgFront = styled.img`
  width: 64px;
  height: 64px;
  left: 352px;
  top: 712px;
  background: url(.jpg), #EFF2F9;
  border-radius: 6px;
`;

const CardText = styled.div`
  width: 240px;
  height: 96px;
  left: 432px;
  top: 712px;
`;

const Name = styled.h2`
  width: 240px;
  height: 24px;
  left: 432px;
  top: 712px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  color: #303B5B;
  margin: 16px 0 8px 0;
`;

const Diagnostic = styled.p`
  width: 158px;
  height: 8px;
  left: 432px;
  top: 744px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: rgba(48, 59, 91, 0.3);
  margin: 0 0 8px 0;
`;

const Model = styled.h3`
  width: 220px;
  height: 16px;
  left: 432px;
  top: 760px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #1EAC79;
  margin: 0 0 16px 0;
`;

const DivTest = styled.div`
  width: 128px;
  height: 96px;
  left: 432px;
  top: 712px;
  margin-left: 48px
`;

const QuantRealiz = styled.h2`
  width: 64px;
  height: 32px;
  left: 720px;
  top: 712px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  color: #1EAC79;
  margin: 16px 0 8px;
`;

const TestRealiz = styled.p`
  width: 128px;
  height: 24px;
  left: 720px;
  top: 752px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #1EAC79;
  margin: 16px 0 16px;
`;

const QuantCancel = styled.h2`
  width: 64px;
  height: 32px;
  left: 880px;
  top: 712px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  color: #EF0C35;
  margin: 16px 0 16px 0;
`;

const TestCancel = styled.p`
  width: 136px;
  height: 24px;
  left: 880px;
  top: 752px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #EF0C35;
  margin: 0 0 16px 0;
`;

const QuantPending = styled.h2`
  width: 64px;
  height: 32px;
  left: 1048px;
  top: 712px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  color: #FF6B00;
  margin: 16px 0 16px 0;
`;

const TestPending = styled.p`
  width: 128px;
  height: 24px;
  left: 1048px;
  top: 752px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #FF6B00;
  margin: 0 0 16px 0;
`;

const CardButton = styled.div`
  width: 384px;
  height: 96px;
  left: 432px;
  top: 712px;
  margin-left: 264px;
  display: flex;
  align-items: center;
`;

const IconPen = styled.div`
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  left: 1440px;
  top: 728px;
  color: #145AD2;
  border-radius: 30px;
  cursor: pointer;
  border: 1px solid #EFF2F9;
`;

const ButtonSubmit = styled.button`
  width: 144px;
  height: 32px;
  left: 1488px;
  top: 728px;
  background: linear-gradient(93.05deg, #FF00C7 0%, #FF005C 100%);
  border-radius: 20px;
  margin: 0 16px 0 16px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 1px;
  border: none;
  padding: 12px;
  cursor: pointer;
  color: #FFFFFF;
  &:hover {
    filter: brightness(0.90);
  }
`;

const ButtonLand = styled.button`
  width: 144px;
  height: 32px;
  left: 1648px;
  top: 728px;
  background: linear-gradient(93.05deg, #00A3FF 0%, #0057FF 100%);
  border-radius: 20px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 1px;
  border: none;
  padding: 12px;
  cursor: pointer;
  color: #FFFFFF;
  &:hover {
    filter: brightness(0.90);
  }
`;

interface Props{
  imagem: string, 
  nome: string, 
  modelo: string, 
  quantidadeRealizado: string, 
  quantidadeCancelado: string, 
  quantidadePendente: string, 
}

export function CardAllPatientTwo (props: Props) {
  const { imagem, nome, modelo, quantidadeRealizado, quantidadeCancelado, quantidadePendente} = props;
  return (
    <Card>
      <CardImg><ImgFront src={imagem}/></CardImg>
      <CardText>
        <Name>{nome}</Name>
        <Diagnostic>Diagnostico</Diagnostic>
        <Model>{modelo}</Model>
      </CardText>
      <DivTest>
        <QuantRealiz>{quantidadeRealizado}</QuantRealiz>
        <TestRealiz>Testes realizados</TestRealiz>
      </DivTest>
      <DivTest>
        <QuantCancel>{quantidadeCancelado}</QuantCancel>
        <TestCancel>Testes Cancelados</TestCancel>
      </DivTest>
      <DivTest>
        <QuantPending>{quantidadePendente}</QuantPending>
        <TestPending>Testes Pendentes</TestPending>
      </DivTest>
      <CardButton>
        <IconPen>
          <Icon icon={"ant-design:edit-filled"} style={{width:"100%", height:"100%"}}/>
        </IconPen>
        <ButtonSubmit>ENVIAR NOVO TESTE</ButtonSubmit>
        <ButtonLand>ALTERAR CADASTRO</ButtonLand>
      </CardButton>
    </Card>
  )
}
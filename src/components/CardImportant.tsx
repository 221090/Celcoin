import styled from 'styled-components'

const Card = styled.div`
  display: inline-block;
  width: 496px;
  height: 128px;
  left: 320px;
  top: 896px;
  background: #FFFFFF;
  box-shadow: 0px 1px 26px rgba(71, 87, 122, 0.08);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardImg = styled.div`
  width: 96px;
  height: 96px;
  left: 336px;
  top: 912px;
  border-radius: 6px;
  margin: 16px;
`;

const ImgFront = styled.img`
  width: 96px;
  height: 96px;
  left: 336px;
  top: 912px;
  border-radius: 6px;
`;

const CardText = styled.div`
  width: 368px;
  height: 128px;
  border-radius: 6px;
`;

const Patient = styled.p`
  width: 158px;
  height: 16px;
  left: 448px;
  top: 912px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: rgba(48, 59, 91, 0.3);
  margin: 16px 0 8px 16px;
`;

const Name = styled.h2`
  width: 240px;
  height: 16px;
  left: 448px;
  top: 936px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  color: #303B5B;
  margin: 0px 0 8px 16px;
`;

const CardComplet = styled.div `
  width: 260px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0 16px 16px;
`;

const Completed = styled.h3`
  width: 130px;
  height: 16px;
  left: 448px;
  top: 960px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #1EAC79;
`;

const Model = styled.h3`
  width: 130px;
  height: 16px;
  left: 578px;
  top: 960px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #1EAC79;
`;

const CardDate = styled.p`
  width: 158px;
  height: 16px;
  left: 448px;
  top: 992px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: rgba(48, 59, 91, 0.3);
  margin: 0px 0 16px 16px;
  `;

interface Props{
  imagem: string,
  paciente: string,
  nome:string,
  teste: string,
  modelo: string,
  data: string, 
}

export function CardImportant (props: Props) {
  const {imagem, paciente, nome, teste, modelo, data} = props; 
    return (
        <Card>
            <CardImg>
              <ImgFront src={imagem}/> 
            </CardImg>
            <CardText>
              <Patient>
                {paciente}
              </Patient>
              <Name>
                {nome}
              </Name>
              <CardComplet>
                <Completed>
                  {teste}
                </Completed>
                <Model>
                  {modelo}
                </Model>
              </CardComplet>
              <CardDate>
                {data}
              </CardDate>
            </CardText>
          </Card>
  )
}
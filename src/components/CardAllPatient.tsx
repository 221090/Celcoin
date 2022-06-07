import renata from '../assets/images/renata.svg'
import leandro from '../assets/images/leandro.svg'
import kuromi from '../assets/images/kuromi.svg'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import { CardAllPatientTwo } from '../components/CardAllPatientTwo'

const Card = styled.div`
  width: 1520px;
  height: 408px;
  left: 320px;
  top: 608px;
  background: #FFFFFF;
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
  border-radius: 6px;
  margin: 0 40px 32px 32px;
`;

const CardHeader = styled.div`
  width: 1520px;
  height: 88px;
  left: 320px;
  top: 608px;
  background: #FFFFFF;
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
  border-radius: 6px;
  display: flex;
  align-items: center;
`;

const ListPat = styled.h2`
  width: 188px;
  height: 40px;
  left: 340px;
  top: 624px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: rgba(86, 84, 104, 0.6);
  margin: 0 8px 0 20px;
`;

const SearchPat = styled.div`
  width: 400px;
  height: 40px;
  left: 536px;
  top: 624px;
  background: #F5F5F5;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left:8px
`;

const IconSearch = styled.div`
  width: 18px;
  height: 18px;
  left: 12.5%;
  right: 14.62%;
  top: 12.5%;
  bottom: 14.62%;
  color: #787686;
  margin: 11px;
`;

const InputPat = styled.input`
  width: 400px;
  height: 40px;
  left: 536px;
  top: 624px;
  background: #F5F5F5;
  border-radius: 5px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  border: none;
  color: rgba(44, 46, 61, 0.3);
`;

const IconPoint = styled.div`
  width: 20px;
  height: 20px;
  left: 1800px;
  top: 645px;
  color: #787686;
  margin-left: 842px;
  cursor: pointer;
`;

interface Props{
  listaPaciente: string, 
  icone: string, 
  buscarPaciente: string, 
  iconePonto: string
}

export function CardAllPatient (props: Props) {
  const {listaPaciente, icone, buscarPaciente, iconePonto} = props;
    return (
      <Card>
        <CardHeader>
          <ListPat>
            {listaPaciente}
          </ListPat>
          <SearchPat>
            <IconSearch>
              <Icon icon={icone} style={{width:"100%", height:"100%"}}/>
            </IconSearch>
            <InputPat placeholder={buscarPaciente}/>
          </SearchPat>
          <IconPoint >
            <Icon icon={iconePonto} style={{width:"100%", height:"100%"}}/>
          </IconPoint>
        </CardHeader>
        <CardAllPatientTwo
          imagem={renata}
          nome={"Renata Augusto Ferreira"}
          modelo={"TDAH CAB ADHD, Autismo"}
          quantidadeRealizado={"3"}
          quantidadeCancelado={"1"}
          quantidadePendente={"1"}
        />
        <CardAllPatientTwo
          imagem={leandro}
          nome={"Leandro Motta Braga"}
          modelo={"TDAH CAB ADHD, Autismo"}
          quantidadeRealizado={"6"}
          quantidadeCancelado={"0"}
          quantidadePendente={"50"}
        />
        <CardAllPatientTwo
          imagem={kuromi}
          nome={"Kuromi Naori Kagasawa"}
          modelo={"TDAH CAB ADHD, Autismo"}
          quantidadeRealizado={"22"}
          quantidadeCancelado={"0"}
          quantidadePendente={"2"}
        />
      </Card>      
  )
}
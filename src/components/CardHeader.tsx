import styled from 'styled-components'
import { Icon } from '@iconify/react'
import { CardMenuHeader } from '../components/CardMenuHeader'
import { useState } from 'react'

const Card = styled.div`
  width: 1592px;
  height: 88px;
  left: 288px;
  top: 32px;
  background: #ffffff;
  border-radius: 30px 30px 0px 0px;
  display: flex;
  align-items: center;
`

const SearchPat = styled.div`
  width: 400px;
  height: 40px;
  left: 320px;
  top: 56px;
  background: #f5f5f5;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin: 24px 0 24px 32px;
`

const IconSearch = styled.div`
  width: 15px;
  height: 15px;
  bottom: 14.62%;
  align-items: center;
  color: #787686;
  border-radius: 5px;
  margin: 13px;
`

const InputPat = styled.input`
  width: 400px;
  height: 40px;
  left: 320px;
  top: 56px;
  background: #f5f5f5;
  border-radius: 5px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  border: none;
  color: rgba(44, 46, 61, 0.3);
`

const IconGear = styled.div`
  width: 16px;
  height: 16px;
  top: 10%;
  bottom: 10%;
  color: #2c2e3d;
  margin-left: 826px;
  cursor: pointer;
`

const IconBell = styled.div`
  width: 16px;
  height: 16px;
  left: 16.67%;
  right: 16.67%;
  top: 10.42%;
  bottom: 8.33%;
  color: #2c2e3d;
  margin-left: 36px;
  cursor: pointer;
`
const MenuList = styled.ul`
  width: 150px;
  height: 56px;
  left: 1634px;
  top: 48px;
  z-index: 1;
  list-style:none;
`;

const IconMenu = styled.button`
  width: 150px;
  height: 56px;
  background: rgba(47, 68, 134, 0.05);
  border-radius: 50px;
  margin-left: 23px;
  display: flex;
  align-items: center;
  padding: 15px;
  border: none;
  cursor: pointer;
`

const Text = styled.h2`
  width: 78px;
  height: 24px;
  left: 1648px;
  top: 64px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: rgba(86, 84, 104, 0.8);
`

const Image = styled.img`
  width: 40px;
  height: 40px;
  left: 1736px;
  top: 56px;
  border-radius: 30px;
`

const IconHashtag = styled.div`
  width: 20px;
  height: 20px;
  left: 1804px;
  top: 68px;
  margin-left: 28px;
  cursor: pointer;
  color: #2c2e3d;
`


interface Props {
  icone: string
  buscarPaciente: string
  iconeEngrenagem: string
  iconeSino: string
  botaoMenu: string
  textoMenu: string
  foto: string
  hashtag: string
}

export function CardHeader(props: Props) {
  const [enable, setEnable] = useState(false);
  const {
    icone,
    buscarPaciente,
    iconeEngrenagem,
    iconeSino,
    botaoMenu,
    textoMenu,
    foto,
    hashtag
  } = props

  function handleClick(){
    setEnable(!enable);
  }

  return (
    <Card>
      <SearchPat>
        <IconSearch>
          <Icon icon={icone} style={{ width: '100%', height: '100%' }} />
        </IconSearch>
        <InputPat placeholder={buscarPaciente} />
      </SearchPat>
      <IconGear>
        <Icon
          icon={iconeEngrenagem}
          style={{ width: '100%', height: '100%' }}
        />
      </IconGear>
      <IconBell>
        <Icon icon={iconeSino} style={{ width: '100%', height: '100%' }} />
      </IconBell>
      <MenuList>
        <li>
          <IconMenu
            onClick={
              (event)=>{
                event.preventDefault();
                handleClick();
              }
            } 
          >
            <Text>{textoMenu}</Text>
            <Image src={foto} />
          </IconMenu>
        </li>
        {enable && <li>
          <CardMenuHeader
            conta={'Minha Conta'}
            configuracao={'Configurações'}
            icone={'heroicons-outline:logout'}
            sair={'Sair'}
          />
        </li>}
      </MenuList>
      <IconHashtag>
        <Icon icon={hashtag} style={{ width: '100%', height: '100%' }} />
      </IconHashtag>
    </Card>
  )
}

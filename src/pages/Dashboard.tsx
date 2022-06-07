//importando imagens
import brain from '../assets/images/brain.svg'
import cell from '../assets/images/cell.svg'
import renata from '../assets/images/renata.svg'
import carlos from '../assets/images/carlos.svg'
import suelton from '../assets/images/suelton.svg'
import felipe from '../assets/images/felipe.svg'
import imagem from '../assets/images/page-image.svg'
//importando cards
import { CardInfo } from '../components/CardInfo'
import { CardInfoRed } from '../components/CardInfoRed'
import { CardHistoric } from '../components/CardHistoric'
import { CardRealized } from '../components/CardRealized'
import { CardImportant } from '../components/CardImportant'
import { CardImportantTwo } from '../components/CardImportantTwo'
import { CardHeader } from '../components/CardHeader'
import { CardMenuHeader } from '../components/CardMenuHeader'

import '../styles/stylepageone.css'

import { CardMenuOne } from '../components/CardMenuOne'
import { CardImagePage } from '../components/CardImagePage'


export default function Pageone() {
  return (
    <div className='container'>
      <CardMenuOne
        iconeLogo={"jam:aperture"}
        ident={"IDENT"} 
        logo={"LOGO"} 
        iconTeste={"gridicons:product-downloadable"} 
        teste={"Teste"} 
        iconConfig={"gridicons:product-downloadable"} 
        configuracao={"Configurações"} 
      />

      <div className='content'>
        <header>
        <CardHeader
              icone={"ic:baseline-search"}
              buscarPaciente={"Buscar..."}
              iconeEngrenagem={"ic:baseline-settings"}
              iconeSino={"ic:baseline-notifications"}
              botaoMenu={""}
              textoMenu={"Olá, Felipe"} 
              foto={felipe} 
              hashtag={"ic:baseline-apps"}
            />
        </header>
        
        <h2 className='generalinformation'> Informações Gerais</h2>
        
        <div className='generalinformationframe'>
          <div className='generalinformationone'>
            <CardInfo 
              nome={"Pacientes ativos"}
              icone={"clarity:user-line"}
              cor={"#0057FF"}
              quantidade={"26"}
              porcentagem={"10%"}
            />
            <CardInfoRed 
              nome={"Testes realizados"}
              icone={"bx:test-tube"}
              cor={"#0057FF"}
              quantidade={"306"}
              porcentagem={"-10%"}
            />
            <CardInfo 
              nome={"Testes concluídos"}
              icone={"bx:test-tube"}
              cor={"#1CBF84"}
              quantidade={"139"}
              porcentagem={"30%"}
            />
            <CardInfoRed 
              nome={"Testes cancelados"}
              icone={"bx:test-tube"}
              cor={"#EF0C35"}
              quantidade={"11"}
              porcentagem={"-3%"}
            />
          </div>
        </div>

        <div className='seeallframe'>
          <h2 className='seealltitle'>Historico de atendimentos <button className='seeall'>VER TODOS</button> </h2>
          <h2 className='testrealiztitle'>Teste mais realizado</h2> 
        </div>
         
        <div className='histrealiz'>
          <div className='histservframe'>
            <CardHistoric
              icone = {brain}
              nome={"Renata Augusto Pereira"}
              teste={"TESTE REALIZADO"}
              modelo={"TDAH CAB ADHD"}
              realizado={"REALIZADO EM:"} 
              data={"20/10/2023"}
            />
            <CardHistoric
              icone = {cell}
              nome={"Renata Augusto Pereira"}
              teste={"TESTE REALIZADO"}
              modelo={"Autismo"}
              realizado={"REALIZADO EM:"} 
              data={"20/09/2023"}
            />
            <CardHistoric
              icone = {brain}
              nome={"Renata Augusto Pereira"}
              teste={"TESTE REALIZADO"}
              modelo={"TDAH CAB ADHD"}
              realizado={"REALIZADO EM:"} 
              data={"20/10/2023"}
            />
            <CardHistoric
              icone = {cell}
              nome={"Renata Augusto Pereira"}
              teste={"TESTE REALIZADO"}
              modelo={"Autismo"}
              realizado={"REALIZADO EM:"} 
              data={"20/09/2023"}
            />
          </div>
        
          <div className='testrealizframe'>
            <CardRealized
              imagem={cell}
              nome= {"Autismo"}
              licenças={"LICENÇAS DISPONIVEIS"} 
              realizado={"13"} 
              comprar={"COMPRAR MAIS"}
            />
          </div>
        </div>
        
        <h2 className='importuptitle'>Atualizações importantes</h2>
        
        <div className='importupframe'>
          <CardImportant
            imagem={renata}
            paciente={"PACIENTE"}
            nome={"Renata Augusto Ferreira"}
            teste={"COMPLETOU O TESTE:"}
            modelo={"TDAH CAB ADHD"}
            data={"REALIZADO EM: 20/10/2023"}
          />
          <CardImportantTwo
            imagem={carlos}
            paciente={"PACIENTE"}
            nome={"Carlos Nobrega Baccio"}
            teste={"CANCELOU O TESTE:"}
            modelo={"TDAH CAB ADHD"}
            data={"REALIZADO EM: 20/10/2023"}
          />
          <CardImportantTwo
            imagem={suelton}
            paciente={"PACIENTE"}
            nome={"Suelton A. Mellis"}
            teste={"CANCELOU O TESTE:"}
            modelo={"TDAH CAB ADHD"}
            data={"REALIZADO EM: 20/10/2023"}
          />
        </div>
        


      </div>
      
      
    </div>
    
  )
}
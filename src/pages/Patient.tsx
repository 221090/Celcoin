//importando imagens
import felipe from '../assets/images/felipe.svg' 
import brain from '../assets/images/brain.svg'
import cell from '../assets/images/cell.svg' 

//imporando cards
import { CardAllPatient } from '../components/CardAllPatient'
import { CardHeader } from '../components/CardHeader'
import { CardHistoric } from '../components/CardHistoric'
import { CardMenuTwo } from '../components/CardMenuTwo'

//importando estilo css 
import '../styles/stylepagetwo.css'

export default function Pagetwo() {
  return (
    <div className='container'>
      <CardMenuTwo
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

        <h2 className='patupdadetitle'>Atualização de pacientes</h2>

        <div className='patupdadeframe'>
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
            <CardHistoric
              icone = {cell}
              nome={"Renata Augusto Pereira"}
              teste={"TESTE REALIZADO"}
              modelo={"Autismo"}
              realizado={"REALIZADO EM:"} 
              data={"20/09/2023"}
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

        <h2 className='patalltitle'>Todos os pacientes</h2>

        <div className='patallframe'>
          <CardAllPatient
            listaPaciente={"Lista de Pacientes (36)"}
            icone={"ic:baseline-search"}
            buscarPaciente={"Buscar paciente"}
            iconePonto={"ic:baseline-hdr-strong"}            
          />
        </div>
      
      </div>

    </div>

  )
}
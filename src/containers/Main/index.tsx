import SlideShow from '../../components/SlideShow'
import { Call, Hero, MainContainer } from './styles'

const Main = () => {
    return (
        <MainContainer>
            <Hero>
                <Call>
                    <h2>
                        Conheça o<br /> nosso trabalho!
                    </h2>
                    <p>
                        A <strong>LUDOS</strong> faz mais do que vídeos, nós
                        <br />
                        criamos histórias. Conte com um trabalho amplamente
                        profissional para transmitir
                        <br /> suas ideias na melhor qualidade.
                    </p>
                </Call>
                <SlideShow />
            </Hero>
        </MainContainer>
    )
}

export default Main

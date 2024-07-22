import { Call, Hero, MainContainer, Works } from './styles'

import post1 from '../../assets/images/post_01_desktop.png'

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
                        criamos histórias. Conte com um trabalho amplamente
                        profissional para transmitir suas ideias na melhor
                        qualidade.
                    </p>
                </Call>
                <Works>
                    <img srcSet={post1} alt="" />
                </Works>
            </Hero>
        </MainContainer>
    )
}

export default Main

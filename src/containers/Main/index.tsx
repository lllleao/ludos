import { Hero, MainContainer, Works } from './styles'

import post1 from '../../assets/images/post_01_desktop.png'
import post2 from '../../assets/images/post_02_desktop.png'
import post3 from '../../assets/images/post_03_desktop.png'
import Button from '../../components/Button'
// import conceito1 from '../../assets/images/conceito1.png'

const Main = () => {
    return (
        <MainContainer>
            <Hero>
                <div className="call">
                    <h2>LUDOS PRODUCTION</h2>
                    <Button>Conheça nossos trabalhos</Button>
                </div>
                <Works className="works">
                    <img srcSet={post1} alt="" />
                    <img srcSet={post2} alt="" />
                    <img srcSet={post3} alt="" />
                </Works>
            </Hero>
        </MainContainer>
    )
}

export default Main

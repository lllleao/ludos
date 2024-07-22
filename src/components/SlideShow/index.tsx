import { Carrossel, Slide } from './styles'

import iphone from '../../assets/images/iPhone.svg'
import post01Mobile from '../../assets/images/post_01_mobile.png'
import post02Mobile from '../../assets/images/post_02_mobile.png'
import post03Mobile from '../../assets/images/post_03_mobile.png'

const SlideShow = () => {
    const autoSlider = () => {
        setInterval(() => {}, [1000])
    }

    return (
        <Slide>
            <img srcSet={iphone} alt="" />
            <Carrossel>
                <img src={post01Mobile} alt="" />
                <img src={post02Mobile} alt="" />
                <img src={post03Mobile} alt="" />
            </Carrossel>
        </Slide>
    )
}

export default SlideShow

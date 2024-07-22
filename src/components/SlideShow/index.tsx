import { Slide } from './styles'

import iphone from '../../assets/images/iphone.png'

const SlideShow = () => {
    return (
        <Slide>
            <img srcSet={iphone} alt="" />
        </Slide>
    )
}

export default SlideShow

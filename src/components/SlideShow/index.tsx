import { Slide } from './styles'

import iphone from '../../assets/images/iPhone.svg'
import Carrossel from '../Carrossel'

const SlideShow = () => {
    return (
        <Slide>
            <img
                onDragLeave={(e) => e.preventDefault()}
                srcSet={iphone}
                alt=""
            />
            <Carrossel />
        </Slide>
    )
}

export default SlideShow

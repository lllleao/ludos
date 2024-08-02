import { useEffect, useRef, useState } from 'react'
import { CarrosselContainer } from './styles'
import post01Mobile from '../../assets/images/post_01_mobile.png'
import post02Mobile from '../../assets/images/post_02_mobile.png'
import post03Mobile from '../../assets/images/post_03_mobile.png'

const Carrossel = () => {
    const [count, setCount] = useState(0)
    const countRef = useRef(count)
    const carrosselRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        countRef.current = count
    }, [count])

    useEffect(() => {
        const interval = setInterval(() => {
            countRef.current = countRef.current < -75.6 ? 0 : countRef.current
            countRef.current -= 25.2
            setCount(countRef.current)
            if (carrosselRef.current) {
                const verification = countRef.current < -75.6
                if (!verification) {
                    carrosselRef.current.style.transition = `transform 0.5s ease-in-out`
                    carrosselRef.current.style.transform = `translateX(${countRef.current}%)`
                    carrosselRef.current.addEventListener(
                        'transitionend',
                        () => {
                            if (
                                carrosselRef.current &&
                                countRef.current === -75.6
                            ) {
                                carrosselRef.current.style.transition = `none`
                                carrosselRef.current.style.transform = `translateX(0)`
                                countRef.current = 0
                                setCount(countRef.current)
                            }
                        }
                    )
                } else {
                    carrosselRef.current.style.transition = `none`
                    carrosselRef.current.style.transform = `translateX(0)`
                    countRef.current = 0
                    setCount(countRef.current)
                }
            }
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <CarrosselContainer ref={carrosselRef}>
            <img src={post01Mobile} alt="" />
            <img src={post02Mobile} alt="" />
            <img src={post03Mobile} alt="" />
            <img src={post01Mobile} alt="" />
        </CarrosselContainer>
    )
}

export default Carrossel

import { useEffect, useRef } from 'react';
import './Circulo.css'

export default function Circulo() {
    const circuloRef = useRef(null);

    const isTouchDevice = () => {
        try {
            document.createEvent('TouchEvent');
            return true;
        } catch (e) {
            return false;
        }
    };

    const move = (e) => {
        try {
            const x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
            const y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
            circuloRef.current.style.left = x + 'px';
            circuloRef.current.style.top = y - 50 + 'px';
        } catch (e) { console.log(e) }
    };

    useEffect(() => {
        document.addEventListener('mousemove', move);
        document.addEventListener('touchmove', move);

        return () => {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('touchmove', move);
        };
    }, []);

    return (
        <div>
            <div
                id="circulo"
                className='circulo circulo-crece'
                ref={circuloRef}
            ></div>
        </div>
    )
}

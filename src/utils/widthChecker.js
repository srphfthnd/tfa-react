import { useState, useEffect } from "react";

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    return width;
}


export default function WidthChecker() {
    const width = useWindowWidth();

    if(width <= 600) {
        return 's';
    } else if(width <= 1200) {
        return 'm';
    } else {
        return 'lg';
    }
}
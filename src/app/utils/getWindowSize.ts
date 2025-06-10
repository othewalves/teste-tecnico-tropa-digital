import { useState, useEffect } from 'react';

interface WindowDimensions {
    width: number;
    height: number;
}

function getWindowDimensions(): WindowDimensions {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
    };
}

export function useWindowDimensions(): WindowDimensions {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

import { useState, useEffect } from 'react';

interface WindowDimensions {
    width: number;
    height: number;
}

function getWindowDimensions(): WindowDimensions {
    // if (typeof window === 'undefined') {
    //     return {
    //         width: undefined,
    //         height: undefined,
    //     };
    // }

    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

export function useWindowDimensions(): WindowDimensions {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
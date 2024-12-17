import { useState, useEffect } from 'react';

export const useKeyLock = (targetKey: string) => {
    const [isKeyLocked, setIsKeyLocked] = useState(false);

    useEffect(() => {
        const storedState = localStorage.getItem(`${targetKey}State`);
        setIsKeyLocked(storedState === 'true');

        const checkKeyState = (event: KeyboardEvent) => {
            if (event.getModifierState) {
                const isActive = event.getModifierState(targetKey);
                setIsKeyLocked(isActive);
                localStorage.setItem(`${targetKey}State`, isActive.toString());
            }
        };
        window.addEventListener('keydown', checkKeyState);
        window.addEventListener('keyup', checkKeyState);

        return () => {
            window.removeEventListener('keydown', checkKeyState);
            window.removeEventListener('keyup', checkKeyState);
        };
    }, [targetKey]);

    return isKeyLocked;
};
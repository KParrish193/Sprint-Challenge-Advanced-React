import { useEffect } from "react";
import useLocalStorage from './useLocalStorage'

const useDarkMode = initialValue => {
    const [someValue, setSomeValue] = useLocalStorage("DARK_MODE", initialValue)
    useEffect(() => { 
        if (someValue){ document.body.classList.add("dark-mode");
        } else { 
            document.body.classList.remove("dark-mode");
        }
    },[someValue]);
    return [someValue, setSomeValue]
};

export default useDarkMode
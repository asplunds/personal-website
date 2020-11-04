
import { useEffect } from "react";

const useScript = (url, cb) => {
    useEffect(() => {

        const script = document.createElement("script");

        script.src = url;
        script.async = true;

        document.body.appendChild(script);

        if (cb)
            script.onload = cb;

        return () => {
            document.body.removeChild(script);
        }
    }, [url, cb]);
};

export default useScript;
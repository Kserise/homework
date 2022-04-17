import { useState, useEffect } from 'react';

const useEffectTest = () => {
    const [state, setState] = useState(null);
    const [any, setAny] = useState(null);
    useEffect(() => {
        console.log("컴포넌트 마운트 될 때")
        return () => console.log("컴포넌트 언마운트 될 때");
    }, []);
    
    useEffect(() => {
        console.log("특정 state 바뀔때만 실행")
    }, [state])


    useEffect(() => {
        console.log("컴포넌트 요소가 바뀔 때 마다 실행")
    });

    return <div>
        hi요
        <button onClick={() => setState(Date.now())}>change</button>
        <button onClick={() => setAny(Date.now()) }>change</button>
    </div>
}

export default useEffectTest;
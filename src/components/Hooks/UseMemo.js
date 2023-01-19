import React, { useMemo,useState } from 'react'

function UseMemo() {
    let [number, setNumber] = useState(0)
    let multipleValue = useMemo(() => {
        return slowFunction(number)
    }, [number])
    return <>
        <h1>useMemo</h1>
        <div>An example to show the useMemo for expensive calculations</div>
        <input type={'number'} onChange={(e) => setNumber(parseInt(e.target.value))}></input>
        <div>Multiple Value</div>
        <div>{multipleValue}</div>

        <h1>UseCallback</h1>
        <div>The main difference between useMemo and useCallback hook is,
             useMemo returns memoized value and useCallback returns memoised function.</div>
    </>
}
function slowFunction(num) {
    for (let i = 0; i < 100; i++) { }
    console.log(num*2)
    return num * 2
}

export default UseMemo
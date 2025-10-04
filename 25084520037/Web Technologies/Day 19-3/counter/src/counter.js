import React, {useCallback, useState} from "react";

const funcSet = new Set();

const DemoWithCallBack = ()=>
{
    const[cnt,setCnt]=useState(0);
    const[num,setNum]=useState(0);

const incCnt = ()=> setCnt(cnt + 1);
    const decCnt = ()=>setCnt(cnt-1);
    const incNum = ()=>setNum(num+1);

    funcSet.add(incCnt);
    funcSet.add(decCnt);
    funcSet.add(incNum);

    return(
        <div>
            <h2>Without useCallback Hook</h2>
            <button onClick={incCnt}>Increase Counter</button>
            <button onClick={decCnt}>Decrease Counter</button>
            <button onClick={incNum}>Increase Number</button>
               
            <h1>Count:{cnt}</h1>
            <h1>Number:{num}</h1> 
            <h2>Set Size:{funcSet.size}</h2>  
         </div>
    );
};

export default DemoWithCallBack;


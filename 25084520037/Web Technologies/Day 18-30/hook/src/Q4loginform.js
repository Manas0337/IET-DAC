import { useState } from "react";

export default function DemoForm(){

    const[fname ,setFName] = useState("Default");

    function validate(e){

        e.preventDefault();
        alert(fname);
    }

    function readData(e){
        setFName(e.target.value)
    }



return(


    <>
    <form onSubmit={validate}>

        <input type="text" value={fname} onChange={readData} />

        <input type="submit"/>

    </form>
    </>
)

}
import { useState } from "react";

export default function ButtonWithIncreament(){
    const [val, setVal] = useState(0);
    const increamentClicked = () => {
        setVal(val + 1);
    }

    return (<div className="form-group">
        <button className='btn btn-primary' name="increament" onClick={increamentClicked}>Add 1</button> {" "}
        <label>{val}</label>
    </div>);
}
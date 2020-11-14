import React,{useState} from 'react';

export default function Card(props){
    const [opened, setOpened] = useState(false);

    const toggleShowText = () => {
        setOpened(!opened);
    }

    return(
        <>
        <div className="card">
            <div className="card-header">
                <h5 className="mb-0">
                    <button className="btn btn-link" onClick={()=>toggleShowText()}>
                        {props.titolo+" "+props.data}
                    </button>
                </h5>
            </div>
        </div>

        {opened ? (
            <div className="collapse show">
                <div className="card-body">
                    {props.testo}
                </div>
            </div>) : ""}
        </>
    )
}
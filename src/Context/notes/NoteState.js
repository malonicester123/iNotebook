import React from "react";
 import NoteContext from "./noteContext";

 const NoteState =(props)=>{
    const state={
        "name":"harry",
        "class":"5b"

    }
    return (
        <NoteContext.Provider>
          {props.children}
          </NoteContext.Provider>
    )
 }
 export default NoteState
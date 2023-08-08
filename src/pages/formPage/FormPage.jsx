import React from "react";
import { Outlet } from "react-router-dom"
import Form from '../../components/form/Form';

export default function FormPage() {
    return(
        <div>
            {<Form/>}
            <Outlet/>
        </div>
        
    )
};
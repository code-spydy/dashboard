import React, { Component } from 'react'
import { Input, FormLabel } from '@material-ui/core'
import Paper from "@material-ui/core/Paper"
import { Row, Col} from "reactstrap";

class MemberForm extends Component{

    labelStyle={
        color:"Black",
        text:"Georgia",
        
    }
    render() {
        return (
            <form noValidate autoComplete="off">
                <FormLabel className="labelStyle">First Name:- </FormLabel>
                <Input type="text" placeholder="First name" primary="First Name"/>
            </form>
        )
    }
}

export default MemberForm



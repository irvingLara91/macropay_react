import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";


type ToastSuccessProps = {
    open:boolean;
    text:string;
    type:  'success' | 'info' | 'warning' | 'error';
    actionClose:()=> void;
    position?:{ vertical:"top", horizontal:"center" }
};
export const ToastSuccess: React.FC<ToastSuccessProps> = ({ open,actionClose,text ,position,type }) => {


    return ( <Snackbar
        anchorOrigin={position}
        open={open} autoHideDuration={2000} onClose={actionClose}>
        <Alert
            onClose={actionClose}
            severity={type}
            variant="filled"
            sx={{ width: '100%',color:'white'}}
        >
            {text}
        </Alert>
    </Snackbar>)
}

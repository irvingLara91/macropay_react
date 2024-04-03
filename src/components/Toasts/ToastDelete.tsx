import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import {CustomButton} from "../../components/buttons/CustomButton";
import {Typography, useTheme} from "@mui/material";




type ToastSuccessProps = {
    open:boolean;
    text:string;
    actionClose:()=> void;
    actionEvent:()=>void
};



export const ToastDelete: React.FC<ToastSuccessProps> = ({ open,actionClose,text,actionEvent }) => {
    const { breakpoints ,palette } = useTheme();


    return ( <Snackbar
        anchorOrigin={{vertical:"top",horizontal:"center"}}
        open={open} autoHideDuration={9000} onClose={actionClose}>
        <Alert
            onClose={actionClose}
            severity="info"
            variant="filled"
            sx={{ width: '100%',color:'white',backgroundColor:palette.primary.main,marginTop:{xs:'70%',sm:'80%',lg:'40%'}}}
        >
            <React.Fragment>
                <Typography
                    variant={'subtitle1'}
                    color={'white'}
                    fontWeight={'bold'}
                    sx={{ cursor: 'pointer',marginBottom:2 }}
                >
                    {text}
                </Typography>
                <CustomButton
                    text={'Aceptar'}
                    onClick={actionEvent}
                    color={'error'}
                    variant={'contained'}
                    style={{height: 30, width: '50%', textTransform: 'none'}}
                />
            </React.Fragment>

        </Alert>
     </Snackbar>)
}

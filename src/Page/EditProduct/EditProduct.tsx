import React, {useEffect, useState} from "react";
import {Box, Container} from "@mui/material";
import {FormProduct} from "../../components/Forms/FormProduct";
import {product} from "../../components/Tables/TableProducts";
import {useNavigate, useParams} from "react-router-dom";
import {getProduct} from "../../api/getProduct";
import {updateProduct} from "../../api/updateProduct";
import {ToastSuccess} from "../../components/Toasts/ToastSuccess";


    export const EditProduct: React.FC = () => {

        const navigate = useNavigate()
    const {id} = useParams();
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("");
        const [typeAction, setTypeAction] = React.useState<'success' | 'info' | 'warning' | 'error'>('success');
    const [current, setCurrent] = useState<product>({
        id: 0,
        title: "",
        price: 0,
        category: {
            id: 0,
            name: "",
            image: ""
        },
        description: "",
        images: []
    })

    useEffect(() => {
        if (id) {
            getProduct(id).then(res => {
                setCurrent(res.data)
            }).catch(e => {
                console.error(e)
            })
        }

    }, [id])

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const updateProductAction =(params:any)=>{
        if (id !== undefined) {
           JSON.stringify(params)
            updateProduct(id, params).then(res => {
                setOpen(true)
                setTypeAction("success")
                setTitle("Se actualizo el producto.")
                setTimeout(()=>{
                    navigate('/')
                },1000)

            }).catch(e => console.log(e))
        }
    }

    return (<Container maxWidth={'md'}>
        <FormProduct product={current} actionApi={updateProductAction}/>
        {
            open &&
          <ToastSuccess open={open} actionClose={handleClose} text={title} type={typeAction}
                        position={{vertical: "top", horizontal: "center"}}/>
        }
    </Container>)
}

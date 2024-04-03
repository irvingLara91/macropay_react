import React, {useCallback, useEffect, useState} from "react";
import {Box, Container, TextField, useMediaQuery, useTheme} from "@mui/material";
import {CustomButton} from '../../components/buttons/CustomButton'
import  {TableProducts,product} from "../../components/Tables/TableProducts";
import {getProductsAll} from "../../api/getProductsAll";
import {useNavigate} from "react-router-dom";
import * as _ from 'lodash';
import {getProductFilter} from "../../api/getProductFilter";

export const Home: React.FC = () => {
    const navigate = useNavigate()
    const { breakpoints, palette } = useTheme();
    const isDesktop = useMediaQuery(breakpoints.up('lg'));
    const isMobile = useMediaQuery(breakpoints.down('sm'));
    const isTablet = useMediaQuery(breakpoints.down('md'));
    const [products, setProducts] = useState<product[]>([])

    const getProductsAction = () => {
        getProductsAll().then(res => {
            console.log("respuesta all",res)
           setProducts(res.data)
        }).catch(e => {
            console.error("error", e)
        })
    }

    useEffect(() => {
        getProductsAction()
    }, []);

    const handleChangeSearch = (event:any) => {
        debounceSearch(event.target.value.toLocaleLowerCase())
    };

    const debounceSearch = useCallback(
        _.debounce(async (_searchVal:any) => {
            await search(_searchVal);
        }, 1000),
        []
    );
    const search = async (text:string) => {
        try {
            //setSearchText(text)
            getProductFilter(text).then(res=>{
              setProducts(res.data)
            })
        } catch (error) {
            console.log("Error", error)
        }
    }





    return (<Box sx={{width: '100%', height: '100vh', display: 'flex',justifyContent:'center'}}>
        <Container maxWidth={'lg'}>
            <Box sx={{display:'flex',width:'100%',padding:'50px 0 10px 0'}}>
                <CustomButton
                    text={'Agregar'}
                    onClick={() => {
                        navigate('/product/add')
                    }}
                    color={'primary'}
                    variant={'contained'}
                    style={{height: 56, width: isTablet ? '40%': '30%', textTransform: 'none'}}
                />
            </Box>
            <Box sx={{padding:'10px 0 10px 0'}}>
                <TextField fullWidth label={"Buscar por nombre"} onChange={handleChangeSearch}/>
            </Box>
            <TableProducts data={products} getProductsAll={getProductsAction}/>
        </Container>
    </Box>)
}

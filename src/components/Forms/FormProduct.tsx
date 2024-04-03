import * as React from "react";
import {Box, FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack, TextField} from "@mui/material";
import { useFormik } from 'formik';
import {CustomButton} from "../buttons/CustomButton";
import {useEffect, useState} from "react";
import {getCategories} from "../../api/getCategories";
import {product} from "../../components/Tables/TableProducts";
import {date} from "yup";
import {ValidateFormProduct} from "../../Page/AddProduct/ValideteFormAdd";
import {useNavigate} from "react-router-dom";


type FormProductProps = {
    product?: product;
    actionApi: (val:any)=> void;
};
export const FormProduct: React.FC<FormProductProps> = ({ product ,actionApi}) => {
    const navigate = useNavigate()
    const [categories,setCategories] = useState([])
    const formik = useFormik({
        initialValues: {
            title: '',
            price: "",
            description: '',
            category:'',
            image:""
        },
        validationSchema: ValidateFormProduct,
        onSubmit: values => {
            let arra:string[] = []
            if (product){
                arra.push(values.image)
                actionApi({title:values.title,
                    price:parseInt(values.price),
                    description:values.description,
                    category:parseInt(values.category),
                   images:arra,
                })

            }else {
                arra.push(values.image)
                actionApi({title:values.title,
                    price:parseInt(values.price),
                    description:values.description,
                    categoryId:parseInt(values.category),
                    images:arra,
                })
            }

        },
    });


    const getCategoriesAction=()=>{
        getCategories().then(resp=>{
            setCategories(resp.data)
        }).catch(e=>{console.log(e)})
    }
    const getProductAction=(data:product)=>{
        formik.setFieldValue("title",data.title)
        formik.setFieldValue("image",data.images[0])
        formik.setFieldValue("category",data.category.id)
        formik.setFieldValue("price",data.price)
        formik.setFieldValue("description",data.description)

    }
    useEffect(()=>{
        getCategoriesAction()
        if (product){
            getProductAction(product)
        }
    },[product])



    return(<Box sx={{width:'100%',display:'flex',height:'100vh',justifyContent:'center',alignItems:'center'}}>
        <form onSubmit={formik.handleSubmit} style={{width:'100%'}}>
            <TextField
                label="Título"
                fullWidth
                id="title"
                name="title"
                value={formik.values.title}
                onChange={(type) => {
                    formik.setFieldValue("title", type.target.value)
                }}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
            />
            <Stack
                marginTop={'5%'}
                spacing={2}
                direction={{ xs: 'column', sm: 'column', md: 'row' }}>
                <FormControl fullWidth error={formik.touched.category && Boolean(formik.errors.category)}>
                    <InputLabel id="category">Categoria</InputLabel>
                    <Select
                        labelId="category"
                        style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                        id="category"
                        name="category"
                        label="Categoria"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                    >

                        {
                            categories.map((c:any, index) => {
                                return (<MenuItem key={index} value={c.id}>{c.name}</MenuItem>)
                            })
                        }
                    </Select>
                    <FormHelperText>{formik.touched.category && formik.errors.category}</FormHelperText>
                </FormControl>

                <TextField
                    fullWidth
                    id="price"
                    type="number"
                    name="price"
                    label="Precio"
                    value={formik.values.price}
                    onChange={formik.handleChange}

                    error={formik.touched.price && Boolean(formik.errors.price)}
                    helperText={formik.touched.price && formik.errors.price}
                />
            </Stack>

            {
                formik.values.image &&  formik.values.image!=="" &&
              <Box marginTop={'5%'}>
                <Box component={'img'} sx={{width:100,height:100}} src={formik.values.image}/>

              </Box>
            }


            <Box marginTop={'5%'}>

                <TextField
                    fullWidth
                    id="image"
                    //disabled={product ? true: false}
                    label={"Url imagen"}
                    name="image"
                    value={formik.values.image}
                    onChange={formik.handleChange}
                    error={formik.touched.image && Boolean(formik.errors.image)}
                    helperText={formik.touched.image && formik.errors.image}
                />


            </Box>

            <Box marginTop={'5%'}>
                <TextField
                    fullWidth
                    rows={4}
                    multiline={true}
                    id="description"
                    name="description"
                    label="Descripción"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                />
            </Box>

            <Stack
                marginTop={'5%'}
                spacing={2}
                direction={{ xs: 'column', sm: 'column', md: 'row' }}>

                <CustomButton
                    text={'Cancelar'}
                    onClick={() => {
                        navigate("/")
                    }}
                    color={'error'}
                    variant={'contained'}
                    style={{height: 56, width: '100%', textTransform: 'none', marginTop:20}}
                />
            <CustomButton
                type="submit"
                text={'Agregar'}
                onClick={() => {

                }}
                color={'primary'}
                variant={'contained'}
                style={{height: 56, width: '100%', textTransform: 'none', marginTop:20}}
            />
            </Stack>

        </form>
    </Box>)
}

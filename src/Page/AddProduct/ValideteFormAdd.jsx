import * as yup from "yup";
const regMatch = /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;

export const ValidateFormProduct = (selectedPaymentMethod) => yup.object().shape({
    title: yup
        .string()
        .required("Ingrese el título.")
        .min(5, "Mínimo 5 caracteres en el título.")
        .max(80, "Por favor ingrese  un título  máximo de 50 caracteres."),
    category: yup
        .string().min(1)
        .required("Selectciona una categoria"),
    price: yup
      .number().required("Ingrese una precio")
      .notOneOf([0], 'Ingrese un precio diferente de cero')
      .typeError('Ingrese un precio diferente de cero'),

    description: yup
        .string()
        .required("Por favor proporcione una descripción")
        .min(20, "Proporcione una descripción, mínimo 20 caracteres")
        .max(1000, "Proporcione una descripción, máximo 1000 caracteres"),


    image: yup
        .string()
        .required("Proporcione la URL de la imagen")
        .min(5, "Proporcione la URL de la imagen.")
        .matches(regMatch, "Proporcione la URL de la imagen valida")

})




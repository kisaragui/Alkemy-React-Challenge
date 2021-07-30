import React from 'react';
import { useFormik } from 'formik';


const Searchform= ({setHero}) => {

    const formClean = (formValues) => {
        let form={};    
        for (const key in formValues) {
            form.hero = formValues[key].toLowerCase() 
        }
        return form;   
    }

    const formik = useFormik({
        initialValues: {
                hero: ""
        },
        onSubmit: (values) =>{
            const form =formClean(values);
            setHero(form)
            formik.resetForm()
        },
    });
   
    return (
        <form onSubmit={formik.handleSubmit}>
        <div className="container-fluid">
            <p>Por favor ingrese un heroe: </p>
            <label htmlFor="search" className="form-label">Buscador</label>
            <input type="text" className="form-control" name="hero" onBlur={formik.handleBlur} onChange={formik.handleChange} value={ formik.values.hero }/>
            <button className="btn btn-primary" type="submit">Buscar</button>
        </div>
        </form>
    )
}

export default Searchform

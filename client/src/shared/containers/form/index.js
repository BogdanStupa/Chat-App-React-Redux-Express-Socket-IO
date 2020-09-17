import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as formActions from "redux/actions/form";


const FormContainer = React.memo(function(props) {
    const {
        render,
        formActions,
        values,
        formName
    } = props;

    useEffect(() => {
        formActions.initForm(formName, {
            values,
            errors: {},
            touched: {}
        });

        return () => {}
    }, []);

    const getFormData = () => {
        const {
            formData,
            formName
        } = props;
        return formData[formName];
    };

    const updateFormData = (params) => {
        const {
            formActions,
            formName
        } = props;

        formActions.updateForm(formName,{
            ...params
        });
    };

    const onChange = (data) => {
        /* event.preventDefault();

        const {
            value,
            name
        } = event.target;
        const { values } = getFormData();
        values[name] = value;
        updateFormData({
            values
        }); */
        console.log(data);
        //validate form
    };

    const onSubmit = (data) => {
        /* event.preventDefault();

        const { values, erros } = getFormData();
        console.log(values, erros); */

        console.log(data);

        //validate form 
    }


    return (
        <div>
            {
                render({
                    onChange, 
                    onSubmit
                })
            }
        </div>  
    );
});


const mapStateToProps = (state) => {
    return {
        formData: state.form
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        formActions: bindActionCreators(formActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
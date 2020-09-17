import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as formActions from "redux/actions/form";


const FormContainer = React.memo(function(props) {
    const {
        render,
        formActions,
        values,
        formName,
        formData
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

    const handleChange = (event) => {
        event.preventDefault();

        const {
            value,
            name
        } = event.target;
        const { values } = getFormData();
        values[name] = value;
        updateFormData({
            values
        });
    };



    return (
        <div>
            {
                render({handleChange})
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
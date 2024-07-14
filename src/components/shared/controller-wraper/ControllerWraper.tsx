import { ComponentType } from 'react';
import { Control, Controller } from 'react-hook-form';
import { TFormValue } from '../product-form/ProdctForm';

// create controller type
type TCOntroller = {
    control: Control<TFormValue, any>
    Children: ComponentType<any>
    name: string
    childProps: any
}

// create controllerWraper for handle any input component by react hook form
const ControllerWraper = ({ control, name, Children, childProps }: TCOntroller) => {
    return (
        // register the children functional component and return the chislldren 
        <Controller
            control={control}
            name={name as "title"}
            render={({ field }) => <Children {...childProps} {...field} />}
        />)
};

export default ControllerWraper;

// ({ field: { onChange, onBlur, value, ref } })
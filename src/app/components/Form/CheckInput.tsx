import { FormElement } from "./form.interface";

interface CheckInputProps extends FormElement {
    name: string;
    label: string;

    options: {
        id: string;
        label: string;
        icon?: string;
        value: string | boolean;
    }[]
}

export default function CheckInput(props: CheckInputProps) {

    return (
        <fieldset
            className="form-checks"
        >
            <legend
                className="text-capitalize fw-400 fs-14 lh-27 clr-primary"
            >
                {props.label}
            </legend>


            {
                props.options.map((item, i)=>{
                    
                    let className = 'text-capitalize fw-400 fs-14 lh-27'

                    if (item.icon) {
                        className += ` icon ${item.icon}`;
                    }
                    
                    return (
                        <label htmlFor={item.id} key={i}>
                            <input
                                type="radio"
                                name={props.name}
                                id={item.id}
                                value={item.value.toString()}
                                onChange={() => props.onChange(props.name, item.value)}
                            />
                            <span
                                className={className}
                            >
                                {item.label}
                            </span>
                        </label>
                    )
                })
            }

        </fieldset>
    )
}
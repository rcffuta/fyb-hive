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

    function revealError() {
        // const errorMessage = props.error ? props.error[props.name] : null;

        if (!props.error) return;

        if (!props.error[props.name]) return;

        return (props.error[props.name]);
    }


    return (
        <fieldset
            className="form-checks"
        >
            <legend
                className="text-capitalize fw-400 fs-14 lh-27 clr-primary"
            >
                {props.label}
            </legend>

            <div>
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
                                    readOnly={props.disable}
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
            </div>

            <span className="error-display">{revealError()}</span>

        </fieldset>
    )
}
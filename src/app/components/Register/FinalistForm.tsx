
import ImageUpload from "../ImageUpload";
import TextInput from "../Form/TextInput";
import CheckInput from "../Form/CheckInput";
import { Form } from "antd";
import { useState } from "react";
import { openNotificationWithIcon } from "@/app/utils/notification";
import { FormError } from "../Form/form.interface";
import { GuestAccount, GuestModel, GuestObject } from "@/lib/nobox/record-structures/Guest";
import { ReturnObject } from "nobox-client";




export default function FinalistForm(){
    const [form] = Form.useForm();

    const [formData, setFormData] = useState({});
    const [formerror, setFormError] = useState<FormError | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFinish = (values: any) => {
        
        const _errors = validateForm(formData);

        console.log(_errors);

        if (_errors) {
            setFormError(_errors);
            return;
        }

        console.log(formData);

        setLoading(true);


        GuestModel.insertOne(formData as GuestAccount)
        .then((obj: GuestObject)=>{

            setFormData(()=>({}))
            setFormError(()=>null);
            setLoading(false);
            
            // Show a success notification
            openNotificationWithIcon('success', 'Form Submitted', 'Your form has been submitted successfully!');
            openNotificationWithIcon('success', 'Check your mail', `Please check your email address(${(formData as any).email})`, true);
        })
        
    }

    const validateForm = (_data: any) => {
        const _formError: FormError = {};

        const {
            firstname, lastname,
            picture, gender, contact,
            email, partV, worker, unit,
            exco, portfolio

        } = _data;


        let suffix = '';

        if (!gender) _formError.gender = 'Male/Female please?'

        if (gender) {
            suffix = ' ' + (gender === 'male' ? 'sir': 'ma');
        }


        if (!firstname) _formError.firstname = 'First name is required' + suffix
        if (!lastname) _formError.lastname = 'Last name is required'+ suffix
        if (!picture) _formError.picture = 'Your picture is required'+ suffix
        if (!contact) _formError.contact = 'Your contact is required'+ suffix
        if (!email) _formError.email = 'Your email address is required'+ suffix
        if (partV === undefined) _formError.partV = 'Part IV or Part V'+ suffix +'?'

        if (worker === undefined) _formError.worker = 'Are you a worker or not'+ suffix +'?'

        if (worker) {
            if (!unit) _formError.unit = 'What unit'+ suffix +'?'
        }


        if (exco === undefined) _formError.exco = 'Are you an executive or not'+ suffix +'?'

        if (exco) {
            if (!portfolio) _formError.portfolio = 'What office'+ suffix +'?'
        }


        if (Object.keys(_formError).length < 1) {
            return null
        }

        return _formError;

    }

    const handleElemChange = (key:string, val:any)=>{
        setFormError((p)=>{
            if (!p) return null;
            return null;
        })
        setFormData(prev=>(
            {
                ...prev,
                [key]: val
            }
        ));

    }

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
            autoComplete="off"
            
        >
            <div className="form-group">

                <ImageUpload
                    name="picture"
                    onChange={handleElemChange}
                    error={formerror}
                    disable={loading}
                />

                <div className="form-group group-col">

                    <CheckInput
                        label="Select your gender"
                        name="gender"
                        onChange={handleElemChange}
                        error={formerror}
                        disable={loading}
                        options={[
                            {
                                id:'gender-male',
                                label: 'Male',
                                icon: 'icon-male',
                                value: 'male',
                            },
                            {
                                id:'gender-female',
                                label: 'Female',
                                icon: 'icon-female',
                                value: 'female',
                            }
                        ]}
                    />

                    <CheckInput
                        label="Part IV or Part V"
                        name="partV"
                        onChange={handleElemChange}
                        error={formerror}
                        disable={loading}
                        options={[
                            {
                                id:'part-iv',
                                label: 'Part IV',
                                icon: 'icon-graduation-iv',
                                value: false,
                            },
                            {
                                id:'part-v',
                                label: 'Part V',
                                icon: 'icon-graduation-v',
                                value: true,
                            }
                        ]}
                    />
                </div>

            </div>
            <br/>

            <div className="form-group">
                <TextInput
                    disable={loading}
                    name="firstname"
                    label="First Name"
                    onChange={handleElemChange}
                    required
                    error={formerror}
                />

                <TextInput
                    disable={loading}
                    name="lastname"
                    label="Last Name"
                    onChange={handleElemChange}
                    required
                    error={formerror}
                />
            </div>

            <br/>

            <div className="form-group">
                <TextInput
                    disable={loading}
                    name="email"
                    label="Email"
                    email
                    onChange={handleElemChange}
                    required
                    error={formerror}
                />

                <TextInput
                    name="contact"
                    label="Phone Number"
                    tel
                    onChange={handleElemChange}
                    required
                    error={formerror}
                    disable={loading}
                />

            </div>

            

            <br/>


            <div className="form-group">
                <div className="form-group group-col">

                    <CheckInput
                        label="Are you a worker?"
                        name="worker"
                        onChange={handleElemChange}
                        options={[
                            {
                                id:'worker-yes',
                                label: 'Yes',
                                icon: 'icon-check',
                                value: true,
                            },
                            {
                                id:'worker-no',
                                label: 'No',
                                icon: 'icon-cross',
                                value: false,
                            }
                        ]}
                        required
                        error={formerror}
                        disable={loading}
                    />

                    <TextInput
                        name="unit"
                        label="Your unit"
                        onChange={handleElemChange}
                        error={formerror}
                        disable={loading}
                    />

                </div>


                <div className="form-group group-col">

                    <CheckInput
                        label="Are you an executive"
                        name="exco"
                        onChange={handleElemChange}
                        error={formerror}
                        disable={loading}
                        options={[
                            {
                                id:'executive-yes',
                                label: 'Yes',
                                icon: 'icon-check-double',
                                value: true,
                            },
                            {
                                id:'executive-no',
                                label: 'No',
                                icon: 'icon-cross',
                                value: false,
                            }
                        ]}
                    />

                    <TextInput
                        name="portfolio"
                        label="Your Portfolio"
                        onChange={handleElemChange}
                        error={formerror}
                        required
                        disable={loading}
                    />

                </div>
            </div>

            <br/>


            <div
                className="steps-action"
            >
                <button
                    className="btn btn-primary text-uppercase btn-submit fw-700 fs-18"
                    // onClick={handl}
                    title='Submit'
                    type='submit'
                    disabled={loading}
                >
                    Submit
                </button>
            </div>
        </Form>
    )
}

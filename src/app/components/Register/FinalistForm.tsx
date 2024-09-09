
import ImageUpload from "../ImageUpload";
import TextInput from "../Form/TextInput";
import CheckInput from "../Form/CheckInput";
import { Form } from "antd";
import { useState } from "react";
import { openNotificationWithIcon } from "@/app/utils/notification";




export default function FinalistForm(){
    const [form] = Form.useForm();

    const [formData, setFormData] = useState({});

    const handleFinish = (values: any) => {
        console.log(formData);

        // Show a success notification
        openNotificationWithIcon('success', 'Form Submitted', 'Your form has been submitted successfully!');

    }

    const handleElemChange = (key:string, val:any)=>{
        setFormData(prev=>(
            {
                ...prev,
                [key]: val
            }
        ))
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
                />

                <CheckInput
                    label="Select your gender"
                    name="gender"
                    onChange={handleElemChange}
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
            </div>
            <br/>

            <div className="form-group">
                <TextInput
                    name="firstname"
                    label="First Name"
                    onChange={handleElemChange}
                />

                <TextInput
                    name="lastname"
                    label="Last Name"
                    onChange={handleElemChange}
                />
            </div>

            <br/>

            <div className="form-group">
                <TextInput
                    name="email"
                    label="Email"
                    email
                    onChange={handleElemChange}
                />

                <TextInput
                    name="contact"
                    label="Phone Number"
                    tel
                    onChange={handleElemChange}
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
                    />

                    <TextInput
                        name="unit"
                        label="Your unit"
                        onChange={handleElemChange}
                    />

                </div>


                <div className="form-group group-col">

                    <CheckInput
                        label="Are you an executive"
                        name="executive"
                        onChange={handleElemChange}
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
                >
                    Submit
                </button>
            </div>
        </Form>
    )
}

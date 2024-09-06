
import ImageUpload from "../ImageUpload";
import TextInput from "../Form/TextInput";
import CheckInput from "../Form/CheckInput";
import { Form } from "antd";
import { useState } from "react";


export default function FinalistForm(){
    const [form] = Form.useForm();

    const handleFinish = () => {}
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
    });

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
            initialValues={formData}
        >
                <div className="form-group">

                <ImageUpload/>

                <CheckInput
                    label="Select your gender"
                    name="gender"
                    options={[
                        {
                            id:'gender-male',
                            label: 'Male',
                            icon: 'icon-male'
                        },
                        {
                            id:'gender-female',
                            label: 'Female',
                            icon: 'icon-female'
                        }
                    ]}
                />
            </div>
            <br/>

            <div className="form-group">
                <TextInput
                    name="firstname"
                    label="First Name"
                />

                <TextInput
                    name="lastname"
                    label="Last Name"
                />
            </div>

            <br/>

            <div className="form-group">
                <TextInput
                    name="email"
                    label="Email"
                    email
                />

                <TextInput
                    name="contact"
                    label="Phone Number"
                    tel
                />

            </div>

            

            <br/>


            <div className="form-group">
                <div className="form-group group-col">

                    <CheckInput
                        label="Are you a worker?"
                        name="worker"
                        options={[
                            {
                                id:'worker-yes',
                                label: 'Yes',
                                icon: 'icon-check'
                            },
                            {
                                id:'worker-no',
                                label: 'No',
                                icon: 'icon-cross'
                            }
                        ]}
                    />

                    <TextInput
                        name="unit"
                        label="Your unit"
                    />

                </div>


                <div className="form-group group-col">

                    <CheckInput
                        label="Are you an executive"
                        name="executive"
                        options={[
                            {
                                id:'executive-yes',
                                label: 'Yes',
                                icon: 'icon-check-double'
                            },
                            {
                                id:'executive-no',
                                label: 'No',
                                icon: 'icon-cross'
                            }
                        ]}
                    />

                    <TextInput
                        name="portfolio"
                        label="Your Portfolio"
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

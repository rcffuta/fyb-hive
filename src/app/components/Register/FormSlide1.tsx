import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import ImageUpload from "../ImageUpload";
import TextInput from "../Form/TextInput";
import CheckInput from "../Form/CheckInput";


export default function FormSlide1(){
    return (
        <>
            {/* <ImageUpload/>

            <br/> */}


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

            <TextInput
                name="email"
                label="Email"
                email
            />

            <br/>

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

            <br/>

            <div className="form-group">
                <TextInput
                    name="contact"
                    label="Phone Number"
                    tel
                />

                <TextInput
                    name="alt-contact"
                    label="Alternative phone Number"
                    tel
                />
            </div>

            
        </>
    )
}

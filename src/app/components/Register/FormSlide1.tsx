
import ImageUpload from "../ImageUpload";
import TextInput from "../Form/TextInput";
import CheckInput from "../Form/CheckInput";


export default function FormSlide1(){
    return (
        <>

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

            <TextInput
                name="email"
                label="Email"
                email
            />

            <br/>


            <div className="form-group">

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

            </div>

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


            <br/>


            {/* <SelectInput
                label="hobbies"
                name=""
            /> */}

            
        </>
    )
}

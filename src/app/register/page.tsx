import RegistrationForm from "../components/Register";




export default function Register() {
    return (
        <>
            <h1 className="text-center clr-primary ff-riffic fw-700 fs-24 lh-30">
                Fill Your Details
            </h1>
            {/* <div
                className="liners"
            >
                <hr className="fill"/>
                <hr/>
            </div> */}

            <RegistrationForm/>
            <br/><br/>
        </>
    )   
}

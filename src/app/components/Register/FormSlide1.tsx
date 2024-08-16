

export default function FormSlide1(){
    return (
        <>
            <label
                htmlFor="firstname"
                className="form-input"
            >
                <span
                    className="text-capitalize fw-400 fs-18 lh-27"
                >
                    Picture
                </span>

                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                />

            </label>

            <br/>

            <label
                htmlFor="firstname"
                className="form-input"
            >
                <span
                    className="text-capitalize fw-400 fs-18 lh-27"
                >
                    First name
                </span>

                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                />

            </label>

            <br/>

            <label
                htmlFor="lastname"
                className="form-input"
            >
                <span
                    className="text-capitalize fw-400 fs-18 lh-27"
                >
                    Last name
                </span>

                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                />

            </label>

            <br/>

            <label
                htmlFor="email"
                className="form-input"
            >
                <span
                    className="text-capitalize fw-400 fs-18 lh-27"
                >
                    email
                </span>

                <input
                    type="email"
                    name="email"
                    id="email"
                />

            </label>

            <br/>

            <div
                className="form-input form-checks"
            >
                <span
                    className="text-capitalize fw-400 fs-18 lh-27"
                >
                    Gender
                </span>


                <div>
                    <label htmlFor="gender-male">
                        <input
                            type="radio"
                            name="gender"
                            id="gender-male"
                        />
                        <span
                            className="text-capitalize fw-400 fs-18 lh-27"
                        >
                            Male
                        </span>
                    </label>

                    <label htmlFor="gender-female">
                        <input
                            type="radio"
                            name="gender"
                            id="gender-female"
                        />
                        <span
                            className="text-capitalize fw-400 fs-18 lh-27"
                        >
                            Female
                        </span>
                    </label>
                </div>


            </div>

            <br/>

            {/* <div
                className="form-input form-checks"
            >
                <span
                    className="text-capitalize text-disabled fw-400 fs-18 lh-27"
                >
                    Is it Your First Time?
                </span>


                <div>
                    <label htmlFor="isfirst-yes">
                        <input
                            type="radio"
                            name="isFirst"
                            id="isfirst-yes"
                        />
                        <span
                            className="text-capitalize text-disabled fw-400 fs-18 lh-27"
                        >
                            Yes
                        </span>
                    </label>

                    <label htmlFor="isfirst-no">
                        <input
                            type="radio"
                            name="isFirst"
                            id="isfirst-no"
                        />
                        <span
                            className="text-capitalize text-disabled fw-400 fs-18 lh-27"
                        >
                            No
                        </span>
                    </label>
                </div>


            </div>

            <br/> */}

            {/* <label
                htmlFor="address"
                className="form-input"
            >
                <span
                    className="text-capitalize fw-400 fs-18 lh-27"
                >
                    Home Address
                </span>

                <input
                    type="text"
                    name="address"
                    id="address"
                />

            </label>             */}
        </>
    )
}

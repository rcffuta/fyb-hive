import Image from "next/image";

export default function Register() {
    return (
        <>
            <h1 className="text-center clr-primary ff-riffic fw-700 fs-24 lh-30">
                Fill Your Details
            </h1>

            <br/>

            <div
                className="liners"
            >
                <hr className="fill"/>
                <hr/>
            </div>

            <br/><br/>

            <form>
                <div>
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

                    <div
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

                    <br/>

                    <label
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

                    </label>
                </div>


                <div className="form-cta">
                    <button
                        className="btn btn-primary"
                    >
                        <svg width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 7.42677V9.57323H4.35781L10.5995 15.476L8.98798 17L0 8.5L8.98798 0L10.5995 1.52399L4.35781 7.42677L30 7.42677Z" fill="#F4F4F4"/>
                        </svg>
                    </button>

                    <button
                        className="btn btn-primary text-uppercase"
                    >
                        {/* <svg width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 9.57323V7.42677L25.6422 7.42677L19.4005 1.52399L21.012 0L30 8.5L21.012 17L19.4005 15.476L25.6422 9.57323L0 9.57323Z" fill="white"/>
                        </svg> */}
                        Done
                    </button>
                </div>
            </form>
            <br/><br/>
        </>
    )   
}

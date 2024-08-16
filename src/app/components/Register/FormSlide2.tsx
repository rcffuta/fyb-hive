

export default function FormSlide2(){
    return (
        <>
            <label
                htmlFor="firstname"
                className="form-input"
            >
                <span
                    className="text-capitalize fw-400 fs-18 lh-27"
                >
                    Department
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
                    hobbies
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
                    worker
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
                    exco
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
                    Part IV or Part V
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
                            Part Iv
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
                            Part V
                        </span>
                    </label>
                </div>


            </div>

            <br/>
        </>
    )
}

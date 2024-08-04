
import Image from "next/image";
import Link from "next/link";

export default function App() {
	return (
		<>

            <div className="img-wrapper">
                <Image
                    src={'/images/illustr-1.png'}
                    alt="Welcome"
                    width={205}
                    height={205}
                />
            </div>

            <h1 className="text-center clr-primary ff-riffic fw-700 fs-48 lh-60">
                Welcome to<br/>RCF FUTA Database 
            </h1>

            <br/><br/><br/>

            <Link
                href={'/register'}
                className="btn btn-primary btn-md text-uppercase mx-auto"
            >
                register
            </Link>
        </>
	);
}

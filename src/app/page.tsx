import Image from "next/image";

export default function Home() {
	return (
		<section>
			
			<div className="img-wrapper logo"/>



			<div>
			<br/><br/><br/><br/>

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

				<br/><br/>

				<button
					className="btn btn-primary btn-md text-uppercase mx-auto"
				>
					register
				</button>
			</div>

		</section>
	);
}

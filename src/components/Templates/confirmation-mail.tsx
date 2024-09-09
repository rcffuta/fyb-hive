import { GuestAccount } from "@/lib/nobox/record-structures/Guest";


interface EmailTemplateProps {
  guest: GuestAccount
}

export const FinalstConfirmationEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = (props) => (
    <div>
        <h1>Hello {props.guest.gender === 'male' ? 'Sir' : 'Ma'},</h1>

        <p>
            Thank you for registering. This is to inform you that your registration was successful.
        </p>

        <p>
            Here is your consent token

            <b>FYB-{props.guest.consentId!.toUpperCase()}</b>
        </p>

        <p>
            Please becareful and intentional about your consent token. Only share with the right person/people as your token will be used for varification in further activities.
        </p>


        <p>
            <b>Your details includes:</b>

            <ul>
                <li>
                    Full name: {props.guest.lastname} {props.guest.firstname}
                </li>
                <li>
                    Email address: {props.guest.email}
                </li>
                <li>
                    Phone number: +234 {props.guest.contact}
                </li>
            </ul>
        </p>

    </div>
);

export default function PasswordInput() {
    return(
        <>
            <div className="container_password_field">
                <p className="passsword_field_title">Your generated password :</p>
                <input type='text' disabled={true}  value='Hell'/>
            </div>

            <style jsx>{`
                .container_password_field{
                    padding-top: 10px;
                    display: flex;
                    align-items: center;
                }
                
                input[type="text"]{
                    border: none;
                    outline: none;
                    background-color: inherit;

                    font-size: 30px;
                    color: red;
                    font-weight: 600;
                }

                .passsword_field_title{
                    font-size: 25px;
                    color: white;
                    letter-spacing: .1em;

                    padding-right: 20px;

                }
            `}</style>
        </>
    )
}
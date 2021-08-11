import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useState , useEffect} from 'react'
import classNames from 'classnames';

export default function PasswordInput({ password }) {

    const [coppied , setCoppied] = useState(false)

    const onCopyHandler = () => {
        setCoppied(!coppied)
        setTimeout( () => {
            setCoppied(!coppied)
        } , 10000 )
    }

    useEffect(
        () => {
            setTimeout(setCoppied , 5000)
        } ,
        [coppied])

    return(
        <>
            <div className="container_password_field">
                <p className="passsword_field_title">Your generated password :</p>
                <input type='text' disabled={true}  value={password} />

                <CopyToClipboard text={password} onCopy={onCopyHandler}>
                    <button className={classNames('coppy_button' , {'active' : coppied})}>Copy</button>
                </CopyToClipboard>
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

                    width: auto;
                    text-align: center;
                }

                .passsword_field_title{
                    font-size: 25px;
                    color: white;
                    letter-spacing: .1em;

                    padding-right: 20px;
                }

                .coppy_button{
                    text-transform: uppercase;
                    background-color: white;
                    color: #8EDBF2;
                    font-size: 24px;
                    
                    border: none;
                    border-radius: 30px;

                    padding: 5px 10px;

                    box-shadow: 8px 8px 4px rgba(0,0,0, .4);

                    transition: all linear .6s;
                }

                .coppy_button:hover{
                    letter-spacing: .2em;
                }
                .coppy_button:active{
                    transform: translateX(10px) translateY(5px);
                    color: white;
                    font-weight: 700;
                }
                .coppy_button.active{
                    background-color: rgba(57 ,218 , 0 ,.46);
                    color: white;
                }
            `}</style>
        </>
    )
}
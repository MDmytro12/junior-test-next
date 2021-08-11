export default function Button({onClickHandler}){
    return(
        <>
            <div className='container_button'>
                <button onClick={onClickHandler}>Generate password</button>
            </div>

            <style jsx>{`
                .container_button{
                    padding-top: 20px;
                    padding-bottom: 10px;
                }

                button{
                    background-color: #8EDBF2;

                    border: 2px solid white;
                    border-radius: 30px;

                    padding: 10px 20px;

                    font-size: 36px;
                    color: white;
                    font-weight: 600;
                    letter-spacing: .1em;

                    transition: all linear .5s;

                    text-transform: uppercase;
                }

                button:hover{
                    letter-spacing: .3em;
                }

                button:active{
                    color: #9F4300;
                    border-color: #9F4300;
                }
            `}</style>
        </>
    )
}
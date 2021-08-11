import { useState } from 'react'
import Head from 'next/head'
import Select from '../components/Select'
import Button from '../components/Button'
import PasswordInput from '../components/PasswordInput'


export default function Main(){

    const [selectValue , setSelectValue] = useState('1')

    const onSelectHandler = (e) => {
        setSelectValue(e.target.value)
    }

    return(
        <>  
            <Head>
                <title>Junior test!</title>
            </Head>
            
            <div className='container'>

                <h1 className="container_title">Generation of random password!</h1>

                <hr/>

                <Select
                    selectValue={selectValue} onSelectHandler={onSelectHandler}
                />

                <div className="container_checkbox" >
                    <input type="checkbox" id="withNumber" />
                    <label htmlFor='withNumber'>Add number to password ?</label>
                </div>

                <Button/>

                <PasswordInput/>

            </div>

            <style jsx>{`
                .container{
                    height: 100vh;
                    background-color: #8EDBF2;
                    padding-top: 8%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .container_title{
                    color: white;
                    letter-spacing: .2em;
                    font-size: 50px;
                }
                hr{
                    background-color: white;
                    min-width: 60%;
                    height: 1px;
                    border: none;
                    margin-top: 15px;
                }
            `}</style>
                
        </>
    )
}
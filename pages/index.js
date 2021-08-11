import { useState } from 'react'
import Head from 'next/head'
import Select from '../components/Select'
import Button from '../components/Button'
import PasswordInput from '../components/PasswordInput'
import classNames from 'classnames'


export default function Main(){

    const [selectValue , setSelectValue] = useState('1')
    const [checkValue , setCheckValue] = useState(false);

    const onSelectHandler = (e) => {
        setSelectValue(e.target.value)
    }

    const onCheckHandler = (e) => {
        setCheckValue(e.target.checked)
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
                    <input type="checkbox" id="withNumber" onChange={onCheckHandler}  className="container_checkbox_input" checked={checkValue}/>
                    <label htmlFor='withNumber' className={classNames({ 'active' : checkValue })}>Add number`s to password ?</label>
                </div>

                <Button/>

                <PasswordInput/>

            </div>

            <style jsx>{`

                .container{
                    height: 100vh;
                    background-color: #8EDBF2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .container_title{
                    color: white;
                    letter-spacing: .2em;
                    font-size: 50px;
                    padding-top: 250px;
                }
                hr{
                    background-color: white;
                    min-width: 60%;
                    height: 1px;
                    border: none;
                    margin-top: 15px;
                }   

                .container_checkbox_input{
                    width: .1px;
                    height: .1px;
                }

                label{
                    position: relative;

                    color: #9F4300;
                    font-size: 18px;
                    
                    letter-spacing: .05em;
                    font-weight: 600;

                    transition: all linear .6s;
                }

                input[type="checkbox"] + label:before {
                    content: '+';
                    position: absolute;

                    color: #8EDBF2;
                    font-weight: 700;
                    font-size: 24px;

                    border: 1px solid white;
                    border-radius: 20px;

                    padding-left: 5px;
                    padding-right: 5px;

                    left: -20%;
                    top: -5px;
                }
                input[type="checkbox"] + label.active:before {
                    content: '+';
                    background-color: white;
                    
                }
                input[type="checkbox"] + label:hover{
                    color: white;
                    letter-spacing: .2em;
                }
                
            `}</style>
                
        </>
    )
}
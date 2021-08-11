

export default function Select({ onSelectHandler , selectValue }){
    let arrayNumbers = []

    for(let i = 1 ; i <= 30 ; i++ ){
        arrayNumbers.push(i.toString())
    } 

    return(
        <>  
            <div className='container_select'>
                <p className='container_select_title'>Choose length of generated password : </p>
                 <select onChange={ onSelectHandler } value={selectValue}>
                    {arrayNumbers.map( item => <option value={item} key={item} onClick={() => console.log(item)} >{item}</option> )}
                </select>
            </div>
           

            <style jsx>{`
                .container_select{
                    min-width: 40%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 20px;
                    margin-bottom: 20px;
                }

                .container_select_title{
                    color: #9F4300;
                    font-size: 24px;
                    font-weight: 600;
                    letter-spacing: .05em;
                }

                select{
                    min-width: 300px;
                    outline: none;
                    background-color: #8EDBF2;
                    border: 1px solid white;
                    border-radius: 100px;
                    text-align: center;
                    appearance: none;

                    font-size: 18px;
                    color: white;

                    padding-left: 150px;
                }
            `}</style>
        </>
    )
}
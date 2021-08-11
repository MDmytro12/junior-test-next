

export default function Select({ onSelectHandler , selectValue }){
    let arrayNumbers = []

    for(let i = 1 ; i <= 30 ; i++ ){
        arrayNumbers.push(i.toString())
    } 

    return(
        <>
            <select onChange={ onSelectHandler } value={selectValue}>
                {arrayNumbers.map( item => <option value={item} key={item} onClick={() => console.log(item)} >{item}</option> )}
            </select>

            <style jsx>{`
                select{
                    min-width: 100px;
                    outline: none;
                    background-color: #8EDBF2;
                    border: 1px solid white;
                    border-radius: 100px;
                    text-align: center;
                    appearance: none;
                    font-size: 20px;
                }
            `}</style>
        </>
    )
}
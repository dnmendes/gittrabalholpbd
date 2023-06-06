import { useState } from "react";

function Media() {

    const [valor1, setValor1] = useState(null);
    const [valor2, setValor2] = useState(null);
    const [valor3, setValor3] = useState(null);
    const [resultado, setResultado] = useState(null);

    const calcular = () => {
        setResultado((Number(valor1)*4 /10) + (Number(valor2)*4 /10) + (Number(valor3)*2 /10));
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>CÁLCULO MÉDIA DAS NOTAS</h1>
            <div className="mb-3">
                <label htmlFor="inputValor1"
                    className="form-label">Avaliação 1</label>
                <input type="number" className="form-control"
                    id="inputValor1" placeholder="Informe a nota da 1ª avaliação" 
                    value={valor1}
                    onChange={ e => setValor1(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputValor2"
                    className="form-label">Avaliação 2</label>
                <input type="number" className="form-control"
                    id="inputValor2" placeholder="Informe a nota da 2ª avaliação"  
                    value={valor2}
                    onChange={ e => setValor2(e.target.value)}/>
            </div>  
            <div className="mb-3">
                <label htmlFor="inputValor3"
                    className="form-label">Atividades Práticas</label>
                <input type="number" className="form-control"
                    id="inputValor3" placeholder="Informe a nota das avaliações práticas"  
                    value={valor3}
                    onChange={ e => setValor3(e.target.value)}/>
            </div>  
            <div className="mb-3">
                <label htmlFor="resultado"
                    className="form-label">Média Final</label>
                <input type="number" className="form-control"
                    id="resultado" placeholder="Nota Final" 
                    value={resultado} readOnly/>
            </div> 
            <div className="mb-3">
                <button type="button" className="btn btn-primary" 
                onClick={calcular}>Calcular</button>    
            </div>                      
        </div>
    )
}

export default Media;
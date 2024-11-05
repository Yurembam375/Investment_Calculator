

export default function UserInput({useInput,onChange}) {
    

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>
                    Initial Investment
                </label>
                <input type="number" required value={useInput.initialInvestment} onChange={(event) => onChange(' initialInvestment', event.target.value)} />
            </p>
            <p>
                <label>
                    Anual Investment
                </label>
                <input type="number" required value={useInput.annualInvestment} onChange={(event) => onChange('annualInvestment', event.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>
                    Expected Return
                </label>
                <input type="number" required value={useInput.expextedReturn} onChange={(event) => onChange('expextedReturn', event.target.value)} />
            </p>
            <p>
                <label>
                    Duration
                </label>
                <input type="number" required value={useInput.duration} onChange={(event) => onChange('duration', event.target.value)} />
            </p>
        </div>

    </section>
}
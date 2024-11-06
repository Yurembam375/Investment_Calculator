export default function UserInput({ useInput, onChangehere }) {


    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>
                    Initial Investment
                </label>
                <input type="number" required value={useInput.initialInvestment} onChange={(event) => onChangehere(' initialInvestment', event.target.value)} />
            </p>
            <p>
                <label>
                    Anual Investment
                </label>
                <input type="number" required value={useInput.annualInvestment} onChange={(event) => onChangehere('annualInvestment', event.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>
                    Expected Return
                </label>
                <input type="number" required value={useInput.expextedReturn} onChange={(event) => onChangehere('expextedReturn', event.target.value)} />
            </p>
            <p>
                <label>
                    Duration
                </label>
                <input type="number" required value={useInput.duration} onChange={(event) => onChangehere('duration', event.target.value)} />
            </p>
        </div>

    </section>
}
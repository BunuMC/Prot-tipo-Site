function SavingsCalculator() {
    try {
        const [monthlyBill, setMonthlyBill] = React.useState('');
        const [savings, setSavings] = React.useState(null);

        const calculateSavings = () => {
            const monthlyAmount = parseFloat(monthlyBill);
            if (isNaN(monthlyAmount) || monthlyAmount <= 0) {
                alert('Please enter a valid monthly bill amount');
                return;
            }

            // Assumptions:
            // - Solar panels can offset 90% of electricity bill
            // - System lifespan of 25 years
            const monthlyPotentialSavings = monthlyAmount * 0.9;
            const annualSavings = monthlyPotentialSavings * 12;
            const totalSavings = annualSavings * 25;

            setSavings({
                monthly: monthlyPotentialSavings,
                annual: annualSavings,
                total: totalSavings
            });
        };

        return (
            <div className="calculator-section" data-name="savings-calculator">
                <h2 className="text-2xl font-bold mb-6">Calculadora de Economia Solar
                </h2>
                <div className="max-w-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="monthlyBill">
                            Sua conta mensal de eletricidade (R$)
                        </label>
                        <input
                            type="number"
                            id="monthlyBill"
                            value={monthlyBill}
                            onChange={(e) => setMonthlyBill(e.target.value)}
                            className="calculator-input"
                            placeholder="Insira o valor"
                            min="0"
                            data-name="calculator-input"
                        />
                    </div>
                    <button
                        onClick={calculateSavings}
                        className="btn-primary w-full"
                        data-name="calculate-button"
                    >
                        Calcular economia
                    </button>

                    {savings && (
                        <div className="savings-result" data-name="savings-result">
                            <h3 className="font-bold mb-4">Sua potencial economia:</h3>
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <p className="text-gray-600">Economia Mensal:</p>
                                    <span className="savings-amount">
                                        R${savings.monthly.toFixed(2)}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-gray-600">Economia Anual:</p>
                                    <span className="savings-amount">
                                        R${savings.annual.toFixed(2)}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-gray-600">Economia total em 25 anos:</p>
                                    <span className="savings-amount">
                                        R${savings.total.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                            <p className="mt-4 text-sm text-gray-500">
                                *Estimativas baseadas em compensação de energia de 90% e vida útil do sistema de 25 anos
                            </p>
                        </div>
                    )}
                </div>
            </div>
        );
    } catch (error) {
        console.error('SavingsCalculator component error:', error);
        reportError(error);
        return null;
    }
}

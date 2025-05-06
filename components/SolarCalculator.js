// components/SolarCalculator.js
function SolarCalculator() {
    const [monthlyBill, setMonthlyBill] = React.useState('');
    const [error, setError] = React.useState('');
    const [savings, setSavings] = React.useState(null);

    const handleCalculate = () => {
        if (!monthlyBill || isNaN(monthlyBill) || monthlyBill <= 0) {
            setError('Por favor, insira um valor válido');
            return;
        }
        setError('');
        calculateSavings(parseFloat(monthlyBill));
    };

    const calculateSavings = (monthlyAmount) => {
        // Usando a lógica mais completa de cálculo do arquivo calculations.js
        const CLOUDY_DAYS = 10; // Média de dias nublados por mês
        const DAYS_IN_MONTH = 30;
        const CLOUDY_EFFICIENCY = 0.3; // 30% de eficiência em dias nublados
        const SUNNY_EFFICIENCY = 0.95; // 95% de eficiência em dias ensolarados
        const SYSTEM_LIFESPAN = 25; // Anos de vida útil do sistema

        // Cálculo considerando condições ideais (sem dias nublados)
        const monthlyReductionIdeal = monthlyAmount * SUNNY_EFFICIENCY;
        const annualSavingsIdeal = monthlyReductionIdeal * 12;
        const lifetimeSavingsIdeal = annualSavingsIdeal * SYSTEM_LIFESPAN;

        // Cálculo realista considerando dias nublados
        const sunnyDays = DAYS_IN_MONTH - CLOUDY_DAYS;
        const dailyBill = monthlyAmount / DAYS_IN_MONTH;

        const sunnyDaysSavings = (dailyBill * sunnyDays * SUNNY_EFFICIENCY);
        const cloudyDaysSavings = (dailyBill * CLOUDY_DAYS * CLOUDY_EFFICIENCY);
        
        const monthlyReduction = sunnyDaysSavings + cloudyDaysSavings;
        const annualSavings = monthlyReduction * 12;
        const lifetimeSavings = annualSavings * SYSTEM_LIFESPAN;
        
        setSavings({
            monthly: monthlyReduction,
            annual: annualSavings,
            total: lifetimeSavings,
            monthlyIdeal: monthlyReductionIdeal,
            annualIdeal: annualSavingsIdeal,
            totalIdeal: lifetimeSavingsIdeal
        });
    };

    return (
        <div data-name="calculator-section" className="calculator-container py-12 bg-gradient-to-br from-blue-50 to-blue-100">
            <div data-name="calculator-container" className="container mx-auto px-4 max-w-2xl">
                <div data-name="calculator-form" className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Calculadora de Economia Solar
                    </h2>
                    
                    <div data-name="form-content" className="space-y-6">
                        <div data-name="input-group">
                            <label 
                                data-name="input-label"
                                htmlFor="monthlyBill" 
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Qual é o seu gasto mensal com energia elétrica? (R$)
                            </label>
                            <div data-name="input-wrapper" className="relative">
                                <span 
                                    data-name="currency-symbol"
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                >
                                    R$
                                </span>
                                <input
                                    data-name="bill-input"
                                    type="number"
                                    id="monthlyBill"
                                    value={monthlyBill}
                                    onChange={(e) => setMonthlyBill(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                                    placeholder="0.00"
                                    step="0.01"
                                    min="0"
                                />
                            </div>
                            {error && (
                                <p data-name="error-message" className="text-red-500 text-sm mt-2">{error}</p>
                            )}
                        </div>
                        
                        <button
                            data-name="calculate-button"
                            onClick={handleCalculate}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
                        >
                            Calcular Economia
                        </button>
                    </div>

                    {savings && (
                        <div data-name="savings-result" className="mt-8 pt-6 border-t border-gray-200">
                            <h3 className="font-bold text-xl text-gray-800 mb-4">Sua economia estimada:</h3>
                            
                            <div className="mb-6">
                                <div className="flex items-center mb-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                                    <p className="text-sm font-medium">Cenário Ideal (dias ensolarados)</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                                    <p className="text-sm font-medium">Cenário Real (considerando dias nublados)</p>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 gap-6">
                                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                                        <h4 className="font-medium text-gray-700">Economia Mensal</h4>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600">Cenário Ideal:</span>
                                            <span className="text-green-600 font-bold">
                                                R$ {savings.monthlyIdeal.toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Cenário Real:</span>
                                            <span className="text-blue-600 font-bold">
                                                R$ {savings.monthly.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                                        <h4 className="font-medium text-gray-700">Economia Anual</h4>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600">Cenário Ideal:</span>
                                            <span className="text-green-600 font-bold">
                                                R$ {savings.annualIdeal.toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Cenário Real:</span>
                                            <span className="text-blue-600 font-bold">
                                                R$ {savings.annual.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                                        <h4 className="font-medium text-gray-700">Economia em 25 anos</h4>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600">Cenário Ideal:</span>
                                            <span className="text-green-600 font-bold">
                                                R$ {savings.totalIdeal.toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Cenário Real:</span>
                                            <span className="text-blue-600 font-bold">
                                                R$ {savings.total.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="mt-6 text-sm text-gray-500">
                                *Estimativas baseadas em condições climáticas com média de 10 dias nublados por mês (30% de eficiência) 
                                e 20 dias ensolarados (95% de eficiência). Vida útil do sistema estimada em 25 anos.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
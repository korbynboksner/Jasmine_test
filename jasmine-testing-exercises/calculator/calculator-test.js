
  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 10000,
      years: 10,
      rate: 5.0
    };
    expect(calculateMonthlyPayment(values)).toEqual('106.07');
  });

  it('should return a result with 2 decimal places', function () {
    const values = {
      amount: 10000,
      years: 10,
      rate: 5.0
    };
    const monthlyPayment = calculateMonthlyPayment(values);
    const decimalPlaces = monthlyPayment.split('.')[1].length;
    expect(decimalPlaces).toEqual(2);
  });
function soma(a, b){
    return a + b;
}
test('teste de soma', () => {
    const result = soma(5, 4);

    expect(result).toBe(9);
})
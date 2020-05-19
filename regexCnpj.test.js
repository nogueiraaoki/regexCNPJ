const { identifyCnpj } = require("./regex");

describe("case regex cnpj", () => {
    test("deve identificar o regex completo", ()=> {
        const empresaCnpj = "Unimed Campinas - TESTE - 98.128.079/0001-35";
        const regex = identifyCnpj(empresaCnpj);
        expect(regex).toBeTruthy();
    });

    test("deve identificar o regex simplificado", ()=> {
        const empresaCnpj = "Unimed Campinas - 98.128.079/0001-35";
        const regex = identifyCnpj(empresaCnpj);
        expect(regex).toBeTruthy();
    });

    test("deve quebrar no  regex", ()=> {
        const empresaCnpj = "98.128.079/0001-35";
        const regex = identifyCnpj(empresaCnpj);
        expect(regex).toBeFalsy();
    });

    test("caso excepcional", ()=> {
        const empresaCnpj = "Produção médica - 0../-";
        const regex = identifyCnpj(empresaCnpj);
        expect(regex).toBeTruthy();
    });
})
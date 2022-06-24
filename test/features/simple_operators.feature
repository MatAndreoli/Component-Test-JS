# language: pt

@calc
Funcionalidade: Calculadora

    Contexto: 
        Dado que eu tenha uma calculadora
    
        @soma
        Cenário: Soma
            Quando eu chamo o método "soma" com "4" e "2"
            Então deve retornar "6"
        
        @sub
        Cenário: Subtração
            Quando eu chamo o método "subtracao" com "10" e "2"
            Então deve retornar "8"
        
        @mult
        Cenário: Multiplicação
            Quando eu chamo o método "multiplicacao" com "3" e "3"
            Então deve retornar "9"
        
        @div
        Cenário: Divisão
            Quando eu chamo o método "divisao" com "4" e "2"
            Então deve retornar "2"

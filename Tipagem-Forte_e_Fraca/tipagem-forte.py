TIPAGEM FORTE

Quando na linguagem os tipos estão bem definidos,
sendo necessário a alteração do programador para ser convertido a algum tipo de dado especifico,
como é o caso da linguagem python.

number_one = "5"
number_two = 5
print(number_one + number_two)
# Traceback (most recent call last):
#  File "<stdin>", line 1, in <module>
# TypeError: can only concatenate str (not "int") to str

Como os tipos são bem definidos e a soma entre string e inteiros não é permitida,
python lança o erro de que não pode fazer a concatenação desses dados,
pedindo que o programador explicite a conversão dos dados. Por exemplo.

number_one = "5"
number_two = 5
print(int(number_one) + number_two)
# 10

Depois da conversão intencional da variável pode ser feita a soma das variáveis sem erro.
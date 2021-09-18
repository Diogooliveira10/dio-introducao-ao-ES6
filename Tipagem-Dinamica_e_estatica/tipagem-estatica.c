A tipagem deve estar explicitado qual o tipo de dado para variável e não pode ser alterado, como no caso da linguagem c.

int velocity = 4;

Neste caso você não pode alterar o tipo da variável,
você pode criar uma nova variável com um novo tipo de dado e fazer casting para o novo tipo,
mas não fazer a variável velocity receber outro tipo de dado que não seja o dela.

int velocity = 4;
float newVelocity = (float) velocity;
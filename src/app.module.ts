import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuncionariosModule } from './funcionarios/funcionarios.module'; 
import { Funcionario } from './funcionarios/entities/funcionario.entity'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '210906', 
      database: 'desafio_viuzz_db',
      entities: [Funcionario], // 3. ADICIONE O MOLDE AQUI
      synchronize: true,
    }),
    FuncionariosModule, // 4. ADICIONE O MÓDULO DE FUNCIONÁRIOS AQUI
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
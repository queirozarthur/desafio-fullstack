import { Injectable, NotFoundException } from '@nestjs/common'; // 
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Funcionario } from './entities/funcionario.entity'; 
import { Repository } from 'typeorm'; 

@Injectable()
export class FuncionariosService {
  constructor(
    @InjectRepository(Funcionario)
    private funcionarioRepository: Repository<Funcionario>,
  ) {}

// 'CREATE' (CRIAR)
  create(createFuncionarioDto: CreateFuncionarioDto): Promise<Funcionario> {
    const funcionario = this.funcionarioRepository.create(createFuncionarioDto);
    return this.funcionarioRepository.save(funcionario);
  }

  //'READ' (LER TODOS)
  findAll(): Promise<Funcionario[]> {
    return this.funcionarioRepository.find();
  }

//'READ' (LER SÓ UM)
async findOne(id: number): Promise<Funcionario> {
  const funcionario = await this.funcionarioRepository.findOneBy({ id: id });

  if (!funcionario) {
    throw new NotFoundException(`Funcionário com o ID ${id} não encontrado`);
  }

  return funcionario;
}
  //'UPDATE' (ATUALIZAR)
  async update(id: number, updateFuncionarioDto: UpdateFuncionarioDto): Promise<Funcionario> {
    const funcionario = await this.funcionarioRepository.preload({
      id: id,
      ...updateFuncionarioDto,
    });
    if (!funcionario) {
      throw new Error('Funcionário não encontrado');
    }
    return this.funcionarioRepository.save(funcionario);
  }

//'DELETE' (DELETAR)
  async remove(id: number): Promise<void> {
    await this.funcionarioRepository.delete(id); 
  }
}
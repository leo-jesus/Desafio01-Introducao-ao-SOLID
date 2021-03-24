import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const emailAlreadyExists = this.usersRepository.findByEmail(email)

    if (emailAlreadyExists) {
      throw new Error("User already Exists");
    }
    return this.usersRepository.create({ email, name })
  }
}

export { CreateUserUseCase };

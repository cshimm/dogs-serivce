import { Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  private dogs = [];
  @Post()
  create() {
    const newDog = {
      id: this.dogs.length,
      name: 'dog',
    };
    this.dogs.push(newDog);
    return JSON.stringify(newDog);
  }
  @Get('all')
  findAll() {
    return JSON.stringify(this.dogs);
  }
  @Get('')
  findOne(@Query('id') id: string) {
    const dog = this.dogs[id];
    return JSON.stringify(dog);
  }
  @Put('')
  update(@Query('id') id: string) {
    this.dogs = this.dogs.map((dog) => {
      if (dog.id === Number(id)) {
        dog.name = dog.name + ' updated';
      }
      return dog;
    });
    return this.dogs[id];
  }
  @Delete('')
  remove(@Query('id') id: string) {
    const idNum = Number(id);
    const dogToRemove = this.dogs[idNum];
    this.dogs = this.dogs.filter((dog) => dog.id !== idNum);
    return `Successfully deleted ${JSON.stringify(dogToRemove)}`;
  }
}

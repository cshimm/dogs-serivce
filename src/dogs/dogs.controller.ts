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
    const idNum = Number(id);
    const dog = this.dogs[idNum];
    if (!dog) {
      return 'Invalid id';
    }
    return JSON.stringify(dog);
  }
  @Put('')
  update(@Query('id') id: string) {
    const idNum = Number(id);
    const dogToUpdate = this.dogs[idNum];
    if (!dogToUpdate) {
      return 'Invalid id';
    }
    this.dogs[idNum].name = dogToUpdate.name + ' updated';
    return JSON.stringify(this.dogs[idNum]);
  }
  @Delete('')
  remove(@Query('id') id: string) {
    const idNum = Number(id);
    const dogToRemove = this.dogs[idNum];
    if (!dogToRemove) {
      return 'Invalid id';
    }
    this.dogs.splice(idNum, 1);
    return `Successfully deleted ${JSON.stringify(dogToRemove)}`;
  }
}

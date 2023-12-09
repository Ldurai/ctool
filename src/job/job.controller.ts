import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    ParseIntPipe,
  } from '@nestjs/common';
  //import { CreateUserDto } from './dto/create-user.dto';
  import { Job } from './jobs.entity';
  import { JobsService } from './jobs.service';
  
  @Controller('jobs')
  export class JobsController{
    constructor(private readonly jobsService: JobsService ) {}
  
    // @Post()
    // create(@Body() createUserDto: CreateUserDto): Promise<User> {
    //   return this.usersService.create(createUserDto);
    // }
  
    @Get()
    findAll(): Promise<Job[]> {
        console.log('entering controller')
      return this.jobsService.findAll();
    }
  
    // @Get(':id')
    // findOne(@Param('id', ParseIntPipe) id: number): Promise<Job> {
    //   return this.usersService.findOne(id);
    // }
  
    // @Delete(':id')
    // remove(@Param('id') id: string): Promise<void> {
    //   return this.usersService.remove(id);
    // }
  }
  
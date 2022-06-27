import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './entities/student.schema';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Res() res, @Body() student: Student) {
    console.log('asdasda');
    const newStudent = await this.studentService.create(student);
    return res.status(HttpStatus.CREATED).json({
      newStudent,
    });
  }

  @Get()
  async findAll(@Res() res) {
    const student = await this.studentService.findAll();
    return res.status(HttpStatus.OK).json(student);
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const student = await this.studentService.findOne(id);
    return res.status(HttpStatus.OK).json({ student });
  }

  @Put(':id')
  async update(@Res() res, @Param('id') id: string, @Body() student: Student) {
    const updateStudent = await this.studentService.update(id, student);
    return res.status(HttpStatus.OK).json({ updateStudent });
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const removeStudent = await this.studentService.remove(id);
    return res.status(HttpStatus.OK).json({ removeStudent });
  }

  // @Get(':identification')
  // async findByIdentification(
  //   @Res() res,
  //   @Param('identification') identification: string,
  // ) {
  //   const student = await this.studentService.findByIdentification(
  //     identification,
  //   );
  //   return res.status(HttpStatus.OK).json({ student, msg: 'searh' });
  // }
}

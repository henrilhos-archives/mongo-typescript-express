import { Request, Response } from "express";
import * as mongoose from "mongoose";
import { StudentSchema } from "../models/student.model";

const Student = mongoose.model("Student", StudentSchema);

export class StudentController {
  public addNewStudent(req: Request, res: Response) {
    const newStudent = new Student(req.body);

    newStudent.save((err, student) => {
      if (err) {
        res.send(err);
      }
      res.json(student);
    });
  }

  public getStudents(req: Request, res: Response) {
    Student.find({}, (err, students) => {
      if (err) {
        res.send(err);
      }
      res.json(students);
    });
  }

  public getStudentWithId(req: Request, res: Response) {
    Student.findById(req.params.studentId, (err, student) => {
      if (err) {
        res.send(err);
      }
      res.json(student);
    });
  }

  public updateContact(req: Request, res: Response) {
    Student.findOneAndUpdate(
      { _id: req.params.studentId },
      req.body,
      { new: true },
      (err, student) => {
        if (err) {
          res.send(err);
        }
        res.json(student);
      },
    );
  }

  public deleteStudent(req: Request, res: Response) {
    Student.remove({ _id: req.params.studentId }, (err, student) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully deleted contact!" });
    });
  }
}

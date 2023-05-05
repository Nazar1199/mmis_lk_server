import { Router } from "express";
import CertificationRoutes from "./certification.routes";
import courseRoutes from "./course.routes";
import DisciplineRoutes from "./discipline.routes";
import FacultyRoutes from "./faculty.routes";
import GroupRoutes from "./group.routes";
import OrderingReferenceRoutes from "./orderingReference.routes";
import ProfileRoutes from "./profile.routes";
import ReferenceRoutes from "./reference.routes";
import StatusRoutes from "./status.routes";
import StudentRoutes from "./student.routes";
import TeacherRoutes from "./teacher.routes";
import TimetableRoutes from "./timetable.routes";
import AuditoriumRoutes from "./auditorium.routes";
import PositionRoutes from "./position.routes";

const routes = Router();

routes.use("/certification", CertificationRoutes);
routes.use("/course", courseRoutes);
routes.use("/discipline", DisciplineRoutes);
routes.use("/faculty", FacultyRoutes);
routes.use("/group", GroupRoutes);
routes.use("/orderingReference", OrderingReferenceRoutes);
routes.use("/profile", ProfileRoutes);
routes.use("/reference", ReferenceRoutes);
routes.use("/status", StatusRoutes);
routes.use("/student", StudentRoutes);
routes.use("/teacher", TeacherRoutes);
routes.use("/timetable", TimetableRoutes);
routes.use("/auditorium", AuditoriumRoutes);
routes.use("/position", PositionRoutes);

export default routes;
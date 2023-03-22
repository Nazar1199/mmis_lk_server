import { Router } from "express";
import cmptRoutes from "./competense.routes";
import dirprogrammRoutes from "./dirprogramm.routes";
import programmRoutes from "./programm.routes";
import progCmptRoutes from "./programmcmpt.routes";
import typecmptRoutes from "./typecmpt.routes";
import typegosRoutes from "./typegos.routes";
import userRoutes from "./user.routes";
import courseRoutes from "./course.routes";
import progCourseRoutes from "./programmcourse.routes";
import courseTypeRoutes from "./coursetype.routes";
import eduSpaseRoutes from "./eduspace.routes";
import typeEduSpaseRoutes from "./typeeduspace.routes";
import eduFormRoutes from "./eduform.routes";
import dirStudyWorkRoutes from "./dirstudywork.routes";
import newEduSpaceCmptRoutes from "./neweduspacecmpt.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/programm", programmRoutes);
routes.use("/dirprogramm", dirprogrammRoutes);
routes.use("/typegos", typegosRoutes);
routes.use("/typecmpt", typecmptRoutes);
routes.use("/cmpt", cmptRoutes);
routes.use("/programmcmpt", progCmptRoutes);
routes.use("/course", courseRoutes);
routes.use("/programmcourse", progCourseRoutes);
routes.use("/neweduspace", eduSpaseRoutes);
routes.use("/typeeduspace", typeEduSpaseRoutes);
routes.use("/eduform", eduFormRoutes);
routes.use("/dirstudywork",dirStudyWorkRoutes);
routes.use("/coursetype", courseTypeRoutes);
routes.use("/neweduspacecmpts", newEduSpaceCmptRoutes);

export default routes;
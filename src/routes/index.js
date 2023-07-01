import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>
  res.render("index", { title: "Servicios de Ciber Seguridad" })
);

router.get("/nosotros", (req, res) =>
  res.render("nosotros", { title: "Acerca de Nosotros" })
);


router.get("/servicios", (req, res) =>
  res.render("servicios", { title: "Nuestros Servicios" })
);

router.get("/contacto", (req, res) =>
  res.render("contacto", { title: "Contáctanos" })
);

export default router;

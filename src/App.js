import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import routes from "routes";
import StudentProfile from "pages/Behzod";
import behzod from './mrb.png'

export default function App() {
  const student = {
    name: 'Behzod Musurmonqulov',
    picture: behzod,
    birthDate: 'October 12, 2006',
    description:
      'Behzod Musurmonqulov is a bright and ambitious young individual with a strong inclination toward technology and software development. Behzod studied at the Presidential School in Jizzakh, a prestigious institution known for nurturing talented and motivated students. His time there undoubtedly honed his critical thinking and problem-solving abilities, laying the foundation for his later achievements.	1.	Dovuchcha Platform: Behzod is the creator of Dovuchcha, a software brand with several interconnected projects. Real Estate Website - JoyBor. Behzod exhibits a clear vision for his projects and a commitment to quality. His work on platforms like Dovuchcha and JoyBor reflects his desire to build tools that are not only functional but also user-friendly and visually appealing.In summary, Behzod is a highly motivated individual with a strong technical background, creative vision, and an eye for detail. He is undoubtedly a promising talent in the field of technology.',
    coursesEnrolled: 6,
    gpa: 5.0,
    awards: 4,
    telegram: "https://t.me/bsfrens",
    linkedin: "https://linkedin.com/in/behzodmusurmonqulov",
    instagram: "https://instagram.com/behzod_musurmonqulov",
    snapchat: "https://snapchat.com/add/behzod.d",
  };
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<Presentation />} />
        <Route path="/students/behzodm" element={<StudentProfile student={student} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}

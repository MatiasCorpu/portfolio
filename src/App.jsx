import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FloatingDock } from './components/ui/Floating-dock';

import Home from './pages/Home';
import Projects from './pages/Projects';
import University from './pages/University';
import CurriculumVitae from './pages/CurriculumVitae';

import {
  IconBrandGithub,
  IconClipboardText,
  IconSchool,
  IconHome,
  IconTerminal2,
  IconMail,
  IconMoon,
  IconSunLow,
} from "@tabler/icons-react";
import { desc, title } from 'framer-motion/client';

function App() {

  const theme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  let iconTheme = null;
  let iconThemeChange = null;
  if (theme() === 'dark') {
    iconTheme = <IconMoon className="h-full w-full text-zinc-300" />;
    iconThemeChange = <IconSunLow className="h-full w-full text-slate-400" />;
  } else {
    iconTheme = <IconSunLow className="h-full w-full text-slate-400" />;
    iconThemeChange = <IconMoon className="h-full w-full text-zinc-300" />;
  }

  const linksNavbar = [
    {
      id: "home",
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-slate-400 dark:text-zinc-300" />
      ),
      href: '/home',
      upgradable: true,
      ariaLabel: "Go to Home",
    },

    {
      id: "projects",
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-slate-400 dark:text-zinc-300" />
      ),
      href: "/projects",
      upgradable: true,
      ariaLabel: "Go to Projects",
    },

    {
      id: "university",
      title: "University",
      icon: (
        <IconSchool className="h-full w-full text-slate-400 dark:text-zinc-300" />
      ),
      href: "/university",
      upgradable: true,
      ariaLabel: "Go to University progress",
    },

    {
      id: "cv",
      title: "Curriculum Vitae",
      icon: (
        <IconClipboardText className="h-full w-full text-slate-400 dark:text-zinc-300" />
      ),
      href: "/cv",
      upgradable: true,
      ariaLabel: "Go to Curriculum Vitae",
    },
    //---------------------------------------
    {
      id: "github",
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-slate-400 dark:text-zinc-300" />
      ),
      href: "#",
      upgradable: false,
      ariaLabel: "Go to GitHub",
    },

    {
      id: "mail",
      title: "Mail",
      icon: (
        <IconMail className="h-full w-full text-slate-400 dark:text-zinc-300" />
      ),
      href: "#",
      upgradable: false,
      ariaLabel: "Send me an email",
    },

    {
      id: "toggle-theme",
      title: "Toggle Theme",
      icon: (
        iconTheme
      ),
      iconChange: iconThemeChange,
      href: "#",
      upgradable: false,
      ariaLabel: "Toggle Theme",
    },

  ];

  const programingLanguages = [
    {
      id: "c",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
      alt: "C"
    },
    {
      id: "sqlServer",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      alt: "SQL Server"
    },
    {
      id: "html",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      alt: "HTML"
    },
    {
      id: "css",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      alt: "CSS"
    },
    {
      id: "tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      alt: "Tailwind"
    },
    {
      id: "javascript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "JavaScript"
    },
    {
      id: "react",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      alt: "React"
    },
    {
      id: "python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      alt: "Python"
    },
    {
      id: "vscode",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      alt: "VSCode"
    },
    {
      id: "git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      alt: "Git"
    },
  ];

  const subjects = [
    {
      id: "3621",
      title: "Matemática Discreta",
      description: "Matemática Discreta (MD) es una asignatura básica para las ciencias de la computación y la informática. Trata de los procesos y fenómenos finitos. Es decir, estudia los objetos que pueden dividirse en partes “separadas” o “discontínuas”. Diferenciándose del cálculo que se centra en los procesos infinitos y fenómenos continuos. Sus variadas aplicaciones en, por ejemplo, el diseño de redes informáticas eficientes; en la asignación de frecuencias a los teléfonos celulares; en el seguimiento a problemas de contaminación; en la programación eficientemente de grandes proyectos; en la optimización de rutas; en la toma de decisiones; entre otras facilitan que los/as estudiantes entiendan la relevancia de la MD en el mundo real. Razón por la cual es fundamental brindar a los/as estudiantes los conocimientos y herramientas de la MD necesarios para un adecuado desempeño en el ámbito profesional ingenieril del siglo XXI.",
      href: "#",
      status: "aproved",
      type: "Ciencias Básicas",
      year: 1,
    },
    {
      id: "3622",
      title: "Análisis Matemático I",
      description: "La importancia de la Matemática en la evolución de la ciencia y de la tecnología está fundamentalmente relacionada con la posibilidad de elaborar modelos matemáticos de los objetos estudiados en las mismas. Es decir, describir mediante un lenguaje preciso las relaciones, propiedades y comportamiento de objetos reales. Como indica Hernández (1998, p.16) “la Matemática constituye un lenguaje cuyos conceptos y relaciones están definidos en un lenguaje de abstracción mucho más elevado que otras disciplinas, que permite su aplicación universal en los más diversos campos del conocimiento y la práctica”. La matemática es una herramienta y una materia formativa en la ingeniería. Como herramienta proporciona un medio de comunicación de la información, conciso y sin ambigüedad; permite el uso de la notación simbólica, lo que se traduce en optimizar diseños y recursos, en ayudar a realizar cálculos teóricos en vez de prácticos y con ello ahorrar tiempo para, por ejemplo, predecir comportamientos. Como materia formativa permite saber por qué se está usando tal o cual concepto matemático, desarrolla un orden lógico mental para la profesión, consuma la adquisición de un espíritu crítico y un criterio científico, fomenta el desarrollo de habilidades de pensamiento y de argumentación lógica y reflexiva. (Camarena, 2021). Entonces la impronta general que se le intenta dar a la asignatura basada en temas del cálculo diferencial en una variable es establecer la matemática no como meta por sí misma, sino que esté entrelazada con la profesión, situación que permite que el estudiante pueda aplicar el conocimiento de forma interdisciplinaria en su futura actividad laboral y profesional. Es así como se establece como objetivo general que el alumno adquiera un conjunto e conocimientos matemáticos propios del Cálculo (conceptos, definiciones, teoremas y técnicas) y desarrolle habilidades que le permitan planificar, evaluar, deducir, inducir, razonar, teniendo la capacidad de adaptarse a distintas situaciones y problemas, tal como lo hará una vez inserto en su vida laboral con otros temas. Estos objetivos de carácter cognitivo van acompañados de objetivos actitudinales como ser lograr la capacidad de trabajar responsablemente en forma independiente y grupal Se quiere proporcionar al estudiante la posibilidad de enfrentarse a situaciones que pongan a prueba su curiosidad, que lo inviten a desplegar sus facultades creativas para resolverlas por sí mismo, que pueda “hacer” en vez de “copiar”, dándole la oportunidad de “despertarles el gusto por un razonamiento independiente y proporcionarles ciertos recursos para ello” (Polya, 1998, p.5).",
      href: "#",
      status: "aproved",
      type: "Ciencias Básicas",
      year: 1,
    },
    {
      id: "3623",
      title: "Programación Inicial",
      description: "La asignatura Elementos de Programación forma parte del primer del grupo de Tecnologías Básicas, está planteada dentro del plan general de estudios como una materia básica. Tiene un objetivo general que es el de introducir al alumno en el difícil arte de la programación, lo cual significa aprender a resolver problemas, planteando situaciones originales, utilizando las habilidades y ventajas de un computador. El mismo se desarrolla a través de tres subobjetivos básicos perfectamente diferenciados y complementarios entre sí para el logro del objetivo. a) Aprender a interpretar, entender y encontrar los algoritmos necesarios para resolver los problemas propuestos, en distintos enunciados debidamente preparados para que el alumno, razone y adquiera nuevos hábitos de investigación para obtener los resultados correctos. b) Aprender a desarrollar lógicamente los procesos interpretados como correctos para resolución de problemas, con medios gráficos, como diagramas lógicos que permitan mostrar visualmente la solución a los problemas planteados. Verificar la lógica diseñada con lotes de prueba, asegurando el correcto funcionamiento de los problemas que pueden ser ejecutados a posteriori en un computador digital. c) Aprender a codificar, utilizando un adecuado lenguaje de programación como es el C, los problemas lógicamente desarrollados. Es este un lenguaje de aplicación en diversas áreas de la ingeniería. Cumplidos estos subobjetivos, podemos afirmar que aquellos alumnos que lo aprueben estarán en condiciones de poder confeccionar un programa del tipo o similar al que pueda controlar la gestión administrativa por ejemplo la de un videoclub, un almacén, un depósito, etc., no será el óptimo, por la limitación de los recursos con que disponemos en esta etapa de la carrera, pero puede funcionar muy bien. Poseerá además una adecuada base para la comprensión de las nuevas tecnologías existentes en el mundo de la programación. Merece destacarse como otro objetivo adicional, durante el desarrollo de la materia, la búsqueda de la integración de la teoría con la práctica. El alumno será inducido a la búsqueda bibliográfica, aprender a trabajar en equipo y saber documentar lo realizado.",
      href: "#",
      status: "aproved",
      type: "Programación",
      year: 1,
    },
    {
      id: "3624",
      title: "Introducción a la Ingeniería en Informática",
      description: "La asignatura Introducción a los Sistemas de Información se plantea como la primera materia del trayecto de Desarrollo de Software, su objeto de estudio son los sistemas de información, en particular, los sistemas informatizados. Durante el desarrollo de la cursada se pondrán en juego distintas actividades, algunas de ellas centradas en el alumno, que posibilitarán adquirir las competencias necesarias y suficientes para: • Aplicar el enfoque sistémico a los sistemas en estudio y clasificarlos. • Identificar el ciclo de vida de desarrollo de software que mejor de adecue a dichos sistemas. • Trabajar en equipo caracterizando los distintos roles involucrados en el desarrollo de software.",
      href: "#",
      status: "aproved",
      type: "Desarrollo de SW",
      year: 1,
    },
    {
      id: "3625",
      title: "Sistemas de Numeración",
      description: "La asignatura Sistemas de Numeración, está planteada como una materia básica que espera dotar al alumno de las competencias y conocimientos que le permitan comprender y utilizar los conceptos básicos de los sistemas de numeración y códigos de aplicación en las Tecnologías de la Información y la Comunicación (TIC), las operaciones básicas, la forma de almacenamiento, y sus formatos de representación, distintas formas de codificar dígitos numéricos y alfanuméricos y operaciones con códigos que le permitan comprender su utilización en la digitalización dentro de las TIC actuales permitiéndole acceder al conocimiento, utilización y desarrollo de nuevas tecnologías futuras utilizadas en actividades del ámbito ingenieril, incorporando las competencias y las tecnologías requeridas por la Industria 4.0, que es el entorno donde va a desarrollar su actividad profesional.",
      href: "#",
      status: "aproved",
      type: "Infraestructura",
      year: 1,
    },
    {
      id: "3626",
      title: "Principios de Calidad de Software",
      description: "Enseñar a los estudiantes los conceptos y herramientas característicos de la “gestión de la calidad”, para que éstos se constituyan en el soporte adecuado del análisis y la resolución de los problemas que se les presenten. Transmitirles a los estudiantes los beneficios de contar con un modelo de calidad del software basado en normas internacionales de calidad. Concientizar respecto de los beneficios de “prevenir los problemas” que surgen en todo proyecto informático, utilizando una metodología adecuada.",
      href: "#",
      status: "aproved",
      type: "Calidad y Seguridad de la Información",
      year: 1,
    },
    {
      id: "3627",
      title: "Álgebra y Geometría Analítica I",
      description: "La asignatura Álgebra I constituye el tramo inicial del estudio del Álgebra Lineal, que se requiere hoy en día para el tratamiento y resolución de problemas en diversos campos. El Álgebra Lineal permite combinar la teorización y abstracción con la aplicación, ya que con sus fundamentos teóricos es posible desarrollar la habilidad de razonar matemáticamente y transferir esos conocimientos y habilidades en diversas aplicaciones. El estudio del Álgebra y Geometría Analítica ayuda al desarrollo de ciertas habilidades fundamentales para un ingeniero: capacidad de organizar coherentemente la información, de representar en forma adecuada algunos conceptos, capacidad de formalizar, de razonar rigurosamente, de modelar los problemas desde distintas perspectivas. Esta rama inicial del Álgebra concierne al estudio de vectores en el plano y en el espacio, matrices, clasificación y operaciones y sistemas de ecuaciones lineales y sus aplicaciones en la vida cotidiana, en las ciencias naturales y sociales y en la ingeniería, que son numerosas, ya que la solución de muchos problemas de la física, ingeniería, química, biomédica, gráficas computarizadas, procesamiento de imágenes requiere de las herramientas o métodos proporcionados por esta rama del conocimiento.",
      href: "#",
      status: "aproved",
      type: "Ciencias Básicas",
      year: 1,
    },
    {
      id: "3628",
      title: "Física I",
      description: "La Universidad debe formar ingenieros con capacidad creadora, actitud crítica y disposición a la actualización permanente, así como con una destacada formación teórica y experimental. Una sólida formación en las ciencias básicas asegurará que el futuro ingeniero se adapte a la diversidad de situaciones que se presenten en su desempeño profesional. Ante el acelerado avance de la tecnología y los consecuentes requerimientos de un cada vez más alto grado de especialización, el dominio de los contenidos básicos es un recurso indispensable para interpretar y utilizar los conocimientos tecnológicos, asumir los cambios y participar en la creación de nuevos conocimientos. En este contexto, la física, como ciencia fundamental de la naturaleza, tiene profunda influencia en todas las otras disciplinas. Por tal razón, el estudiante de ingeniería debe tener una completa comprensión de sus ideas principales. Bajo este ámbito, esta cátedra privilegia la investigación estimulando el interés de los alumnos para que se desarrollen en este sentido a lo largo de su vida profesional.",
      href: "#",
      status: "aproved",
      type: "Ciencias Básicas",
      year: 1,
    },
    {
      id: "3629",
      title: "Programación Estructurada Básica",
      description: "La asignatura Elementos de Programación forma parte del primer del grupo de Tecnologías Básicas, está planteada dentro del plan general de estudios como una materia básica. Tiene un objetivo general que es el de ejercitar al alumno en el difícil arte de la programación, lo cual significa aprender a resolver problemas, planteando situaciones originales, utilizando las habilidades y ventajas de un computador. El mismo se desarrolla al igual que su primera parte través de tres subobjetivos básicos perfectamente diferenciados y complementarios entre sí para el logro del objetivo. Continuar a través de la ejercitación a interpretar, entender y encontrar los algoritmos necesarios para resolver los problemas propuestos, en distintos enunciados debidamente preparados para que el alumno, razone y adquiera nuevos hábitos de investigación para obtener los resultados correctos. a) Aprender a desarrollar lógicamente los procesos interpretados como correctos para resolución de problemas, con la codificación en leguaje C, que permitan mostrar visualmente la solución a los problemas planteados. Verificar la lógica diseñada con lotes de prueba, asegurando el correcto funcionamiento de los problemas que pueden ser ejecutados a posteriori en un computador digital, almacenar y visualizar los datos en diferentes formatos. b) Aprender a codificar, utilizando un adecuado lenguaje de programación como es el C, los problemas lógicamente desarrollados. Es este un lenguaje de aplicación en diversas áreas de la ingeniería. Cumplidos estos subobjetivos, podemos afirmar que aquellos alumnos que lo aprueben estarán en condiciones de poder confeccionar un programa del tipo o similar al que pueda controlar la gestión administrativa por ejemplo la de un videoclub, un almacén, un depósito, etc., Poseerá además una adecuada base para la comprensión de las nuevas tecnologías existentes en el mundo de la programación. Los conocimientos adquiridos serán afianzados y complementados con las otras dos materias de Programación a realizar en los años siguientes, los cuales introducirán a los alumnos en la Programación Orientada a los Objetos y en la programación Tipo Visual.",
      href: "#",
      status: "aproved",
      type: "Programación",
      year: 1,
    },
    {
      id: "3630",
      title: "Introducción a la Gestión de Requisitos",
      description: "La asignatura se orienta a brindar al alumnado, un marco de referencia para el proceso de desarrollo de software, introduciéndolo en los principios de la Ingeniería de Software con centralidad en el cuerpo de conocimiento de la Ingeniería de Requisitos. Busca que los alumnos conozcan y desarrollen habilidades y competencias acerca de los procesos, actores, estrategias, metodologías y herramientas para la adquisición y gestión del conocimiento acerca de un sistema en desarrollo o estudio, como así también la especificación completa, la caracterización formal y el modelado esencial de los requisitos identificados para el mismo.",
      href: "#",
      status: "aproved",
      type: "Desarrollo de SW",
      year: 1,
    },
    {
      id: "3631",
      title: "Fundamentos de los sistemas embebidos",
      description: 'La asignatura "Fundamentos de los Sistemas Embebidos", está organizada como una materia básica en lo que hace al análisis y estudio del hardware de computadoras, en la que se estudia, desde los bloques funcionales que configuran su estructura hasta el nivel básico de los elementos que a su vez conforman dichos bloques. El alumno que curse la asignatura "Fundamentos de los Sistemas Embebidos" deberá poseer, al momento de su iniciar la cursada de la asignatura, los conocimientos básicos referidos a los elementos fundamentales de: Sistemas de numeración, representación de información dentro de las computadoras y el manejo de información binaria en sus distintas formas. Estos conocimientos, adquiridos en las materias correlativas previas, permitirán el avance hacia las aplicaciones directas de los mismos, lo que, a su vez, permitirá que el alumno tenga, una vez completado el cursado de la misma, un panorama general sobre las estructuras de hardware. Como esta materia posee una carga práctica importante sobre sistemas embebidos, el alumno se familiarizará con la interconexión de estos dispositivos a las distintas interfaces y deberá lograr desarrollar una aplicación que permita realizar transacciones con un server MQTT de IoT.',
      href: "#",
      status: "aproved",
      type: "Infraestructura",
      year: 1,
    },
    {
      id: "3632",
      title: "Introcucción a los proyectos Informáticos",
      description: "Introducción a los Proyectos Informáticos es un curso diseñado para proporcionar a los estudiantes una comprensión básica de los principios y conceptos fundamentales de la administración de proyectos informáticos. El curso se centra en los procesos y herramientas utilizadas para establecer y gestionar proyectos exitosos. Los temas abordados incluyen los conceptos básicos de planificación de proyectos, el rol del administrador en la gestión de proyectos, la gestión de recursos, la administración de tareas, la medición del rendimiento y el control de cambios. El curso también se centra en la importancia de la colaboración en la gestión de proyectos y las mejores prácticas recomendadas para el éxito.",
      href: "#",
      status: "aproved",
      type: "Gestión y Complementarias",
      year: 1,
    },
    {
      id: "3633",
      title: "Análisis Matemático II",
      description: "La importancia de la Matemática en la evolución de la ciencia y de la tecnología está fundamentalmente relacionada con la posibilidad de elaborar modelos matemáticos de los objetos estudiados en las mismas. Es decir, describir mediante un lenguaje preciso las relaciones, propiedades y comportamiento de objetos reales. Como indica Hernández (1998, p.16) “la Matemática constituye un lenguaje cuyos conceptos y relaciones están definidos en un lenguaje de abstracción mucho más elevado que otras disciplinas, que permite su aplicación universal en los más diversos campos del conocimiento y la práctica”. La matemática es una herramienta y una materia formativa en la ingeniería. Como herramienta proporciona un medio de comunicación de la información, conciso y sin ambigüedad; permite el uso de la notación simbólica, lo que se traduce en optimizar diseños y recursos, en ayudar a realizar cálculos teóricos en vez de prácticos y con ello ahorrar tiempo para, por ejemplo, predecir comportamientos. Como materia formativa permite saber por qué se está usando tal o cual concepto matemático, desarrolla un orden lógico mental para la profesión, consuma la adquisición de un espíritu crítico y un criterio científico, fomenta el desarrollo de habilidades de pensamiento y de argumentación lógica y reflexiva. (Camarena, 2021). Entonces la impronta general que se le intenta dar a la asignatura basada en temas del cálculo diferencial e integral en una variable es establecer la matemática no como meta por sí misma, sino que esté entrelazada con la profesión, situación que permite que el estudiante pueda aplicar el conocimiento de forma interdisciplinaria en su futura actividad laboral y profesional. Es así como se establece como objetivo general que el alumno adquiera un conjunto de conocimientos matemáticos propios del Cálculo (conceptos, definiciones, teoremas y técnicas) y desarrolle habilidades que le permitan planificar, evaluar, deducir, inducir, razonar, teniendo la capacidad de adaptarse a distintas situaciones y problemas, tal como lo hará una vez inserto en su vida laboral con otros temas. Estos objetivos de carácter cognitivo van acompañados de objetivos actitudinales como ser lograr la capacidad de trabajar responsablemente en forma independiente y grupal. Se quiere proporcionar al estudiante la posibilidad de enfrentarse a situaciones que pongan a prueba su curiosidad, que lo inviten a desplegar sus facultades creativas para resolverlas por sí mismo, que pueda “hacer” en vez de “copiar”, dándole la oportunidad de “despertarles el gusto por un razonamiento independiente y proporcionarles ciertos recursos para ello” (Polya, 1998, p.5).",
      href: "#",
      status: "aproved",
      type: "Ciencias Básicas",
      year: 2,
    },
    {
      id: "3634",
      title: "Física II",
      description: "Esta asignatura aborda la rama de la Física que estudia los conceptos básicos de la electricidad y el magnetismo. Su aporte fundamental es facilitar la comprensión, desde el punto de vista físico, de algunos temas de interés tales como la tecnología de circuitos digitales, el funcionamiento de dispositivos periféricos y la introducción a los medios físicos usados en la transmisión de datos.",
      href: "#",
      status: "aproved",
      type: "Ciencias Básicas",
      year: 2,
    },
    {
      id: "3635",
      title: "Tópicos de programación",
      description: "La asignatura “Tópicos de programación”, refuerza los conocimientos adquiridos en asignaturas previas introduciendo a la programación imperativa estructurada soluciones alternativas mediante recursividad. Además presenta el concepto de reusabilidad, a través del diseño de algoritmos independientes del tipo de dato y de una acción particular de forma de crear soluciones realistas. Se presentan estrategias de diseño de algoritmos para mejorar soluciones ineficientes y diferentes implementaciones para un problema en particular, trabajando sobre tipos de datos simples, compuestos, estáticos y dinámicos.",
      href: "#",
      status: "aproved",
      type: "Programación",
      year: 2,
    },
    {
      id: "3636",
      title: "Base de Datos",
      description: "La asignatura Base de Datos, es una materia que prepara al alumno para participar en proyectos donde se necesite llevar a cabo la abstracción de un modelo de datos de un sistema, permitiendo modelizar los nuevos requerimientos con un diseño óptimo que será luego plasmado en un motor de base de datos relacional para su gestión según las necesidades de información que requiera el sistema.",
      href: "#",
      status: "aproved",
      type: "Programación",
      year: 2,
    },
    {
      id: "3637",
      title: "Análisis de Sistemas",
      description: "La asignatura Análisis de Sistemas como una materia básica y troncal de la carrera pretende en el marco de la formación del futuro profesional dotarle, de las capacidades y competencias inherentes al proceso de ingeniería del software que le permitan en su desempeño determinar claramente las funcionalidades y condiciones que debe reunir un sistema a través del análisis construyendo distintos modelos tratando de encontrar la solución a los requerimientos de los stakeholders mediante una metodología seleccionada acorde a la problemática a tratar.",
      href: "#",
      status: "aproved",
      type: "Desarrollo de SW",
      year: 2,
    },
    {
      id: "3638",
      title: "Arquitectura de Computadoras",
      description: "La asignatura Arquitecura de Computadoras, está planteada como una materia básica en lo que hace al análisis y estudio del hardware de computadoras, en la que se estudia, desde los bloques funcionales que configuran su estructura hasta el nivel básico de los elementos que a su vez conforman dichos bloques. En este sentido, el alumno cursante de la materia Arquitectura de Computadoras deberá poseer, al momento de su ingreso a la materia, los conocimientos básicos referidos a los elementos fundamentales en la configuración de computadoras como lo son la representación de información dentro de las mismas y el manejo de información binaria en sus distintas formas, así como los conceptos básicos del álgebra booleana y los circuitos lógicos. Estos conocimientos, adquiridos en las materias correlativas previas, permitirán el avance hacia las aplicaciones directas de los mismos, lo que, a su vez, permitirá que el alumno tenga, una vez completado el cursado de la misma, un panorama general sobre las estructuras de hardware.",
      href: "#",
      status: "aproved",
      type: "Infraestructura",
      year: 2,
    },
    {
      id: "3639",
      title: "Análisis Matemático III",
      description: "La asignatura Análisis Matemático II por estar dentro del ciclo de conocimientos básicos aporta a la formación profesional del estudiante las herramientas de cálculo multivariable como límite y continuidad, función lineal aproximante, propiedades de las derivadas parciales y el gradiente, optimización de funciones con o sin restricciones, resolución de ecuaciones diferenciales ordinarias y una introducción a las integrales dobles.",
      href: "#",
      status: "aproved",
      type: "Ciencias Básicas",
      year: 2,
    },
    {
      id: "3640",
      title: "Algoritmos y Estructuras de Datos",
      description: "Esta asignatura introduce al estudiante en la implementación y desarrollo de Tipos de Datos Abstractos (TDAs). Presenta las estructuras de datos lineales (pilas, colas, listas) y arborescentes (árboles binarios); se profundiza en el diseño iterativo y en el diseño recursivo, tanto en el razonamiento sobre la corrección de un diseño dado como en la detección y mejora de soluciones ineficientes. Se presentan diversas implementaciones de estructuras de datos lineales y arborescentes. Se realizan implementaciones realistas de las mismas, usando primitivas independientes del tipo de dato, tanto estos sean tipos de datos simples como recursivos, para versiones estáticas como dinámicas. Se trabaja de forma tal que el estudiante comprenda su representación en memoria.",
      href: "#",
      status: "aproved",
      type: "Programación",
      year: 2,
    },
    {
      id: "3641",
      title: "Bases de datos aplicada",
      description: "La asignatura Bases de Datos Aplicadas se enfoca en la implementación de las bases de datos. El alumno aprenderá el funcionamiento de los motores de bases de datos y su rol clave en los sistemas informáticos modernos. Podrá interactuar con el sistema de base de datos de una forma inteligente que le permitirá aprovechar cabalmente los recursos del sistema subyacente, incluso optimizando su funcionamiento. Recibirá capacitación para la securización de los sistemas a partir de reducir la superficie de ataque mediante la aplicación del principio del mínimo privilegio, la implementación de roles y permisos de acceso granulares. Será capaz de mejorar la disponibilidad de los sistemas mediante técnicas de réplica y respaldos, además de comprender cómo recuperar información frente a catástrofes. Podrá discernir el entorno de aplicación de las bases de datos relacionales y las no relacionales y contará con capacitación para emplearlas. Será capaz de gestionar datos a gran escala, realizando inserciones, consultas y actualizaciones tanto en sistemas relacionales como no-relacionales.",
      href: "#",
      status: "aproved",
      type: "Programación",
      year: 2,
    },
    {
      id: "3642",
      title: "Principios de Diseño de Sistemas",
      description: "El diseño de sistemas es una actividad técnica que se realiza en el contexto del ciclo de vida del desarrollo de sistemas. En ella se define cómo resolver los requerimientos del usuario sin perder de vista aquellos factores externos técnicos, humanos, legales, entre otros. Involucra la toma de decisiones para encontrar componentes (sean humanos de hardware o de software), y cada uno de tales componentes tiene una responsabilidad y se relaciona con los demás para conducir al objetivo final del sistema. La asignatura abarca desde el proceso de diseño de sistemas, los artefactos que permiten documentar el diseño según distintos paradigmas, y la aplicación de heurísticas que guían un diseño de calidad. El contenido se ha planteado a modo introductorio y general, sentando las bases necesarias para profundizar en el detalle y expandir los conocimientos en las asignaturas que se cursarán posteriormente en el trayecto, a saber, Diseño de Software y Arquitectura de Software.",
      href: "#",
      status: "aproved",
      type: "Desarrollo de SW",
      year: 2,
    },
    {
      id: "3643",
      title: " Redes de Computadoras",
      description: "La asignatura Redes de computadoras se enmarca en el estudio de las redes de datos siguiendo el paradigma del modelo OSI y del modelo TCP/IP. Se pone el foco en los aspectos de switching, del direccionamiento IP y las aplicaciones y su vinculación a través de los puertos de comunicaciones dados por la capa de transporte, poniendo énfasis en servicios tales como http, https, ftp, ssh, etc.",
      href: "#",
      status: "aproved",
      type: "Infraestructura",
      year: 2,
    },
    {
      id: "3644",
      title: "Gestión de las organizaciones",
      description: "La asignatura proporciona al alumno las competencias básicas para comprender el universo organizacional, en especial las empresariales, detallando las características de una organización, la importancia de la definición de una estructura organizativa. Los tipos de organizaciones más comunes y cómo son las metodologías más usuales para la planificación, ejecución, control, seguimiento y mejora de estas. También ofrece al alumno formación, teórica y práctica en competencias blandas necesarias para el trabajo en equipo y la dirección de RRHH, elementos que se constituyen en la piedra angular de todo proyecto de desarrollo software. Estos contenidos y adquisición de competencias se realizarán dentro del marco de la Ingeniería de Software y la Dirección o Gestión de proyectos, brindándole conocimiento y ejercicio de liderazgo, comunicación, gestión de conflictos y negociación entre otras. Los aspectos de comunicación en las organizaciones son de vital importancia por lo que estos temas también serán abordados. Aspectos legales contractuales, adquisiciones, registros de marcas y propiedad intelectual; como así también principios de ética profesional.",
      href: "#",
      status: "aproved",
      type: "Gestión y Complementarias",
      year: 2,
    },
    {
      id: "3645",
      title: "Álgebra y Geometría Analítica II",
      description: "La asignatura Álgebra II constituye el tramo central del estudio del Álgebra Lineal. Esta rama de la Matemática, mediante el estudio de estructuras algebraicas específicas, aporta una visión unificadora de teorías y procedimientos que se aplican a diversos campos de las ciencias y la ingeniería. El curso brinda al estudiante herramientas para la comprensión de las estructuras algebraicas, en particular los espacios vectoriales, las transformaciones lineales, la diagonalización de matrices y los espacios con producto interno. Todos estos temas tienen injerencia en temas propios de la informática como la teoría de códigos, el análisis de errores, aproximación de datos. Se pretende capacitar al estudiante para que establezca relaciones entre teoría, procedimiento y aplicaciones a su campo de conocimiento. En el enfoque de dictado de la materia se intentará relacionar las nociones del Álgebra Lineal de cada módulo con nociones fundamentales de la informática como: algoritmo, codificación, recursividad y aproximación. Dado que la asignatura se desarrolla en tan sólo 4 horas reloj y los asuntos a tratar tienen cierta complejidad teórica, se espera brindar espacios de consulta y materiales autocontenidos de estudio. Se fomentará la actitud activa para lograr conocimientos significativos, y herramientas de estudio que le sirvan para formarse y fortalecerse como estudiante universitario.",
      href: "#",
      status: "aproved",
      type: "Ciencias Básicas",
      year: 3,
    },
    {
      id: "3646",
      title: "Paradigmas de Programación",
      description: "En esta asignatura se estudian los paradigmas de programación más representativos de las diferentes formas de modelar un programa informático. El objetivo principal de esta asignatura es proporcionar una visión general de los distintos paradigmas (imperativo, funcional, lógico) de forma que el estudiante sea capaz de elegir el modelo adecuado para resolver cada problema. Se profundiza en la programación orientada a objetos. Prepara al estudiante en el Desarrollo Dirigido por las Pruebas. Se introduce el concepto de patrones de diseño.",
      href: "#",
      status: "aproved",
      type: "Programación",
      year: 3,
    },
    {
      id: "3647",
      title: "Requisitos Avanzados",
      description: "El rol del curso 'Ingeniería de Requerimientos' es el de crear en los futuros profesionales las habilidades necesarias para desenvolverse adecuadamente en las problemáticas relacionadas con los aspectos socio organizacionales que rodean los sistemas de software. En ese sentido se estudian enfoques, heurísticas, procesos y técnicas de elicitación y modelado del contexto en el que el sistema de software se desenvolverá. Estos enfoques incursionan en la planificación del proceso del negocio posterior a la instalación del sistema de software, llegando incluso a proponer alteraciones a ese proceso con el fin de avanzar en la definición de un sistema de software que se integre lo más provechosa y naturalmente posible con la cultura organizacional y con los objetivos definidos para el sistema a ser desarrollado.",
      href: "#",
      status: "aproved",
      type: "Desarrollo de SW",
      year: 3,
    },
    {
      id: "3648",
      title: "Diseño de Software",
      description: "El Diseño de Software, visto como un proceso, es la actividad del ciclo del desarrollo de software en la que se define la estructura interna que tendrá el mismo, la que luego servirá de base para su construcción. El principal aporte de esta asignatura para la formación profesional de los estudiantes tiene que ver con brindarle los saberes básicos que les permitan aplicar metodologías sistemáticas, diversas técnicas, y buenas prácticas del diseño, a fin de describir y especificar en detalle todos los aspectos del software a construir. Todo lo anterior sin descuidar la evaluación continua de la calidad de los artefactos producidos mediante la aplicación de principios fundamentales de diseño.",
      href: "#",
      status: "aproved",
      type: "Desarrollo de SW",
      year: 3,
    },
    {
      id: "3649",
      title: "Sistemas Operativos",
      description: "La materia tiene como objetivo brindar los conocimientos básicos de las problemáticas que deben tratar y solucionar los sistemas operativos para permitir la optimización de los recursos que poseen los sistemas computacionales y facilitarle de esta manera las tareas a los usuarios.",
      href: "#",
      status: "aproved",
      type: "Infraestructura",
      year: 3,
    },
    {
      id: "3650",
      title: "Seguridad de la Información",
      description: "La materia está orientada a que el alumno pueda comenzar a desarrollar sus capacidades en los diferentes dominios de la Seguridad de la Información y la Ciberseguridad, brindando un amplio abanico de conocimientos teóricos y prácticos. Se enfoca en que el alumno pueda comprender las diversas estándares, metodologías y funcionalidades para enfrentar las necesidades de las organizaciones en materia de seguridad de la información, alineados con las mejores prácticas del mercado y posibilitando implementar sistemas de gestión de seguridad de la información alineados con el contexto de riesgo de la organización y articulados para protegerse de riesgos emergentes. La gran cantidad de infraestructura y servicios interconectados, cada vez más distribuidas, plantea un importante desafío de como garantizar la seguridad de la información, siendo la información uno de los activos más importantes que poseen las organizaciones. En este contexto es primordial que los alumnos comprendan la importancia de prevenir y evitar los ataques informáticos y de la definición y puesta en marcha de planes de protección de todos los activos informáticos y sus correspondientes datos.",
      href: "#",
      status: "aproved",
      type: "Calidad y Seguridad de la Información",
      year: 3,
    },
    {
      id: "3651",
      title: "Probabilidad y Estadística",
      description: "Probabilidad y Estadística es una materia básica del plan de estudios en el área de las ingenierías. Si bien encuentra sus fundamentos en la matemática, al incorporar la idea de azar, introduce a los alumnos en una forma singular de pensamiento y les proporciona métodos de enorme aplicabilidad. El uso de modelos probabilísticos y estadísticos para analizar datos se ha convertido en una práctica común en virtualmente todas las disciplinas científicas. Estos datos provienen de considerar procesos y sistemas que exhiben variabilidad. No hay sistema que prácticamente no pueda ser pensado desde un modelo atravesado por la variabilidad. Al modelar un proceso, se enuncian las variables que lo describen y se conectan con ciertas relaciones causales. Construido el modelo, es posible simularlo con una computadora para verificar si se puede confirmar el comportamiento del proceso real. A menudo, estas predicciones no son satisfactorias, de manera que hay que volver sobre el modelo, revisarlo y ver si con las modificaciones realizadas mejoran las predicciones. En este contexto no se conocen valores exactos de las variables, sino que habrá una “distribución” de ellos, por lo que aparecen los problemas de organización, de la descripción, de la estimación y de la decisión. Esta materia conjuga armónicamente los aspectos formativo e instrumental. Es formativa por cuanto desarrolla una forma especial de pensamiento, es instrumental en cuanto proporciona herramientas de trabajo al futuro profesional.",
      href: "#",
      status: "aproved",
      type: "Ciencias Básicas",
      year: 3,
    },
    {
      id: "3652",
      title: "Programación Avanzada",
      description: "Esta asignatura introduce los conceptos de eficiencia y coste de un algoritmo y las herramientas matemáticas básicas para analizarlo. Tras un breve repaso de conceptos y técnicas algorítmicas básicas ya conocidas, se estudian nuevas técnicas como el método voraz (greedy method) y la programación dinámica. Cada una de las técnicas de diseño y análisis estudiadas se ilustra con ejemplos concretos. Se estudia la eficiencia de los algoritmos de ordenamiento y búsqueda, así como también de otros algoritmos. Esta asignatura profundiza en la implementación y desarrollo de TDAs. Presenta las siguientes estructuras de datos: montículo, cola de prioridad y grafos. Se presentan diversas implementaciones de las estructuras de datos mencionadas. Se analizan distintos algoritmos de resolución de problemas de aplicaciones reales en grafos.",
      href: "#",
      status: "aproved",
      type: "Programación",
      year: 3,
    },
    {
      id: "3653",
      title: "Arquitecturas de Sistemas Software",
      description: "La arquitectura de software involucra la estructuración del sistema, la cual representa un diseño de alto nivel del mismo. A través de la arquitectura se busca, por una parte, satisfacer los atributos de calidad (desempeño, seguridad, adaptabilidad, etc.) y además proporcionar una guía en el desarrollo. No diseñar la arquitectura desde etapas tempranas del desarrollo puede limitar negativamente el producto software de modo que este no satisfaga las necesidades del cliente, elevando los costos de corrección y mantenimiento. La importancia de esta asignatura es que permitirá al alumno conocer los conceptos del diseño arquitectónico e implementación, incluyendo patrones de arquitectura, su representación, herramientas de apoyo, además, se lo capacitará para evaluar las propiedades de una arquitectura a partir del análisis del diseño estructural de un sistema software.",
      href: "#",
      status: "aproved",
      type: "Desarrollo de SW",
      year: 3,
    },
    {
      id: "3654",
      title: "Virtualización De Hardware",
      description: "La materia tiene como objetivo brindar los conocimientos avanzados de las problemáticas que deben tratar y solucionar los sistemas operativos para permitir la virtualización del hardware y las técnicas avanzadas de entrada salida. También se verán formas de programar procesos avanzados tanto en leguaje nativo del sistema operativo como en lenguaje de scripting.",
      href: "#",
      status: "aproved",
      type: "Infraestructura",
      year: 3,
    },
    {
      id: "3655",
      title: "Auditoria y Legislación",
      description: "La Asignatura Auditoria Y Legislación está planificada como una materia en la que, el futuro ingeniero debe adquirir los conocimientos y herramientas necesarias para afrontar la compleja situación actual, donde la tecnología y el derecho ha creado una nueva relación teniendo nuevos escenarios que el Ingeniero deberá explorar. Además del perfil tradicional con eje, en la ética profesional del ejercicio de la profesión. Siendo imperioso para el futuro graduado saber afrontar las innumerables relaciones jurídicas que será objeto, por ello deberá dominar conceptos jurídicos de Derecho Laboral, Derecho Contractual y su responsabilidad ante su incumplimiento. Derecho Internacional, profundizando los contratos donde el objeto son bienes o servicios informáticos. Sumando los nuevos campos de delitos informáticos, Protección de datospersonales, Propiedad intelectual, ley de Firma Digital y Ley de Economía del Conocimiento. Además de adquirir las herramientas necesarias en la gestión de la seguridad de la Información y Gobierno electrónico para poder cumplir con auditorías ycertificaciones en dicha gestión, tanto en el ámbito público como privado. Logrando un profesional capaz de desenvolverse en el ámbito de empresas públicas o privadas, como en relación de dependencia o de forma independiente, y también tanto en el ámbito local como generando servicios al exterior, conociendo las responsabilidades civiles y penales que pueden Producirse en el ejercicio como profesional de la tecnología.",
      href: "#",
      status: "aproved",
      type: "Calidad y Seguridad de la Información",
      year: 3,
    },
    {
      id: "3656",
      title: "Estadística Aplicada",
      description: "El conocimiento de los principios fundamentales de la Estadística junto con la posibilidad de acceder al manejo de programas computacionales estadísticos surge como una necesidad para el perfil del egresado, ya que constituye una herramienta que facilita el proceso de inserción laboral de los profesionales, y en particular, le otorga metodologías de trabajo a aquellos que se dedican a la investigación. En este último campo, la estadística adquiere central importancia, sobre todo en aquellos proyectos cuyos procesos investigativos no se producen en un laboratorio, sino que requieren reunir información externa, su clasificación y análisis. El campo de aplicación de la estadística se ha expandido notablemente en los últimos tiempos, tanto así que ha llegado al punto en que se percibe en la mayoría de las áreas laborales. Esto se puede ver reflejado en la demanda actual de información que facilite posteriormente la toma de decisiones, basada en los hallazgos observados a partir de procesos de recolección y análisis de datos. Es un área de conocimiento necesaria para todas las profesiones. La estadística tiene una gran importancia en la investigación científica porque: Facilita la descripción de los fenómenos de estudio. Conduce al investigador hacia la reflexión de procedimientos de análisis que deriven en el alcance de los objetivos propuestos. Permite resumir los resultados de manera significativa. Permite deducir conclusiones generales, estimar, predecir y tomar decisiones cuantificando los errores que pueden llegar a cometerse en la estimación. La importancia de incluir asignaturas que articulen conocimientos sobre estadística como parte del plan de estudios de la carrera de Ingeniería en informática radica en que en muchas ocasiones un profesional de sistemas debe trabajar y tomar decisiones en situaciones inciertas. Tiene su aplicación en diferentes áreas de especialización como son la minería de datos, la inteligencia de negocios e inclusive en la inteligencia artificial. Las aplicaciones de la inteligencia artificial (I.A.) en Estadística persiguen integrar distintos contrastes, estimaciones, transformaciones y modelos para conseguir una aproximación coherente durante el Análisis de Datos.",
      href: "#",
      status: "aproved",
      type: "Ciencias Básicas",
      year: 4,
    },
    {
      id: "3657",
      title: "Autómatas y Gramáticas",
      description: "Esta asignatura permite al alumno poder conocer los modelos de autómatas y de esta manera lograr que pueda capturar las ideas teóricas que apuntarán a la resolución de problemas reales mediante el alto poder de abstracción que poseen estos modelos con el fin de aplicarlo a distintas áreas como son el diseño de compiladores, circuitos, interfaces, traducción entre otras. También podrá evaluar la computabilidad y la complejidad de problemas.",
      href: "#",
      status: "aproved",
      type: "Programación",
      year: 4,
    },
    {
      id: "3658",
      title: "Programación Concurrente",
      description: "La asignatura está diseñada para brindar los conocimientos acerca de conceptos y técnicas de algoritmos de Programación Concurrente en Arquitecturas Multiprocesador y Sistemas Distribuidos. Busca explicar y utilizar mecanismos de Procesos e Hilos (Threads), para la optimización de recursos. A su vez introduce al alumno los conocimientos sobre paralelismo y computación de altas prestaciones. De esta forma, los estudiantes podrán desarrollarlos y utilizarlos en su vida profesional.",
      href: "#",
      status: "aproved",
      type: "Infraestructura",
      year: 4,
    },
    {
      id: "3659",
      title: "Gestión Aplicada al Desarrollo de Software I",
      description: "La asignatura Gestión Aplicada al Desarrollo de Software I aborda los temas básicos de gestión de proyectos de desarrollo de software, enfocando su estudio hacia las técnicas de estimación y gestión del desarrollo de un producto software.",
      href: "#",
      status: "aproved",
      type: "Desarrollo de SW",
      year: 4,
    },
    {
      id: "3660",
      title: "Sistemas Operativos Avanzados",
      description: "La asignatura Sistemas Operativos Avanzados está planteada como una materia que aporta conocimientos de sistemas operativos con diferentes orientaciones, de las que se ejecutan en computadoras tradicionales, a saber: Sistemas Operativos de tiempo real (SOTR), Embebidos, Móviles y Arquitecturas Reconfigurables. Para ello se basa en el análisis y adquisición de conceptos sobre: las arquitecturas, requerimientos, servicios y posterior aplicación en casos de uso. De esta manera, se pretende brindar herramientas y saberes prácticos, que puedan ser utilizados en el ámbito profesional.",
      href: "#",
      status: "aproved",
      type: "Infraestructura",
      year: 4,
    },
    {
      id: "3661",
      title: "Gestión De Proyectos",
      description: "La asignatura corresponde al cuarto año de la carrera de Ingeniería en Informática del Departamento de Ingeniería e Investigaciones Tecnológicas de la Universidad Nacional de La Matanza, tiene como precedencia a la asignatura Seguridad de la Información, Probabilidad y Estadística y Gestión de las Organizaciones. En este contexto los alumnos tienen una visión general del ámbito de dominio de los sistemas de información, conocen el campo profesional en el que se desarrollaran como ingenieros a lo largo de la historia y en el presente siglo. Atendiendo a la especificidad del perfil de la carrera, la asignatura pretende aportar a los alumnos de los conocimientos básicos del funcionamiento de las organizaciones modernas, la problemática de su gestión y fundamentalmente brindar las herramientas necesarias para la toma de decisiones en proyectos tecnológicos informáticos y la gestión de proyectos. Los alumnos desarrollarán un conocimiento profundo de las diferentes funcionalidades en las empresas y la integración de los sistemas entre sí y con sistemas externos. Enfocarán a las empresas como sistemas, encontrando la correcta solución a sus problemas técnicos, económicos y de organización por medio de diferentes tipos de informatización en la Tecnología de la Información y Comunicación. Tomarán conocimiento e investigarán las diferentes soluciones informatizadas que provee el mercado de software para las empresas. Obtendrán conocimiento de las funciones generales de las empresas y de las funciones que componen a las mismas sean estas productivas y/o de servicios dentro de los contextos económicos actuales y la responsabilidad social de las mismas, y comprender el fenómeno de la gestión de proyectos como el ámbito en el cual va a desempeñar profesionalmente además de planificar y controlar la realización de las actividades. La propuesta didáctica parte de la premisa de considerar al aula como el ámbito de reflexión que les permitirá a los alumnos estar preparados para transferir sus conocimientos y habilidades a otros profesionales y para ejercer el rol gravitante que la sociedad pueda requerir.",
      href: "#",
      status: "aproved",
      type: "Gestión y Complementarias",
      year: 4,
    },
    {
      id: "3662",
      title: "Matemática Aplicada",
      description: "La asignatura Matemática Aplicada, está planteada como una materia teórico - práctica donde los alumnos conocerán los fundamentos de Matemática que son la base de los sistemas criptográficos modernos. Se estudian los distintos sistemas criptográficos y sus aplicaciones. Dada la dinámica de los contenidos de la materia los temas a tratar en la misma van desde tecnología de base a temas actuales de mercado.",
      href: "#",
      status: "aproved",
      type: "Ciencias Básicas",
      year: 4,
    },
    {
      id: "3663",
      title: "Lenguajes y Compiladores",
      description: "La asignatura Lenguajes y Compiladores aporta conocimientos vitales para la asimilación del funcionamiento de los lenguajes de programación y su construcción en general. También plantea la adquisición de conocimientos básicos de compiladores, su funcionamiento, implementación y su importancia en el proceso de construcción de software.",
      href: "#",
      status: "aproved",
      type: "Infraestructura",
      year: 4,
    },
    {
      id: "3664",
      title: "Inteligencia Artificial",
      description: "Esta asignatura pretende que el alumno sea capaz de comprender y aplicar: las áreas de la IA, las metodológicas de construcción de sistemas basados en conocimiento, el paradigma de agentes, conceptos generales aprendizaje de máquina aplicando algoritmos de regresión lineal, logística, Redes Neuronales y Algoritmos Genéticos como así también su aplicación en distintos campos.",
      href: "#",
      status: "aproved",
      type: "Desarrollo de SW",
      year: 4,
    },
    {
      id: "3665",
      title: "Gestión Aplicada al Desarrollo de Software II",
      description: "La asignatura Gestión Aplicada al Desarrollo de Software II aborda los temas de gestión del desarrollo de software, enfocando su aplicación al desarrollo de un Producto desde la Interacción Humano-Computador (HCI), la usabilidad, la integración de tecnologías y la trazabilidad del producto software a lo largo de un proyecto.",
      href: "#",
      status: "aproved",
      type: "Desarrollo de SW",
      year: 4,
    },
    {
      id: "3666",
      title: "Seguridad Aplicada y Forensia",
      description: "La asignatura proporciona sólidos conocimientos teóricos-prácticos relacionados a la aplicación de la informática forense y los conceptos fundamentales de la seguridad aplicada al ciclo del desarrollo del software y el hacking ético. Con el aumento y perfeccionamiento de las conductas delictivas que llegan a la justicia y que involucran dispositivos informáticos surge la necesidad de acudir cada vez más a expertos en informática forense, siendo crucial su actuación en materia probatoria. La materia se enfoca en que el alumno aprenda los elementos y aspectos teórico prácticos fundamentales de la informática forense con la finalidad que adquiera las habilidades necesarias para resolver problemas concretos, del sector público y privado, donde se requieran aplicar procedimientos y metodologías para el tratamiento de la evidencia digital y la puesta en práctica de técnicas y herramientas forenses en distintos escenarios y tecnologías, considerando el marco legal y procesal vigente. Se capacita a los alumnos sobre técnicas de intrusión, modalidad de ataques y defensa, la seguridad en el ciclo de desarrollo de software, logrando que se involucren con la filosofía y el accionar del mundo del Hacking Ético, conociendo las herramientas y metodologías necesarias para realizar tareas de análisis de vulnerabilidades, test de penetración y evaluaciones de seguridad, aplicados siempre bajo la ética profesional. Asimismo, se interioriza al alumno en las técnicas de seguridad defensiva y ofensiva para optimizar la protección ante ataques informáticos, como también la respuesta a incidentes.",
      href: "#",
      status: "aproved",
      type: "Calidad y Seguridad de la Información",
      year: 4,
    },
    {
      id: "3667",
      title: "Gestión de la Calidad en Procesos de Sistemas",
      description:"El rol del curso “Gestión de la Calidad de Software” es el de crear en los futuros profesionales las habilidades necesarias para desenvolverse adecuadamente en las problemáticas relacionadas con la calidad. En este sentido en el curso se estudian los diferentes aspectos de la calidad como ser técnicas, métodos y herramientas, así como también las normas de calidad, tanto nacionales e internacionales, más utilizadas en la industria.",
      href: "#",
      status: "aproved",
      type: "Calidad y Seguridad de la Información",
      year: 4,
    },
    {
      id: "3668",
      title: "Inteligencia Artificial Aplicada",
      description: "Esta asignatura pretende que el alumno sea capaz de comprender y aplicar los conceptos vistos previamente en elementos de inteligencia artificial: Por ejemplo, Aplicación de la IA en diferentes modalidades de un sistema inteligente: lenguaje (Text & speech), imágenes, computación afectiva, como así también su aplicación en distintos campos como por ejemplo sistemas autónomos de robots.",
      href: "#",
      status: "aproved",
      type: "Desarrollo de SW",
      year: 5,
    },
    {
      id: "3670",
      title: "Ciencia de Datos",
      description: "Los contenidos que el alumno verá en esta asignatura son de la máxima actualidad e interés, ya que se enmarcan en el fenómeno conocido como Ciencia de Datos o Data Science, que está relacionado con la generación, el procesamiento y, sobre todo, la interpretación o búsqueda de información de interés a partir de grandes volúmenes de datos de múltiples orígenes, superando el alcance de las bases de datos tradicionales.",
      href: "#",
      status: "aproved",
      type: "Desarrollo de SW",
      year: 5,
    },
    {
      id: "3669",
      title: "Innovación y Emprendedurismo",
      description: "La asignatura Innovación y Emprendedorismo aporta al perfil del alumno, la habilidad de conducir a la organización hacia la consecución de sus objetivos mediante un esfuerzo coordinado y con espíritu emprendedor, desarrollando las habilidades directivas y de vinculación, que le permitan integrar y coordinar equipos interdisciplinarios, para favorecer el crecimiento de la organización y su entorno global, el desarrollo del pensamiento crítico y creativo para la generación de oportunidades y la solución de problemas que promuevan resultados que tengan en cuenta el impacto social y la innovación.",
      href: "#",
      status: "aproved",
      type: "Gestión y Complementarias",
      year: 5,
    },
    {
      id: "3671",
      title: "Proyecto Fin de Carrera",
      description: "PROYECTO FIN DE CARRERA, asignatura del último año de la carrera de Ingeniería Informática, es la materia que condensa todo lo aprendido a lo largo de la carrera y se articula horizontalmente con todas las asignaturas del quinto año. Utiliza las herramientas de las asignaturas anteriores y colaterales para su propio desarrollo, es el campo de aplicación concreta de las mismas, y donde el alumno demuestra su condición de profesional.",
      href: "#",
      status: "aproved",
      type: "Desarrollo de SW",
      year: 5,
    },
    {
      id: "3677",
      title: "Electiva I - Lenguaje Orientado A Negocios",
      description: "La asignatura corresponde al quinto año de la carrera de Ingeniería en Informática del Departamento de Ingeniería e Investigaciones Tecnológicas de la Universidad Nacional de La Matanza, tiene como precedencia a la asignatura Gestión De Proyectos – Lenguajes Y Compiladores. En este contexto los alumnos tienen una visión general del ámbito de dominio de los sistemas de información, conocen el campo profesional en el que se desarrollaran como ingenieros a lo largo de la historia y en el presente siglo. Atendiendo a la especificidad del perfil de la carrera, la asignatura pretende aportar a los alumnos los conocimientos teórico-prácticos y competencias básicas necesarias para una introducción al entorno Mainframe e infraestructura Mainframe. La propuesta didáctica parte de la premisa de considerar al aula como el ámbito de reflexión que les permitirá a los alumnos estar preparados para transferir sus conocimientos y habilidades a otros profesionales y para ejercer el rol gravitante que la sociedad pueda requerir.",
      href: "#",
      status: "aproved",
      type: "Gestión y Complementarias",
      year: 5,
    },
    {
      id: "3678",
      title: "Electiva II - Tecnologías en Seguridad",
      description: "La asignatura electiva Tecnologías en Seguridad, está planteada como una materia teórico - práctica donde los alumnos conocerán los fundamentos de la seguridad en las redes de datos. Dada la dinámica de los contenidos de la materia los temas a tratar en la misma van desde tecnología de base a temas actuales de mercado.",
      href: "#",
      status: "aproved",
      type: "Calidad y Seguridad de la Información",
      year: 5,
    },
    {
      id: "3679",
      title: "Electiva III - Visión artificial",
      description: "La visión artificial es una disciplina que trata sobre la interpretación automática de imágenes. Se concentra en la extracción de información a partir de una imagen. No hay que confundir con el procesamiento de imágenes: una función que genera imágenes, y sólo cumple una función accesoria y de adecuación en Visión artificial. El contenido de la materia adopta como hilo conductor el desarrollo de soluciones reales de visión artificial, con amplio espectro de aplicación. En este sentido evita los lugares comunes de cursos que profundizan en técnicas obsoletas o poco usadas. La materia aborda soluciones heurísticas y soluciones basadas en inteligencia artificial, comenzando por el uso de machine learning y deep learning, y terminando por el estado del arte.",
      href: "#",
      status: "aproved",
      type: "Desarrollo de SW",
      year: 5,
    },
    //transversales

  ];

  return (
    <div className="bg-slate-200 flex items-center justify-center w-full dark:bg-zinc-900">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home items={programingLanguages} />} />
          <Route path='/projects' element={<Projects items={programingLanguages} />} />
          <Route path='/university' element={<University items={subjects} />} />
          <Route path='/cv' element={<CurriculumVitae />} />
        </Routes>

        <FloatingDock
          items={linksNavbar}
          mobileClassName="m-5 z-10"
          desktopClassName="mb-5 fixed z-10 bottom-0"
        />

      </BrowserRouter>
    </div>
  )
}

export default App

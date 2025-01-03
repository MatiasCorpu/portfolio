import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FloatingDock } from './components/ui/Floating-dock';

import Home from './pages/Home';
import Projects from './pages/Projects';
import University from './pages/University';
import CurriculumVitae from './pages/CurriculumVitae';

import subjects from "./data/subjects.json";
import programingLanguages from "./data/programing-languages.json";

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
          // mobileClassName="mx-3 mb-5 fixed bottom-0 right-0"
          desktopClassName="mb-5 max-sm:mb-2 fixed bottom-0"
        />

      </BrowserRouter>
    </div>
  )
}

export default App

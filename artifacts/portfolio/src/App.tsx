import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import AboutPage from "@/pages/AboutPage";
import ArticlesPage from "@/pages/ArticlesPage";
import AssistantPage from "@/pages/AssistantPage";
import ExperiencePage from "@/pages/ExperiencePage";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import ProjectsPage from "@/pages/ProjectsPage";
import ResumePage from "@/pages/ResumePage";
import { useEffect } from "react";
import { Link, Route, Switch, Router as WouterRouter, useLocation } from "wouter";
import ContactPage from "./pages/ContactPage";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={AboutPage} />
        <Route path="/experience" component={ExperiencePage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/resume" component={ResumePage} />
        <Route path="/articles" component={ArticlesPage} />
        <Route path="/assistant" component={AssistantPage} />
        <Route path="/contact" component={ContactPage} />

        <Route component={NotFound} />
      </Switch>

      <Link href="/assistant">
        <span className="fixed right-5 bottom-5 z-40 px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider shadow-lg shadow-primary/30 cursor-pointer hover:opacity-90 transition-opacity print:hidden">
          Ask Asad AI
        </span>
      </Link>

      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </ThemeProvider>
  );
}

export default App;
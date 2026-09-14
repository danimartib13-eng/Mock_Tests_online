import { Navigate, Route, Routes } from "react-router-dom";
import { TestProvider } from "./context/TestContext";
import { Instructions } from "./pages/Instructions";
import { LanguageUseSection } from "./pages/LanguageUseSection";
import { ListeningSection } from "./pages/ListeningSection";
import { ReadingSection } from "./pages/ReadingSection";
import { Results } from "./pages/Results";
import { Welcome } from "./pages/Welcome";

export default function App() {
  return (
    <TestProvider>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/listening" element={<ListeningSection />} />
        <Route path="/reading" element={<ReadingSection />} />
        <Route path="/language-use" element={<LanguageUseSection />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </TestProvider>
  );
}

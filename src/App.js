import React from "react";
import lessons from "./lessons";
import Lesson from "./Lesson";
import useLocalStorage from "./useLocalStorage";
import Welcome from "./Welcome";

function App() {
  const [currentLevel, setCurrentLevel] = useLocalStorage("level", 0);

  return (
    <div className="flex-1 flex flex-col relative">
      <label className="m-3">
        Niveau:
        <select
          className="ml-3"
          onChange={e => setCurrentLevel(parseInt(e.target.value))}
          value={currentLevel}
        >
          {lessons.map(lesson => (
            <option key={lesson.level} value={lesson.level}>
              {lesson.label}
            </option>
          ))}
        </select>
      </label>

      <Lesson key={currentLevel} keys={lessons[currentLevel].keys.split("")} />

      <Welcome />
    </div>
  );
}

export default App;

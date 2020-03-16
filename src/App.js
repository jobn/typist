import React from "react";
import lessons from "./lessons";
import Lesson from "./Lesson";

function App() {
  const [currentLevel, setCurrentLevel] = React.useState(0);

  return (
    <div className="flex-1 flex flex-col">
      <label>
        Lektion:
        <select
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
    </div>
  );
}

export default App;

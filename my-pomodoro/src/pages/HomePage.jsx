import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div className="intro">
        <h1> What is the pomodoro technique?</h1>
        <p>
          The Pomodoro Technique uses fixed time periods for focused work, often
          25 minutes, followed by short breaks. This systematic technique keeps
          the mind aware and engaged, considerably lowering the tendency to
          procrastinate, allowing better concentration on tasks.
        </p>

        <Link to="/Clock">
          <button id="start-button">Start your pomodoro session</button>
        </Link>
      </div>
    </>
  );
}

export default Homepage;

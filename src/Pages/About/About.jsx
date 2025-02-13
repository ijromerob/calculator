// This will hold information about the project and the course that I did it for.

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>
        This project was created as part of the Codecademy Full Stack Engineer
        course. It is a simple React app that uses the OpenWeatherMap API to
        display the current weather in a city of your choice.
      </p>
      <p>It was created using React, JavaScript, HTML and CSS.</p>
      <p>
        For more information, please visit the project's GitHub repository{' '}
        <a href="">here</a>.
      </p>
    </div>
  );
};

export default About;

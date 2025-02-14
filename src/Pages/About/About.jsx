// This will hold information about the project and the course that I did it for.

const About = () => {
  return (
    <div className="about page">
      <h1>About This Transportation Emissions Calculator</h1>
      <p>
        This project was born to help individuals understand the environmental
        and financial impact of our daily transportation choices within Calgary.
        Transportation is a significant contributor to greenhouse gas emissions,
        and in a city like Calgary, where car dependency is prevalent, it's
        crucial to explore alternative modes of transport.
      </p>
      <p>
        This project is a learning experience, and I welcome any feedback or
        suggestions for improvement. I believe that by working together and
        empowering individuals with information, we can create a more
        sustainable future for our city and our planet.
      </p>
      <p>It was created using React, JavaScript, HTML and CSS.</p>

      <h2>References</h2>
      <p>
        The data used in this project was sourced from the City of Calgary's
        Travel cost Calculator. You can find more information about it{' '}
        <a href="https://www.calgary.ca/planning/transportation/travel-cost-calculator.html">
          here
        </a>
      </p>
      <p>
        The emissions estimates were taken from Our World in data. You can find
        more information about it{' '}
        <a href="https://ourworldindata.org/travel-carbon-footprint">here</a>
      </p>
    </div>
  );
};

export default About;

const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default Section;

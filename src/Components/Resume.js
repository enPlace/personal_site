import resumepdf from "./front-end-resume.pdf"
const Resume = () => {
  return (
    <div class="Resume content">
      <iframe src={resumepdf} title="title" style = {{width: "99%", height: "100%"}}>
      </iframe>
    </div>
  );
};

export default Resume;

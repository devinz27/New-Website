import "./Resume.css";

function Resume() {
  return (
    <div className="Resume">
      <iframe
        src={require("./static/resume.pdf#zoom=FitH")}
        width="100%"
        height="100%"
      ></iframe>
      This browser does not support PDF! Click Here to view PDF:{" "}
      <a target="_blank" href={require("./static/resume.pdf")}>
        Resume{" "}
      </a>
    </div>
  );
}
export default Resume;

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import {
  calculateDate,
  issueWithCurrentStatus,
  dragOverHandler,
  dragLeavHandler,
  dragStartHandler,
  dragEndHandler,
  dropHaddler,
} from "../../modules";
import { useState } from "react";

const IssueCard = ({
  issuesRedux,
  taskStatuses,
  status,
  urlRedux,
  retrievedIssuesCurrentStatus,
  issuesCurrentStatus,
}) => {
  // const issuesCurrentStatus = issueWithCurrentStatus(issuesRedux);
  // const issuesCurrentStatus = JSON.parse(localStorage.getItem(urlRedux))
  const [currentBord, setCurrentBord] = useState(null);
  const [currentIssue, setCurrentIssue] = useState(null);

  return (
    <>
      <Col
        className="m-2 p-4"
        style={{
          background: "lightgray",
          border: "3px solid grey",
          borderRadius: "10px",
        }}
      >
        <h3>{status}</h3>
        {issuesCurrentStatus
          .filter((issue) => issue.currentStatus == status)
          .map((issue) => (
            <div
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={(e) => dragLeavHandler(e)}
              onDragStart={(e) => dragStartHandler(e, status, issue)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDrop={(e) => dropHaddler(e, status, issue)}
              draggable={true}
            >
              <Card className="mb-3" border="dark">
                <Card.Header>id: {issue.id}</Card.Header>
                <Card.Body>
                  <Card.Title>{issue.title}</Card.Title>
                  <Card.Text>
                    # {issue.number} Opened {calculateDate(issue.created_at)}{" "}
                    Days ago
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
      </Col>
    </>
  );
};

const mapStateToProps = (state) => ({
  issuesRedux: state.issues.issues,
  urlRedux: state.url.url,
});

export default connect(mapStateToProps, {})(IssueCard);

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { calculateDate } from "../../modules";

const IssueCard = ({ issuesRedux, taskStatuses, status }) => {
  
  const issueWithCurrentStatus = issuesRedux.map((issue) => {

    if (issue.assignees.length != 0) {
      return {
        ...issue,
        currenrStatus: "Progres",
      };
    } else if (issue.closed_at != null) {
      return {
        ...issue,
        currenrStatus: "Done",
      };
    } else {
      return {
        ...issue,
        currenrStatus: "Todo",
      };
    }
  });

  console.log(issueWithCurrentStatus);

  return (
    <>
      <Col className="m-2 p-4" style={{background: "lightgray", border: "3px solid grey", borderRadius: "10px"}}>
        <h3>{status}</h3>
        {issueWithCurrentStatus
          .filter((issue) => issue.currenrStatus == status)
          .map((issue) => (
            <div>
              <Card className="mb-3" border="dark">
                <Card.Header>id: {issue.id}</Card.Header>
                <Card.Body>
                  <Card.Title>{issue.title}</Card.Title>
                  <Card.Text>
                    # {issue.number} Opened {calculateDate(issue.created_at)} Days ago
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
});

export default connect(mapStateToProps, {})(IssueCard);

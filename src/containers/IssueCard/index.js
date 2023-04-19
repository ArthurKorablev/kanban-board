import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import { connect } from "react-redux";

const IssueCard = ({issuesRedux}) => {

    const taskStatuses = ['Todo', 'Progres', 'Done'];

  return (
    <div>
        {taskStatuses.map(status => (
            <Col key={status} status={status}>
                <h3>{status}</h3>
                {issuesRedux.map((issue) => (
                    <div></div>
                ))}
            </Col>
                 ))} 
    </div>
  );
};

const mapStateToProps = (state) => ({
    issuesRedux: state.issues.issues
  });
  
  export default connect(mapStateToProps, {  })(IssueCard);

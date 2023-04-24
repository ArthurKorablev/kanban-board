import { connect } from "react-redux";
import { setIssues } from "../../redux/actions";
import { useEffect } from "react";
import {
  getDataFromApi,
  getUrlIssuesApi,
  issueWithCurrentStatus,
  setBoardsAndIssues
} from "../../modules";

import Container from "react-bootstrap/Container";


import IssueCard from "../IssueCard";

const Layout = ({
  repoRedux,
  urlRedux,
  repoIsLoadedRedux,
  setIssues,
  issuesRedux,
}) => {
  const taskStatuses = ["Todo", "Progres", "Done"];
  const { issues_url } = repoRedux;

  useEffect(() => {
    if (repoIsLoadedRedux) {
      getDataFromApi(getUrlIssuesApi(issues_url), setIssues);
    }
  }, [repoIsLoadedRedux]);

  const issuesCurrentStatus = issueWithCurrentStatus(issuesRedux);

  return (
    <div>
      <Container>


            <IssueCard

              issuesCurrentStatus={issuesCurrentStatus}
              taskStatuses={taskStatuses}
            />


      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  repoRedux: state.repo.repo,
  repoIsLoadedRedux: state.repo.repoIsLoaded,
  issuesRedux: state.issues.issues,
  urlRedux: state.url.url,
});

export default connect(mapStateToProps, { setIssues })(Layout);

//   localStorage.setItem(urlRedux, JSON.stringify(issuesCurrentStatus));

//   const vallue = localStorage.getItem(urlRedux);

//   if ( vallue == null || vallue == []) {
//     localStorage.setItem(urlRedux, JSON.stringify(issuesCurrentStatus));
//   }
// if(vallue != null || vallue != []){
//     let retrievedIssuesCurrentStatus = JSON.parse(
//         localStorage.getItem(urlRedux)
//       );
// }else{
//     let retrievedIssuesCurrentStatus = issuesCurrentStatus
// }
//  let retrievedIssuesCurrentStatus = JSON.parse(localStorage.getItem(urlRedux)) ?? issuesCurrentStatus;

//   let retrievedIssuesCurrentStatus = JSON.parse(
//     localStorage.getItem(urlRedux)
//   );

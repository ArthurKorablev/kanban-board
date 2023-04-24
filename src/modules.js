export const getDataFromApi = async (url, callBack) => {
  const response = await fetch(url);
  const data = await response.json();
  callBack(data);
};

export const getUrlApi = (url) => {
  let urlApi = url.split("");
  urlApi.splice(8, 0, "api.");
  urlApi.splice(20, 0, "repos/");
  return urlApi.join("");
};

export const getUrlIssuesApi = (api) => {
  const urlIssuesApi = api.replace("{/number}", "");
  return urlIssuesApi;
};

export const setBoardsAndIssues = (statuses, issues) => {
  let boardsWithIssues = [];
  for (let i = 0; i < statuses.length; i++) {
    const filteredIssues = issues.filter(
      (issue) => issue.currentStatus === statuses[i]
    );
    console.log(issues);
    boardsWithIssues.push({ title: statuses[i], issues: filteredIssues });
  }
  return boardsWithIssues;
};

export const onSubmit = (event, callBack) => {
  event.preventDefault();
  callBack(true);
};

export const calculateDate = (creatingIssueDate) => {
  const currentDate = new Date();
  const date = Date.parse(creatingIssueDate);
  const time = Math.abs(currentDate - date);
  const days = Math.ceil(time / (1000 * 60 * 60 * 24));
  return days;
};

export const issueWithCurrentStatus = (issuesArrey) => {
  const issuesCurrentStatus = issuesArrey.map((issue) => {
    if (issue.assignees.length != 0) {
      return {
        ...issue,
        currentStatus: "Progres",
      };
    } else if (issue.closed_at != null) {
      return {
        ...issue,
        currentStatus: "Done",
      };
    } else {
      return {
        ...issue,
        currentStatus: "Todo",
      };
    }
  });

  return issuesCurrentStatus;
};




export const dragOverHandler = (e) => {
  e.preventDefault();
  e.target.style.boxShedow = "0 4px 3px gray";
  console.log("over hendler");
};

export const dragLeavHandler = (e) => {
  e.target.style.boxShedow = "none";
  console.log("leave hendler");
};

export const dragStartHandler = (e, bordStatus, issue) => {
  return {
    ...issue,
    currenrStatus: bordStatus,
  };
};

export const dragEndHandler = (e, bordStatus, issue) => {
  e.preventDefault();
  e.target.style.boxShedow = "none";

  return {
    ...issue,
    currenrStatus: bordStatus,
  };
};

export const dropHaddler = (e, bordStatus, issue) => {
  e.preventDefault();
  return {
    ...issue,
    currenrStatus: bordStatus,
  };
};

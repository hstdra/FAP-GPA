const transcript = $("#ctl00_mainContent_divGrade table:first tbody tr")
  .toArray()
  .map((row) => ({
    credit: +$(row).find("td")[7].innerText,
    grade: +$(row).find("td")[8].innerText,
  }))
  .filter((row) => row.grade > 0 && row.credit > 0)
  .reduce(
  (acc, row) => {
    acc.totalCredit += row.credit;
    acc.totalScore += row.credit * row.grade;

    return acc;
  },
  {
    totalCredit: 0,
    totalScore: 0,
  }
);

const currentGpa = (transcript.totalScore / transcript.totalCredit).toFixed(2);

// Write GPA to page
$("#ctl00_mainContent_lblRollNumber").append(` - <span class="label label-success">GPA: ${currentGpa}</span>`)

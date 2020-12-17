const transcriptRows = document.querySelectorAll(
  "#ctl00_mainContent_divGrade > table > tbody > tr"
);
const transcript = [...transcriptRows]
  .map((row) => ({
    credit: +row.querySelectorAll("td")[7]?.innerText,
    grade: +row.querySelectorAll("td")[8]?.innerText,
  }))
  .filter((row) => row && row.grade > 0 && row.credit > 0)
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
document.getElementById(
  "ctl00_mainContent_lblRollNumber"
).innerHTML += ` - <span class="label label-success">GPA: ${currentGpa}</span>`;

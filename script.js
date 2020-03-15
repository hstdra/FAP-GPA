const $ = require('jquery');
const _ = require('lodash');

const mainContent = $('#ctl00_mainContent_lblRollNumber')
const gradeRows = $('#ctl00_mainContent_divGrade table:first tbody tr')
let gradeScores = []

for (let i = 0; i < gradeRows.length; i++) {
    gradeScores.push($(gradeRows[i]).find('td')[8].innerText)
}

const avgScore = _.mean(gradeScores.filter(x => x != '' && x != '0').map(x => +x))

mainContent.append(` - <span class="label label-success">GPA: ${avgScore.toFixed(2)}</span>`)
/**
 * Descomplilearning TECS Mock Test — results receiver.
 *
 * Deploy as a Web App (Deploy > New deployment > Web app):
 *   - Execute as: Me
 *   - Who has access: Anyone
 * Copy the resulting /exec URL into the app's VITE_APPS_SCRIPT_URL.
 *
 * Expects a POST body (sent as text/plain to avoid CORS preflight — see
 * src/lib/resultsClient.ts) whose text is JSON shaped as:
 *   {
 *     summary: { attemptId, studentName, studentEmail, date, mockTestVersion,
 *                listeningScore, readingScore, languageUseScore, overallScore,
 *                estimatedPracticeLevel, completionTimeMinutes, tutorNotes },
 *     answers: [{ attemptId, studentName, date, mockTestVersion, section,
 *                 questionId, questionNumber, questionText, selectedAnswer,
 *                 correctAnswer, isCorrect, pointsEarned, maxPoints }, ...]
 *   }
 *
 * Writes one row to the "Results" tab and one row per answer to the
 * "AnswerDetails" tab, both related by attemptId.
 */

var RESULTS_SHEET_NAME = "Results";
var ANSWER_DETAILS_SHEET_NAME = "AnswerDetails";

var RESULTS_COLUMNS = [
  "AttemptID",
  "StudentName",
  "StudentEmail",
  "Date",
  "MockTestVersion",
  "ListeningScore",
  "ReadingScore",
  "LanguageUseScore",
  "OverallScore",
  "EstimatedPracticeLevel",
  "CompletionTimeMinutes",
  "TutorNotes",
];

var ANSWER_DETAILS_COLUMNS = [
  "AttemptID",
  "StudentName",
  "Date",
  "MockTestVersion",
  "Section",
  "QuestionID",
  "QuestionNumber",
  "QuestionText",
  "SelectedAnswer",
  "CorrectAnswer",
  "IsCorrect",
  "PointsEarned",
  "MaxPoints",
];

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var summary = payload.summary;
    var answers = payload.answers || [];

    appendResultsRow_(summary);
    appendAnswerDetailRows_(answers);

    return jsonResponse_({ success: true, attemptId: summary.attemptId });
  } catch (error) {
    return jsonResponse_({ success: false, error: String(error) });
  }
}

function appendResultsRow_(summary) {
  var sheet = getOrCreateSheet_(RESULTS_SHEET_NAME, RESULTS_COLUMNS);
  var row = RESULTS_COLUMNS.map(function (column) {
    return summary[lowerFirst_(column)];
  });
  sheet.appendRow(row);
}

function appendAnswerDetailRows_(answers) {
  if (answers.length === 0) return;
  var sheet = getOrCreateSheet_(
    ANSWER_DETAILS_SHEET_NAME,
    ANSWER_DETAILS_COLUMNS,
  );
  var rows = answers.map(function (answer) {
    return ANSWER_DETAILS_COLUMNS.map(function (column) {
      return answer[lowerFirst_(column)];
    });
  });
  sheet
    .getRange(sheet.getLastRow() + 1, 1, rows.length, rows[0].length)
    .setValues(rows);
}

function getOrCreateSheet_(name, headerColumns) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(name);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(name);
    sheet.appendRow(headerColumns);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function lowerFirst_(column) {
  // "AttemptID" -> "attemptId" style keys don't map 1:1 with a simple
  // lowerFirst, so each field is looked up explicitly instead.
  var map = {
    AttemptID: "attemptId",
    StudentName: "studentName",
    StudentEmail: "studentEmail",
    Date: "date",
    MockTestVersion: "mockTestVersion",
    ListeningScore: "listeningScore",
    ReadingScore: "readingScore",
    LanguageUseScore: "languageUseScore",
    OverallScore: "overallScore",
    EstimatedPracticeLevel: "estimatedPracticeLevel",
    CompletionTimeMinutes: "completionTimeMinutes",
    TutorNotes: "tutorNotes",
    Section: "section",
    QuestionID: "questionId",
    QuestionNumber: "questionNumber",
    QuestionText: "questionText",
    SelectedAnswer: "selectedAnswer",
    CorrectAnswer: "correctAnswer",
    IsCorrect: "isCorrect",
    PointsEarned: "pointsEarned",
    MaxPoints: "maxPoints",
  };
  return map[column];
}

function jsonResponse_(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

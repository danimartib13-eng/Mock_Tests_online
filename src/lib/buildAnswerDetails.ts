import type {
  AnswerDetailRecord,
  AnswersMap,
  AnyQuestion,
  SectionId,
} from "../types/test";

/**
 * Flattens every question + the student's answer into one row per question,
 * matching the "AnswerDetails" tab schema. Related back to its "Results"
 * summary row via attemptId.
 */
export function buildAnswerDetails(params: {
  attemptId: string;
  studentName: string;
  date: string;
  mockTestVersion: string;
  questionsBySection: Record<SectionId, AnyQuestion[]>;
  answers: AnswersMap;
}): AnswerDetailRecord[] {
  const {
    attemptId,
    studentName,
    date,
    mockTestVersion,
    questionsBySection,
    answers,
  } = params;

  const records: AnswerDetailRecord[] = [];

  (Object.keys(questionsBySection) as SectionId[]).forEach((section) => {
    for (const question of questionsBySection[section]) {
      const selectedAnswer = answers[question.id] ?? "";
      const isCorrect = selectedAnswer === question.correctOptionId;

      records.push({
        attemptId,
        studentName,
        date,
        mockTestVersion,
        section,
        questionId: question.id,
        questionNumber: question.questionNumber,
        questionText: question.text,
        selectedAnswer,
        correctAnswer: question.correctOptionId,
        isCorrect,
        pointsEarned: isCorrect ? question.points : 0,
        maxPoints: question.points,
      });
    }
  });

  return records;
}

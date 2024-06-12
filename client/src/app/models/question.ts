import Option from './option';

export default interface Question {
  question_id: number;
  question_description: string;
  question_type: string;
  ordinality_type: string;
  options: Option[];
}

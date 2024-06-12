export default interface Option {
  option_id: number;
  question_id: number;
  choice_description: string;
  checked?: boolean;
}

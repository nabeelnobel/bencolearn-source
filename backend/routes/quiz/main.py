from typing import List, Dict, Union

def txt_to_json(file_path: str) -> List[Dict[str, Union[str, List[Dict[str, Union[str, bool]]]]]]:
    with open(file_path, 'r') as file:
        lines = file.readlines()

    questions = []
    question = {}
    answers = []
    for line in lines:
        line = line.strip()
        if line.startswith("question."):
            if question:
                question["answerOptions"] = answers
                questions.append(question)
                question = {}
                answers = []
            question["questionText"] = line[9:].strip()
        else:
            answer_parts = line.split(';')
            if len(answer_parts) >= 2:
                answer_text, is_correct_str = answer_parts[:2]
                answers.append({"answerText": answer_text.strip(), "isCorrect": is_correct_str.strip() == "true"})

    if question:
        question["answerOptions"] = answers
        questions.append(question)

    return questions

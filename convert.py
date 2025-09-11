import re
import json

# Ścieżki
INPUT_FILE = "quiz.txt"
OUTPUT_FILE = "quiz.js"

def parse_quiz_file(text):
    # Podział na pytania (np. **1. Pytanie** itd.)
    raw_questions = re.split(r"\*\*(\d+)\.\s", text)[1:]

    quiz_data = []

    for i in range(0, len(raw_questions), 2):
        number = raw_questions[i].strip()
        content = raw_questions[i + 1]

        try:
            # Oddziel treść od odpowiedzi, poprawnej odpowiedzi i wyjaśnienia
            parts = re.split(r"\n\s*\*\*Poprawna odpowiedź:\*\*|\n\s*\*\*Wyjaśnienie:\*\*", content.strip(), maxsplit=2)
            q_and_answers = parts[0].strip()
            correct = parts[1].strip().replace("**", "").strip()[0].lower()
            explanation = parts[2].strip()

            lines = q_and_answers.split("\n")
            question = lines[0].strip()
            answer_lines = lines[1:]

            # Parsuj odpowiedzi (a) ..., b) ..., itd.)
            answers = {}
            for line in answer_lines:
                match = re.match(r"\s*([a-e])\)\s+(.*)", line)
                if match:
                    key, val = match.groups()
                    answers[key] = val.strip()

            quiz_data.append({
                "question": question,
                "answers": answers,
                "correctAnswer": correct,
                "explanation": explanation
            })

        except Exception as e:
            print(f"Błąd w pytaniu nr {number}: {e}")

    return quiz_data

def save_as_js(data, filename):
    with open(filename, "w", encoding="utf-8") as f:
        f.write("const quizData = ")
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write(";")

if __name__ == "__main__":
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        raw_text = f.read()

    quiz = parse_quiz_file(raw_text)
    save_as_js(quiz, OUTPUT_FILE)
    print(f"✔️ Wygenerowano plik: {OUTPUT_FILE}")

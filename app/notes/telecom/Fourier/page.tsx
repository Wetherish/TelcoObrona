"use client";

import { useState } from 'react';

export default function Home() {
    const [answers, setAnswers] = useState<string[]>([]);
    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['Paris', 'London', 'Berlin', 'Rome'],
            answer: 'Paris'
        },
        {
            question: 'What is the chemical symbol for water?',
            options: ['H2O', 'CO2', 'O2', 'H2'],
            answer: 'H2O'
        }
        // Add more questions here
    ];

    const handleAnswerChange = (index: number, answer: string) => {
        const newAnswers = [...answers];
        newAnswers[index] = answer;
        setAnswers(newAnswers);
    };

    const submitAnswers = () => {
        let score = 0;
        questions.forEach((question, index) => {
            if (answers[index] === question.answer) {
                score++;
            }
        });
        alert(`Your score is: ${score}`);
    };

    return (
        <div className="container mx-auto py-8">
            {questions.map((question, index) => (
                <div key={index} className="question mb-8">
                    <h2>{`Question ${index + 1}:`}</h2>
                    <p>{question.question}</p>
                    <div className="answer ml-4">
                        {question.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="mb-2">
                                <input
                                    type="radio"
                                    id={`q${index}_${optionIndex}`}
                                    name={`q${index}`}
                                    value={option}
                                    checked={answers[index] === option}
                                    onChange={() => handleAnswerChange(index, option)}
                                />
                                <label htmlFor={`q${index}_${optionIndex}`} className="ml-2">{option}</label>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={submitAnswers}>Submit</button>
        </div>
    );
}

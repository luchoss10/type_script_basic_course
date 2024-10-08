import { useState } from "react";

import CourseGoalList from "./components/CourseGoalList.tsx";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
    title: string;
    description: string;
    id: number;
};

export default function App() {
    
    const[goals, setGoals] = useState<Array<CourseGoal>>([]);

    function handleAddGoal(goal: string, summary: string) {
        console.log('Add Goal');
        setGoals(prevGoals => {
            const newGoal: CourseGoal = {
                id: Math.random(),
                title: goal,
                description: summary,
            };
            return [...prevGoals, newGoal];
        });
    }

    function handleDeleteGoal(goalId: number) {
        setGoals(prevGoals => {
            const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
            return updatedGoals;
        }
                );
    }

    return (
        <main>
            <Header image={{src: goalsImg, alt: 'A list of goals'}}>
                <h1>Your Course Goals</h1>
            </Header>
            <NewGoal onAddGoal={handleAddGoal}/> 
            <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
        </main>
    );
}

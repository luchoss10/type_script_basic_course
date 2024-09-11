import CourseGoal from './CourseGoal.tsx'; 
import { type CourseGoal as CGoal} from '../App.tsx';
import { type ReactNode} from 'react';
import InfoBox from './InfoBox.tsx';

type CourseGoalListProps = {
    goals: Array<CGoal>;
    onDeleteGoal: (id:number) => void; 
};

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {

    if (goals.length === 0) {
        return <InfoBox mode='hint'>No goals found. Maybe add one?</InfoBox>;
    }

    let warningBox:ReactNode;
    
    if (goals.length >= 4) {
        warningBox = <InfoBox mode='warning' severity="high" >You have a lot of goals. Consider deleting some.</InfoBox>;
    }

return (
    <>
    {warningBox}
    ...
    <ul>
        {goals.map((goal)=>(
            <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
            </CourseGoal>
            </li>
        ))}
    </ul>
    </>

);
}

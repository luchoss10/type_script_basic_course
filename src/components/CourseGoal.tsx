import { type PropsWithChildren} from 'react';

//import { type PropsWithChildren, type ReactNode } from 'react';

//type CourseGoalProps = {
//    tittle: string;
    //description: string;
    //children: ReactNode;
//};

type CourseGoalProps = PropsWithChildren<{
    id : number;
    title: string; 
    onDelete: (id:number) => void;
}>;

export default function CourseGoal({
    title, 
    id,
    onDelete,
    children
}: CourseGoalProps)  {

    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>DELETE</button>
        </article>
    );
}

//import { type FC} from 'react';

//type CourseGoalProps = PropsWithChildren<{title: string}>;

//const CourseGoal: FC<CourseGoalProps> = ({
//    title, 
//    children
//})  => {

//    return (
//        <article>
//            <div>
//                <h2>{title}</h2>
//                {children}
//            </div>
//            <button>DELETE</button>
//        </article>
//    );
//}



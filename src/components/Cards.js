import { useState } from 'react';
import Card from './Card'


const Cards = ({ courses, curCategory }) => {
    const [likedCourses, setLikedCourses] = useState([]);


    function getCourses() {
        if (curCategory === "All") {
            let allCourses = [];
            Object.values(courses).forEach(catCourses => {
                catCourses.forEach((course) => allCourses.push(course));
            });
            return allCourses;
        } else {
            return courses[curCategory];
        }
    }

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses().map((course) => (
                    <Card
                        key={course.id}
                        course={course}
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses}
                    ></Card>

                ))
            }
        </div>
    )

}

export default Cards;
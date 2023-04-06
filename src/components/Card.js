import React from 'react';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { toast } from 'react-toastify';


const Card = ({ course, likedCourses, setLikedCourses }) => {

    function likeBtnHandler() {
        if (likedCourses.includes(course.id)) {
            setLikedCourses(likedCourses.filter(cid => cid !== course.id));
            toast.warning("Like removed");
        } else {
            setLikedCourses([...likedCourses, course.id]);
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className="flex flex-col w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className=' relative'>
                <img src={course.image.url} alt="" />

                <div className=' absolute right-2 bottom-[-12px] w-[40px] h-[40px] bg-white rounded-full grid place-items-center'>
                    <button onClick={likeBtnHandler}>
                        {
                            likedCourses.includes(course.id) ?
                                <FcLike fontSize="1.75rem" /> :
                                <FcLikePlaceholder fontSize="1.75rem" />
                        }
                    </button>
                </div>
            </div>

            <div className="p-4 text-white">
                <h1 className=" font-semibold text-lg leading-6 mb-2">{course.title}</h1>
                <p>
                    {course.description.length > 100 ?
                        course.description.substr(0, 100) + " ..." :
                        course.description
                    }
                </p>
            </div>

        </div>
    )
}

export default Card;

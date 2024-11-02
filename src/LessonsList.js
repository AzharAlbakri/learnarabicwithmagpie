// src/LessonsList.js
import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig'; // Firestore instance from your config
import { collection, getDocs } from "firebase/firestore"; // Import Firestore functions as needed

const LessonsList = () => {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        // Define an async function to fetch data from Firestore
        const fetchLessons = async () => {
            try {
                // Use the collection method with db as the first argument in Firebase v9
                const lessonsCollection = collection(db, 'lessons'); // Reference to the 'lessons' collection
                const lessonSnapshot = await getDocs(lessonsCollection); // Fetch data
                const lessonList = lessonSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setLessons(lessonList); // Update state with lesson data
            } catch (error) {
                console.error("Error fetching lessons:", error);
            }
        };

        fetchLessons();
        console.log(lessons);
        
    }, []);

    return (
        
        <div>
            <h1>Lessons</h1>
            <ul>
                {lessons.map(lesson => (
                    <li key={lesson.id}>
                        <h2>{lesson.title}</h2>
                        <img src={lesson.thumbnail} alt={`${lesson.title} thumbnail`} />
                        {/* Add other lesson details as needed */}
                        <h2>{lesson.content}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LessonsList;

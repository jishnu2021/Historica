import React from 'react';

const courses = [
    {
        title: 'Web Development',
        description: 'Learn to build modern web applications using HTML, CSS, and JavaScript.',
      },
      {
        title: 'App Development',
        description: 'Create mobile applications for iOS and Android using React Native.',
      },
      {
        title: 'Machine Learning',
        description: 'Explore the fundamentals of machine learning and AI algorithms.',
      },
      {
        title: 'Data Science',
        description: 'Master data analysis, visualization, and statistical techniques.',
      },
      {
        title: 'Game Development',
        description: 'Design and develop interactive games with Unity and other tools.',
      },
];

const CoursesPage = () => {
  return (
    <div className="page-container">
      <h1>Available Courses</h1>
      {courses.map((course, index) => (
        <div className="course-card" key={index}>
          <h2 className="course-title">{course.title}</h2>
          <p className="course-description">{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CoursesPage;

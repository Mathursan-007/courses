import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Registration from './Registration'
import Login from './Login'
import AddCourse from './AddCourse'
import AddSubject from './AddSubject'
import ViewCourse from './ViewCourses'

function RoutePages() {
    return (
        <Routes>
            <Route path="/registration" element={<Registration/>} />
            <Route path="/" element={<Login/>} />
            <Route path="/addcourse" element={<AddCourse/>} />
            <Route path="/addsubject" element={<AddSubject/>} />
            <Route path="/viewCourses" element={<ViewCourse/>} />
        </Routes>
    )
}

export default RoutePages

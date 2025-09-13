import logo from "../public/download.jpg"
function UserAvatar(id) {
    const nameStyle={
        fontWight:'bold',
        color:'red',
        fontSize:'20px'
    }
    return (
        <div className="container">
            <div className="s">
                <img src={logo} />
                <p style={nameStyle}>{id.name}</p>
                <p>Course:{id.course}</p>
                <p>Roll No:{id.Rollno}</p>
                <p>Blood Group:{id.Bloodgrp}</p>
                <p>DOB:{id.DOB}</p>
            </div>
        </div>
    )
}
export default UserAvatar;
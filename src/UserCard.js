import React from "react";
import { Card, CardBody } from 'reactstrap';

const UserCard = ({ user }) => {
    return (
        <Card className="text-center mt-3 mb-4" style={{ width: "350px" }}>
            <img
                src={user.avatar_url}
                alt="User Avatar"
                className="img-thumbnail"
                style={{ width: "350px", height: "350px", borderRadius: "50%" }}
            />
            <CardBody>
                <div className="text-primary">{user.name}</div>
                <div className="text-primary">{user.location}</div>
                <div className="text-primary">{user.bio}</div>
                <div className="text-info">Available For Hire: {user.hireable ? 'YES' : 'NOPE'}</div>
                <div className="text-info">Followers: {user.followers}</div>
            </CardBody>
        </Card>
    );
}

export default UserCard;

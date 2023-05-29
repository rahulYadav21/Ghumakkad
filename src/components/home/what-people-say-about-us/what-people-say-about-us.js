import CommentCards from "../comment-cards/comment-cards";
import './what-people-say-about-us.css';
import Subscribe from "../subscribe/Subscribe.component";
const data = [
    {
        profileImg: "https://img.freepik.com/premium-vector/man-face-portrait-circle-user-profile-avatar-person-with-beard-mustache-wearing-knitted-hat-head-modern-male-character-flat-vector-illustration-isolated-white-background_633472-1139.jpg?w=740",
        comment: "On the arties use. Sure last upon he same as knew next. Of believed or diverted no.On the arties use. Sure last upon he same as knew next. Of believed or diverted no.",
        name: "Rajat",
        place: "Himachal,India",
    },
    {
        profileImg: "https://img.freepik.com/premium-vector/man-face-portrait-circle-user-profile-avatar-person-with-beard-mustache-wearing-knitted-hat-head-modern-male-character-flat-vector-illustration-isolated-white-background_633472-1139.jpg?w=740",
        comment: "On the arties use. Sure last upon he same as knew next. Of believed or diverted no.On the arties use. Sure last upon he same as knew next. Of believed or diverted no.",
        name: "Rahul",
        place: "Uttar Pradesh,India",
    },
    {
        profileImg: "https://img.freepik.com/premium-vector/man-face-portrait-circle-user-profile-avatar-person-with-beard-mustache-wearing-knitted-hat-head-modern-male-character-flat-vector-illustration-isolated-white-background_633472-1139.jpg?w=740",
        comment: "On the arties use. Sure last upon he same as knew next. Of believed or diverted no.On the arties use. Sure last upon he same as knew next. Of believed or diverted no.",
        name: "Manish",
        place: "Rajisthan,India",
    },
    {
        profileImg: "https://img.freepik.com/premium-vector/man-face-portrait-circle-user-profile-avatar-person-with-beard-mustache-wearing-knitted-hat-head-modern-male-character-flat-vector-illustration-isolated-white-background_633472-1139.jpg?w=740",
        comment: "On the arties use. Sure last upon he same as knew next. Of believed or diverted no.On the arties use. Sure last upon he same as knew next. Of believed or diverted no.",
        name: "Aniket",
        place: "Chennai,India",
    },
    {
        profileImg: "https://img.freepik.com/premium-vector/man-face-portrait-circle-user-profile-avatar-person-with-beard-mustache-wearing-knitted-hat-head-modern-male-character-flat-vector-illustration-isolated-white-background_633472-1139.jpg?w=740",
        comment: "On the arties use. Sure last upon he same as knew next. Of believed or diverted no.On the arties use. Sure last upon he same as knew next. Of believed or diverted no.",
        name: "Saurbhi",
        place: "Delhi,India",
    },
]
export default function WhatPeopleSayAboutUs() {
    return (
        <>
            <div className="what-people-say-about-us-container">
                <div className="what-people-say-about-us-texts">
                    <h1>What people say<br /><span> about us.</span></h1>
                    <p>Our Clients send us bunch of smiles with our services <br /> and we love them.</p>
                </div>
                <div className="what-people-say-about-us-comments">
                    <CommentCards data={data} />
                </div>
            </div>
            <Subscribe />
        </>
    )
}
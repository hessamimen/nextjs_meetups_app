import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
    address: "Some address 5, 12345 Some City",
    descriptipn: "this is a fisrt meetup",
  },
  {
    id: "m2",
    title: "A first meetup",
    image:
      "https://images.unsplash.com/photo-1699694927472-46a4fcf68973?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "Some address 5, 12345 Some City",
    descriptipn: "this is a fisrt meetup",
  },
  {
    id: "m3",
    title: "A first meetup",
    image:
      "https://images.unsplash.com/photo-1523359247812-29dde5ac53a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "Some address 5, 12345 Some City",
    descriptipn: "this is a fisrt meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  //fetch data from API
  return {
    props: {
      meetups: DUMY_MEETUPS,
      revalidate: 1,
    },
  };
}
// export async function getServerSideProps(context) {
//   const reg = context.req;
//   const res = context.res;
//   //fetch data from API
//   return {
//     props: {
//       meetups: DUMY_MEETUPS,
//     },
//   };
// }

export default HomePage;

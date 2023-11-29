import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
      title="First Meetup"
      address="5 some street, Sydney, 2000"
      description="the meetup description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  //fetch data for a single meetup
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
        title: "Frist Meetup",
        address: "5 some street, Sydney, 2000",
        description: "the meetup description",
      },
    },
  };
}

export default MeetupDetails;

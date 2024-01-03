import Navbar from "./Navbar.js";
import BackgroundInfo from "./BackgroundInfo.js";
import Data from "../data/data.json";
import CourseDetails from "./courseDetails/courseDetails.js";
import Card from "./Card.js";
import Testimonals from "./Testimonals.js";
import AboutInst from "./AboutInstructor.js";
import Social from "./Social.js";

export default function Show() {
  let style = {
    '@media(width < 900px)' :{
      flexWrap:"wrap"
    }
  }
  const whatToExpectContent = Data?.course?.what_to_expect?.html_content || '';
  const KeyTopics = Data?.course?.key_topics?.html_content || '';  
    return (  
    <>
            < BackgroundInfo name={Data.instructor.name} title={Data.course.title}/>
    <div style={style} className="flex justify-center align-center  sm:flex-wrap  sm:flex-wrap md:flex-nowrap">
      <div >
             < Navbar />
             <CourseDetails whatToExpect={whatToExpectContent} keyTop={KeyTopics}/>
      </div>
      <div style={{width:"40%",}}>
        <Card />
      </div>
    </div>
    
     < AboutInst />
     <Social />
     < Testimonals 
         Says={ Data.testimonial.text } 
         InstructName={Data.testimonial.reviewer_name}
         designation={Data.testimonial.reviewer_designation} />
    </>
    )
  }
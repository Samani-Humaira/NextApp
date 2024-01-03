import KeyTopics from "./keyTopics.js"
import DoneIcon from '@mui/icons-material/Done';

export default function CourseDetails({whatToExpect , keyTop }){

    const items = whatToExpect.split('<li>').filter(item => item.includes('</li>'));

    return(
        <div className="flex flex-col p-8 ">
        <div className="flex flex-col ">
            <h1 className="font-medium text-4xl text-start pb-4">About the course</h1>
            <div className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem possimus maxime, dicta quia, quam illum recusandae laudantium officiis aperiam aliquam perspiciatis, esse ab commodi earum maiores obcaecati vitae pariatur ipsam.
            </div>
            <div className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perspiciatis aspernatur architecto laborum laudantium provident, quaerat libero corporis dolore minima praesentium esse ratione optio saepe, vel illo dignissimos, fuga velit?
            </div>
            <div className="mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur dolorem molestiae error nostrum tempora, in minus aliquid blanditiis iste odit unde quam quia. Quis ratione sint, minima nobis officia architecto?
            </div>
        </div>

        <div>
        <h1 className="font-medium text-4xl text-start pb-4">What to expect</h1>
        <div>
            {
                items.map((item,index) =>(
                    <div>
                        <DoneIcon style={{ marginRight: '8px' }} />
                        <dspan dangerouslySetInnerHTML={{ __html: item }} />
                    </div>
                 
                ))
            }
        </div>
        </div>
        <div>
            <KeyTopics keyTopic={keyTop}/>
        </div>
        </div>
    )
}
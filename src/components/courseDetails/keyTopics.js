import DoneIcon from '@mui/icons-material/Done';

export default function KeyTopics({keyTopic}){
    const items = keyTopic.split('<li>').filter(item => item.includes('</li>'));
    return(
       <div>
      <h1 className="font-medium text-4xl text-start mt-4 pb-4"> key topics covered </h1>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptates blanditiis tempora animi eum similique, quisquam labore fugiat dolore soluta. Maiores quidem sint aperiam repellendus delectus, neque odit dolorum! Perferendis!
        </div>
        <div>
        <div className='p-4'>
            {
                items.map((item,index) =>(
                    <div className=''>
                        <DoneIcon style={{ marginRight: '8px' }} />
                        <span dangerouslySetInnerHTML={{ __html:item }} />
                    </div>
                 
                ))
            }
        </div>
        </div>
       </div>
    )
}
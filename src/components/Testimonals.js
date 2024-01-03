import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export default function Testimonals({Says,InstructName,designation}){
    return(
        <div className="flex bg-slate-200 p-4 justify-around ">
            <div className=' w-[10%] self-center'>< ArrowCircleLeftIcon /></div>
            <div className='flex flex-col  w-[60%] '>
                <div className='p-8 text-center text-lg font-bold'>
                  "{Says}"
                </div>
                <div className='flex justify-center'>
                    <div className='self-center' >
                        <span>
                            <img className='self-center' 
                            style={{backgroundColor:"red",borderRadius:"50%",width:"50px"}} 
                            src='https://tse4.mm.bing.net/th?id=OIP.Nolz7WP6ihgX54G98AcWnAHaEo&pid=Api&P=0&h=180' />
                            </span>
                            </div>
                    <div className='flex flex-col m-4'>
                        <div>{InstructName}</div>
                        <div>
                            {designation}
                        </div>
                    </div>
                </div>
            </div >
            <div className=' w-[10%]  self-center'>< ArrowCircleRightIcon /></div>
        </div>
    )
}
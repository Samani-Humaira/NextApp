import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'; 
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

const Cart = () => {
  let num = 5000;
  return (
    <div className="mr-8 w-[350px] mb-4 bg-white mt-[-10] bg-zinc-100  p-8 shadow-lg rounded-lg">
      <p className=" mb-2">Course fees</p>
      <h2 className="text-lg font-semibold">  &#8377; {num.toLocaleString()}</h2>
      <ul className="divide-y divide-gray-200">
       <p className="mt-4 font-semibold">Whats included</p>
        <li className="py-2 mb-2">
          <span className=" mb-4">< OndemandVideoIcon /> &nbsp; 5 on-demand videos</span>
        </li>
        <li className="mb-2" >
        <span>< OndemandVideoIcon /> &nbsp;2 livestream sessions</span>
        </li>
        <li className="mb-2">
        <span>< QuestionAnswerOutlinedIcon /> &nbsp; Live Q&A sessions with Nityanand Charan Das</span>
        </li>
        <li className="mb-2">
        <span>< QuestionAnswerOutlinedIcon /> &nbsp; An active whatsapp community</span>
        </li>
      </ul>
      <div className="mt-4">
        <button className="bg-indigo-500 text-white py-2 px-4 w-[100%] rounded-full  mt-2">Register now</button>
      </div>
    </div>
  );
};

export default Cart;

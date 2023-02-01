import { useNavigate } from "react-router-dom";
import { Article } from "../../articles/Articles";

export const NewsArticle = ({article} : {article : Article}) => {
    const navigate = useNavigate();

    return <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md flex flex-col space-y-3" onClick={() => navigate('/nytLogin/', {state: {article}})}>
                <div className=' bg-gray-200 w-full p-2'>
                    <div className='w-full h-full  flex-col'>
                        <div>
                            <img src={article.imgSrc}/>
                        </div>
                        <div>
                            {article.source}
                        </div>
                        <div className='font-bold text-lg'>
                             {article.title}
                        </div>
                    </div>

                </div>
            </div>
}
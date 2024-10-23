import {Link} from "react-router-dom"


function Tags({tags}) {
  return (
    <div className='flex flex-wrap gap-3 text-sm'>
        {
            tags.map((tag, i) => (
                <Link key={i} className='px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200'>{tag}</Link>
            ))
        }
    </div>
  )
}

export default Tags
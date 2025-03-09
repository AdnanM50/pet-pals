'use client'

import { fetchUserList } from "@/hooks/endpiont";
import { useFetch } from "@/hooks/use_fetch";



const Page = () => {
  const { data, error, isLoading } = useFetch(fetchUserList);
  // const { data, error, isLoading } = useFetch(fetchUserList, []);
 

  console.log("🚀 ~ Page ~ data:123", data?.data)


  return (
    <div>
     fksdfksdlfksla
 
    </div>
  )
}

export default Page